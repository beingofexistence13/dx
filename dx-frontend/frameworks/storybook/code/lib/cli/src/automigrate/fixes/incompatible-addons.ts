import chalk from 'chalk';
import dedent from 'ts-dedent';
import type { Fix } from '../types';
import { getIncompatibleAddons } from '../helpers/getIncompatibleAddons';

interface IncompatibleAddonsOptions {
  incompatibleAddonList: { name: string; version: string }[];
}

export const incompatibleAddons: Fix<IncompatibleAddonsOptions> = {
  id: 'incompatible-addons',
  promptOnly: true,

  async check({ mainConfig, packageManager }) {
    const incompatibleAddonList = await getIncompatibleAddons(mainConfig, packageManager);

    return incompatibleAddonList.length > 0 ? { incompatibleAddonList } : null;
  },
  prompt({ incompatibleAddonList }) {
    return dedent`
      ${chalk.bold(
        chalk.red('Attention')
      )}: We've detected that you're using the following addons in versions which are known to be incompatible with Storybook 7:

      ${incompatibleAddonList
        .map(({ name, version }) => `- ${chalk.cyan(`${name}@${version}`)}`)
        .join('\n')}

      Please be aware they might not work in Storybook 7. Reach out to their maintainers for updates and check the following Github issue for more information:
      ${chalk.yellow('https://github.com/storybookjs/storybook/issues/20529')}
    `;
  },
};
