/* eslint-disable no-param-reassign */

import * as fs from 'fs';
import type { Plugin } from 'vite';
import type { Options } from '@storybook/types';
import { transformIframeHtml } from '../transform-iframe-html';
import { generateIframeScriptCode } from '../codegen-iframe-script';
import { generateModernIframeScriptCode } from '../codegen-modern-iframe-script';
import { generateImportFnScriptCode } from '../codegen-importfn-script';
import { generateVirtualStoryEntryCode, generatePreviewEntryCode } from '../codegen-entries';
import { generateAddonSetupCode } from '../codegen-set-addon-channel';

import {
  virtualAddonSetupFile,
  virtualFileId,
  virtualPreviewFile,
  virtualStoriesFile,
} from '../virtual-file-names';

export function codeGeneratorPlugin(options: Options): Plugin {
  const iframePath = require.resolve('@storybook/builder-vite/input/iframe.html');
  let iframeId: string;
  let projectRoot: string;

  // noinspection JSUnusedGlobalSymbols
  return {
    name: 'storybook:code-generator-plugin',
    enforce: 'pre',
    configureServer(server) {
      // invalidate the whole vite-app.js script on every file change.
      // (this might be a little too aggressive?)
      server.watcher.on('change', () => {
        const appModule = server.moduleGraph.getModuleById(virtualFileId);
        if (appModule) {
          server.moduleGraph.invalidateModule(appModule);
        }
        const storiesModule = server.moduleGraph.getModuleById(virtualStoriesFile);
        if (storiesModule) {
          server.moduleGraph.invalidateModule(storiesModule);
        }
      });

      // Adding new story files is not covered by the change event above. So we need to detect this and trigger
      // HMR to update the importFn.

      server.watcher.on('add', (path) => {
        // TODO maybe use the stories declaration in main
        if (/\.stories\.([tj])sx?$/.test(path) || /\.mdx$/.test(path)) {
          // We need to emit a change event to trigger HMR
          server.watcher.emit('change', virtualStoriesFile);
        }
      });
    },
    config(config, { command }) {
      // If we are building the static distribution, add iframe.html as an entry.
      // In development mode, it's not an entry - instead, we use an express middleware
      // to serve iframe.html. The reason is that Vite's dev server (at the time of writing)
      // does not support virtual files as entry points.
      if (command === 'build') {
        if (!config.build) {
          config.build = {};
        }
        config.build.rollupOptions = {
          ...config.build.rollupOptions,
          input: iframePath,
        };
      }
    },
    configResolved(config) {
      projectRoot = config.root;
      iframeId = `${config.root}/iframe.html`;
    },
    resolveId(source) {
      if (source === virtualFileId) {
        return virtualFileId;
      }
      if (source === iframePath) {
        return iframeId;
      }
      if (source === virtualStoriesFile) {
        return virtualStoriesFile;
      }
      if (source === virtualPreviewFile) {
        return virtualPreviewFile;
      }
      if (source === virtualAddonSetupFile) {
        return virtualAddonSetupFile;
      }

      return undefined;
    },
    async load(id, config) {
      const storyStoreV7 = options.features?.storyStoreV7;
      if (id === virtualStoriesFile) {
        if (storyStoreV7) {
          return generateImportFnScriptCode(options);
        }
        return generateVirtualStoryEntryCode(options);
      }

      if (id === virtualAddonSetupFile) {
        return generateAddonSetupCode();
      }

      if (id === virtualPreviewFile && !storyStoreV7) {
        return generatePreviewEntryCode(options);
      }

      if (id === virtualFileId) {
        if (storyStoreV7) {
          return generateModernIframeScriptCode(options, projectRoot);
        }
        return generateIframeScriptCode(options, projectRoot);
      }

      if (id === iframeId) {
        return fs.readFileSync(
          require.resolve('@storybook/builder-vite/input/iframe.html'),
          'utf-8'
        );
      }

      return undefined;
    },
    async transformIndexHtml(html, ctx) {
      if (ctx.path !== '/iframe.html') {
        return undefined;
      }
      return transformIframeHtml(html, options);
    },
  };
}
