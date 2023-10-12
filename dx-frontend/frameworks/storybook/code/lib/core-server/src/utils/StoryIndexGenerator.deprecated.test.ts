/* eslint-disable @typescript-eslint/no-shadow */
/// <reference types="@types/jest" />;

/**
 * @jest-environment node
 */

import path from 'path';
import fs from 'fs-extra';
import { normalizeStoriesEntry } from '@storybook/core-common';
import type { NormalizedStoriesSpecifier, StoryIndexEntry } from '@storybook/types';
import { loadCsf, getStorySortParameter } from '@storybook/csf-tools';
import { toId } from '@storybook/csf';
import { logger, once } from '@storybook/node-logger';

import type { StoryIndexGeneratorOptions } from './StoryIndexGenerator';
import { StoryIndexGenerator } from './StoryIndexGenerator';

jest.mock('@storybook/csf-tools');
jest.mock('@storybook/csf', () => {
  const csf = jest.requireActual('@storybook/csf');
  return {
    ...csf,
    toId: jest.fn(csf.toId),
  };
});

jest.mock('@storybook/node-logger');

const toIdMock = toId as jest.Mock<ReturnType<typeof toId>>;
const loadCsfMock = loadCsf as jest.Mock<ReturnType<typeof loadCsf>>;
const getStorySortParameterMock = getStorySortParameter as jest.Mock<
  ReturnType<typeof getStorySortParameter>
>;

const csfIndexer = async (fileName: string, opts: any) => {
  const code = (await fs.readFile(fileName, 'utf-8')).toString();
  return loadCsf(code, { ...opts, fileName }).parse();
};

const storiesMdxIndexer = async (fileName: string, opts: any) => {
  let code = (await fs.readFile(fileName, 'utf-8')).toString();
  const { compile } = await import('@storybook/mdx2-csf');
  code = await compile(code, {});
  return loadCsf(code, { ...opts, fileName }).parse();
};

const options: StoryIndexGeneratorOptions = {
  configDir: path.join(__dirname, '__mockdata__'),
  workingDir: path.join(__dirname, '__mockdata__'),
  storyIndexers: [
    { test: /\.stories\.mdx$/, indexer: storiesMdxIndexer },
    { test: /\.stories\.(m?js|ts)x?$/, indexer: csfIndexer },
  ],
  indexers: [],
  storiesV2Compatibility: false,
  storyStoreV7: true,
  docs: { defaultName: 'docs', autodocs: false },
};

describe('StoryIndexGenerator with deprecated indexer API', () => {
  beforeEach(() => {
    const actual = jest.requireActual('@storybook/csf-tools');
    loadCsfMock.mockImplementation(actual.loadCsf);
    jest.mocked(logger.warn).mockClear();
    jest.mocked(once.warn).mockClear();
  });
  describe('extraction', () => {
    const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
      './src/A.stories.(ts|js|mjs|jsx)',
      options
    );
    const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
      './src/docs2/*.mdx',
      options
    );

    describe('single file specifier', () => {
      it('extracts stories from the right files', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.js',
          options
        );

        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });
    });
    describe('non-recursive specifier', () => {
      it('extracts stories from the right files', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/*/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "nested-button--story-one": Object {
                "id": "nested-button--story-one",
                "importPath": "./src/nested/Button.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story",
                ],
                "title": "nested/Button",
                "type": "story",
              },
              "second-nested-g--story-one": Object {
                "id": "second-nested-g--story-one",
                "importPath": "./src/second-nested/G.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "story",
                ],
                "title": "second-nested/G",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });
    });
    describe('recursive specifier', () => {
      it('extracts stories from the right files', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
              "b--story-one": Object {
                "id": "b--story-one",
                "importPath": "./src/B.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "B",
                "type": "story",
              },
              "d--story-one": Object {
                "id": "d--story-one",
                "importPath": "./src/D.stories.jsx",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "D",
                "type": "story",
              },
              "first-nested-deeply-f--story-one": Object {
                "id": "first-nested-deeply-f--story-one",
                "importPath": "./src/first-nested/deeply/F.stories.js",
                "name": "Story One",
                "tags": Array [
                  "story",
                ],
                "title": "first-nested/deeply/F",
                "type": "story",
              },
              "h--story-one": Object {
                "id": "h--story-one",
                "importPath": "./src/H.stories.mjs",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "H",
                "type": "story",
              },
              "nested-button--story-one": Object {
                "id": "nested-button--story-one",
                "importPath": "./src/nested/Button.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story",
                ],
                "title": "nested/Button",
                "type": "story",
              },
              "second-nested-g--story-one": Object {
                "id": "second-nested-g--story-one",
                "importPath": "./src/second-nested/G.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "story",
                ],
                "title": "second-nested/G",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });
    });

    describe('mdx tagged components', () => {
      it('adds docs entry with docs enabled', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/nested/Page.stories.mdx',
          options
        );

        const generator = new StoryIndexGenerator([specifier], {
          ...options,
        });
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "page--docs": Object {
                "id": "page--docs",
                "importPath": "./src/nested/Page.stories.mdx",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "stories-mdx",
                  "docs",
                ],
                "title": "Page",
                "type": "docs",
              },
              "page--story-one": Object {
                "id": "page--story-one",
                "importPath": "./src/nested/Page.stories.mdx",
                "name": "StoryOne",
                "tags": Array [
                  "stories-mdx",
                  "story",
                ],
                "title": "Page",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });
    });

    describe('autodocs', () => {
      const autodocsOptions = {
        ...options,
        docs: { ...options.docs, autodocs: 'tag' as const },
      };
      it('generates an entry per CSF file with the autodocs tag', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], autodocsOptions);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
              "b--docs": Object {
                "id": "b--docs",
                "importPath": "./src/B.stories.ts",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
              "b--story-one": Object {
                "id": "b--story-one",
                "importPath": "./src/B.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "B",
                "type": "story",
              },
              "d--docs": Object {
                "id": "d--docs",
                "importPath": "./src/D.stories.jsx",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "D",
                "type": "docs",
              },
              "d--story-one": Object {
                "id": "d--story-one",
                "importPath": "./src/D.stories.jsx",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "D",
                "type": "story",
              },
              "first-nested-deeply-f--story-one": Object {
                "id": "first-nested-deeply-f--story-one",
                "importPath": "./src/first-nested/deeply/F.stories.js",
                "name": "Story One",
                "tags": Array [
                  "story",
                ],
                "title": "first-nested/deeply/F",
                "type": "story",
              },
              "h--docs": Object {
                "id": "h--docs",
                "importPath": "./src/H.stories.mjs",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "H",
                "type": "docs",
              },
              "h--story-one": Object {
                "id": "h--story-one",
                "importPath": "./src/H.stories.mjs",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "H",
                "type": "story",
              },
              "nested-button--story-one": Object {
                "id": "nested-button--story-one",
                "importPath": "./src/nested/Button.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story",
                ],
                "title": "nested/Button",
                "type": "story",
              },
              "second-nested-g--story-one": Object {
                "id": "second-nested-g--story-one",
                "importPath": "./src/second-nested/G.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "story",
                ],
                "title": "second-nested/G",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });

      const autodocsTrueOptions = {
        ...autodocsOptions,
        docs: {
          ...autodocsOptions.docs,
          autodocs: true,
        },
      };
      it('generates an entry for every CSF file when docsOptions.autodocs = true', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], autodocsTrueOptions);
        await generator.initialize();

        expect(Object.keys((await generator.getIndex()).entries)).toMatchInlineSnapshot(`
          Array [
            "a--docs",
            "a--story-one",
            "b--docs",
            "b--story-one",
            "d--docs",
            "d--story-one",
            "h--docs",
            "h--story-one",
            "first-nested-deeply-f--docs",
            "first-nested-deeply-f--story-one",
            "nested-button--docs",
            "nested-button--story-one",
            "second-nested-g--docs",
            "second-nested-g--story-one",
          ]
        `);
      });

      it('adds the autodocs tag to the autogenerated docs entries', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], autodocsTrueOptions);
        await generator.initialize();

        const index = await generator.getIndex();
        expect(index.entries['first-nested-deeply-f--docs'].tags).toEqual(
          expect.arrayContaining(['autodocs'])
        );
      });

      it('throws an error if you attach a named MetaOf entry which clashes with a tagged autodocs entry', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/B.stories.ts',
          options
        );

        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/MetaOfClashingDefaultName.mdx',
          options
        );

        const generator = new StoryIndexGenerator([csfSpecifier, docsSpecifier], autodocsOptions);
        await generator.initialize();

        await expect(generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./errors/MetaOfClashingDefaultName.mdx,./src/B.stories.ts"`
        );
      });

      it('throws an error if you attach a unnamed MetaOf entry with the same name as the CSF file that clashes with a tagged autodocs entry', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/B.stories.ts',
          options
        );

        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/B.mdx',
          options
        );

        const generator = new StoryIndexGenerator([csfSpecifier, docsSpecifier], autodocsOptions);
        await generator.initialize();

        await expect(generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./errors/B.mdx,./src/B.stories.ts"`
        );
      });

      it('allows you to create a second unnamed MetaOf entry that does not clash with autodocs', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/B.stories.ts',
          options
        );

        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/MetaOfNoName.mdx',
          options
        );

        const generator = new StoryIndexGenerator([csfSpecifier, docsSpecifier], autodocsOptions);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "b--docs": Object {
                "id": "b--docs",
                "importPath": "./src/B.stories.ts",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
              "b--metaofnoname": Object {
                "id": "b--metaofnoname",
                "importPath": "./errors/MetaOfNoName.mdx",
                "name": "MetaOfNoName",
                "storiesImports": Array [
                  "./src/B.stories.ts",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
              "b--story-one": Object {
                "id": "b--story-one",
                "importPath": "./src/B.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "B",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });
      it('allows you to create a second MetaOf entry with a different name to autodocs', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/B.stories.ts',
          options
        );

        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/MetaOfName.mdx',
          options
        );

        const generator = new StoryIndexGenerator([csfSpecifier, docsSpecifier], autodocsOptions);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "b--docs": Object {
                "id": "b--docs",
                "importPath": "./src/B.stories.ts",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
              "b--name": Object {
                "id": "b--name",
                "importPath": "./errors/MetaOfName.mdx",
                "name": "name",
                "storiesImports": Array [
                  "./src/B.stories.ts",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
              "b--story-one": Object {
                "id": "b--story-one",
                "importPath": "./src/B.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "B",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });

      it('allows you to override autodocs with MetaOf if it is automatic', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.js',
          options
        );

        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/A.mdx',
          options
        );

        const generator = new StoryIndexGenerator(
          [csfSpecifier, docsSpecifier],
          autodocsTrueOptions
        );
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--docs": Object {
                "id": "a--docs",
                "importPath": "./errors/A.mdx",
                "name": "docs",
                "storiesImports": Array [
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "A",
                "type": "docs",
              },
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });

      it('generates a combined entry if there are two stories files for the same title', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './duplicate/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const generator = new StoryIndexGenerator([specifier], autodocsOptions);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "duplicate-a--docs": Object {
                "id": "duplicate-a--docs",
                "importPath": "./duplicate/A.stories.js",
                "name": "docs",
                "storiesImports": Array [
                  "./duplicate/SecondA.stories.js",
                ],
                "tags": Array [
                  "autodocs",
                  "docs",
                ],
                "title": "duplicate/A",
                "type": "docs",
              },
              "duplicate-a--story-one": Object {
                "id": "duplicate-a--story-one",
                "importPath": "./duplicate/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "duplicate/A",
                "type": "story",
              },
              "duplicate-a--story-two": Object {
                "id": "duplicate-a--story-two",
                "importPath": "./duplicate/SecondA.stories.js",
                "name": "Story Two",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "duplicate/A",
                "type": "story",
              },
            },
            "v": 4,
          }
        `);
      });

      // https://github.com/storybookjs/storybook/issues/19142
      it('does not generate a docs page entry if there are no stories in the CSF file', async () => {
        const csfSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/NoStories.stories.ts',
          options
        );

        const generator = new StoryIndexGenerator([csfSpecifier], autodocsOptions);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {},
            "v": 4,
          }
        `);
      });
    });

    describe('docs specifier', () => {
      it('creates correct docs entries', async () => {
        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], options);
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--metaof": Object {
                "id": "a--metaof",
                "importPath": "./src/docs2/MetaOf.mdx",
                "name": "MetaOf",
                "storiesImports": Array [
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "A",
                "type": "docs",
              },
              "a--second-docs": Object {
                "id": "a--second-docs",
                "importPath": "./src/docs2/SecondMetaOf.mdx",
                "name": "Second Docs",
                "storiesImports": Array [
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "A",
                "type": "docs",
              },
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
              "componentreference--docs": Object {
                "id": "componentreference--docs",
                "importPath": "./src/docs2/ComponentReference.mdx",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "ComponentReference",
                "type": "docs",
              },
              "docs2-yabbadabbadooo--docs": Object {
                "id": "docs2-yabbadabbadooo--docs",
                "importPath": "./src/docs2/Title.mdx",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "docs2/Yabbadabbadooo",
                "type": "docs",
              },
              "notitle--docs": Object {
                "id": "notitle--docs",
                "importPath": "./src/docs2/NoTitle.mdx",
                "name": "docs",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "NoTitle",
                "type": "docs",
              },
            },
            "v": 4,
          }
        `);
      });

      it('does not append title prefix if meta references a CSF file', async () => {
        const generator = new StoryIndexGenerator(
          [
            storiesSpecifier,
            normalizeStoriesEntry(
              { directory: './src/docs2', files: '**/*.mdx', titlePrefix: 'titlePrefix' },
              options
            ),
          ],
          options
        );
        await generator.initialize();

        // NOTE: `toMatchInlineSnapshot` on objects sorts the keys, but in actuality, they are
        // not sorted by default.
        expect(Object.values((await generator.getIndex()).entries).map((e) => e.title))
          .toMatchInlineSnapshot(`
          Array [
            "A",
            "titlePrefix/ComponentReference",
            "A",
            "titlePrefix/NoTitle",
            "A",
            "titlePrefix/docs2/Yabbadabbadooo",
          ]
        `);
      });

      it('Allows you to override default name for docs files', async () => {
        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], {
          ...options,
          docs: {
            ...options.docs,
            defaultName: 'Info',
          },
        });
        await generator.initialize();

        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--metaof": Object {
                "id": "a--metaof",
                "importPath": "./src/docs2/MetaOf.mdx",
                "name": "MetaOf",
                "storiesImports": Array [
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "A",
                "type": "docs",
              },
              "a--second-docs": Object {
                "id": "a--second-docs",
                "importPath": "./src/docs2/SecondMetaOf.mdx",
                "name": "Second Docs",
                "storiesImports": Array [
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "A",
                "type": "docs",
              },
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
              "componentreference--info": Object {
                "id": "componentreference--info",
                "importPath": "./src/docs2/ComponentReference.mdx",
                "name": "Info",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "ComponentReference",
                "type": "docs",
              },
              "docs2-yabbadabbadooo--info": Object {
                "id": "docs2-yabbadabbadooo--info",
                "importPath": "./src/docs2/Title.mdx",
                "name": "Info",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "docs2/Yabbadabbadooo",
                "type": "docs",
              },
              "notitle--info": Object {
                "id": "notitle--info",
                "importPath": "./src/docs2/NoTitle.mdx",
                "name": "Info",
                "storiesImports": Array [],
                "tags": Array [
                  "unattached-mdx",
                  "docs",
                ],
                "title": "NoTitle",
                "type": "docs",
              },
            },
            "v": 4,
          }
        `);
      });

      it('pulls the attached story file to the front of the list', async () => {
        const generator = new StoryIndexGenerator(
          [
            normalizeStoriesEntry('./src/A.stories.js', options),
            normalizeStoriesEntry('./src/B.stories.ts', options),
            normalizeStoriesEntry('./complex/TwoStoryReferences.mdx', options),
          ],
          options
        );
        await generator.initialize();
        expect(await generator.getIndex()).toMatchInlineSnapshot(`
          Object {
            "entries": Object {
              "a--story-one": Object {
                "id": "a--story-one",
                "importPath": "./src/A.stories.js",
                "name": "Story One",
                "tags": Array [
                  "component-tag",
                  "story-tag",
                  "story",
                ],
                "title": "A",
                "type": "story",
              },
              "b--story-one": Object {
                "id": "b--story-one",
                "importPath": "./src/B.stories.ts",
                "name": "Story One",
                "tags": Array [
                  "autodocs",
                  "story",
                ],
                "title": "B",
                "type": "story",
              },
              "b--twostoryreferences": Object {
                "id": "b--twostoryreferences",
                "importPath": "./complex/TwoStoryReferences.mdx",
                "name": "TwoStoryReferences",
                "storiesImports": Array [
                  "./src/B.stories.ts",
                  "./src/A.stories.js",
                ],
                "tags": Array [
                  "attached-mdx",
                  "docs",
                ],
                "title": "B",
                "type": "docs",
              },
            },
            "v": 4,
          }
        `);
      });
    });

    describe('errors', () => {
      it('when docs dependencies are missing', async () => {
        const generator = new StoryIndexGenerator(
          [normalizeStoriesEntry('./src/docs2/MetaOf.mdx', options)],
          options
        );
        await generator.initialize();
        await expect(() => generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./src/docs2/MetaOf.mdx"`
        );
      });
    });

    describe('warnings', () => {
      it('when entries do not match any files', async () => {
        const generator = new StoryIndexGenerator(
          [normalizeStoriesEntry('./src/docs2/wrong.js', options)],
          options
        );
        await generator.initialize();
        await generator.getIndex();

        expect(once.warn).toHaveBeenCalledTimes(1);
        const logMessage = jest.mocked(once.warn).mock.calls[0][0];
        expect(logMessage).toContain(`No story files found for the specified pattern`);
      });
    });

    describe('duplicates', () => {
      it('errors when two MDX entries reference the same CSF file without a name', async () => {
        const docsErrorSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/**/A.mdx',
          options
        );

        const generator = new StoryIndexGenerator(
          [storiesSpecifier, docsSpecifier, docsErrorSpecifier],
          options
        );
        await generator.initialize();

        await expect(generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./errors/A.mdx,./errors/duplicate/A.mdx"`
        );
      });

      it('errors when a MDX entry has the same name as a story', async () => {
        const docsErrorSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/MetaOfClashingName.mdx',
          options
        );

        const generator = new StoryIndexGenerator(
          [storiesSpecifier, docsSpecifier, docsErrorSpecifier],
          options
        );
        await generator.initialize();

        await expect(generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./src/A.stories.js,./errors/MetaOfClashingName.mdx"`
        );
      });

      it('errors when a story has the default docs name', async () => {
        const docsErrorSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './errors/A.mdx',
          options
        );

        const generator = new StoryIndexGenerator(
          [storiesSpecifier, docsSpecifier, docsErrorSpecifier],
          {
            ...options,
            docs: { ...options.docs, defaultName: 'Story One' },
          }
        );
        await generator.initialize();

        await expect(generator.getIndex()).rejects.toThrowErrorMatchingInlineSnapshot(
          `"Unable to index ./src/A.stories.js,./errors/A.mdx"`
        );
      });
      it('errors when two duplicate stories exists, with duplicated entries details', async () => {
        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], {
          ...options,
        });
        await generator.initialize();
        const mockEntry: StoryIndexEntry = {
          id: 'StoryId',
          name: 'StoryName',
          title: 'ComponentTitle',
          importPath: 'Path',
          type: 'story',
        };
        expect(() => {
          generator.chooseDuplicate(mockEntry, { ...mockEntry, importPath: 'DifferentPath' });
        }).toThrowErrorMatchingInlineSnapshot(`"Duplicate stories with id: StoryId"`);
      });

      it('DOES NOT error when the same MDX file matches two specifiers', async () => {
        const generator = new StoryIndexGenerator(
          [storiesSpecifier, docsSpecifier, docsSpecifier],
          options
        );
        await generator.initialize();

        expect(Object.keys((await generator.getIndex()).entries)).toMatchInlineSnapshot(`
          Array [
            "a--story-one",
            "componentreference--docs",
            "a--metaof",
            "notitle--docs",
            "a--second-docs",
            "docs2-yabbadabbadooo--docs",
          ]
        `);

        expect(logger.warn).not.toHaveBeenCalled();
      });

      it('DOES NOT throw when the same CSF file matches two specifiers', async () => {
        const generator = new StoryIndexGenerator([storiesSpecifier, storiesSpecifier], {
          ...options,
        });
        await generator.initialize();
        expect(Object.keys((await generator.getIndex()).entries)).toMatchInlineSnapshot(`
          Array [
            "a--story-one",
          ]
        `);

        expect(logger.warn).not.toHaveBeenCalled();
      });

      it('DOES NOT throw when the same CSF file is indexed by both a deprecated and current indexer', async () => {
        const generator = new StoryIndexGenerator([storiesSpecifier], {
          ...options,
          indexers: [
            {
              test: /\.stories\.(m?js|ts)x?$/,
              createIndex: async (fileName, options) => {
                const code = (await fs.readFile(fileName, 'utf-8')).toString();
                const csf = loadCsf(code, { ...options, fileName }).parse();

                // eslint-disable-next-line no-underscore-dangle
                return Object.entries(csf._stories).map(([exportName, story]) => ({
                  type: 'story',
                  importPath: fileName,
                  exportName,
                  name: story.name,
                  title: csf.meta.title,
                  metaId: csf.meta.id,
                  tags: story.tags ?? csf.meta.tags,
                  __id: story.id,
                }));
              },
            },
          ],
        });
        await generator.initialize();
        expect(Object.keys((await generator.getIndex()).entries)).toMatchInlineSnapshot(`
          Array [
            "a--story-one",
          ]
        `);

        expect(logger.warn).not.toHaveBeenCalled();
      });
    });
  });

  describe('sorting', () => {
    it('runs a user-defined sort function', async () => {
      const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
        './src/**/*.stories.(ts|js|mjs|jsx)',
        options
      );
      const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
        './src/docs2/*.mdx',
        options
      );

      const generator = new StoryIndexGenerator([docsSpecifier, storiesSpecifier], options);
      await generator.initialize();

      (getStorySortParameter as jest.Mock).mockReturnValueOnce({
        order: ['docs2', 'D', 'B', 'nested', 'A', 'second-nested', 'first-nested/deeply'],
      });

      expect(Object.keys((await generator.getIndex()).entries)).toMatchInlineSnapshot(`
        Array [
          "docs2-yabbadabbadooo--docs",
          "d--story-one",
          "b--story-one",
          "nested-button--story-one",
          "a--metaof",
          "a--second-docs",
          "a--story-one",
          "second-nested-g--story-one",
          "componentreference--docs",
          "notitle--docs",
          "h--story-one",
          "first-nested-deeply-f--story-one",
        ]
      `);
    });
  });

  describe('caching', () => {
    describe('no invalidation', () => {
      it('does not extract csf files a second time', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        loadCsfMock.mockClear();
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(loadCsfMock).toHaveBeenCalledTimes(7);

        loadCsfMock.mockClear();
        await generator.getIndex();
        expect(loadCsfMock).not.toHaveBeenCalled();
      });

      it('does not extract docs files a second time', async () => {
        const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.(ts|js|mjs|jsx)',
          options
        );
        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/docs2/*.mdx',
          options
        );

        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(6);

        toIdMock.mockClear();
        await generator.getIndex();
        expect(toId).not.toHaveBeenCalled();
      });

      it('does not call the sort function a second time', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const sortFn = jest.fn();
        getStorySortParameterMock.mockReturnValue(sortFn);
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(sortFn).toHaveBeenCalled();

        sortFn.mockClear();
        await generator.getIndex();
        expect(sortFn).not.toHaveBeenCalled();
      });
    });

    describe('file changed', () => {
      it('calls extract csf file for just the one file', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        loadCsfMock.mockClear();
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(loadCsfMock).toHaveBeenCalledTimes(7);

        generator.invalidate(specifier, './src/B.stories.ts', false);

        loadCsfMock.mockClear();
        await generator.getIndex();
        expect(loadCsfMock).toHaveBeenCalledTimes(1);
      });

      it('calls extract docs file for just the one file', async () => {
        const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.(ts|js|mjs|jsx)',
          options
        );
        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/docs2/*.mdx',
          options
        );

        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(6);

        generator.invalidate(docsSpecifier, './src/docs2/Title.mdx', false);

        toIdMock.mockClear();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(1);
      });

      it('calls extract for a csf file and any of its docs dependents', async () => {
        const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.(ts|js|mjs|jsx)',
          options
        );
        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/docs2/*.mdx',
          options
        );

        const generator = new StoryIndexGenerator([storiesSpecifier, docsSpecifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(6);

        generator.invalidate(storiesSpecifier, './src/A.stories.js', false);

        toIdMock.mockClear();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(3);
      });

      it('does call the sort function a second time', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const sortFn = jest.fn();
        getStorySortParameterMock.mockReturnValue(sortFn);
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(sortFn).toHaveBeenCalled();

        generator.invalidate(specifier, './src/B.stories.ts', false);

        sortFn.mockClear();
        await generator.getIndex();
        expect(sortFn).toHaveBeenCalled();
      });
    });

    describe('file removed', () => {
      it('does not extract csf files a second time', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        loadCsfMock.mockClear();
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(loadCsfMock).toHaveBeenCalledTimes(7);

        generator.invalidate(specifier, './src/B.stories.ts', true);

        loadCsfMock.mockClear();
        await generator.getIndex();
        expect(loadCsfMock).not.toHaveBeenCalled();
      });

      it('does call the sort function a second time', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        const sortFn = jest.fn();
        getStorySortParameterMock.mockReturnValue(sortFn);
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(sortFn).toHaveBeenCalled();

        generator.invalidate(specifier, './src/B.stories.ts', true);

        sortFn.mockClear();
        await generator.getIndex();
        expect(sortFn).toHaveBeenCalled();
      });

      it('does not include the deleted stories in results', async () => {
        const specifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/**/*.stories.(ts|js|mjs|jsx)',
          options
        );

        loadCsfMock.mockClear();
        const generator = new StoryIndexGenerator([specifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(loadCsfMock).toHaveBeenCalledTimes(7);

        generator.invalidate(specifier, './src/B.stories.ts', true);

        expect(Object.keys((await generator.getIndex()).entries)).not.toContain('b--story-one');
      });

      it('does not include the deleted docs in results', async () => {
        const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.(ts|js|mjs|jsx)',
          options
        );
        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/docs2/*.mdx',
          options
        );

        const generator = new StoryIndexGenerator([docsSpecifier, storiesSpecifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(6);

        expect(Object.keys((await generator.getIndex()).entries)).toContain('notitle--docs');

        generator.invalidate(docsSpecifier, './src/docs2/NoTitle.mdx', true);

        expect(Object.keys((await generator.getIndex()).entries)).not.toContain('notitle--docs');
      });

      it('cleans up properly on dependent docs deletion', async () => {
        const storiesSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/A.stories.(ts|js|mjs|jsx)',
          options
        );
        const docsSpecifier: NormalizedStoriesSpecifier = normalizeStoriesEntry(
          './src/docs2/*.mdx',
          options
        );

        const generator = new StoryIndexGenerator([docsSpecifier, storiesSpecifier], options);
        await generator.initialize();
        await generator.getIndex();
        expect(toId).toHaveBeenCalledTimes(6);

        expect(Object.keys((await generator.getIndex()).entries)).toContain('a--metaof');

        generator.invalidate(docsSpecifier, './src/docs2/MetaOf.mdx', true);

        expect(Object.keys((await generator.getIndex()).entries)).not.toContain('a--metaof');

        // this will throw if MetaOf is not removed from A's dependents
        generator.invalidate(storiesSpecifier, './src/A.stories.js', false);
      });
    });
  });
});
