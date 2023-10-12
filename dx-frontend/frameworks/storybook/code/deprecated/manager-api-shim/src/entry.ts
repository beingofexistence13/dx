import { deprecate } from '@storybook/client-logger';

deprecate(
  'importing from @storybook/api is deprecated and will be removed in 8.0, please import manager related modules from @storybook/manager-api'
);

export * from '@storybook/manager-api';
