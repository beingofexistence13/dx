import { readFile } from 'fs-extra';
import { resolve } from 'path';

import { maxConcurrentTasks } from '../utils/maxConcurrentTasks';
import { exec } from '../utils/exec';
import type { Task } from '../task';

const linkedContents = `export * from '../src/index';`;
const linkCommand = `nx run-many --target="prep" --all --parallel --max-parallel=${maxConcurrentTasks} --exclude=@storybook/addon-storyshots,@storybook/addon-storyshots-puppeteer -- --reset`;
const noLinkCommand = `nx run-many --target="prep" --all --parallel=8 ${
  process.env.CI ? `--max-parallel=${maxConcurrentTasks}` : ''
} -- --reset --optimized`;

export const compile: Task = {
  description: 'Compile the source code of the monorepo',
  dependsOn: ['install'],
  async ready({ codeDir }, { link }) {
    try {
      // To check if the code has been compiled as we need, we check the compiled output of
      // `@storybook/preview`. To check if it has been built for publishing (i.e. `--no-link`),
      // we check if it built types or references source files directly.
      const contents = await readFile(
        resolve(codeDir, './lib/manager-api/dist/index.d.ts'),
        'utf8'
      );
      const isLinkedContents = contents.indexOf(linkedContents) !== -1;
      if (link) return isLinkedContents;
      return !isLinkedContents;
    } catch (err) {
      return false;
    }
  },
  async run({ codeDir }, { link, dryRun, debug }) {
    return exec(
      link ? linkCommand : noLinkCommand,
      { cwd: codeDir },
      {
        startMessage: '🥾 Bootstrapping',
        errorMessage: '❌ Failed to bootstrap',
        dryRun,
        debug,
      }
    );
  },
};
