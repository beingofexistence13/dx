import type { StorybookConfig } from '@storybook/types';
import { makePackageManager } from '../helpers/testing-helpers';
import type { PackageJson } from '../../js-package-manager';
import { builderVite } from './builder-vite';

const checkBuilderVite = async ({
  packageJson = {},
  main: mainConfig,
}: {
  packageJson?: PackageJson;
  main: Partial<StorybookConfig> & Record<string, unknown>;
}) => {
  return builderVite.check({
    mainConfig: mainConfig as StorybookConfig,
    packageManager: makePackageManager(packageJson),
    storybookVersion: '7.0.0',
  });
};

describe('builder-vite fix', () => {
  afterEach(jest.restoreAllMocks);

  describe('storybook-builder-vite', () => {
    it('using storybook-builder-vite', async () => {
      const main = { core: { builder: 'storybook-builder-vite' } };
      await expect(checkBuilderVite({ main })).resolves.toMatchObject({
        builder: 'storybook-builder-vite',
      });
    });
    it('using storybook-builder-vite with options', async () => {
      const main = { core: { builder: { name: 'storybook-builder-vite', options: {} } } };
      await expect(checkBuilderVite({ main })).resolves.toMatchObject({
        builder: {
          name: 'storybook-builder-vite',
          options: {},
        },
      });
    });
  });
  describe('other builders', () => {
    it('using @storybook/builder-vite', async () => {
      const main = { core: { builder: { name: '@storybook/builder-vite', options: {} } } };
      await expect(checkBuilderVite({ main })).resolves.toBeFalsy();
    });
    it('using webpack5', async () => {
      const main = { core: { builder: 'webpack5' } };
      await expect(checkBuilderVite({ main })).resolves.toBeFalsy();
    });
    it('no builder specified', async () => {
      const main = {};
      await expect(checkBuilderVite({ main })).resolves.toBeFalsy();
    });
  });
});
