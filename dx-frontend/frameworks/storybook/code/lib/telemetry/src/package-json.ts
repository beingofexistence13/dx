import * as fs from 'fs-extra';
import path from 'path';

import type { Dependency } from './types';

export const getActualPackageVersions = async (packages: Record<string, Partial<Dependency>>) => {
  const packageNames = Object.keys(packages);
  return Promise.all(packageNames.map(getActualPackageVersion));
};

export const getActualPackageVersion = async (packageName: string) => {
  try {
    const packageJson = await getActualPackageJson(packageName);
    return {
      name: packageName,
      version: packageJson.version,
    };
  } catch (err) {
    return { name: packageName, version: null };
  }
};

export const getActualPackageJson = async (packageName: string) => {
  const resolvedPackageJson = require.resolve(path.join(packageName, 'package.json'), {
    paths: [process.cwd()],
  });
  const packageJson = await fs.readJson(resolvedPackageJson);
  return packageJson;
};

// Note that this probably doesn't work in PNPM mode
export const getStorybookCoreVersion = async () => {
  const coreVersions = await Promise.all(
    ['@storybook/core-common', '@storybook/core-server'].map(getActualPackageVersion)
  );
  return coreVersions.find((v) => v.version)?.version;
};
