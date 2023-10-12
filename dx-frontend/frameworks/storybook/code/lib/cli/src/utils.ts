import type { WriteStream } from 'fs-extra';
import { move, remove, writeFile, readFile, createWriteStream } from 'fs-extra';
import { join } from 'path';
import tempy from 'tempy';
import { rendererPackages } from '@storybook/core-common';
import type { JsPackageManager } from './js-package-manager';

export function parseList(str: string): string[] {
  return str
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

export async function getStorybookVersion(packageManager: JsPackageManager) {
  const packages = (
    await Promise.all(
      Object.keys(rendererPackages).map(async (pkg) => ({
        name: pkg,
        version: await packageManager.getPackageVersion(pkg),
      }))
    )
  ).filter(({ version }) => !!version);

  return packages[0]?.version;
}

export function getEnvConfig(program: Record<string, any>, configEnv: Record<string, any>): void {
  Object.keys(configEnv).forEach((fieldName) => {
    const envVarName = configEnv[fieldName];
    const envVarValue = process.env[envVarName];
    if (envVarValue) {
      // eslint-disable-next-line no-param-reassign
      program[fieldName] = envVarValue;
    }
  });
}

/**
 * Given a file name, creates an object with utilities to manage a log file.
 * It creates a temporary log file which you can manage with the returned functions.
 * You can then decide whether to move the log file to the users project, or remove it.
 *
 * @example
 * ```
 *  const { logStream, moveLogFile, removeLogFile, clearLogFile, readLogFile } = await createLogStream('my-log-file.log');
 *
 *  // SCENARIO 1:
 *  // you can write custom messages to generate a log file
 *  logStream.write('my log message');
 *  await moveLogFile();
 *
 *  // SCENARIO 2:
 *  // or you can pass it to stdio and capture the output of that command
 *  try {
 *    await this.executeCommand({
 *      command: 'pnpm',
 *      args: ['info', packageName, ...args],
 *      // do not output to the user, and send stdio and stderr to log file
 *      stdio: ['ignore', logStream, logStream]
 *    });
 *  } catch (err) {
 *    // do something with the log file content
 *    const output = await readLogFile();
 *    // move the log file to the users project
 *    await moveLogFile();
 *  }
 *  // success, no need to keep the log file
 *  await removeLogFile();
 *
 * ```
 */
export const createLogStream = async (
  logFileName = 'storybook.log'
): Promise<{
  moveLogFile: () => Promise<void>;
  removeLogFile: () => Promise<void>;
  clearLogFile: () => Promise<void>;
  readLogFile: () => Promise<string>;
  logStream: WriteStream;
}> => {
  const finalLogPath = join(process.cwd(), logFileName);
  const temporaryLogPath = tempy.file({ name: logFileName });

  const logStream = createWriteStream(temporaryLogPath, { encoding: 'utf8' });

  return new Promise((resolve, reject) => {
    logStream.once('open', () => {
      const moveLogFile = async () => move(temporaryLogPath, finalLogPath, { overwrite: true });
      const clearLogFile = async () => writeFile(temporaryLogPath, '');
      const removeLogFile = async () => remove(temporaryLogPath);
      const readLogFile = async () => {
        return readFile(temporaryLogPath, 'utf8');
      };
      resolve({ logStream, moveLogFile, clearLogFile, removeLogFile, readLogFile });
    });
    logStream.once('error', reject);
  });
};

const PACKAGES_EXCLUDED_FROM_CORE = [
  '@storybook/addon-bench',
  '@storybook/addon-console',
  '@storybook/addon-postcss',
  '@storybook/addon-styling',
  '@storybook/addon-styling-webpack',
  '@storybook/babel-plugin-require-context-hook',
  '@storybook/bench',
  '@storybook/builder-vite',
  '@storybook/csf',
  '@storybook/design-system',
  '@storybook/ember-cli-storybook',
  '@storybook/eslint-config-storybook',
  '@storybook/expect',
  '@storybook/jest',
  '@storybook/linter-config',
  '@storybook/mdx1-csf',
  '@storybook/mdx2-csf',
  '@storybook/react-docgen-typescript-plugin',
  '@storybook/storybook-deployer',
  '@storybook/test-runner',
  '@storybook/testing-library',
  '@storybook/testing-react',
  '@nrwl/storybook',
  '@nx/storybook',
];
export const isCorePackage = (pkg: string) =>
  pkg.startsWith('@storybook/') &&
  !pkg.startsWith('@storybook/preset-') &&
  !PACKAGES_EXCLUDED_FROM_CORE.includes(pkg);
