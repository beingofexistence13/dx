import { deprecate } from '@storybook/client-logger';

deprecate(
  'importing from @storybook/channel-websocket is deprecated and will be removed in 8.0, please import createWebsocketChannel from @storybook/channels'
);

export * from '@storybook/channels/dist/websocket/index';
