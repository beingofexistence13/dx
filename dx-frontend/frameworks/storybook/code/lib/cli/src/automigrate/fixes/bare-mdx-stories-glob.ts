import chalk from 'chalk';
import dedent from 'ts-dedent';
import semver from 'semver';
import type { StoriesEntry } from '@storybook/types';
import { updateMainConfig } from '../helpers/mainConfigFile';
import type { Fix } from '../types';

const logger = console;

export interface BareMdxStoriesGlobRunOptions {
  existingStoriesEntries: StoriesEntry[];
  nextStoriesEntries: StoriesEntry[];
}

const getNextGlob = (glob: string) => {
  // '../src/**/*.stories.@(mdx|js|jsx|ts|tsx)' -> '../src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  const extGlobsRegex = new RegExp(/(.*\.)(stories\.@.*)(\|mdx|mdx\|)(.*)$/i);
  if (glob.match(extGlobsRegex)) {
    return glob.replace(extGlobsRegex, '$1@(mdx|$2$4)');
  }

  // '../src/**/*.stories.*' -> '../src/**/*.@(mdx|stories.*)'
  const allStoriesExtensionsRegex = new RegExp(/(.*\.)(stories\.\*)$/i);
  if (glob.match(allStoriesExtensionsRegex)) {
    return glob.replace(allStoriesExtensionsRegex, '$1@(mdx|$2)');
  }

  // '../src/**/*.stories.mdx' -> '../src/**/*.mdx'
  return glob.replaceAll('.stories.mdx', '.mdx');
};

export const bareMdxStoriesGlob: Fix<BareMdxStoriesGlobRunOptions> = {
  id: 'bare-mdx-stories-glob',
  async check({ storybookVersion, mainConfig }) {
    if (!semver.gte(storybookVersion, '7.0.0')) {
      return null;
    }

    const existingStoriesEntries = mainConfig.stories as StoriesEntry[];

    if (!existingStoriesEntries) {
      throw new Error(dedent`
      ❌ Unable to determine Storybook stories globs in ${chalk.blue(
        mainConfig
      )}, skipping ${chalk.cyan(this.id)} fix.
      
      In Storybook 7, we have deprecated defining stories in MDX files, and consequently have changed the suffix to simply .mdx.

      We were unable to automatically migrate your 'stories' config to include any .mdx file instead of just .stories.mdx.
      We suggest you make this change manually.

      To learn more about this change, see: ${chalk.yellow(
        'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mdx-docs-files'
      )}
      `);
    }

    const nextStoriesEntries = existingStoriesEntries.map((entry) => {
      const isSpecifier = typeof entry !== 'string';
      const glob = isSpecifier ? entry.files : entry;

      if (!glob) {
        // storySpecifier without the 'files' property. Just add the existing to the next list
        return entry;
      }

      const nextGlob = getNextGlob(glob);
      return isSpecifier ? { ...entry, files: nextGlob } : nextGlob;
    });

    // bails if there are no changes
    if (
      existingStoriesEntries.length === nextStoriesEntries.length &&
      existingStoriesEntries.every((entry, index) => {
        const nextEntry = nextStoriesEntries[index];
        if (typeof entry === 'string') {
          return entry === nextEntry;
        }
        if (typeof nextEntry === 'string') {
          return false;
        }
        return entry.files === nextEntry.files;
      })
    ) {
      return null;
    }

    return { existingStoriesEntries, nextStoriesEntries };
  },

  prompt({ existingStoriesEntries, nextStoriesEntries }) {
    const prettyExistingStoriesEntries = existingStoriesEntries
      .map((entry) => JSON.stringify(entry, null, 2))
      .join('\n');
    const prettyNextStoriesEntries = nextStoriesEntries
      .map((entry) => JSON.stringify(entry, null, 2))
      .join('\n');
    return dedent`
    We've detected your project has one or more globs in your 'stories' config that matches .stories.mdx files:
      ${chalk.cyan(prettyExistingStoriesEntries)}
    
    In Storybook 7, we have deprecated defining stories in MDX files, and consequently have changed the suffix to simply .mdx.

    We can automatically migrate your 'stories' config to include any .mdx file instead of just .stories.mdx.
    That would result in the following 'stories' config:
      ${chalk.cyan(prettyNextStoriesEntries)}

    To learn more about this change, see: ${chalk.yellow(
      'https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mdx-docs-files'
    )}
  `;
  },

  async run({ dryRun, mainConfigPath, result: { nextStoriesEntries } }) {
    logger.info(dedent`✅ Setting 'stories' config:
      ${JSON.stringify(nextStoriesEntries, null, 2)}`);

    if (!dryRun) {
      await updateMainConfig({ mainConfigPath, dryRun }, async (main) => {
        main.setFieldValue(['stories'], nextStoriesEntries);
      });
    }
  },
};
