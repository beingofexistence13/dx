import { deprecate } from '@storybook/client-logger';

deprecate(
  'importing from @storybook/store is deprecated and will be removed in 8.0, please import canvas related modules from @storybook/preview-api'
);

export * from '@storybook/preview-api/dist/store';
