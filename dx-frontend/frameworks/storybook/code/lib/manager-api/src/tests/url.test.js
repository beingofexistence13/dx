import qs from 'qs';

import { SET_CURRENT_STORY, GLOBALS_UPDATED, UPDATE_QUERY_PARAMS } from '@storybook/core-events';

import EventEmitter from 'events';
import { init as initURL } from '../modules/url';

jest.mock('@storybook/client-logger');
jest.useFakeTimers();

describe('initial state', () => {
  const viewMode = 'story';

  describe('config query parameters', () => {
    it('handles full parameter', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ full: '1' }) };

      const {
        state: { layout },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(layout).toEqual({ isFullscreen: true });
    });

    it('handles nav parameter', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ nav: '0' }) };

      const {
        state: { layout },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(layout).toEqual({ showNav: false });
    });

    it('handles shortcuts parameter', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ shortcuts: '0' }) };

      const {
        state: { ui },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(ui).toEqual({ enableShortcuts: false });
    });

    it('handles panel parameter, bottom', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ panel: 'bottom' }) };

      const {
        state: { layout },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(layout).toEqual({ panelPosition: 'bottom' });
    });

    it('handles panel parameter, right', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ panel: 'right' }) };

      const {
        state: { layout },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(layout).toEqual({ panelPosition: 'right' });
    });

    it('handles panel parameter, 0', () => {
      const navigate = jest.fn();
      const location = { search: qs.stringify({ panel: '0' }) };

      const {
        state: { layout },
      } = initURL({ navigate, state: { location }, provider: { channel: new EventEmitter() } });

      expect(layout).toEqual({ showPanel: false });
    });
  });
});

describe('queryParams', () => {
  it('lets your read out parameters you set previously', () => {
    let state = {};
    const store = {
      setState: (change) => {
        state = { ...state, ...change };
      },
      getState: () => state,
    };
    const channel = new EventEmitter();
    const { api } = initURL({
      state: { location: { search: '' } },
      navigate: jest.fn(),
      store,
      provider: { channel },
    });

    const listener = jest.fn();

    channel.on(UPDATE_QUERY_PARAMS, listener);

    api.setQueryParams({ foo: 'bar' });

    expect(api.getQueryParam('foo')).toEqual('bar');

    expect(listener).toHaveBeenCalledWith({ foo: 'bar' });
  });
});

describe('initModule', () => {
  const store = {
    state: {},
    getState() {
      return this.state;
    },
    setState(value) {
      this.state = { ...this.state, ...value };
    },
  };
  const storyState = (storyId) => ({
    path: `/story/${storyId}`,
    storyId,
    viewMode: 'story',
  });

  const fullAPI = {
    showReleaseNotesOnLaunch: jest.fn(),
  };

  beforeEach(() => {
    store.state = {};
    fullAPI.callbacks = {};
  });

  it('updates args param on SET_CURRENT_STORY', async () => {
    store.setState(storyState('test--story'));

    const navigate = jest.fn();
    const channel = new EventEmitter();
    initURL({
      store,
      provider: { channel },
      state: { location: {} },
      navigate,
      fullAPI: Object.assign(fullAPI, {
        getCurrentStoryData: () => ({
          type: 'story',
          args: { a: 1, b: 2 },
          initialArgs: { a: 1, b: 1 },
          isLeaf: true,
        }),
      }),
    });
    channel.emit(SET_CURRENT_STORY);
    expect(navigate).toHaveBeenCalledWith(
      '/story/test--story&args=b:2',
      expect.objectContaining({ replace: true })
    );
    expect(store.getState().customQueryParams).toEqual({ args: 'b:2' });
  });

  it('updates globals param on GLOBALS_UPDATED', async () => {
    store.setState(storyState('test--story'));

    const navigate = jest.fn();
    const channel = new EventEmitter();
    initURL({ store, provider: { channel }, state: { location: {} }, navigate, fullAPI });

    channel.emit(GLOBALS_UPDATED, { globals: { a: 2 }, initialGlobals: { a: 1, b: 1 } });
    expect(navigate).toHaveBeenCalledWith(
      '/story/test--story&globals=a:2;b:!undefined',
      expect.objectContaining({ replace: true })
    );
    expect(store.getState().customQueryParams).toEqual({ globals: 'a:2;b:!undefined' });
  });

  it('adds url params alphabetically', async () => {
    store.setState({ ...storyState('test--story'), customQueryParams: { full: 1 } });
    const navigate = jest.fn();
    const channel = new EventEmitter();
    const { api } = initURL({
      store,
      provider: { channel },
      state: { location: {} },
      navigate,
      fullAPI: Object.assign(fullAPI, {
        getCurrentStoryData: () => ({ type: 'story', args: { a: 1 }, isLeaf: true }),
      }),
    });

    channel.emit(GLOBALS_UPDATED, { globals: { g: 2 } });
    expect(navigate).toHaveBeenCalledWith(
      '/story/test--story&full=1&globals=g:2',
      expect.objectContaining({ replace: true })
    );

    channel.emit(SET_CURRENT_STORY);
    expect(navigate).toHaveBeenCalledWith(
      '/story/test--story&args=a:1&full=1&globals=g:2',
      expect.objectContaining({ replace: true })
    );
  });
});
