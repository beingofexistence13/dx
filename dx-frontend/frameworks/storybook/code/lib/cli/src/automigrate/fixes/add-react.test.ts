import type { StorybookConfig } from '@storybook/types';
import type { JsPackageManager, PackageJson } from '../../js-package-manager';
import { addReact } from './add-react';

const checkAddReact = async (packageJson: PackageJson) => {
  const packageManager = {
    retrievePackageJson: async () => ({ dependencies: {}, devDependencies: {}, ...packageJson }),
  } as JsPackageManager;

  return addReact.check({
    packageManager,
    mainConfig: {} as StorybookConfig,
    storybookVersion: '7.0.0',
  });
};

describe('addReact fix', () => {
  it('should no-op when not using docs or essentials', async () => {
    await expect(checkAddReact({ dependencies: {} })).resolves.toBeFalsy();
  });

  it('should no-op when react/react-dom are already installed', async () => {
    await expect(
      checkAddReact({
        dependencies: { react: '*' },
        devDependencies: { '@storybook/addon-docs': '*', 'react-dom': '*' },
      })
    ).resolves.toBeFalsy();
  });

  it('should add react when it is missing', async () => {
    await expect(
      checkAddReact({
        dependencies: {},
        devDependencies: { '@storybook/addon-docs': '*', 'react-dom': '*' },
      })
    ).resolves.toMatchInlineSnapshot(`
      Object {
        "additionalDependencies": Array [
          "react",
        ],
        "dependents": Array [
          "@storybook/addon-docs",
        ],
      }
    `);
  });

  it('should add reac-dom when it is missing', async () => {
    await expect(
      checkAddReact({
        dependencies: {},
        devDependencies: { '@storybook/addon-essentials': '*', react: '*' },
      })
    ).resolves.toMatchInlineSnapshot(`
      Object {
        "additionalDependencies": Array [
          "react-dom",
        ],
        "dependents": Array [
          "@storybook/addon-essentials",
        ],
      }
    `);
  });
});
