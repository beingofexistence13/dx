/** @jsxRuntime classic */
/** @jsx h */

import { global } from '@storybook/global';
import configure from '../configure';
import hasDependency from '../hasDependency';
import type { Loader } from '../Loader';
import type { StoryshotsOptions } from '../../api/StoryshotsOptions';

function test(options: StoryshotsOptions): boolean {
  return (
    options.framework === 'preact' || (!options.framework && hasDependency('@storybook/preact'))
  );
}

function load(options: StoryshotsOptions) {
  global.STORYBOOK_ENV = 'preact';

  let mockStartedAPI: any;

  jest.mock('@storybook/preview-api', () => {
    const previewAPI = jest.requireActual('@storybook/preview-api');

    return {
      ...previewAPI,
      start: (...args: any[]) => {
        mockStartedAPI = previewAPI.start(...args);
        return mockStartedAPI;
      },
    };
  });

  jest.mock('@storybook/preact', () => {
    const renderAPI = jest.requireActual('@storybook/preact');

    renderAPI.addDecorator = mockStartedAPI.clientApi.addDecorator;
    renderAPI.addParameters = mockStartedAPI.clientApi.addParameters;

    return renderAPI;
  });

  // eslint-disable-next-line global-require
  const storybook = require('@storybook/preact');

  configure({
    ...options,
    storybook,
  });

  return {
    framework: 'preact' as const,
    renderTree: jest.requireActual('./renderTree').default,
    renderShallowTree: () => {
      throw new Error('Shallow renderer is not supported for preact');
    },
    storybook,
  };
}

const preactLoader: Loader = {
  load,
  test,
};

export default preactLoader;
