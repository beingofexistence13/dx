import memoize from 'memoizerific';
import { dedent } from 'ts-dedent';
import countBy from 'lodash/countBy.js';
import mapValues from 'lodash/mapValues.js';
import { sanitize } from '@storybook/csf';
import type {
  StoryId,
  Parameters,
  DocsOptions,
  API_Provider,
  SetStoriesStoryData,
  API_PreparedStoryIndex,
  StoryIndexV3,
  IndexEntry,
  API_RootEntry,
  API_GroupEntry,
  API_ComponentEntry,
  API_IndexHash,
  API_DocsEntry,
  API_StoryEntry,
  API_HashEntry,
  SetStoriesPayload,
  StoryIndexV2,
} from '@storybook/types';
// eslint-disable-next-line import/no-cycle
import { type API, combineParameters, type State } from '../index';
import merge from './merge';

const TITLE_PATH_SEPARATOR = /\s*\/\s*/;

export const denormalizeStoryParameters = ({
  globalParameters,
  kindParameters,
  stories,
}: SetStoriesPayload): SetStoriesStoryData => {
  return mapValues(stories, (storyData) => ({
    ...storyData,
    parameters: combineParameters(
      globalParameters,
      kindParameters[storyData.kind],
      storyData.parameters as unknown as Parameters
    ),
  }));
};

export const transformSetStoriesStoryDataToStoriesHash = (
  data: SetStoriesStoryData,
  options: ToStoriesHashOptions
) =>
  transformStoryIndexToStoriesHash(transformSetStoriesStoryDataToPreparedStoryIndex(data), options);

const transformSetStoriesStoryDataToPreparedStoryIndex = (
  stories: SetStoriesStoryData
): API_PreparedStoryIndex => {
  const entries: API_PreparedStoryIndex['entries'] = Object.entries(stories).reduce(
    (acc, [id, story]) => {
      if (!story) return acc;

      const { docsOnly, fileName, ...parameters } = story.parameters;
      const base = {
        title: story.kind,
        id,
        name: story.name,
        importPath: fileName,
      };
      if (docsOnly) {
        acc[id] = {
          type: 'docs',
          tags: ['stories-mdx'],
          storiesImports: [],
          ...base,
        };
      } else {
        const { argTypes, args, initialArgs } = story;
        acc[id] = {
          type: 'story',
          ...base,
          parameters,
          argTypes,
          args,
          initialArgs,
        };
      }
      return acc;
    },
    {} as API_PreparedStoryIndex['entries']
  );

  return { v: 4, entries };
};

export const transformStoryIndexV2toV3 = (index: StoryIndexV2): StoryIndexV3 => {
  return {
    v: 3,
    stories: Object.values(index.stories).reduce((acc, entry) => {
      acc[entry.id] = {
        ...entry,
        title: entry.kind,
        name: entry.name || entry.story,
        importPath: entry.parameters.fileName || '',
      };

      return acc;
    }, {} as StoryIndexV3['stories']),
  };
};

export const transformStoryIndexV3toV4 = (index: StoryIndexV3): API_PreparedStoryIndex => {
  const countByTitle = countBy(Object.values(index.stories), 'title');
  return {
    v: 4,
    entries: Object.values(index.stories).reduce((acc, entry) => {
      let type: IndexEntry['type'] = 'story';
      if (
        entry.parameters?.docsOnly ||
        (entry.name === 'Page' && countByTitle[entry.title] === 1)
      ) {
        type = 'docs';
      }
      acc[entry.id] = {
        type,
        ...(type === 'docs' && { tags: ['stories-mdx'], storiesImports: [] }),
        ...entry,
      };

      // @ts-expect-error (we're removing something that should not be there)
      delete acc[entry.id].story;
      // @ts-expect-error (we're removing something that should not be there)
      delete acc[entry.id].kind;

      return acc;
    }, {} as API_PreparedStoryIndex['entries']),
  };
};

type ToStoriesHashOptions = {
  provider: API_Provider<API>;
  docsOptions: DocsOptions;
  filters: State['filters'];
  status: State['status'];
};

export const transformStoryIndexToStoriesHash = (
  input: API_PreparedStoryIndex | StoryIndexV2 | StoryIndexV3,
  { provider, docsOptions, filters, status }: ToStoriesHashOptions
): API_IndexHash => {
  if (!input.v) {
    throw new Error('Composition: Missing stories.json version');
  }

  let index = input;
  index = index.v === 2 ? transformStoryIndexV2toV3(index as any) : index;
  index = index.v === 3 ? transformStoryIndexV3toV4(index as any) : index;
  index = index as API_PreparedStoryIndex;

  const entryValues = Object.values(index.entries).filter((entry) => {
    let result = true;

    Object.values(filters).forEach((filter) => {
      if (result === false) {
        return;
      }
      result = filter({ ...entry, status: status[entry.id] });
    });

    return result;
  });

  const { sidebar = {} } = provider.getConfig();
  const { showRoots, collapsedRoots = [], renderLabel } = sidebar;

  const setShowRoots = typeof showRoots !== 'undefined';

  const storiesHashOutOfOrder = entryValues.reduce((acc, item) => {
    if (docsOptions.docsMode && item.type !== 'docs') {
      return acc;
    }

    // First, split the title into a set of names, separated by '/' and trimmed.
    const { title } = item;
    const groups = title.trim().split(TITLE_PATH_SEPARATOR);
    const root = (!setShowRoots || showRoots) && groups.length > 1 ? [groups.shift()] : [];
    const names = [...root, ...groups];

    // Now create a "path" or sub id for each name
    const paths = names.reduce((list, name, idx) => {
      const parent = idx > 0 && list[idx - 1];
      const id = sanitize(parent ? `${parent}-${name}` : name);

      if (parent === id) {
        throw new Error(
          dedent`
          Invalid part '${name}', leading to id === parentId ('${id}'), inside title '${title}'
          
          Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128
          `
        );
      }
      list.push(id);
      return list;
    }, [] as string[]);

    // Now, let's add an entry to the hash for each path/name pair
    paths.forEach((id, idx) => {
      // The child is the next path, OR the story/docs entry itself
      const childId = paths[idx + 1] || item.id;

      if (root.length && idx === 0) {
        acc[id] = merge<API_RootEntry>((acc[id] || {}) as API_RootEntry, {
          type: 'root',
          id,
          name: names[idx],
          depth: idx,
          renderLabel,
          startCollapsed: collapsedRoots.includes(id),
          // Note that this will later get appended to the previous list of children (see below)
          children: [childId],

          // deprecated fields
          isRoot: true,
          isComponent: false,
          isLeaf: false,
        });
        // Usually the last path/name pair will be displayed as a component,
        // *unless* there are other stories that are more deeply nested under it
        //
        // For example, if we had stories for both
        //   - Atoms / Button
        //   - Atoms / Button / LabelledButton
        //
        // In this example the entry for 'atoms-button' would *not* be a component.
      } else if ((!acc[id] || acc[id].type === 'component') && idx === paths.length - 1) {
        acc[id] = merge<API_ComponentEntry>((acc[id] || {}) as API_ComponentEntry, {
          type: 'component',
          id,
          name: names[idx],
          parent: paths[idx - 1],
          depth: idx,
          renderLabel,
          ...(childId && {
            children: [childId],
          }),
          // deprecated fields
          isRoot: false,
          isComponent: true,
          isLeaf: false,
        });
      } else {
        acc[id] = merge<API_GroupEntry>((acc[id] || {}) as API_GroupEntry, {
          type: 'group',
          id,
          name: names[idx],
          parent: paths[idx - 1],
          depth: idx,
          renderLabel,
          ...(childId && {
            children: [childId],
          }),
          // deprecated fields
          isRoot: false,
          isComponent: false,
          isLeaf: false,
        });
      }
    });

    // Finally add an entry for the docs/story itself
    acc[item.id] = {
      type: 'story',
      ...item,
      depth: paths.length,
      parent: paths[paths.length - 1],
      renderLabel,
      prepared: !!item.parameters,

      // deprecated fields
      kind: item.title,
      isRoot: false,
      isComponent: false,
      isLeaf: true,
    } as API_DocsEntry | API_StoryEntry;

    return acc;
  }, {} as API_IndexHash);

  // This function adds a "root" or "orphan" and all of its descendents to the hash.
  function addItem(acc: API_IndexHash, item: API_HashEntry) {
    // If we were already inserted as part of a group, that's great.
    if (acc[item.id]) {
      return acc;
    }

    acc[item.id] = item;
    // Ensure we add the children depth-first *before* inserting any other entries
    if (item.type === 'root' || item.type === 'group' || item.type === 'component') {
      item.children.forEach((childId) => addItem(acc, storiesHashOutOfOrder[childId]));
    }
    return acc;
  }

  // We'll do two passes over the data, adding all the orphans, then all the roots
  const orphanHash = Object.values(storiesHashOutOfOrder)
    .filter((i) => i.type !== 'root' && !i.parent)
    .reduce(addItem, {});

  return Object.values(storiesHashOutOfOrder)
    .filter((i) => i.type === 'root')
    .reduce(addItem, orphanHash);
};

export const addPreparedStories = (newHash: API_IndexHash, oldHash?: API_IndexHash) => {
  if (!oldHash) return newHash;

  return Object.fromEntries(
    Object.entries(newHash).map(([id, newEntry]) => {
      const oldEntry = oldHash[id];
      if (newEntry.type === 'story' && oldEntry?.type === 'story' && oldEntry.prepared) {
        return [id, { ...oldEntry, ...newEntry, prepared: true }];
      }

      return [id, newEntry];
    })
  );
};

export const getComponentLookupList = memoize(1)((hash: API_IndexHash) => {
  return Object.entries(hash).reduce((acc, i) => {
    const value = i[1];
    if (value.type === 'component') {
      acc.push([...value.children]);
    }
    return acc;
  }, [] as StoryId[][]);
});

export const getStoriesLookupList = memoize(1)((hash: API_IndexHash) => {
  return Object.keys(hash).filter((k) => ['story', 'docs'].includes(hash[k].type));
});
