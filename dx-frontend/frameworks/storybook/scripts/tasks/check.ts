import type { Task } from '../task';
import { exec } from '../utils/exec';
import { maxConcurrentTasks } from '../utils/maxConcurrentTasks';

const parallel = process.env.CI ? 8 : maxConcurrentTasks;

const linkCommand = `nx run-many --target="check" --all --parallel=${parallel} --exclude=@storybook/addon-storyshots,@storybook/addon-storyshots-puppeteer,@storybook/vue,@storybook/svelte,@storybook/vue3,@storybook/angular`;
const nolinkCommand = `nx run-many --target="check" --all --parallel=${parallel} --exclude=@storybook/addon-storyshots,@storybook/addon-storyshots-puppeteer`;

export const check: Task = {
  description: 'Typecheck the source code of the monorepo',
  dependsOn: ['compile'],
  async ready() {
    return false;
  },
  async run({ codeDir }, { dryRun, debug, link }) {
    return exec(
      link ? linkCommand : nolinkCommand,
      { cwd: codeDir },
      {
        startMessage: '🥾 Checking types validity',
        errorMessage: '❌ Unsound types detected',
        dryRun,
        debug,
      }
    );
  },
};
