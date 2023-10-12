import type { StorybookConfig } from '@storybook/types';
import semver from 'semver';
import { getAddonNames } from './mainConfigFile';
import { JsPackageManagerFactory } from '../../js-package-manager';

export const getIncompatibleAddons = async (
  mainConfig: StorybookConfig,
  packageManager = JsPackageManagerFactory.getPackageManager()
) => {
  // TODO: Keep this up to date with https://github.com/storybookjs/storybook/issues/20529 in case more addons get added
  const incompatibleList = {
    '@storybook/addon-knobs': '6.4.0',
    '@storybook/addon-postcss': '2.0.0',
    'storybook-addon-next-router': '4.0.2',
    'storybook-addon-outline': '1.4.2', // (deprecated)
    '@storybook/addon-info': '5.3.21',
    'storybook-addon-designs': '6.3.1',
    'storybook-addon-next': '1.7.0', // (deprecated)'
    'storybook-docs-toc': '1.7.0',
    '@storybook/addon-google-analytics': '6.2.9',
    'storybook-addon-pseudo-states': '1.15.5',
    'storybook-dark-mode': '2.1.1',
    'storybook-addon-gatsby': '0.0.5',
    '@etchteam/storybook-addon-css-variables-theme': '1.4.0',
    '@storybook/addon-cssresources': '6.2.9',
    'storybook-addon-grid': '0.3.1',
    'storybook-multilevel-sort': '1.2.0',
    'storybook-addon-i18next': '1.3.0',
    'storybook-source-link': '2.0.8',
    'babel-plugin-storybook-csf-title': '2.1.0',
    '@urql/storybook-addon': '2.0.1',
    'storybook-addon-intl': '2.4.1',
    'storybook-addon-mock': '3.2.0',
    '@chakra-ui/storybook-addon': '4.0.16',
    'storybook-mobile-addon': '1.0.2',
    '@storybook/addon-queryparams': '6.2.9',
  };

  const addons = getAddonNames(mainConfig).filter((addon) => addon in incompatibleList);

  if (addons.length === 0) {
    return [];
  }

  const addonVersions = await Promise.all(
    addons.map(
      async (addon) =>
        ({
          name: addon,
          version: await packageManager.getPackageVersion(addon),
        } as { name: keyof typeof incompatibleList; version: string })
    )
  );

  const incompatibleAddons: { name: string; version: string }[] = [];
  addonVersions.forEach(({ name, version: installedVersion }) => {
    if (installedVersion === null) return;

    const addonVersion = incompatibleList[name];
    try {
      if (semver.lte(semver.coerce(installedVersion), semver.coerce(addonVersion))) {
        incompatibleAddons.push({ name, version: installedVersion });
      }
    } catch (err) {
      // we tried our best but if we can't compare, we just no-op for that addon
    }
  });

  return incompatibleAddons;
};
