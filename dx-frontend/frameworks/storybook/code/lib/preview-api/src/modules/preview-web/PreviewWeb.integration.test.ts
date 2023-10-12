/**
 * @jest-environment jsdom
 */

import React from 'react';
import { global } from '@storybook/global';
import type { RenderContext } from '@storybook/types';
import { addons, mockChannel as createMockChannel } from '../addons';

import { PreviewWeb } from './PreviewWeb';
import { WebView } from './WebView';
import {
  componentOneExports,
  importFn,
  projectAnnotations,
  getProjectAnnotations,
  emitter,
  mockChannel,
  waitForRender,
  storyIndex as mockStoryIndex,
} from './PreviewWeb.mockdata';

// PreviewWeb.test mocks out all rendering
//   - ie. from`renderToCanvas()` (stories) or`ReactDOM.render()` (docs) in.
// This file lets them rip.

jest.mock('@storybook/channels', () => ({
  ...jest.requireActual('@storybook/channels'),
  createBrowserChannel: () => mockChannel,
}));
jest.mock('@storybook/client-logger');

jest.mock('./WebView');

const { document } = global;
jest.mock('@storybook/global', () => ({
  global: {
    ...globalThis,
    history: { replaceState: jest.fn() },
    document: {
      createElement: globalThis.document.createElement.bind(globalThis.document),
      location: {
        pathname: 'pathname',
        search: '?id=*',
      },
    },
    FEATURES: {
      storyStoreV7: true,
    },
    fetch: async () => ({ status: 200, json: async () => mockStoryIndex }),
  },
}));

beforeEach(() => {
  document.location.search = '';
  mockChannel.emit.mockClear();
  emitter.removeAllListeners();
  componentOneExports.default.loaders[0].mockReset().mockImplementation(async () => ({ l: 7 }));
  componentOneExports.default.parameters.docs.container.mockClear();
  componentOneExports.a.play.mockReset();
  projectAnnotations.renderToCanvas.mockReset();
  projectAnnotations.render.mockClear();
  projectAnnotations.decorators[0].mockClear();

  // We need to import DocsRenderer async because MDX2 is ESM-only so we inline
  // this in each of the async tests below to get it working in Jest
  // projectAnnotations.parameters.docs.renderer = () => new DocsRenderer() as any;

  addons.setChannel(mockChannel as any);
  addons.setServerChannel(createMockChannel());

  jest.mocked(WebView.prototype).prepareForDocs.mockReturnValue('docs-element' as any);
  jest.mocked(WebView.prototype).prepareForStory.mockReturnValue('story-element' as any);
});

describe('PreviewWeb', () => {
  describe('initial render', () => {
    it('renders story mode through the stack', async () => {
      const { DocsRenderer } = await import('@storybook/addon-docs');
      projectAnnotations.parameters.docs.renderer = () => new DocsRenderer() as any;

      projectAnnotations.renderToCanvas.mockImplementationOnce(({ storyFn }: RenderContext<any>) =>
        storyFn()
      );
      document.location.search = '?id=component-one--a';
      await new PreviewWeb().initialize({ importFn, getProjectAnnotations });

      await waitForRender();

      expect(projectAnnotations.decorators[0]).toHaveBeenCalled();
      expect(projectAnnotations.render).toHaveBeenCalled();
    });

    it('renders docs mode through docs page', async () => {
      const { DocsRenderer } = await import('@storybook/addon-docs');
      projectAnnotations.parameters.docs.renderer = () => new DocsRenderer() as any;

      document.location.search = '?id=component-one--docs&viewMode=docs';
      const preview = new PreviewWeb();

      const docsRoot = document.createElement('div');
      (
        preview.view.prepareForDocs as any as jest.Mock<typeof preview.view.prepareForDocs>
      ).mockReturnValue(docsRoot as any);
      componentOneExports.default.parameters.docs.container.mockImplementationOnce(() =>
        React.createElement('div', {}, 'INSIDE')
      );

      await preview.initialize({ importFn, getProjectAnnotations });
      await waitForRender();

      expect(docsRoot.outerHTML).toMatchInlineSnapshot(`
        <div>
          <div>
            INSIDE
          </div>
        </div>
      `);
    });

    it('sends docs rendering exceptions to showException', async () => {
      const { DocsRenderer } = await import('@storybook/addon-docs');
      projectAnnotations.parameters.docs.renderer = () => new DocsRenderer() as any;

      document.location.search = '?id=component-one--docs&viewMode=docs';
      const preview = new PreviewWeb();

      const docsRoot = document.createElement('div');
      (
        preview.view.prepareForDocs as any as jest.Mock<typeof preview.view.prepareForDocs>
      ).mockReturnValue(docsRoot as any);
      componentOneExports.default.parameters.docs.container.mockImplementationOnce(() => {
        throw new Error('Docs rendering error');
      });

      (
        preview.view.showErrorDisplay as any as jest.Mock<typeof preview.view.showErrorDisplay>
      ).mockClear();
      await preview.initialize({ importFn, getProjectAnnotations });
      await waitForRender();

      expect(preview.view.showErrorDisplay).toHaveBeenCalled();
    });
  });

  describe('onGetGlobalMeta changed (HMR)', () => {
    const newGlobalDecorator = jest.fn((s) => s());
    const newGetProjectAnnotations = () => {
      return {
        ...projectAnnotations,
        args: { a: 'second' },
        globals: { a: 'second' },
        decorators: [newGlobalDecorator],
      };
    };

    it('renders story mode through the updated stack', async () => {
      const { DocsRenderer } = await import('@storybook/addon-docs');
      projectAnnotations.parameters.docs.renderer = () => new DocsRenderer() as any;

      document.location.search = '?id=component-one--a';
      const preview = new PreviewWeb();
      await preview.initialize({ importFn, getProjectAnnotations });
      await waitForRender();

      projectAnnotations.renderToCanvas.mockImplementationOnce(({ storyFn }: RenderContext<any>) =>
        storyFn()
      );
      projectAnnotations.decorators[0].mockClear();
      mockChannel.emit.mockClear();
      preview.onGetProjectAnnotationsChanged({ getProjectAnnotations: newGetProjectAnnotations });
      await waitForRender();

      expect(projectAnnotations.decorators[0]).not.toHaveBeenCalled();
      expect(newGlobalDecorator).toHaveBeenCalled();
      expect(projectAnnotations.render).toHaveBeenCalled();
    });
  });
});
