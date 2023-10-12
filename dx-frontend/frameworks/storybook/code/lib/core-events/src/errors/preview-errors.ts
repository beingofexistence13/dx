import dedent from 'ts-dedent';
import { StorybookError } from './storybook-error';

/**
 * If you can't find a suitable category for your error, create one
 * based on the package name/file path of which the error is thrown.
 * For instance:
 * If it's from @storybook/client-logger, then CLIENT-LOGGER
 *
 * Categories are prefixed by a logical grouping, e.g. PREVIEW_ or FRAMEWORK_
 * to prevent manager and preview errors from having the same category and error code.
 */
export enum Category {
  PREVIEW_CLIENT_LOGGER = 'PREVIEW_CLIENT-LOGGER',
  PREVIEW_CHANNELS = 'PREVIEW_CHANNELS',
  PREVIEW_CORE_EVENTS = 'PREVIEW_CORE-EVENTS',
  PREVIEW_INSTRUMENTER = 'PREVIEW_INSTRUMENTER',
  PREVIEW_API = 'PREVIEW_API',
  PREVIEW_REACT_DOM_SHIM = 'PREVIEW_REACT-DOM-SHIM',
  PREVIEW_ROUTER = 'PREVIEW_ROUTER',
  PREVIEW_THEMING = 'PREVIEW_THEMING',
  RENDERER_HTML = 'RENDERER_HTML',
  RENDERER_PREACT = 'RENDERER_PREACT',
  RENDERER_REACT = 'RENDERER_REACT',
  RENDERER_SERVER = 'RENDERER_SERVER',
  RENDERER_SVELTE = 'RENDERER_SVELTE',
  RENDERER_VUE = 'RENDERER_VUE',
  RENDERER_VUE3 = 'RENDERER_VUE3',
  RENDERER_WEB_COMPONENTS = 'RENDERER_WEB-COMPONENTS',
}

export class MissingStoryAfterHmrError extends StorybookError {
  readonly category = Category.PREVIEW_API;

  readonly code = 1;

  constructor(public data: { storyId: string }) {
    super();
  }

  template() {
    return dedent`
    Couldn't find story matching id '${this.data.storyId}' after HMR.
    - Did you just rename a story?
    - Did you remove it from your CSF file?
    - Are you sure a story with the id '${this.data.storyId}' exists?
    - Please check the values in the stories field of your main.js config and see if they would match your CSF File.
    - Also check the browser console and terminal for potential error messages.`;
  }
}
