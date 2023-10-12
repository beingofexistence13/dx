import type { Task } from '../task';

import { PORT as devPort, dev } from './dev';
import { PORT as servePort, serve } from './serve';

// eslint-disable-next-line @typescript-eslint/no-implied-eval
const dynamicImport = new Function('specifier', 'return import(specifier)');

export const bench: Task = {
  description: 'Run benchmarks against a sandbox in dev mode',
  dependsOn: ['build'],
  async ready() {
    return false;
  },

  async run(details, options) {
    const controllers: AbortController[] = [];
    try {
      const { disableDocs } = options;
      const { browse } = await import('../bench/browse');
      const { saveBench, loadBench } = await import('../bench/utils');
      const { default: prettyBytes } = await dynamicImport('pretty-bytes');
      const { default: prettyTime } = await dynamicImport('pretty-ms');

      const devController = await dev.run(details, { ...options, debug: false });
      if (!devController) {
        throw new Error('dev: controller is null');
      }
      controllers.push(devController);
      const devBrowseResult = await browse(`http://localhost:${devPort}`, { disableDocs });
      devController.abort();

      const serveController = await serve.run(details, { ...options, debug: false });
      if (!serveController) {
        throw new Error('serve: controller is null');
      }
      controllers.push(serveController);
      const buildBrowseResult = await browse(`http://localhost:${servePort}`, { disableDocs });
      serveController.abort();

      await saveBench(
        'browse',
        {
          devManagerHeaderVisible: devBrowseResult.managerHeaderVisible,
          devManagerIndexVisible: devBrowseResult.managerIndexVisible,
          devStoryVisible: devBrowseResult.storyVisible,
          devStoryVisibleUncached: devBrowseResult.storyVisibleUncached,
          devAutodocsVisible: devBrowseResult.autodocsVisible,
          devMDXVisible: devBrowseResult.mdxVisible,

          buildManagerHeaderVisible: buildBrowseResult.managerHeaderVisible,
          buildManagerIndexVisible: buildBrowseResult.managerIndexVisible,
          buildStoryVisible: buildBrowseResult.storyVisible,
          buildAutodocsVisible: buildBrowseResult.autodocsVisible,
          buildMDXVisible: buildBrowseResult.mdxVisible,
        },
        {
          rootDir: details.sandboxDir,
        }
      );

      const data = await loadBench({ rootDir: details.sandboxDir });
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value !== 'number') {
          return;
        }

        if (key.includes('Size')) {
          console.log(`${key}: ${prettyBytes(value)}`);
        } else {
          console.log(`${key}: ${prettyTime(value)}`);
        }
      });
    } catch (e) {
      controllers.forEach((c) => c.abort());
      throw e;
    }
  },
};
