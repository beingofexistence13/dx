import { dedent } from 'ts-dedent';
import type { Options } from '@storybook/types';

/**
 * Framework can be a string or an object.  This utility always returns the string name.
 */
export async function getFrameworkName(options: Options) {
  const framework = await options.presets.apply('framework', '', options);

  if (!framework) {
    throw new Error(dedent`
      You must specify a framework in '.storybook/main.js' config.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#framework-field-mandatory
    `);
  }

  return typeof framework === 'object' ? framework.name : framework;
}
