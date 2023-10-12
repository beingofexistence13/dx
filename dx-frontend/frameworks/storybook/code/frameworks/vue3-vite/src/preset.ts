import { hasVitePlugins } from '@storybook/builder-vite';
import type { PresetProperty } from '@storybook/types';
import { mergeConfig, type PluginOption } from 'vite';
import { dirname, join } from 'path';
import type { StorybookConfig } from './types';
import { vueDocgen } from './plugins/vue-docgen';

const getAbsolutePath = <I extends string>(input: I): I =>
  dirname(require.resolve(join(input, 'package.json'))) as any;

export const core: PresetProperty<'core', StorybookConfig> = {
  builder: getAbsolutePath('@storybook/builder-vite'),
  renderer: getAbsolutePath('@storybook/vue3'),
};

export const viteFinal: StorybookConfig['viteFinal'] = async (config, { presets }) => {
  const plugins: PluginOption[] = [];

  // Add vue plugin if not present
  if (!(config.plugins && (await hasVitePlugins(config.plugins, ['vite:vue'])))) {
    const { default: vue } = await import('@vitejs/plugin-vue');
    plugins.push(vue());
  }

  // Add docgen plugin
  plugins.push(vueDocgen());

  return mergeConfig(config, {
    plugins,
    resolve: {
      alias: {
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
  });
};
