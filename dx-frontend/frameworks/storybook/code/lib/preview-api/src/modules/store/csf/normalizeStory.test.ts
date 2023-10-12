import { expect, describe, it } from '@jest/globals';
import type { Renderer, StoryAnnotationsOrFn } from '@storybook/types';

import { normalizeStory } from './normalizeStory';

describe('normalizeStory', () => {
  describe('id generation', () => {
    it('respects component id', () => {
      expect(normalizeStory('name', {}, { title: 'title', id: 'component-id' }).id).toEqual(
        'component-id--name'
      );
    });

    it('respects parameters.__id', () => {
      expect(
        normalizeStory(
          'name',
          { parameters: { __id: 'story-id' } },
          { title: 'title', id: 'component-id' }
        ).id
      ).toEqual('story-id');
    });
  });

  describe('name', () => {
    it('preferences story.name over story.storyName', () => {
      expect(
        normalizeStory(
          'export',
          { name: 'name', storyName: 'storyName' },
          { id: 'title', title: 'title' }
        ).name
      ).toEqual('name');
      expect(
        normalizeStory('export', { storyName: 'storyName' }, { id: 'title', title: 'title' }).name
      ).toEqual('storyName');
    });

    it('falls back to capitalized export name', () => {
      expect(normalizeStory('exportOne', {}, { id: 'title', title: 'title' }).name).toEqual(
        'Export One'
      );
    });
  });

  describe('user-provided story function', () => {
    it('should normalize into an object', () => {
      const storyFn = () => {};
      const meta = { id: 'title', title: 'title' };
      expect(normalizeStory('storyExport', storyFn, meta)).toMatchInlineSnapshot(`
        Object {
          "argTypes": Object {},
          "args": Object {},
          "decorators": Array [],
          "id": "title--story-export",
          "loaders": Array [],
          "moduleExport": [Function],
          "name": "Story Export",
          "parameters": Object {},
          "tags": Array [],
          "userStoryFn": [Function],
        }
      `);
    });
  });

  describe('user-provided story object', () => {
    describe('render function', () => {
      it('implicit render function', () => {
        const storyObj = {};
        const meta = { id: 'title', title: 'title' };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.render).toBeUndefined();
      });

      it('user-provided story render function', () => {
        const storyObj = { render: jest.fn() };
        const meta = { id: 'title', title: 'title', render: jest.fn() };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.render).toBe(storyObj.render);
      });

      it('user-provided meta render function', () => {
        const storyObj = {};
        const meta = { id: 'title', title: 'title', render: jest.fn() };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.render).toBeUndefined();
      });
    });

    describe('play function', () => {
      it('no render function', () => {
        const storyObj = {};
        const meta = { id: 'title', title: 'title' };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.play).toBeUndefined();
      });

      it('user-provided story render function', () => {
        const storyObj = { play: jest.fn() };
        const meta = { id: 'title', title: 'title', play: jest.fn() };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.play).toBe(storyObj.play);
      });

      it('user-provided meta render function', () => {
        const storyObj = {};
        const meta = { id: 'title', title: 'title', play: jest.fn() };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized.play).toBeUndefined();
      });
    });

    describe('annotations', () => {
      it('empty annotations', () => {
        const storyObj = {};
        const meta = { id: 'title', title: 'title' };
        const normalized = normalizeStory('storyExport', storyObj, meta);
        expect(normalized).toMatchInlineSnapshot(`
          Object {
            "argTypes": Object {},
            "args": Object {},
            "decorators": Array [],
            "id": "title--story-export",
            "loaders": Array [],
            "moduleExport": Object {},
            "name": "Story Export",
            "parameters": Object {},
            "tags": Array [],
          }
        `);
        expect(normalized.moduleExport).toBe(storyObj);
      });

      it('full annotations', () => {
        const storyObj: StoryAnnotationsOrFn<Renderer> = {
          name: 'story name',
          parameters: { storyParam: 'val' },
          decorators: [() => {}],
          loaders: [async () => ({})],
          args: { storyArg: 'val' },
          argTypes: { storyArgType: { type: 'string' } },
        };
        const meta = { id: 'title', title: 'title' };
        const { moduleExport, ...normalized } = normalizeStory('storyExport', storyObj, meta);
        expect(normalized).toMatchInlineSnapshot(`
          Object {
            "argTypes": Object {
              "storyArgType": Object {
                "name": "storyArgType",
                "type": Object {
                  "name": "string",
                },
              },
            },
            "args": Object {
              "storyArg": "val",
            },
            "decorators": Array [
              [Function],
            ],
            "id": "title--story-export",
            "loaders": Array [
              [Function],
            ],
            "name": "story name",
            "parameters": Object {
              "storyParam": "val",
            },
            "tags": Array [],
          }
        `);
        expect(moduleExport).toBe(storyObj);
      });

      it('prefers new annotations to legacy, but combines', () => {
        const storyObj: StoryAnnotationsOrFn<Renderer> = {
          name: 'story name',
          parameters: { storyParam: 'val' },
          decorators: [() => {}],
          loaders: [async () => ({})],
          args: { storyArg: 'val' },
          argTypes: { storyArgType: { type: 'string' } },
          story: {
            parameters: { storyParam2: 'legacy' },
            decorators: [() => {}],
            loaders: [async () => ({})],
            args: { storyArg2: 'legacy' },
            argTypes: { storyArgType2: { type: 'string' } },
          },
        };
        const meta = { id: 'title', title: 'title' };
        const { moduleExport, ...normalized } = normalizeStory('storyExport', storyObj, meta);
        expect(normalized).toMatchInlineSnapshot(`
          Object {
            "argTypes": Object {
              "storyArgType": Object {
                "name": "storyArgType",
                "type": Object {
                  "name": "string",
                },
              },
              "storyArgType2": Object {
                "name": "storyArgType2",
                "type": Object {
                  "name": "string",
                },
              },
            },
            "args": Object {
              "storyArg": "val",
              "storyArg2": "legacy",
            },
            "decorators": Array [
              [Function],
              [Function],
            ],
            "id": "title--story-export",
            "loaders": Array [
              [Function],
              [Function],
            ],
            "name": "story name",
            "parameters": Object {
              "storyParam": "val",
              "storyParam2": "legacy",
            },
            "tags": Array [],
          }
        `);
        expect(moduleExport).toBe(storyObj);
      });
    });
  });
});
