import type { StorybookConfig } from '@storybook/types';

export const addons: StorybookConfig['addons'] = [
  require.resolve('@storybook/react-dom-shim/dist/preset'),
];
