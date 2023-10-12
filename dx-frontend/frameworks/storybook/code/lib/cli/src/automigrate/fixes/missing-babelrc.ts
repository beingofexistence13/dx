import chalk from 'chalk';
import dedent from 'ts-dedent';
import semver from 'semver';
import { loadPartialConfigAsync } from '@babel/core';
import type { Fix } from '../types';
import { generateStorybookBabelConfigInCWD } from '../../babel-config';
import { getFrameworkPackageName } from '../helpers/mainConfigFile';

interface MissingBabelRcOptions {
  needsBabelRc: boolean;
}

const logger = console;

const frameworksThatNeedBabelConfig = [
  '@storybook/react-webpack5',
  '@storybook/vue-webpack5',
  '@storybook/vue3-webpack5',
  '@storybook/html-webpack5',
  '@storybook/web-components-webpack5',
];

export const missingBabelRc: Fix<MissingBabelRcOptions> = {
  id: 'missing-babelrc',

  async check({ packageManager, mainConfig, storybookVersion }) {
    const packageJson = await packageManager.retrievePackageJson();

    if (!semver.gte(storybookVersion, '7.0.0')) {
      return null;
    }

    const { addons } = mainConfig;

    const hasCraPreset =
      addons &&
      addons.find((addon) =>
        typeof addon === 'string'
          ? addon.endsWith('@storybook/preset-create-react-app')
          : addon.name.endsWith('@storybook/preset-create-react-app')
      );

    const frameworkPackageName = getFrameworkPackageName(mainConfig);

    if (
      frameworkPackageName &&
      frameworksThatNeedBabelConfig.includes(frameworkPackageName) &&
      !hasCraPreset
    ) {
      const config = await loadPartialConfigAsync({
        babelrc: true,
        filename: '__fake__.js', // somehow needed to detect .babelrc.* files
      });

      if (!config.config && !config.babelrc && !packageJson.babel) {
        return { needsBabelRc: true };
      }
    }

    return null;
  },
  prompt() {
    return dedent`
      We detected that your project does not have a babel configuration (.babelrc, babel.config.js, etc.).

      In version 6.x, Storybook provided its own babel settings out of the box. Now, Storybook re-uses ${chalk.bold(
        "your project's babel configuration"
      )}, with small, incremental updates from Storybook addons.

      If your project does not have a babel configuration file, we can generate one that's equivalent to the 6.x defaults for you. Keep in mind that this can affect your project if it uses babel, and you may need to make additional changes based on your projects needs.

      We can create a ${chalk.blue(
        '.babelrc.json'
      )} file with some basic configuration and add any necessary package devDependencies.

      ${chalk.bold(
        'Note:'
      )} After installing the necessary presets, if it does not work in a monorepo, see the babel documentation for reference:
      ${chalk.yellow('https://babeljs.io/docs')}

      Please see the migration guide for more information:
      ${chalk.yellow(
        'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#babel-mode-v7-exclusively'
      )}
    `;
  },
  async run() {
    logger.info();
    await generateStorybookBabelConfigInCWD();
  },
};
