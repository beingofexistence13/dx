/* eslint-disable no-underscore-dangle,  @typescript-eslint/naming-convention */
declare module 'chromatic/isChromatic';

declare var DOCS_OPTIONS: any;
declare var CONFIG_TYPE: 'DEVELOPMENT' | 'PRODUCTION';
declare var PREVIEW_URL: any;

declare var __STORYBOOK_ADDONS_MANAGER: any;
declare var RELEASE_NOTES_DATA: any;

declare var FEATURES: import('@storybook/types').StorybookConfig['features'];

declare var REFS: any;
declare var VERSIONCHECK: any;
declare var LOGLEVEL: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'silent' | undefined;

declare var __REACT__: any;
declare var __REACTDOM__: any;
declare var __STORYBOOKCOMPONENTS__: any;
declare var __STORYBOOKCOMPONENTSEXPERIMENTAL__: any;
declare var __STORYBOOKCHANNELS__: any;
declare var __STORYBOOKCOREEVENTS__: any;
declare var __STORYBOOKROUTER__: any;
declare var __STORYBOOKTHEMING__: any;
declare var __STORYBOOKAPI__: any;
declare var __STORYBOOKADDONS__: any;
declare var __STORYBOOKCLIENTLOGGER__: any;
declare var __STORYBOOK_ADDONS_CHANNEL__: any;
declare var sendTelemetryError: (error: any) => void;
