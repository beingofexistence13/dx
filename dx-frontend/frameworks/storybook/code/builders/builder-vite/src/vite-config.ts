import * as path from 'path';
import { loadConfigFromFile, mergeConfig } from 'vite';
import findCacheDirectory from 'find-cache-dir';
import type {
  ConfigEnv,
  InlineConfig as ViteInlineConfig,
  PluginOption,
  UserConfig as ViteConfig,
  InlineConfig,
} from 'vite';
import { isPreservingSymlinks, getFrameworkName, getBuilderOptions } from '@storybook/core-common';
import { globals } from '@storybook/preview/globals';
import type { Options } from '@storybook/types';
import {
  codeGeneratorPlugin,
  csfPlugin,
  injectExportOrderPlugin,
  stripStoryHMRBoundary,
  externalGlobalsPlugin,
} from './plugins';

import type { BuilderOptions } from './types';

export type PluginConfigType = 'build' | 'development';

const configEnvServe: ConfigEnv = {
  mode: 'development',
  command: 'serve',
  ssrBuild: false,
};

const configEnvBuild: ConfigEnv = {
  mode: 'production',
  command: 'build',
  ssrBuild: false,
};

// Vite config that is common to development and production mode
export async function commonConfig(
  options: Options,
  _type: PluginConfigType
): Promise<ViteInlineConfig> {
  const configEnv = _type === 'development' ? configEnvServe : configEnvBuild;
  const { viteConfigPath } = await getBuilderOptions<BuilderOptions>(options);

  const projectRoot = path.resolve(options.configDir, '..');

  // I destructure away the `build` property from the user's config object
  // I do this because I can contain config that breaks storybook, such as we had in a lit project.
  // If the user needs to configure the `build` they need to do so in the viteFinal function in main.js.
  const { config: { build: buildProperty = undefined, ...userConfig } = {} } =
    (await loadConfigFromFile(configEnv, viteConfigPath, projectRoot)) ?? {};

  const sbConfig: InlineConfig = {
    configFile: false,
    cacheDir: findCacheDirectory({ name: 'sb-vite' }),
    root: projectRoot,
    // Allow storybook deployed as subfolder.  See https://github.com/storybookjs/builder-vite/issues/238
    base: './',
    plugins: await pluginConfig(options),
    resolve: {
      preserveSymlinks: isPreservingSymlinks(),
      alias: {
        assert: require.resolve('browser-assert'),
      },
    },
    // If an envPrefix is specified in the vite config, add STORYBOOK_ to it,
    // otherwise, add VITE_ and STORYBOOK_ so that vite doesn't lose its default.
    envPrefix: userConfig.envPrefix ? ['STORYBOOK_'] : ['VITE_', 'STORYBOOK_'],
  };

  const config: ViteConfig = mergeConfig(userConfig, sbConfig);

  return config;
}

export async function pluginConfig(options: Options) {
  const frameworkName = await getFrameworkName(options);

  const plugins = [
    codeGeneratorPlugin(options),
    await csfPlugin(options),
    injectExportOrderPlugin,
    stripStoryHMRBoundary(),
    {
      name: 'storybook:allow-storybook-dir',
      enforce: 'post',
      config(config) {
        // if there is NO allow list then Vite allows anything in the root directory
        // if there is an allow list then Vite only allows anything in the listed directories
        // add storybook specific directories only if there's an allow list so that we don't end up
        // disallowing the root unless root is already disallowed
        if (config?.server?.fs?.allow) {
          config.server.fs.allow.push('.storybook');
        }
      },
    },
    await externalGlobalsPlugin(globals),
  ] as PluginOption[];

  // TODO: framework doesn't exist, should move into framework when/if built
  if (frameworkName === '@storybook/glimmerx-vite') {
    // eslint-disable-next-line global-require
    const plugin = require('vite-plugin-glimmerx/index.cjs');
    plugins.push(plugin.default());
  }

  return plugins;
}
