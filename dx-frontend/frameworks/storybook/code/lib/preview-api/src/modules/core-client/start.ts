/* eslint-disable no-underscore-dangle, @typescript-eslint/naming-convention */
import { global } from '@storybook/global';
import type { Renderer, ArgsStoryFn, Path, ProjectAnnotations } from '@storybook/types';
import { createBrowserChannel } from '@storybook/channels';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '../../addons';
import { PreviewWeb } from '../../preview-web';
import { ClientApi } from '../../client-api';

import { executeLoadableForChanges } from './executeLoadable';
import type { Loadable } from './executeLoadable';

const { FEATURES } = global;

const removedApi = (name: string) => () => {
  throw new Error(`@storybook/client-api:${name} was removed in storyStoreV7.`);
};

interface CoreClient_RendererImplementation<TRenderer extends Renderer> {
  /**
   * A function that applies decorators to a story.
   * @template TRenderer The type of renderer used by the Storybook client API.
   * @type {ProjectAnnotations<TRenderer>['applyDecorators']}
   */
  decorateStory?: ProjectAnnotations<TRenderer>['applyDecorators'];
  /**
   * A function that renders a story with args.
   * @template TRenderer The type of renderer used by the Storybook client API.
   * @type {ArgsStoryFn<TRenderer>}
   */
  render?: ArgsStoryFn<TRenderer>;
}

interface CoreClient_ClientAPIFacade {
  /**
   * The old way of adding stories at runtime.
   * @deprecated This method is deprecated and will be removed in a future version.
   */
  storiesOf: (...args: any[]) => never;
  /**
   * The old way of retrieving the list of stories at runtime.
   * @deprecated This method is deprecated and will be removed in a future version.
   */
  raw: (...args: any[]) => never;
}

interface CoreClient_StartReturnValue<TRenderer extends Renderer> {
  /**
   * Forces a re-render of all stories in the Storybook preview.
   * This function emits the `FORCE_RE_RENDER` event to the Storybook channel.
   * @deprecated This method is deprecated and will be removed in a future version.
   * @returns {void}
   */
  forceReRender: () => void;
  /**
   * The old way of setting up storybook with runtime configuration.
   * @deprecated This method is deprecated and will be removed in a future version.
   * @returns {void}
   */
  configure: any;
  /**
   * @deprecated This property is deprecated and will be removed in a future version.
   * @type {ClientApi<TRenderer> | CoreClient_ClientAPIFacade}
   */
  clientApi: ClientApi<TRenderer> | CoreClient_ClientAPIFacade;
}

/**
 * Initializes the Storybook preview API.
 * @template TRenderer The type of renderer used by the Storybook client API.
 * @param {ProjectAnnotations<TRenderer>['renderToCanvas']} renderToCanvas A function that renders a story to a canvas.
 * @param {CoreClient_RendererImplementation<TRenderer>} [options] Optional configuration options for the renderer implementation.
 * @param {ProjectAnnotations<TRenderer>['applyDecorators']} [options.decorateStory] A function that applies decorators to a story.
 * @param {ArgsStoryFn<TRenderer>} [options.render] A function that renders a story with arguments.
 * @returns {CoreClient_StartReturnValue<TRenderer>} An object containing functions and objects related to the Storybook preview API.
 */
export function start<TRenderer extends Renderer>(
  renderToCanvas: ProjectAnnotations<TRenderer>['renderToCanvas'],
  { decorateStory, render }: CoreClient_RendererImplementation<TRenderer> = {}
): CoreClient_StartReturnValue<TRenderer> {
  if (global) {
    // To enable user code to detect if it is running in Storybook
    global.IS_STORYBOOK = true;
  }

  if (FEATURES?.storyStoreV7) {
    return {
      forceReRender: removedApi('forceReRender'),
      configure: removedApi('configure'),
      clientApi: {
        storiesOf: removedApi('clientApi.storiesOf'),
        raw: removedApi('raw'),
      },
    };
  }

  const channel = createBrowserChannel({ page: 'preview' });
  addons.setChannel(channel);

  const clientApi = global?.__STORYBOOK_CLIENT_API__ || new ClientApi<TRenderer>();
  const preview = global?.__STORYBOOK_PREVIEW__ || new PreviewWeb<TRenderer>();
  let initialized = false;

  const importFn = (path: Path) => clientApi.importFn(path);
  function onStoriesChanged() {
    const storyIndex = clientApi.getStoryIndex();
    preview.onStoriesChanged({ storyIndex, importFn });
  }

  // These two bits are a bit ugly, but due to dependencies, `ClientApi` cannot have
  // direct reference to `PreviewWeb`, so we need to patch in bits
  clientApi.onImportFnChanged = onStoriesChanged;
  clientApi.storyStore = preview.storyStore;

  if (global) {
    global.__STORYBOOK_CLIENT_API__ = clientApi;
    global.__STORYBOOK_ADDONS_CHANNEL__ = channel;
    global.__STORYBOOK_PREVIEW__ = preview;
    global.__STORYBOOK_STORY_STORE__ = preview.storyStore;
  }

  return {
    forceReRender: () => channel.emit(FORCE_RE_RENDER),

    clientApi,
    // This gets called each time the user calls configure (i.e. once per HMR)
    // The first time, it constructs the preview, subsequently it updates it
    configure(
      renderer: string,
      loadable: Loadable,
      m?: NodeModule,
      disableBackwardCompatibility = true
    ) {
      if (disableBackwardCompatibility) {
        throw new Error('unexpected configure() call');
      }

      clientApi.addParameters({ renderer });

      // We need to run the `executeLoadableForChanges` function *inside* the `getProjectAnnotations
      // function in case it throws. So we also need to process its output there also
      const getProjectAnnotations = () => {
        const { added, removed } = executeLoadableForChanges(loadable, m);
        clientApi._loadAddedExports();

        Array.from(added.entries()).forEach(([fileName, fileExports]) =>
          clientApi.facade.addStoriesFromExports(fileName, fileExports)
        );

        Array.from(removed.entries()).forEach(([fileName]) =>
          clientApi.facade.clearFilenameExports(fileName)
        );

        return {
          render,
          ...clientApi.facade.projectAnnotations,
          renderToCanvas,
          applyDecorators: decorateStory,
        };
      };

      if (!initialized) {
        preview.initialize({
          getStoryIndex: () => clientApi.getStoryIndex(),
          importFn,
          getProjectAnnotations,
        });
        initialized = true;
      } else {
        // TODO -- why don't we care about the new annotations?
        getProjectAnnotations();
        onStoriesChanged();
      }
    },
  };
}
