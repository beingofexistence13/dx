/**
 * This script ensures that next is always one minor ahead of main.
 * This is needed when releasing a stable from next.
 * Next will be at eg. 7.4.0-alpha.4, and main will be at 7.3.0.
 * Then we release 7.4.0 by merging next to latest-release to main.
 * We then ensure here that next is bumped to 7.5.0-alpha.0 - without releasing it.
 * If this is a patch release bumping main to 7.3.1, next will not be touched because it's already ahead.
 */

/* eslint-disable no-console */
import chalk from 'chalk';
import path from 'path';
import program from 'commander';
import semver from 'semver';
import { z } from 'zod';
import { readJson } from 'fs-extra';
import { run as bumpVersion } from './version';
import { git } from './utils/git-client';

program
  .name('ensure-next-ahead')
  .description('ensure the "next" branch is always a minor version ahead of "main"')
  .requiredOption('-M, --main-version <mainVersion>', 'The version currently on the "main" branch');

const optionsSchema = z
  .object({
    mainVersion: z.string(),
  })
  .refine((schema) => semver.valid(schema.mainVersion), {
    message: "main-version must be a valid semver version string like '7.4.2'.",
  });

type Options = {
  mainVersion: string;
};

const CODE_DIR_PATH = path.join(__dirname, '..', '..', 'code');
const CODE_PACKAGE_JSON_PATH = path.join(CODE_DIR_PATH, 'package.json');

const validateOptions = (options: { [key: string]: any }): options is Options => {
  optionsSchema.parse(options);
  return true;
};

const getCurrentVersion = async () => {
  const { version } = await readJson(CODE_PACKAGE_JSON_PATH);
  console.log(`📐 Current version of Storybook is ${chalk.green(version)}`);
  return version;
};

export const run = async (options: unknown) => {
  if (!validateOptions(options)) {
    return;
  }
  const { mainVersion } = options;

  const { current: currentGitBranch } = await git.status();

  if (currentGitBranch !== 'next') {
    console.warn(
      `🚧 The current branch is not "next" but "${currentGitBranch}", this only really makes sense to run on the "next" branch.`
    );
  }

  // Get the current version from code/package.json
  const currentNextVersion = await getCurrentVersion();
  if (semver.gt(currentNextVersion, mainVersion)) {
    console.log(
      `✅ The version on next (${chalk.green(
        currentNextVersion
      )}) is already ahead of the version on main (${chalk.green(mainVersion)}), no action needed.`
    );
    return;
  }

  const nextNextVersion = `${semver.inc(mainVersion, 'minor')}-alpha.0`;

  console.log(
    `🤜 The version on next (${chalk.green(
      currentNextVersion
    )}) is behind the version on main (${chalk.green(mainVersion)}), bumping to ${chalk.blue(
      nextNextVersion
    )}...`
  );

  await bumpVersion({ exact: nextNextVersion });

  console.log(
    `✅ bumped all versions to ${chalk.green(
      nextNextVersion
    )}, remember to commit and push to next.`
  );
};

if (require.main === module) {
  const parsed = program.parse();
  run(parsed.opts()).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
