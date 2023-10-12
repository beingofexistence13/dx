import { Channel } from '@storybook/channels';
import type { CSFFile, Renderer } from '@storybook/types';
import type { StoryStore } from '../../store';

import { DocsContext } from './DocsContext';
import { csfFileParts } from './test-utils';

const channel = new Channel({});
const renderStoryToElement = jest.fn();

describe('referenceCSFFile', () => {
  it('deals with unattached "docsOnly" csf files', () => {
    const unattachedCsfFile = {
      stories: {
        'meta--page': {
          id: 'meta--page',
          name: 'Page',
          parameters: { docsOnly: true },
          moduleExport: {},
        },
      },
      meta: { id: 'meta', title: 'Meta' },
      moduleExports: {},
    } as CSFFile;

    const store = {
      componentStoriesFromCSFFile: () => [],
    } as unknown as StoryStore<Renderer>;
    const context = new DocsContext(channel, store, renderStoryToElement, [unattachedCsfFile]);

    expect(() => context.storyById()).toThrow(/No primary story/);
  });
});

describe('resolveOf', () => {
  const { story, csfFile, storyExport, metaExport, moduleExports, component } = csfFileParts();

  describe('attached', () => {
    const projectAnnotations = { render: jest.fn() };
    const store = {
      componentStoriesFromCSFFile: () => [story],
      preparedMetaFromCSFFile: () => ({ prepareMeta: 'preparedMeta' }),
      projectAnnotations,
    } as unknown as StoryStore<Renderer>;
    const context = new DocsContext(channel, store, renderStoryToElement, [csfFile]);
    context.attachCSFFile(csfFile);

    it('works for story exports', () => {
      expect(context.resolveOf(storyExport)).toEqual({ type: 'story', story });
    });

    it('works for meta exports', () => {
      expect(context.resolveOf(metaExport)).toEqual({
        type: 'meta',
        csfFile,
        preparedMeta: expect.any(Object),
      });
    });

    it('works for full module exports', () => {
      expect(context.resolveOf(moduleExports)).toEqual({
        type: 'meta',
        csfFile,
        preparedMeta: expect.any(Object),
      });
    });

    it('works for components', () => {
      expect(context.resolveOf(component)).toEqual({
        type: 'component',
        component,
        projectAnnotations: expect.objectContaining(projectAnnotations),
      });
    });

    it('finds primary story', () => {
      expect(context.resolveOf('story')).toEqual({ type: 'story', story });
    });

    it('finds attached CSF file', () => {
      expect(context.resolveOf('meta')).toEqual({
        type: 'meta',
        csfFile,
        preparedMeta: expect.any(Object),
      });
    });

    it('finds attached component', () => {
      expect(context.resolveOf('component')).toEqual({
        type: 'component',
        component,
        projectAnnotations: expect.objectContaining(projectAnnotations),
      });
    });

    describe('validation allowed', () => {
      it('works for story exports', () => {
        expect(context.resolveOf(storyExport, ['story'])).toEqual({ type: 'story', story });
      });

      it('works for meta exports', () => {
        expect(context.resolveOf(metaExport, ['meta'])).toEqual({
          type: 'meta',
          csfFile,
          preparedMeta: expect.any(Object),
        });
      });

      it('works for full module exports', () => {
        expect(context.resolveOf(moduleExports, ['meta'])).toEqual({
          type: 'meta',
          csfFile,
          preparedMeta: expect.any(Object),
        });
      });

      it('works for components', () => {
        expect(context.resolveOf(component, ['component'])).toEqual({
          type: 'component',
          component,
          projectAnnotations: expect.objectContaining(projectAnnotations),
        });
      });

      it('finds primary story', () => {
        expect(context.resolveOf('story', ['story'])).toEqual({ type: 'story', story });
      });

      it('finds attached CSF file', () => {
        expect(context.resolveOf('meta', ['meta'])).toEqual({
          type: 'meta',
          csfFile,
          preparedMeta: expect.any(Object),
        });
      });

      it('finds attached component', () => {
        expect(context.resolveOf('component', ['component'])).toEqual({
          type: 'component',
          component,
          projectAnnotations: expect.objectContaining(projectAnnotations),
        });
      });
    });

    describe('validation rejected', () => {
      it('works for story exports', () => {
        expect(() => context.resolveOf(storyExport, ['meta'])).toThrow('Invalid value passed');
      });

      it('works for meta exports', () => {
        expect(() => context.resolveOf(metaExport, ['story'])).toThrow('Invalid value passed');
      });

      it('works for full module exports', () => {
        expect(() => context.resolveOf(moduleExports, ['story'])).toThrow('Invalid value passed');
      });

      it('works for components', () => {
        expect(() => context.resolveOf(component, ['story', 'meta'])).toThrow(
          'Invalid value passed'
        );
      });

      it('finds primary story', () => {
        expect(() => context.resolveOf('story', ['component'])).toThrow('Invalid value passed');
      });

      it('finds attached CSF file', () => {
        expect(() => context.resolveOf('meta', ['story'])).toThrow('Invalid value passed');
      });

      it('finds attached component', () => {
        expect(() => context.resolveOf('component', ['meta'])).toThrow('Invalid value passed');
      });
    });
  });

  describe('unattached', () => {
    const projectAnnotations = { render: jest.fn() };
    const store = {
      componentStoriesFromCSFFile: () => [story],
      preparedMetaFromCSFFile: () => ({ prepareMeta: 'preparedMeta' }),
      projectAnnotations,
    } as unknown as StoryStore<Renderer>;
    const context = new DocsContext(channel, store, renderStoryToElement, [csfFile]);

    it('works for story exports', () => {
      expect(context.resolveOf(storyExport)).toEqual({ type: 'story', story });
    });

    it('works for meta exports', () => {
      expect(context.resolveOf(metaExport)).toEqual({
        type: 'meta',
        csfFile,
        preparedMeta: expect.any(Object),
      });
    });

    it('works for full module exports', () => {
      expect(context.resolveOf(moduleExports)).toEqual({
        type: 'meta',
        csfFile,
        preparedMeta: expect.any(Object),
      });
    });

    it('works for components', () => {
      expect(context.resolveOf(component)).toEqual({
        type: 'component',
        component,
        projectAnnotations: expect.objectContaining(projectAnnotations),
      });
    });

    it('throws for primary story', () => {
      expect(() => context.resolveOf('story')).toThrow('No primary story attached');
    });

    it('throws for attached CSF file', () => {
      expect(() => context.resolveOf('meta')).toThrow('No CSF file attached');
    });

    it('throws for attached component', () => {
      expect(() => context.resolveOf('component')).toThrow('No CSF file attached');
    });
  });
});
