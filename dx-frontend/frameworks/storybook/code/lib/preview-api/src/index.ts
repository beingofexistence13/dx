/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="typings.d.ts" />

/**
 * HOOKS API
 */
export {
  useArgs,
  useCallback,
  useChannel,
  useEffect,
  useGlobals,
  useMemo,
  useParameter,
  useReducer,
  useRef,
  useState,
  useStoryContext,
  applyHooks,
  HooksContext,
} from './addons';

/**
 * DECORATORS API
 */
export { makeDecorator } from './addons';

/**
 * ADDON API
 * @deprecated
 */
export { addons, mockChannel } from './addons';

/**
 * DOCS API
 */
export { DocsContext } from './preview-web';

/**
 * SIMULATION API
 */
export { simulatePageLoad, simulateDOMContentLoaded } from './preview-web';

/**
 * STORIES API
 */
export {
  addArgTypes,
  addArgTypesEnhancer,
  addArgs,
  addArgsEnhancer,
  addDecorator,
  addLoader,
  addParameters,
  addStepRunner,
} from './client-api';
export { getQueryParam, getQueryParams } from './client-api';
export { setGlobalRender } from './client-api';

export {
  combineArgs,
  combineParameters,
  composeConfigs,
  composeStepRunners,
  composeStories,
  composeStory,
  decorateStory,
  defaultDecorateStory,
  prepareStory,
  prepareMeta,
  normalizeStory,
  filterArgTypes,
  sanitizeStoryContextUpdate,
  setProjectAnnotations,
  inferControls,
  userOrAutoTitleFromSpecifier,
  userOrAutoTitle,
  sortStoriesV7,
} from './store';

export type { PropDescriptor } from './store';

/**
 * STORIES API
 */
export { ClientApi } from './client-api';
export { StoryStore } from './store';
export { Preview, PreviewWeb } from './preview-web';
export { start } from './core-client';
