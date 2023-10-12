/// <reference types="@types/jest" />;

import { join } from 'path';
import * as fs from 'fs-extra';
import { logger } from '@storybook/node-logger';
import * as m from './common-preset';

const defaultFavicon = require.resolve('@storybook/core-server/public/favicon.svg');

const createPath = (...p: string[]) => join(process.cwd(), ...p);
const createOptions = (locations: string[]): Parameters<typeof m.favicon>[1] => ({
  configDir: '',
  presets: {
    apply: async (extension: string, config: any) => {
      switch (extension) {
        case 'staticDirs': {
          return locations.map((location) => ({ from: location, to: '/' }));
        }
        default: {
          return config as any;
        }
      }
    },
  },
});

jest.mock('fs-extra', () => {
  return {
    pathExists: jest.fn((p: string) => {
      return false;
    }),
    existsSync: jest.fn((p: string) => {
      return false;
    }),
  };
});

jest.mock('@storybook/node-logger', () => {
  return {
    logger: {
      warn: jest.fn(() => {}),
    },
  };
});

const pathExists = fs.pathExists as jest.Mock;

test('with no staticDirs favicon should return default', async () => {
  const options = createOptions([]);

  expect(await m.favicon(undefined, options)).toBe(defaultFavicon);
});

test('with staticDirs containing a single favicon.ico should return the found favicon', async () => {
  const location = 'static';
  pathExists.mockImplementation((p: string) => {
    if (p === createPath(location)) {
      return true;
    }
    if (p === createPath(location, 'favicon.ico')) {
      return true;
    }
    return false;
  });
  const options = createOptions([location]);

  expect(await m.favicon(undefined, options)).toBe(createPath(location, 'favicon.ico'));
});

test('with staticDirs containing a single favicon.svg should return the found favicon', async () => {
  const location = 'static';
  pathExists.mockImplementation((p: string) => {
    if (p === createPath(location)) {
      return true;
    }
    if (p === createPath(location, 'favicon.svg')) {
      return true;
    }
    return false;
  });
  const options = createOptions([location]);

  expect(await m.favicon(undefined, options)).toBe(createPath(location, 'favicon.svg'));
});

test('with staticDirs containing a multiple favicons should return the first favicon and warn', async () => {
  const location = 'static';
  pathExists.mockImplementation((p: string) => {
    if (p === createPath(location)) {
      return true;
    }
    if (p === createPath(location, 'favicon.ico')) {
      return true;
    }
    if (p === createPath(location, 'favicon.svg')) {
      return true;
    }
    return false;
  });
  const options = createOptions([location]);

  expect(await m.favicon(undefined, options)).toBe(createPath(location, 'favicon.svg'));

  expect(logger.warn).toHaveBeenCalledWith(expect.stringContaining('multiple favicons'));
});

test('with multiple staticDirs containing a multiple favicons should return the first favicon and warn', async () => {
  const locationA = 'static-a';
  const locationB = 'static-b';
  pathExists.mockImplementation((p: string) => {
    if (p === createPath(locationA)) {
      return true;
    }
    if (p === createPath(locationB)) {
      return true;
    }
    if (p === createPath(locationA, 'favicon.ico')) {
      return true;
    }
    if (p === createPath(locationB, 'favicon.svg')) {
      return true;
    }
    return false;
  });
  const options = createOptions([locationA, locationB]);

  expect(await m.favicon(undefined, options)).toBe(createPath(locationA, 'favicon.ico'));

  expect(logger.warn).toHaveBeenCalledWith(expect.stringContaining('multiple favicons'));
});
