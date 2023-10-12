import type { StorybookConfig } from './types';

export * from './types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/preset-vue3-webpack/dist/framework-preset-vue3'),
  require.resolve('@storybook/preset-vue3-webpack/dist/framework-preset-vue3-docs'),
];
