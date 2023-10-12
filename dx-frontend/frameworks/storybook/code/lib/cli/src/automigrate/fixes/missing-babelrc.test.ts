/* eslint-disable no-underscore-dangle */
/// <reference types="@types/jest" />;

import type { StorybookConfig } from '@storybook/types';
import { missingBabelRc } from './missing-babelrc';
import type { JsPackageManager } from '../../js-package-manager';

// eslint-disable-next-line global-require, jest/no-mocks-import
jest.mock('fs-extra', () => require('../../../../../__mocks__/fs-extra'));

const babelContent = JSON.stringify({
  sourceType: 'unambiguous',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { chrome: 100, safari: 15, firefox: 91 },
      },
    ],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [],
});

const check = async ({
  packageManager = {
    retrievePackageJson: () => ({}),
  },
  main: mainConfig = {},
  storybookVersion = '7.0.0',
  extraFiles,
}: {
  packageManager?: any;
  main?: Partial<StorybookConfig> & Record<string, unknown>;
  storybookVersion?: string;
  extraFiles?: Record<string, any>;
}) => {
  if (extraFiles) {
    // eslint-disable-next-line global-require
    require('fs-extra').__setMockFiles(extraFiles);
  }

  return missingBabelRc.check({
    packageManager,
    mainConfig: mainConfig as any,
    storybookVersion,
  });
};

const packageManager = {
  retrievePackageJson: () =>
    Promise.resolve({
      devDependencies: {},
      dependencies: {},
    }),
} as Partial<JsPackageManager>;

const packageManagerWithBabelField = {
  retrievePackageJson: () =>
    Promise.resolve({
      devDependencies: {},
      dependencies: {},
      babel: babelContent,
    }),
} as Partial<JsPackageManager>;

describe('missing-babelrc fix', () => {
  afterEach(jest.restoreAllMocks);

  it('skips when storybook version < 7.0.0', async () => {
    await expect(check({ storybookVersion: '6.3.2' })).resolves.toBeNull();
  });

  it('skips when babelrc config is present', async () => {
    // different babel extensions
    await expect(
      check({
        packageManager,
        extraFiles: { '.babelrc': babelContent },
        main: { framework: '@storybook/react' },
      })
    ).resolves.toBeNull();
    await expect(
      check({
        packageManager,
        extraFiles: { '.babelrc.json': babelContent },
        main: { framework: '@storybook/react' },
      })
    ).resolves.toBeNull();
    await expect(
      check({
        packageManager,
        extraFiles: { 'babel.config.json': babelContent },
        main: { framework: '@storybook/react' },
      })
    ).resolves.toBeNull();

    await expect(
      check({
        packageManager: packageManagerWithBabelField,
        main: { framework: '@storybook/react' },
      })
    ).resolves.toBeNull();
  });

  it('skips when using a framework that provides babel config', async () => {
    await expect(
      check({ main: { framework: '@storybook/nextjs' }, packageManager })
    ).resolves.toBeNull();
  });

  it('skips when using CRA preset', async () => {
    await expect(
      check({
        main: { framework: '@storybook/react', addons: ['@storybook/preset-create-react-app'] },
        packageManager,
      })
    ).resolves.toBeNull();
  });

  it('prompts when babelrc file is missing and framework does not provide babel config', async () => {
    await expect(
      check({
        packageManager,
        main: { framework: '@storybook/react-webpack5' },
      })
    ).resolves.toEqual({
      needsBabelRc: true,
    });
  });
});
