import { TELEMETRY_ERROR } from '@storybook/core-events';
import { global } from '@storybook/global';

import { values } from './globals/runtime';
import { globals } from './globals/types';
import { prepareForTelemetry } from './utils';

const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>;

// Apply all the globals
getKeys(globals).forEach((key) => {
  (global as any)[globals[key]] = values[key];
});

global.sendTelemetryError = (error: any) => {
  const channel = global.__STORYBOOK_ADDONS_CHANNEL__;
  channel.emit(TELEMETRY_ERROR, prepareForTelemetry(error));
};

// handle all uncaught StorybookError at the root of the application and log to telemetry if applicable
global.addEventListener('error', (args: any) => {
  const error = args.error || args;
  if (error.fromStorybook) {
    global.sendTelemetryError(error);
  }
});
global.addEventListener('unhandledrejection', ({ reason }: any) => {
  if (reason.fromStorybook) {
    global.sendTelemetryError(reason);
  }
});
