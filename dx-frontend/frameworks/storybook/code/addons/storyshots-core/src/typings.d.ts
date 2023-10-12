/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
declare module 'jest-preset-angular/*';
declare module 'preact-render-to-string/jsx';
declare module 'react-test-renderer*';

declare module '@storybook/babel-plugin-require-context-hook/register';

declare var STORYBOOK_ENV: any;
declare var STORIES: any;

declare var CONFIG_TYPE: 'DEVELOPMENT' | 'PRODUCTION';
declare var FEATURES: import('@storybook/types').StorybookConfig['features'];

declare var __STORYBOOK_STORY_STORE__: any;
declare var __requireContext: any;
