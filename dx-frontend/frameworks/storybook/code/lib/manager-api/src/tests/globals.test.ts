import { EventEmitter } from 'events';
import { SET_STORIES, SET_GLOBALS, UPDATE_GLOBALS, GLOBALS_UPDATED } from '@storybook/core-events';

import type { API } from '../index';
import type { SubAPI } from '../modules/globals';
import { init as initModule } from '../modules/globals';
import type { ModuleArgs } from '../lib/types';

const { logger } = require('@storybook/client-logger');
const { getEventMetadata } = require('../lib/events');

jest.mock('@storybook/client-logger');
jest.mock('../lib/events');
beforeEach(() => {
  getEventMetadata.mockReset().mockReturnValue({ sourceType: 'local' });
});

function createMockStore() {
  let state = {};
  return {
    getState: jest.fn().mockImplementation(() => state),
    setState: jest.fn().mockImplementation((s) => {
      state = { ...state, ...s };
    }),
  };
}

describe('globals API', () => {
  it('sets a sensible initialState', () => {
    const store = createMockStore();
    const channel = new EventEmitter();
    const { state } = initModule({ store, provider: { channel } } as unknown as ModuleArgs);

    expect(state).toEqual({
      globals: {},
      globalTypes: {},
    });
  });

  it('set global args on SET_GLOBALS', () => {
    const channel = new EventEmitter();
    const store = createMockStore();
    const { state } = initModule({
      store,
      provider: { channel },
    } as unknown as ModuleArgs);
    store.setState(state);

    channel.emit(SET_GLOBALS, {
      globals: { a: 'b' },
      globalTypes: { a: { type: { name: 'string' } } },
    });
    expect(store.getState()).toEqual({
      globals: { a: 'b' },
      globalTypes: { a: { type: { name: 'string' } } },
    });
  });

  it('ignores SET_STORIES from other refs', () => {
    const channel = new EventEmitter();
    const api = { findRef: jest.fn() };
    const store = createMockStore();
    const { state } = initModule({
      store,
      fullAPI: api,
      provider: { channel },
    } as unknown as ModuleArgs);
    store.setState(state);

    getEventMetadata.mockReturnValueOnce({ sourceType: 'external', ref: { id: 'ref' } });
    channel.emit(SET_STORIES, { globals: { a: 'b' } });
    expect(store.getState()).toEqual({ globals: {}, globalTypes: {} });
  });

  it('ignores SET_GLOBALS from other refs', () => {
    const api = { findRef: jest.fn() };
    const channel = new EventEmitter();
    const store = createMockStore();
    const { state } = initModule({
      store,
      fullAPI: api,
      provider: { channel },
    } as unknown as ModuleArgs);
    store.setState(state);

    getEventMetadata.mockReturnValueOnce({ sourceType: 'external', ref: { id: 'ref' } });
    channel.emit(SET_GLOBALS, {
      globals: { a: 'b' },
      globalTypes: { a: { type: { name: 'string' } } },
    });
    expect(store.getState()).toEqual({ globals: {}, globalTypes: {} });
  });

  it('updates the state when the preview emits GLOBALS_UPDATED', () => {
    const channel = new EventEmitter();
    const api = { findRef: jest.fn() };
    const store = createMockStore();
    const { state } = initModule({
      store,
      fullAPI: api,
      provider: { channel },
    } as unknown as ModuleArgs);
    store.setState(state);

    channel.emit(GLOBALS_UPDATED, { globals: { a: 'b' } });
    expect(store.getState()).toEqual({ globals: { a: 'b' }, globalTypes: {} });

    channel.emit(GLOBALS_UPDATED, { globals: { a: 'c' } });
    expect(store.getState()).toEqual({ globals: { a: 'c' }, globalTypes: {} });

    // SHOULD NOT merge global args
    channel.emit(GLOBALS_UPDATED, { globals: { d: 'e' } });
    expect(store.getState()).toEqual({ globals: { d: 'e' }, globalTypes: {} });
  });

  it('ignores GLOBALS_UPDATED from other refs', () => {
    const channel = new EventEmitter();
    const api = { findRef: jest.fn() };
    const store = createMockStore();
    const { state } = initModule({
      store,
      fullAPI: api,
      provider: { channel },
    } as unknown as ModuleArgs);
    store.setState(state);

    getEventMetadata.mockReturnValueOnce({ sourceType: 'external', ref: { id: 'ref' } });
    logger.warn.mockClear();
    channel.emit(GLOBALS_UPDATED, { globals: { a: 'b' } });
    expect(store.getState()).toEqual({ globals: {}, globalTypes: {} });
    expect(logger.warn).toHaveBeenCalled();
  });

  it('emits UPDATE_GLOBALS when updateGlobals is called', () => {
    const channel = new EventEmitter();
    const fullAPI = {} as unknown as API;
    const store = createMockStore();
    const listener = jest.fn();
    channel.on(UPDATE_GLOBALS, listener);

    const { api } = initModule({ store, fullAPI, provider: { channel } } as unknown as ModuleArgs);
    (api as SubAPI).updateGlobals({ a: 'b' });

    expect(listener).toHaveBeenCalledWith({
      globals: { a: 'b' },
      options: { target: 'storybook-preview-iframe' },
    });
  });
});
