/// <reference types="@types/jest" />;

import type { StorybookConfig } from '@storybook/types';
import { incompatibleAddons } from './incompatible-addons';
import type { JsPackageManager } from '../../js-package-manager';

const check = async ({
  packageManager,
  main: mainConfig = {},
  storybookVersion = '7.0.0',
}: {
  packageManager: Partial<JsPackageManager>;
  main?: Partial<StorybookConfig> & Record<string, unknown>;
  storybookVersion?: string;
}) => {
  return incompatibleAddons.check({
    packageManager: packageManager as any,
    configDir: '',
    mainConfig: mainConfig as any,
    storybookVersion,
  });
};

describe('incompatible-addons fix', () => {
  afterEach(jest.restoreAllMocks);

  it('should show incompatible addons', async () => {
    await expect(
      check({
        packageManager: {
          getPackageVersion(packageName, basePath) {
            switch (packageName) {
              case '@storybook/addon-essentials':
                return Promise.resolve('7.0.0');
              case '@storybook/addon-info':
                return Promise.resolve('5.3.21');
              default:
                return Promise.resolve(null);
            }
          },
        },
        main: { addons: ['@storybook/essentials', '@storybook/addon-info'] },
      })
    ).resolves.toEqual({
      incompatibleAddonList: [
        {
          name: '@storybook/addon-info',
          version: '5.3.21',
        },
      ],
    });
  });

  it('no-op when there are no incompatible addons', async () => {
    await expect(
      check({
        packageManager: {
          getPackageVersion(packageName, basePath) {
            switch (packageName) {
              case '@storybook/addon-essentials':
                return Promise.resolve('7.0.0');
              default:
                return Promise.resolve(null);
            }
          },
        },
        main: { addons: ['@storybook/essentials'] },
      })
    ).resolves.toBeNull();
  });
});
