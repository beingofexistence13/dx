/* eslint-disable no-await-in-loop */
import prompts from 'prompts';
import chalk from 'chalk';
import boxen from 'boxen';
import { createWriteStream, move, remove } from 'fs-extra';
import tempy from 'tempy';
import dedent from 'ts-dedent';

import { join } from 'path';
import { getStorybookInfo, loadMainConfig } from '@storybook/core-common';
import { JsPackageManagerFactory, useNpmWarning } from '../js-package-manager';
import type { PackageManagerName } from '../js-package-manager';

import type { Fix, FixId, FixOptions, FixSummary } from './fixes';
import { FixStatus, PreCheckFailure, allFixes } from './fixes';
import { cleanLog } from './helpers/cleanLog';
import { getMigrationSummary } from './helpers/getMigrationSummary';
import { getStorybookData } from './helpers/mainConfigFile';
import { getStorybookVersion } from '../utils';

const logger = console;
const LOG_FILE_NAME = 'migration-storybook.log';
const LOG_FILE_PATH = join(process.cwd(), LOG_FILE_NAME);
let TEMP_LOG_FILE_PATH = '';

const originalStdOutWrite = process.stdout.write.bind(process.stdout);
const originalStdErrWrite = process.stderr.write.bind(process.stdout);

const augmentLogsToFile = () => {
  TEMP_LOG_FILE_PATH = tempy.file({ name: LOG_FILE_NAME });
  const logStream = createWriteStream(TEMP_LOG_FILE_PATH);

  process.stdout.write = (d: string) => {
    originalStdOutWrite(d);
    return logStream.write(cleanLog(d));
  };
  process.stderr.write = (d: string) => {
    return logStream.write(cleanLog(d));
  };
};

const cleanup = () => {
  process.stdout.write = originalStdOutWrite;
  process.stderr.write = originalStdErrWrite;
};

const logAvailableMigrations = () => {
  const availableFixes = allFixes.map((f) => chalk.yellow(f.id)).join(', ');
  logger.info(`\nThe following migrations are available: ${availableFixes}`);
};

export const automigrate = async ({
  fixId,
  fixes: inputFixes,
  dryRun,
  yes,
  useNpm,
  packageManager: pkgMgr,
  list,
  configDir: userSpecifiedConfigDir,
  renderer: rendererPackage,
  skipInstall,
  hideMigrationSummary = false,
}: FixOptions = {}): Promise<{
  fixResults: Record<string, FixStatus>;
  preCheckFailure: PreCheckFailure;
}> => {
  if (list) {
    logAvailableMigrations();
    return null;
  }

  const selectedFixes = inputFixes || allFixes;
  const fixes = fixId ? selectedFixes.filter((f) => f.id === fixId) : selectedFixes;

  if (fixId && fixes.length === 0) {
    logger.info(`📭 No migrations found for ${chalk.magenta(fixId)}.`);
    logAvailableMigrations();
    return null;
  }

  augmentLogsToFile();

  logger.info('🔎 checking possible migrations..');

  const { fixResults, fixSummary, preCheckFailure } = await runFixes({
    fixes,
    useNpm,
    pkgMgr,
    userSpecifiedConfigDir,
    rendererPackage,
    skipInstall,
    dryRun,
    yes,
  });

  const hasFailures = Object.values(fixResults).some(
    (r) => r === FixStatus.FAILED || r === FixStatus.CHECK_FAILED
  );

  // if migration failed, display a log file in the users cwd
  if (hasFailures) {
    await move(TEMP_LOG_FILE_PATH, join(process.cwd(), LOG_FILE_NAME), { overwrite: true });
  } else {
    await remove(TEMP_LOG_FILE_PATH);
  }

  if (!hideMigrationSummary) {
    const packageManager = JsPackageManagerFactory.getPackageManager({ force: pkgMgr });
    const installationMetadata = await packageManager.findInstallations([
      '@storybook/*',
      'storybook',
    ]);

    logger.info();
    logger.info(
      getMigrationSummary({ fixResults, fixSummary, logFile: LOG_FILE_PATH, installationMetadata })
    );
    logger.info();
  }

  cleanup();

  return { fixResults, preCheckFailure };
};

export async function runFixes({
  fixes,
  dryRun,
  yes,
  useNpm,
  pkgMgr,
  userSpecifiedConfigDir,
  rendererPackage,
  skipInstall,
}: {
  fixes: Fix[];
  yes?: boolean;
  dryRun?: boolean;
  useNpm?: boolean;
  pkgMgr?: PackageManagerName;
  userSpecifiedConfigDir?: string;
  rendererPackage?: string;
  skipInstall?: boolean;
}): Promise<{
  preCheckFailure?: PreCheckFailure;
  fixResults: Record<FixId, FixStatus>;
  fixSummary: FixSummary;
}> {
  if (useNpm) {
    useNpmWarning();
    // eslint-disable-next-line no-param-reassign
    pkgMgr = 'npm';
  }

  const packageManager = JsPackageManagerFactory.getPackageManager({ force: pkgMgr });

  const fixResults = {} as Record<FixId, FixStatus>;
  const fixSummary: FixSummary = { succeeded: [], failed: {}, manual: [], skipped: [] };

  const { configDir: inferredConfigDir, mainConfig: mainConfigPath } = getStorybookInfo(
    await packageManager.retrievePackageJson(),
    userSpecifiedConfigDir
  );

  const storybookVersion = await getStorybookVersion(packageManager);

  if (!storybookVersion) {
    logger.info(dedent`
      [Storybook automigrate] ❌ Unable to determine storybook version so the automigrations will be skipped.
        🤔 Are you running automigrate from your project directory? Please specify your Storybook config directory with the --config-dir flag.
      `);
    return {
      fixResults,
      fixSummary,
      preCheckFailure: PreCheckFailure.UNDETECTED_SB_VERSION,
    };
  }

  const configDir = userSpecifiedConfigDir || inferredConfigDir || '.storybook';
  try {
    await loadMainConfig({ configDir });
  } catch (err) {
    if (err.message.includes('No configuration files have been found')) {
      logger.info(
        dedent`[Storybook automigrate] Could not find or evaluate your Storybook main.js config directory at ${chalk.blue(
          configDir
        )} so the automigrations will be skipped. You might be running this command in a monorepo or a non-standard project structure. If that is the case, please rerun this command by specifying the path to your Storybook config directory via the --config-dir option.`
      );
      return {
        fixResults,
        fixSummary,
        preCheckFailure: PreCheckFailure.MAINJS_NOT_FOUND,
      };
    }
    logger.info(
      dedent`[Storybook automigrate] ❌ Failed trying to evaluate ${chalk.blue(
        mainConfigPath
      )} with the following error: ${err.message}`
    );
    logger.info('Please fix the error and try again.');

    return {
      fixResults,
      fixSummary,
      preCheckFailure: PreCheckFailure.MAINJS_EVALUATION,
    };
  }

  for (let i = 0; i < fixes.length; i += 1) {
    const f = fixes[i] as Fix;
    let result;

    try {
      const { mainConfig, previewConfigPath } = await getStorybookData({
        configDir,
        packageManager,
      });

      result = await f.check({
        packageManager,
        configDir,
        rendererPackage,
        mainConfig,
        storybookVersion,
        previewConfigPath,
        mainConfigPath,
      });
    } catch (error) {
      logger.info(`⚠️  failed to check fix ${chalk.bold(f.id)}`);
      logger.error(`\n${error.stack}`);
      fixSummary.failed[f.id] = error.message;
      fixResults[f.id] = FixStatus.CHECK_FAILED;
    }

    if (result) {
      logger.info(`\n🔎 found a '${chalk.cyan(f.id)}' migration:`);
      const message = f.prompt(result);

      logger.info(
        boxen(message, {
          borderStyle: 'round',
          padding: 1,
          borderColor: '#F1618C',
          title: f.promptOnly ? 'Manual migration detected' : 'Automigration detected',
        })
      );

      let runAnswer: { fix: boolean };

      try {
        if (dryRun) {
          runAnswer = { fix: false };
        } else if (yes) {
          runAnswer = { fix: true };
          if (f.promptOnly) {
            fixResults[f.id] = FixStatus.MANUAL_SUCCEEDED;
            fixSummary.manual.push(f.id);
          }
        } else if (f.promptOnly) {
          fixResults[f.id] = FixStatus.MANUAL_SUCCEEDED;
          fixSummary.manual.push(f.id);

          logger.info();
          const { shouldContinue } = await prompts(
            {
              type: 'toggle',
              name: 'shouldContinue',
              message:
                'Select continue once you have made the required changes, or quit to exit the migration process',
              initial: true,
              active: 'continue',
              inactive: 'quit',
            },
            {
              onCancel: () => {
                throw new Error();
              },
            }
          );

          if (!shouldContinue) {
            fixResults[f.id] = FixStatus.MANUAL_SKIPPED;
            break;
          }
        } else {
          runAnswer = await prompts(
            {
              type: 'confirm',
              name: 'fix',
              message: `Do you want to run the '${chalk.cyan(f.id)}' migration on your project?`,
              initial: true,
            },
            {
              onCancel: () => {
                throw new Error();
              },
            }
          );
        }
      } catch (err) {
        break;
      }

      if (!f.promptOnly) {
        if (runAnswer.fix) {
          try {
            await f.run({
              result,
              packageManager,
              dryRun,
              mainConfigPath,
              skipInstall,
            });
            logger.info(`✅ ran ${chalk.cyan(f.id)} migration`);

            fixResults[f.id] = FixStatus.SUCCEEDED;
            fixSummary.succeeded.push(f.id);
          } catch (error) {
            fixResults[f.id] = FixStatus.FAILED;
            fixSummary.failed[f.id] = error.message;

            logger.info(`❌ error when running ${chalk.cyan(f.id)} migration`);
            logger.info(error);
            logger.info();
          }
        } else {
          fixResults[f.id] = FixStatus.SKIPPED;
          fixSummary.skipped.push(f.id);
        }
      }
    } else {
      fixResults[f.id] = fixResults[f.id] || FixStatus.UNNECESSARY;
    }
  }

  return { fixResults, fixSummary };
}
