import type { StorybookConfig } from './types';

export * from './types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/preset-svelte-webpack/dist/framework-preset-svelte'),
  require.resolve('@storybook/preset-svelte-webpack/dist/framework-preset-svelte-docs'),
];
