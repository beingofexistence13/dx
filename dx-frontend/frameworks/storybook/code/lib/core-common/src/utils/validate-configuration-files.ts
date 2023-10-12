import { dedent } from 'ts-dedent';
import { glob } from 'glob';
import path from 'path';
import slash from 'slash';
import { once } from '@storybook/node-logger';

import { boost } from './interpret-files';

export async function validateConfigurationFiles(configDir: string) {
  const extensionsPattern = `{${Array.from(boost).join(',')}}`;
  const mainConfigMatches = await glob(slash(path.resolve(configDir, `main${extensionsPattern}`)));

  const [mainConfigPath] = mainConfigMatches;

  if (mainConfigMatches.length > 1) {
    once.warn(dedent`
      Multiple main files found in your configDir (${path.resolve(configDir)}).
      Storybook will use the first one found and ignore the others. Please remove the extra files.
    `);
  }

  if (!mainConfigPath) {
    throw new Error(dedent`
      No configuration files have been found in your configDir (${path.resolve(configDir)}).
      Storybook needs "main.js" file, please add it (or pass a custom config dir flag to Storybook to tell where your main.js file is located at).
    `);
  }
}
