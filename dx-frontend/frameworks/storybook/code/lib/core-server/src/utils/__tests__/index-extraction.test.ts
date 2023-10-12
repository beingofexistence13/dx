/// <reference types="@types/jest" />;

/**
 * @jest-environment node
 */

import path from 'path';
import { normalizeStoriesEntry } from '@storybook/core-common';
import type { NormalizedStoriesSpecifier } from '@storybook/types';

import type { StoryIndexGeneratorOptions } from '../StoryIndexGenerator';
import { AUTODOCS_TAG, STORIES_MDX_TAG, StoryIndexGenerator } from '../StoryIndexGenerator';

jest.mock('@storybook/node-logger');

const options: StoryIndexGeneratorOptions = {
  configDir: path.join(__dirname, '..', '__mockdata__'),
  workingDir: path.join(__dirname, '..', '__mockdata__'),
  storyIndexers: [],
  indexers: [],
  storiesV2Compatibility: false,
  storyStoreV7: true,
  docs: { defaultName: 'docs', autodocs: false },
};

describe('story extraction', () => {
  it('extracts stories from full indexer inputs', async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            // properties identical to the auto-generated ones, eg. 'StoryOne' -> 'Story One'
            {
              type: 'story',
              importPath: fileName,
              exportName: 'StoryOne',
              name: 'Story One',
              title: 'A',
              metaId: 'a',
              tags: ['story-tag-from-indexer'],
              __id: 'a--story-one',
            },
            // properties different from the auto-generated ones, eg. 'StoryOne' -> 'Another Story Name'
            {
              type: 'story',
              importPath: fileName,
              exportName: 'StoryOne',
              name: 'Another Story Name',
              title: 'Custom Title',
              metaId: 'custom-id',
              tags: ['story-tag-from-indexer'],
              __id: 'some-fully-custom-id',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": "a",
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
          Object {
            "id": "some-fully-custom-id",
            "importPath": "./src/A.stories.js",
            "metaId": "custom-id",
            "name": "Another Story Name",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "Custom Title",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });

  it('extracts stories from minimal indexer inputs', async () => {
    const relativePath = './src/first-nested/deeply/F.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "f--story-one",
            "importPath": "./src/first-nested/deeply/F.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "story",
            ],
            "title": "F",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });

  it('auto-generates title from indexer inputs without title', async () => {
    const relativePath = './src/first-nested/deeply/F.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              name: 'Story One',
              metaId: 'a',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/first-nested/deeply/F.stories.js",
            "metaId": "a",
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "F",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });

  it('auto-generates name from indexer inputs without name', async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              title: 'A',
              metaId: 'a',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": "a",
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });

  it('auto-generates id', async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            // exportName + title -> id
            {
              exportName: 'StoryOne',
              name: 'Story One',
              title: 'A',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
            // exportName + custom title (ignoring custom name) -> id
            {
              exportName: 'StoryTwo',
              name: 'Custom Name For Second Story',
              title: 'Custom Title',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
            // exportName + custom metaId (ignoring custom title and name) -> id
            {
              exportName: 'StoryThree',
              metaId: 'custom-meta-id',
              title: 'Custom Title',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
          Object {
            "id": "custom-title--story-two",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Custom Name For Second Story",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "Custom Title",
            "type": "story",
          },
          Object {
            "id": "custom-meta-id--story-three",
            "importPath": "./src/A.stories.js",
            "metaId": "custom-meta-id",
            "name": "Story Three",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "Custom Title",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });

  it('auto-generates id, title and name from exportName input', async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });
});
describe('docs entries from story extraction', () => {
  it('adds docs entry when autodocs is globally enabled', async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      docs: { defaultName: 'docs', autodocs: true },
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              name: 'Story One',
              title: 'A',
              tags: ['story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--docs",
            "importPath": "./src/A.stories.js",
            "name": "docs",
            "storiesImports": Array [],
            "tags": Array [
              "story-tag-from-indexer",
              "docs",
              "autodocs",
            ],
            "title": "A",
            "type": "docs",
          },
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });
  it(`adds docs entry when autodocs is "tag" and an entry has the "${AUTODOCS_TAG}" tag`, async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      docs: { defaultName: 'docs', autodocs: 'tag' },
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              name: 'Story One',
              title: 'A',
              tags: [AUTODOCS_TAG, 'story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--docs",
            "importPath": "./src/A.stories.js",
            "name": "docs",
            "storiesImports": Array [],
            "tags": Array [
              "autodocs",
              "story-tag-from-indexer",
              "docs",
            ],
            "title": "A",
            "type": "docs",
          },
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "autodocs",
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });
  it(`DOES NOT adds docs entry when autodocs is false and an entry has the "${AUTODOCS_TAG}" tag`, async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      docs: { defaultName: 'docs', autodocs: false },
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              name: 'Story One',
              title: 'A',
              tags: [AUTODOCS_TAG, 'story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "autodocs",
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });
  it(`adds docs entry when an entry has the "${STORIES_MDX_TAG}" tag`, async () => {
    const relativePath = './src/A.stories.js';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      docs: { defaultName: 'docs', autodocs: false },
      indexers: [
        {
          test: /\.stories\.(m?js|ts)x?$/,
          createIndex: async (fileName) => [
            {
              exportName: 'StoryOne',
              __id: 'a--story-one',
              name: 'Story One',
              title: 'A',
              tags: [STORIES_MDX_TAG, 'story-tag-from-indexer'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "a--docs",
            "importPath": "./src/A.stories.js",
            "name": "docs",
            "storiesImports": Array [],
            "tags": Array [
              "stories-mdx",
              "story-tag-from-indexer",
              "docs",
            ],
            "title": "A",
            "type": "docs",
          },
          Object {
            "id": "a--story-one",
            "importPath": "./src/A.stories.js",
            "metaId": undefined,
            "name": "Story One",
            "tags": Array [
              "stories-mdx",
              "story-tag-from-indexer",
              "story",
            ],
            "title": "A",
            "type": "story",
          },
        ],
        "type": "stories",
      }
    `);
  });
  it(`Only adds a docs entry and not a story entry when an input has the "docsOnly" tag`, async () => {
    const relativePath = './src/nested/Page.stories.mdx';
    const absolutePath = path.join(options.workingDir, relativePath);
    const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(relativePath, options);

    const generator = new StoryIndexGenerator([specifier], {
      ...options,
      docs: { defaultName: 'docs', autodocs: false },
      indexers: [
        {
          test: /\.stories\.mdx?$/,
          createIndex: async (fileName) => [
            {
              exportName: '__page',
              __id: 'page--page',
              name: 'Page',
              title: 'Page',
              tags: [STORIES_MDX_TAG, 'stories-mdx-docsOnly'],
              importPath: fileName,
              type: 'story',
            },
          ],
        },
      ],
    });
    const result = await generator.extractStories(specifier, absolutePath);

    expect(result).toMatchInlineSnapshot(`
      Object {
        "dependents": Array [],
        "entries": Array [
          Object {
            "id": "page--docs",
            "importPath": "./src/nested/Page.stories.mdx",
            "name": "docs",
            "storiesImports": Array [],
            "tags": Array [
              "stories-mdx",
              "stories-mdx-docsOnly",
              "docs",
            ],
            "title": "Page",
            "type": "docs",
          },
        ],
        "type": "stories",
      }
    `);
  });
});
