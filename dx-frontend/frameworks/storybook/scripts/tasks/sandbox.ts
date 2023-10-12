import { pathExists, remove } from 'fs-extra';

import { join } from 'path';
import { promisify } from 'util';
import dirSize from 'fast-folder-size';
import type { Task } from '../task';
import { now, saveBench } from '../bench/utils';

const logger = console;

export const sandbox: Task = {
  description: 'Create the sandbox from a template',
  dependsOn: ({ template }, { link }) => {
    let shouldLink = link;

    if (template.expected.framework === '@storybook/angular') {
      shouldLink = false;
    }

    if ('inDevelopment' in template && template.inDevelopment) {
      return ['run-registry', 'generate'];
    }

    if (shouldLink) {
      return ['compile'];
    }

    return ['run-registry'];
  },
  async ready({ sandboxDir }) {
    return pathExists(sandboxDir);
  },
  async run(details, options) {
    if (options.link) {
      if (details.template.expected.framework === '@storybook/angular') {
        // In Angular, tsc is spawn via Webpack and for some reason it follows the symlinks and doesn’t recognize it as node_modules. Hence, it does type checking on regular files.
        // Angular's tsconfig compilerOptions are more strict than the ones in the mono-repo and results in many errors, therefore we use --no-link to circumvent them.
        logger.log(
          `Detected an Angular sandbox, which cannot be linked. Enabling --no-link mode..`
        );
        // eslint-disable-next-line no-param-reassign
        options.link = false;
      }

      if (details.template.inDevelopment) {
        logger.log(
          `The ${options.template} has inDevelopment property enabled, therefore the sandbox for that template cannot be linked. Enabling --no-link mode..`
        );
        // eslint-disable-next-line no-param-reassign
        options.link = false;
      }
    }
    if (await this.ready(details)) {
      logger.info('🗑  Removing old sandbox dir');
      await remove(details.sandboxDir);
    }

    const { create, install, addStories, extendMain, init } = await import('./sandbox-parts');

    let startTime = now();
    await create(details, options);
    const createTime = now() - startTime;
    const createSize = 0;

    startTime = now();
    await install(details, options);
    const generateTime = now() - startTime;
    const generateSize = await promisify(dirSize)(join(details.sandboxDir, 'node_modules'));

    startTime = now();
    await init(details, options);
    const initTime = now() - startTime;
    const initSize = await promisify(dirSize)(join(details.sandboxDir, 'node_modules'));

    await saveBench(
      'sandbox',
      {
        createTime,
        generateTime,
        initTime,
        createSize,
        generateSize,
        initSize,
        diffSize: initSize - generateSize,
      },
      { rootDir: details.sandboxDir }
    );

    if (!options.skipTemplateStories) {
      await addStories(details, options);
    }

    await extendMain(details, options);

    logger.info(`✅ Storybook sandbox created at ${details.sandboxDir}`);
  },
};
