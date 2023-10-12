import type { Preset } from '@storybook/types';
import type { StorybookConfig, SvelteOptions } from './types';

export const webpack: StorybookConfig['webpack'] = async (config, { presets }) => {
  const framework = await presets.apply<Preset>('framework');
  const svelteOptions = (typeof framework === 'object' ? framework.options : {}) as SvelteOptions;

  const mainFields = (config.resolve?.mainFields as string[]) || ['browser', 'module', 'main'];

  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules || []),
        {
          test: /\.(svelte|html)$/,
          loader: require.resolve('svelte-loader'),
          options: { loader: {}, ...svelteOptions },
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve?.extensions || []), '.svelte'],
      alias: config.resolve?.alias,
      mainFields: ['svelte', ...mainFields],
    },
  };
};

export const babelDefault: StorybookConfig['babelDefault'] = (config) => {
  return {
    ...config,
    presets: [...(config?.presets || [])],
    plugins: [...(config?.plugins || [])],
  };
};
