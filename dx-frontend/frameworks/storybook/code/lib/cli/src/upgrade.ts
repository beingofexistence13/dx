import { sync as spawnSync } from 'cross-spawn';
import { telemetry, getStorybookCoreVersion } from '@storybook/telemetry';
import semver from 'semver';
import { logger } from '@storybook/node-logger';
import { withTelemetry } from '@storybook/core-server';

import type { PackageJsonWithMaybeDeps, PackageManagerName } from './js-package-manager';
import { getPackageDetails, JsPackageManagerFactory, useNpmWarning } from './js-package-manager';
import { commandLog } from './helpers';
import { automigrate } from './automigrate';
import { isCorePackage } from './utils';

type Package = {
  package: string;
  version: string;
};

const versionRegex = /(@storybook\/[^@]+)@(\S+)/;
export const getStorybookVersion = (line: string) => {
  if (line.startsWith('npm ')) return null;
  const match = versionRegex.exec(line);
  if (!match || !semver.clean(match[2])) return null;
  return {
    package: match[1],
    version: match[2],
  };
};

const deprecatedPackages = [
  {
    minVersion: '6.0.0-alpha.0',
    url: 'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#60-deprecations',
    deprecations: [
      '@storybook/addon-notes',
      '@storybook/addon-info',
      '@storybook/addon-contexts',
      '@storybook/addon-options',
      '@storybook/addon-centered',
    ],
  },
];

const formatPackage = (pkg: Package) => `${pkg.package}@${pkg.version}`;

const warnPackages = (pkgs: Package[]) =>
  pkgs.forEach((pkg) => logger.warn(`- ${formatPackage(pkg)}`));

export const checkVersionConsistency = () => {
  const lines = spawnSync('npm', ['ls'], { stdio: 'pipe', shell: true })
    .output.toString()
    .split('\n');
  const storybookPackages = lines
    .map(getStorybookVersion)
    .filter(Boolean)
    .filter((pkg) => isCorePackage(pkg.package));
  if (!storybookPackages.length) {
    logger.warn('No storybook core packages found.');
    logger.warn(`'npm ls | grep storybook' can show if multiple versions are installed.`);
    return;
  }
  storybookPackages.sort((a, b) => semver.rcompare(a.version, b.version));
  const latestVersion = storybookPackages[0].version;
  const outdated = storybookPackages.filter((pkg) => pkg.version !== latestVersion);
  if (outdated.length > 0) {
    logger.warn(
      `Found ${outdated.length} outdated packages (relative to '${formatPackage(
        storybookPackages[0]
      )}')`
    );
    logger.warn('Please make sure your packages are updated to ensure a consistent experience.');
    warnPackages(outdated);
  }

  deprecatedPackages.forEach(({ minVersion, url, deprecations }) => {
    if (semver.gte(latestVersion, minVersion)) {
      const deprecated = storybookPackages.filter((pkg) => deprecations.includes(pkg.package));
      if (deprecated.length > 0) {
        logger.warn(`Found ${deprecated.length} deprecated packages since ${minVersion}`);
        logger.warn(`See ${url}`);
        warnPackages(deprecated);
      }
    }
  });
};

type ExtraFlags = Record<string, string[]>;
const EXTRA_FLAGS: ExtraFlags = {
  'react-scripts@<5': ['--reject', '/preset-create-react-app/'],
};

export const addExtraFlags = (
  extraFlags: ExtraFlags,
  flags: string[],
  { dependencies, devDependencies }: PackageJsonWithMaybeDeps
) => {
  return Object.entries(extraFlags).reduce(
    (acc, entry) => {
      const [pattern, extra] = entry;
      const [pkg, specifier] = getPackageDetails(pattern);
      const pkgVersion = dependencies[pkg] || devDependencies[pkg];

      if (pkgVersion && semver.satisfies(semver.coerce(pkgVersion), specifier)) {
        return [...acc, ...extra];
      }

      return acc;
    },
    [...flags]
  );
};

export const addNxPackagesToReject = (flags: string[]) => {
  const newFlags = [...flags];
  const index = flags.indexOf('--reject');
  if (index > -1) {
    // Try to understand if it's in the format of a regex pattern
    if (newFlags[index + 1].endsWith('/') && newFlags[index + 1].startsWith('/')) {
      // Remove last and first slash so that I can add the parentheses
      newFlags[index + 1] = newFlags[index + 1].substring(1, newFlags[index + 1].length - 1);
      newFlags[index + 1] = `/(${newFlags[index + 1]}|@nrwl/storybook|@nx/storybook)/`;
    } else {
      // Adding the two packages as comma-separated values
      // If the existing rejects are in regex format, they will be ignored.
      // Maybe we need to find a more robust way to treat rejects?
      newFlags[index + 1] = `${newFlags[index + 1]},@nrwl/storybook,@nx/storybook`;
    }
  } else {
    newFlags.push('--reject');
    newFlags.push('@nrwl/storybook,@nx/storybook');
  }
  return newFlags;
};

export interface UpgradeOptions {
  tag: string;
  prerelease: boolean;
  skipCheck: boolean;
  useNpm: boolean;
  packageManager: PackageManagerName;
  dryRun: boolean;
  yes: boolean;
  disableTelemetry: boolean;
  configDir?: string;
}

export const doUpgrade = async ({
  tag,
  prerelease,
  skipCheck,
  useNpm,
  packageManager: pkgMgr,
  dryRun,
  configDir,
  yes,
  ...options
}: UpgradeOptions) => {
  if (useNpm) {
    useNpmWarning();
    // eslint-disable-next-line no-param-reassign
    pkgMgr = 'npm';
  }
  const packageManager = JsPackageManagerFactory.getPackageManager({ force: pkgMgr });

  const beforeVersion = await getStorybookCoreVersion();

  commandLog(`Checking for latest versions of '@storybook/*' packages`);

  if (tag && prerelease) {
    throw new Error(
      `Cannot set both --tag and --prerelease. Use --tag next to get the latest prereleae`
    );
  }

  let target = 'latest';
  if (prerelease) {
    // '@next' is storybook's convention for the latest prerelease tag.
    // This used to be 'greatest', but that was not reliable and could pick canaries, etc.
    // and random releases of other packages with storybook in their name.
    target = '@next';
  } else if (tag) {
    target = `@${tag}`;
  }

  let flags = [];
  if (!dryRun) flags.push('--upgrade');
  flags.push('--target');
  flags.push(target);
  flags = addExtraFlags(EXTRA_FLAGS, flags, await packageManager.retrievePackageJson());
  flags = addNxPackagesToReject(flags);
  const check = spawnSync('npx', ['npm-check-updates@latest', '/storybook/', ...flags], {
    stdio: 'pipe',
    shell: true,
  });
  logger.info(check.stdout.toString());
  logger.info(check.stderr.toString());

  const checkSb = spawnSync('npx', ['npm-check-updates@latest', 'sb', ...flags], {
    stdio: 'pipe',
    shell: true,
  });
  logger.info(checkSb.stdout.toString());
  logger.info(checkSb.stderr.toString());

  if (!dryRun) {
    commandLog(`Installing upgrades`);
    await packageManager.installDependencies();
  }

  let automigrationResults;
  if (!skipCheck) {
    checkVersionConsistency();
    automigrationResults = await automigrate({ dryRun, yes, packageManager: pkgMgr, configDir });
  }
  if (!options.disableTelemetry) {
    const afterVersion = await getStorybookCoreVersion();
    const { preCheckFailure, fixResults } = automigrationResults || {};
    const automigrationTelemetry = {
      automigrationResults: preCheckFailure ? null : fixResults,
      automigrationPreCheckFailure: preCheckFailure || null,
    };
    telemetry('upgrade', {
      prerelease,
      tag,
      beforeVersion,
      afterVersion,
      ...automigrationTelemetry,
    });
  }
};

export async function upgrade(options: UpgradeOptions): Promise<void> {
  await withTelemetry('upgrade', { cliOptions: options }, () => doUpgrade(options));
}
