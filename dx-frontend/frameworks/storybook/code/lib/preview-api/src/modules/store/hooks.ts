import { SHARED_STATE_CHANGED, SHARED_STATE_SET } from '@storybook/core-events';

import {
  addons,
  HooksContext,
  applyHooks,
  useMemo,
  useCallback,
  useRef,
  useState,
  useReducer,
  useEffect,
  useChannel,
  useStoryContext,
  useParameter,
  useArgs,
  useGlobals,
} from '../addons';

export {
  HooksContext,
  applyHooks,
  useMemo,
  useCallback,
  useRef,
  useState,
  useReducer,
  useEffect,
  useChannel,
  useStoryContext,
  useParameter,
  useArgs,
  useGlobals,
};

/**
 * @param {string} sharedId - The ID of the shared state.
 * @param {S} [defaultState] - The default state of the shared state.
 * @deprecated This API might get dropped, if you are using this, please file an issue.
 * @returns {[S, (s: S) => void]} - A tuple containing the current state and a function to update the state.
 * @example
 * const [state, setState] = useSharedState('my-addon', { count: 0 });
 * console.log(state); // { count: 0 }
 * setState({ count: 1 });
 * console.log(state); // { count: 1 }
 */
export function useSharedState<S>(sharedId: string, defaultState?: S): [S, (s: S) => void] {
  const channel = addons.getChannel();

  const [lastValue] =
    channel.last(`${SHARED_STATE_CHANGED}-manager-${sharedId}`) ||
    channel.last(`${SHARED_STATE_SET}-manager-${sharedId}`) ||
    [];

  const [state, setState] = useState<S>(lastValue || defaultState);

  const allListeners = useMemo(
    () => ({
      [`${SHARED_STATE_CHANGED}-manager-${sharedId}`]: (s: S) => setState(s),
      [`${SHARED_STATE_SET}-manager-${sharedId}`]: (s: S) => setState(s),
    }),
    [sharedId]
  );

  const emit = useChannel(allListeners, [sharedId]);

  useEffect(() => {
    // init
    if (defaultState !== undefined && !lastValue) {
      emit(`${SHARED_STATE_SET}-client-${sharedId}`, defaultState);
    }
  }, [sharedId]);

  return [
    state,
    (s) => {
      setState(s);
      emit(`${SHARED_STATE_CHANGED}-client-${sharedId}`, s);
    },
  ];
}

/**
 * @param {string} sharedId - The ID of the shared state.
 * @param {S} [defaultState] - The default state of the shared state.
 * @deprecated This API might get dropped, if you are using this, please file an issue.
 * @returns {[S, (s: S) => void]} - A tuple containing the current state and a function to update the state.
 * @example
 * const [state, setState] = useSharedState('my-addon', { count: 0 });
 * console.log(state); // { count: 0 }
 * setState({ count: 1 });
 * console.log(state); // { count: 1 }
 */
export function useAddonState<S>(addonId: string, defaultState?: S): [S, (s: S) => void] {
  return useSharedState<S>(addonId, defaultState);
}
