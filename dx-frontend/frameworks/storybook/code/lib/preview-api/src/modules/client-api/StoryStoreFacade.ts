/* eslint-disable no-underscore-dangle */
import { global } from '@storybook/global';
import { dedent } from 'ts-dedent';
import { SynchronousPromise } from 'synchronous-promise';
import { toId, isExportStory, storyNameFromExport } from '@storybook/csf';
import type {
  IndexEntry,
  Renderer,
  ComponentId,
  DocsOptions,
  Parameters,
  Path,
  ModuleExports,
  NormalizedProjectAnnotations,
  NormalizedStoriesSpecifier,
  PreparedStory,
  StoryIndex,
  StoryId,
} from '@storybook/types';
import { logger } from '@storybook/client-logger';
import type { StoryStore } from '../../store';
import { userOrAutoTitle, sortStoriesV6 } from '../../store';

export const AUTODOCS_TAG = 'autodocs';
export const STORIES_MDX_TAG = 'stories-mdx';

export class StoryStoreFacade<TRenderer extends Renderer> {
  projectAnnotations: NormalizedProjectAnnotations<TRenderer>;

  entries: Record<StoryId, IndexEntry & { componentId?: ComponentId }>;

  csfExports: Record<Path, ModuleExports>;

  constructor() {
    this.projectAnnotations = {
      loaders: [],
      decorators: [],
      parameters: {},
      argsEnhancers: [],
      argTypesEnhancers: [],
      args: {},
      argTypes: {},
    };

    this.entries = {};

    this.csfExports = {};
  }

  // This doesn't actually import anything because the client-api loads fully
  // on startup, but this is a shim after all.
  importFn(path: Path) {
    return SynchronousPromise.resolve().then(() => {
      const moduleExports = this.csfExports[path];
      if (!moduleExports) throw new Error(`Unknown path: ${path}`);
      return moduleExports;
    });
  }

  getStoryIndex(store: StoryStore<TRenderer>) {
    const fileNameOrder = Object.keys(this.csfExports);
    const storySortParameter = this.projectAnnotations.parameters?.options?.storySort;

    const storyEntries = Object.entries(this.entries);
    // Add the kind parameters and global parameters to each entry
    const sortableV6 = storyEntries.map(([storyId, { type, importPath, ...entry }]) => {
      const exports = this.csfExports[importPath];
      const csfFile = store.processCSFFileWithCache<TRenderer>(
        exports,
        importPath,
        exports.default.title
      );

      let storyLike: PreparedStory<TRenderer>;
      if (type === 'story') {
        storyLike = store.storyFromCSFFile({ storyId, csfFile });
      } else {
        storyLike = {
          ...entry,
          story: entry.name,
          kind: entry.title,
          componentId: toId(entry.componentId || entry.title),
          parameters: { fileName: importPath },
        } as any;
      }
      return [
        storyId,
        storyLike,
        csfFile.meta.parameters,
        this.projectAnnotations.parameters || {},
      ] as [StoryId, PreparedStory<TRenderer>, Parameters, Parameters];
    });

    // NOTE: the sortStoriesV6 version returns the v7 data format. confusing but more convenient!
    let sortedV7: IndexEntry[];

    try {
      sortedV7 = sortStoriesV6(sortableV6, storySortParameter, fileNameOrder);
    } catch (err: any) {
      if (typeof storySortParameter === 'function') {
        throw new Error(dedent`
          Error sorting stories with sort parameter ${storySortParameter}:

          > ${err.message}
          
          Are you using a V7-style sort function in V6 compatibility mode?
          
          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
        `);
      }
      throw err;
    }
    const entries = sortedV7.reduce((acc, s) => {
      // We use the original entry we stored in `this.stories` because it is possible that the CSF file itself
      // exports a `parameters.fileName` which can be different and mess up our `importFn`.
      // In fact, in Storyshots there is a Jest transformer that does exactly that.
      // NOTE: this doesn't actually change the story object, just the index.
      acc[s.id] = this.entries[s.id];
      return acc;
    }, {} as StoryIndex['entries']);

    return { v: 4, entries };
  }

  clearFilenameExports(fileName: Path) {
    if (!this.csfExports[fileName]) {
      return;
    }

    // Clear this module's stories from the storyList and existing exports
    Object.entries(this.entries).forEach(([id, { importPath }]) => {
      if (importPath === fileName) {
        delete this.entries[id];
      }
    });

    // We keep this as an empty record so we can use it to maintain component order
    this.csfExports[fileName] = {};
  }

  // NOTE: we could potentially share some of this code with the stories.json generation
  addStoriesFromExports(fileName: Path, fileExports: ModuleExports) {
    if (fileName.match(/\.mdx$/) && !fileName.match(/\.stories\.mdx$/)) {
      if (global.FEATURES?.storyStoreV7MdxErrors !== false) {
        throw new Error(dedent`
        Cannot index \`.mdx\` file (\`${fileName}\`) in \`storyStoreV7: false\` mode.

        The legacy story store does not support new-style \`.mdx\` files. If the file above
        is not intended to be indexed (i.e. displayed as an entry in the sidebar), either
        exclude it from your \`stories\` glob, or add <Meta isTemplate /> to it.
        
        If you wanted to index the file, you'll need to name it \`stories.mdx\` and stick to the
        legacy (6.x) MDX API, or use the new store.`);
      }
    }

    // if the export haven't changed since last time we added them, this is a no-op
    if (this.csfExports[fileName] === fileExports) {
      return;
    }
    // OTOH, if they have changed, let's clear them out first
    this.clearFilenameExports(fileName);

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { default: defaultExport, __namedExportsOrder, ...namedExports } = fileExports;
    // eslint-disable-next-line prefer-const
    let { id: componentId, title, tags: componentTags = [] } = defaultExport || {};

    const specifiers = (global.STORIES || []).map(
      (specifier: NormalizedStoriesSpecifier & { importPathMatcher: string }) => ({
        ...specifier,
        importPathMatcher: new RegExp(specifier.importPathMatcher),
      })
    );

    title = userOrAutoTitle(fileName, specifiers, title);

    if (!title) {
      logger.info(
        `Unexpected default export without title in '${fileName}': ${JSON.stringify(
          fileExports.default
        )}`
      );
      return;
    }

    this.csfExports[fileName] = {
      ...fileExports,
      default: { ...defaultExport, title },
    };

    let sortedExports = namedExports;

    // prefer a user/loader provided `__namedExportsOrder` array if supplied
    // we do this as es module exports are always ordered alphabetically
    // see https://github.com/storybookjs/storybook/issues/9136
    if (Array.isArray(__namedExportsOrder)) {
      sortedExports = {};
      __namedExportsOrder.forEach((name) => {
        const namedExport = namedExports[name];
        if (namedExport) sortedExports[name] = namedExport;
      });
    }

    const storyExports = Object.entries(sortedExports).filter(([key]) =>
      isExportStory(key, defaultExport)
    );

    // NOTE: this logic is equivalent to the `extractStories` function of `StoryIndexGenerator`
    const docsOptions = (global.DOCS_OPTIONS || {}) as DocsOptions;
    const { autodocs } = docsOptions;
    const componentAutodocs = componentTags.includes(AUTODOCS_TAG);
    const autodocsOptedIn = autodocs === true || (autodocs === 'tag' && componentAutodocs);
    if (storyExports.length) {
      if (componentTags.includes(STORIES_MDX_TAG) || autodocsOptedIn) {
        const name = docsOptions.defaultName;
        const docsId = toId(componentId || title, name);
        this.entries[docsId] = {
          type: 'docs',
          id: docsId,
          title,
          name,
          importPath: fileName,
          ...(componentId && { componentId }),
          tags: [
            ...componentTags,
            'docs',
            ...(autodocsOptedIn && !componentAutodocs ? [AUTODOCS_TAG] : []),
          ],
          storiesImports: [],
        };
      }
    }

    storyExports.forEach(([key, storyExport]: [string, any]) => {
      const exportName = storyNameFromExport(key);
      const id = storyExport.parameters?.__id || toId(componentId || title, exportName);
      const name =
        (typeof storyExport !== 'function' && storyExport.name) ||
        storyExport.storyName ||
        storyExport.story?.name ||
        exportName;

      if (!storyExport.parameters?.docsOnly) {
        this.entries[id] = {
          type: 'story',
          id,
          name,
          title,
          importPath: fileName,
          ...(componentId && { componentId }),
          tags: [...(storyExport.tags || componentTags), 'story'],
        };
      }
    });
  }
}
