import { Component, ɵresetJitOptions } from '@angular/core';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CanvasRenderer } from './CanvasRenderer';
import { RendererFactory } from './RendererFactory';
import { DocsRenderer } from './DocsRenderer';

jest.mock('@angular/platform-browser-dynamic');

declare const document: Document;
describe('RendererFactory', () => {
  let rendererFactory: RendererFactory;
  let rootTargetDOMNode: HTMLElement;
  let rootDocstargetDOMNode: HTMLElement;

  beforeEach(async () => {
    rendererFactory = new RendererFactory();
    document.body.innerHTML =
      '<div id="storybook-root"></div><div id="root-docs"><div id="story-in-docs"></div></div>';
    rootTargetDOMNode = global.document.getElementById('storybook-root');
    rootDocstargetDOMNode = global.document.getElementById('root-docs');
    (platformBrowserDynamic as any).mockImplementation(platformBrowserDynamicTesting);
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllMocks();

    // Necessary to avoid this error "Provided value for `preserveWhitespaces` can not be changed once it has been set." :
    // Source: https://github.com/angular/angular/commit/e342ffd855ffeb8af7067b42307ffa320d82177e#diff-92b125e532cc22977b46a91f068d6d7ea81fd61b772842a4a0212f1cfd875be6R28
    ɵresetJitOptions();
  });

  describe('CanvasRenderer', () => {
    it('should get CanvasRenderer instance', async () => {
      const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
      expect(render).toBeInstanceOf(CanvasRenderer);
    });

    it('should render my-story for story template', async () => {
      const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
      await render?.render({
        storyFnAngular: {
          template: '🦊',
          props: {},
        },
        forced: false,
        targetDOMNode: rootTargetDOMNode,
      });

      expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe('🦊');
    });

    it('should render my-story for story component', async () => {
      @Component({ selector: 'foo', template: '🦊' })
      class FooComponent {}

      const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
      await render?.render({
        storyFnAngular: {
          props: {},
        },
        forced: false,
        component: FooComponent,
        targetDOMNode: rootTargetDOMNode,
      });

      expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe(
        '<foo>🦊</foo><!--container-->'
      );
    });

    it('should handle circular reference in moduleMetadata', async () => {
      class Thing {
        token: Thing;

        constructor() {
          this.token = this;
        }
      }
      const token = new Thing();

      const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);

      await render?.render({
        storyFnAngular: {
          template: '🦊',
          props: {},
          moduleMetadata: { providers: [{ provide: 'foo', useValue: token }] },
        },
        forced: false,
        targetDOMNode: rootTargetDOMNode,
      });

      expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe('🦊');
    });

    describe('when forced=true', () => {
      beforeEach(async () => {
        // Init first render
        const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
        await render?.render({
          storyFnAngular: {
            template: '{{ logo }}: {{ name }}',
            props: {
              logo: '🦊',
              name: 'Fox',
            },
          },
          forced: true,
          targetDOMNode: rootTargetDOMNode,
        });
      });

      it('should be rendered a first time', async () => {
        expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe('🦊: Fox');
      });

      it('should not be re-rendered when only props change', async () => {
        // only props change
        const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
        await render?.render({
          storyFnAngular: {
            props: {
              logo: '👾',
            },
          },
          forced: true,
          targetDOMNode: rootTargetDOMNode,
        });

        expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe('👾: Fox');
      });

      it('should be re-rendered when template change', async () => {
        const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
        await render?.render({
          storyFnAngular: {
            template: '{{ beer }}',
            props: {
              beer: '🍺',
            },
          },
          forced: true,
          targetDOMNode: rootTargetDOMNode,
        });

        expect(document.body.getElementsByTagName('storybook-root')[0].innerHTML).toBe('🍺');
      });
    });
  });

  describe('DocsRenderer', () => {
    describe('when canvas render is done before', () => {
      beforeEach(async () => {
        // Init first Canvas render
        const render = await rendererFactory.getRendererInstance(rootTargetDOMNode);
        await render?.render({
          storyFnAngular: {
            template: 'Canvas 🖼',
          },
          forced: true,
          targetDOMNode: rootTargetDOMNode,
        });
      });

      it('should reset root HTML', async () => {
        global.document
          .getElementById('storybook-root')
          .appendChild(global.document.createElement('👾'));

        expect(global.document.getElementById('storybook-root').innerHTML).toContain('Canvas 🖼');
        await rendererFactory.getRendererInstance(rootDocstargetDOMNode);
        expect(global.document.getElementById('storybook-root').innerHTML).toBe('');
      });
    });

    it('should get DocsRenderer instance', async () => {
      const render = await rendererFactory.getRendererInstance(rootDocstargetDOMNode);
      expect(render).toBeInstanceOf(DocsRenderer);
    });
  });
});
