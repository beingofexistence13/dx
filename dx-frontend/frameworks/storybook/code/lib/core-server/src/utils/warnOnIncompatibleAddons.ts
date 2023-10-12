import type { StorybookConfig } from '@storybook/types';
import { logger } from '@storybook/client-logger';
import chalk from 'chalk';
import dedent from 'ts-dedent';

import { getIncompatibleAddons } from '../../../cli/src/automigrate/helpers/getIncompatibleAddons';

export const warnOnIncompatibleAddons = async (config: StorybookConfig) => {
  const incompatibleAddons = await getIncompatibleAddons(config);

  if (incompatibleAddons.length > 0) {
    logger.warn(dedent`
      ${chalk.bold(
        chalk.red('Attention')
      )}: We've detected that you're using the following addons in versions which are known to be incompatible with Storybook 7:

      ${incompatibleAddons
        .map(({ name, version }) => `- ${chalk.cyan(`${name}@${version}`)}`)
        .join('\n')}

      Please be aware they might not work in Storybook 7. Reach out to their maintainers for updates and check the following Github issue for more information:
      ${chalk.yellow('https://github.com/storybookjs/storybook/issues/20529')}
    `);
  }
};
