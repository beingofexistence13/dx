import { dedent } from 'ts-dedent';
import semver from 'semver';
import { join } from 'path';
import slash from 'slash';
import glob from 'globby';
import { commonGlobOptions } from '@storybook/core-common';
import { updateMainConfig } from '../helpers/mainConfigFile';
import type { Fix } from '../types';
import { getStorybookVersionSpecifier } from '../../helpers';

const logger = console;

interface Options {
  value?: boolean;
}

/**
 */
export const mdxgfm: Fix<Options> = {
  id: 'github-flavored-markdown-mdx',

  async check({ configDir, mainConfig, storybookVersion }) {
    if (!semver.gte(storybookVersion, '7.0.0')) {
      return null;
    }

    const hasMDXFiles = await mainConfig?.stories?.reduce(async (acc, item) => {
      const val = await acc;

      if (val === true) {
        return true;
      }

      let pattern;

      if (typeof item === 'string') {
        pattern = slash(join(configDir, item));
      } else if (typeof item === 'object') {
        const directory = item.directory || '..';
        const files = item.files || '**/*.@(mdx|stories.@(mdx|js|jsx|mjs|ts|tsx))';
        pattern = slash(join(configDir, directory, files));
      }

      const files = await glob(pattern, commonGlobOptions(pattern));

      return files.some((f) => f.endsWith('.mdx'));
    }, Promise.resolve(false));

    const usesMDX1 = mainConfig?.features?.legacyMdx1 === true || false;
    const skip =
      usesMDX1 ||
      !hasMDXFiles ||
      !!mainConfig.addons?.find((item) => {
        if (item === '@storybook/addon-mdx-gfm') {
          return true;
        }
        if (typeof item === 'string') {
          return false;
        }
        if (item.name === '@storybook/addon-docs') {
          return item.options?.mdxPluginOptions?.mdxCompileOptions?.remarkPlugins?.length > 0;
        }
        return false;
      });

    if (skip) {
      return null;
    }

    return {};
  },

  prompt() {
    return dedent`
      In MDX1 you had the option of using GitHub flavored markdown.

      Storybook 7.0 uses MDX2 for compiling MDX, and thus no longer supports GFM out of the box.
      Because of this you need to explicitly add the GFM plugin in the addon-docs options:
      https://storybook.js.org/docs/react/writing-docs/mdx#lack-of-github-flavored-markdown-gfm

      We recommend you follow the guide on the link above, however we can add a temporary storybook addon that helps make this migration easier.
      We'll install the addon and add it to your storybook config.
    `;
  },

  async run({ packageManager, dryRun, mainConfigPath, skipInstall }) {
    if (!dryRun) {
      const packageJson = await packageManager.retrievePackageJson();
      const versionToInstall = getStorybookVersionSpecifier(
        await packageManager.retrievePackageJson()
      );
      await packageManager.addDependencies(
        { installAsDevDependencies: true, skipInstall, packageJson },
        [`@storybook/addon-mdx-gfm@${versionToInstall}`]
      );

      await updateMainConfig({ mainConfigPath, dryRun }, async (main) => {
        logger.info(`✅ Adding "@storybook/addon-mdx-gfm" addon`);
        if (!dryRun) {
          main.appendValueToArray(['addons'], '@storybook/addon-mdx-gfm');
        }
      });
    }
  },
};
