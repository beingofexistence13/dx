import type { StorybookConfig } from './types';

export * from './types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/preset-vue-webpack/dist/framework-preset-vue'),
  require.resolve('@storybook/preset-vue-webpack/dist/framework-preset-vue-docs'),
];
