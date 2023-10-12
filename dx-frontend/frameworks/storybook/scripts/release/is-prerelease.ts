/* eslint-disable no-console */
import chalk from 'chalk';
import program from 'commander';
import { setOutput } from '@actions/core';
import semver from 'semver';
import { getCurrentVersion } from './get-current-version';

program
  .name('is-prerelease')
  .description('returns true if the current version is a prerelease')
  .option('-V, --verbose', 'Enable verbose logging', false);

export const isPrerelease = async (versionArg?: string) => {
  const version = versionArg || (await getCurrentVersion());
  const result = semver.prerelease(version) !== null;

  if (process.env.GITHUB_ACTIONS === 'true') {
    setOutput('prerelease', result);
  }
  console.log(
    `📦 Current version ${chalk.green(version)} ${
      result ? chalk.blue('IS') : chalk.red('IS NOT')
    } a prerelease`
  );

  return result;
};

if (require.main === module) {
  isPrerelease().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
