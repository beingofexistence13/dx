import { deprecate } from '@storybook/client-logger';

deprecate(
  'importing from @storybook/channel-postmessage is deprecated and will be removed in 8.0, please import createPostmessageChannel from @storybook/channels'
);

export * from '@storybook/channels/dist/postmessage/index';
