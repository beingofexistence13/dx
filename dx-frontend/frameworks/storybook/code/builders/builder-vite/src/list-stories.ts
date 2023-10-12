import * as path from 'path';
import slash from 'slash';
import { glob } from 'glob';
import { normalizeStories, commonGlobOptions } from '@storybook/core-common';

import type { Options } from '@storybook/types';
import { normalizePath } from 'vite';

export async function listStories(options: Options) {
  return (
    await Promise.all(
      normalizeStories(await options.presets.apply('stories', [], options), {
        configDir: options.configDir,
        workingDir: options.configDir,
      }).map(({ directory, files }) => {
        const pattern = path.join(directory, files);
        const absolutePattern = path.isAbsolute(pattern)
          ? pattern
          : path.join(options.configDir, pattern);

        return glob(slash(absolutePattern), {
          ...commonGlobOptions(absolutePattern),
          follow: true,
        });
      })
    )
  ).reduce((carry, stories) => carry.concat(stories.map(normalizePath)), []);
}
