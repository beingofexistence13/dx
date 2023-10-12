import type { StorybookConfig } from './types';

export * from './types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/preset-react-webpack/dist/framework-preset-react'),
  require.resolve('@storybook/preset-react-webpack/dist/framework-preset-cra'),
  require.resolve('@storybook/preset-react-webpack/dist/framework-preset-react-docs'),
];
