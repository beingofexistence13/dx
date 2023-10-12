import type { StoryIndexV2, StoryIndexV3 } from '@storybook/types';
import { transformStoryIndexV2toV3, transformStoryIndexV3toV4 } from './stories';

const baseV2: StoryIndexV2['stories'][0] = {
  id: '1',
  story: '',
  kind: '',
  parameters: {},
};

const baseV3: StoryIndexV3['stories'][0] = {
  id: '1',
  title: '',
  name: '',
  story: '',
  kind: '',
  parameters: {},
  importPath: '',
};

describe('transformStoryIndexV2toV3', () => {
  it('transforms a StoryIndexV2 to a StoryIndexV3 correctly', () => {
    const indexV2: StoryIndexV2 = {
      v: 2,
      stories: {
        '1': {
          ...baseV2,
          id: '1',
          kind: 'story',
          story: 'Story 1',
        },
        '2': {
          ...baseV2,
          id: '2',
          kind: 'blog',
          story: 'Blog 1',
        },
      },
    };

    expect(transformStoryIndexV2toV3(indexV2)).toMatchInlineSnapshot(`
      Object {
        "stories": Object {
          "1": Object {
            "id": "1",
            "importPath": "",
            "kind": "story",
            "name": "Story 1",
            "parameters": Object {},
            "story": "Story 1",
            "title": "story",
          },
          "2": Object {
            "id": "2",
            "importPath": "",
            "kind": "blog",
            "name": "Blog 1",
            "parameters": Object {},
            "story": "Blog 1",
            "title": "blog",
          },
        },
        "v": 3,
      }
    `);
  });
});

describe('transformStoryIndexV3toV4', () => {
  it('transforms a StoryIndexV3 to an API_PreparedStoryIndex correctly', () => {
    const indexV3: StoryIndexV3 = {
      v: 3,
      stories: {
        '1': {
          ...baseV3,
          id: '1',
          kind: 'story',
          title: 'Story 1',
          parameters: {
            docsOnly: true,
          },
        },
        '2': {
          ...baseV3,
          id: '2',
          kind: 'page',
          name: 'Page 1',
          title: 'Page 1',
        },
        '3': {
          ...baseV3,
          id: '3',
          kind: 'story',
          title: 'Story 2',
        },
        '4': {
          ...baseV3,
          id: '4',
          kind: 'page',
          name: 'Page 2',
          title: 'Page 1',
        },
      },
    };

    expect(transformStoryIndexV3toV4(indexV3)).toMatchInlineSnapshot(`
      Object {
        "entries": Object {
          "1": Object {
            "id": "1",
            "importPath": "",
            "name": "",
            "parameters": Object {
              "docsOnly": true,
            },
            "storiesImports": Array [],
            "tags": Array [
              "stories-mdx",
            ],
            "title": "Story 1",
            "type": "docs",
          },
          "2": Object {
            "id": "2",
            "importPath": "",
            "name": "Page 1",
            "parameters": Object {},
            "title": "Page 1",
            "type": "story",
          },
          "3": Object {
            "id": "3",
            "importPath": "",
            "name": "",
            "parameters": Object {},
            "title": "Story 2",
            "type": "story",
          },
          "4": Object {
            "id": "4",
            "importPath": "",
            "name": "Page 2",
            "parameters": Object {},
            "title": "Page 1",
            "type": "story",
          },
        },
        "v": 4,
      }
    `);
  });
});
