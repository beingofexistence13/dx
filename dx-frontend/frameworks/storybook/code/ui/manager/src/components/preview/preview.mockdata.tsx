import { types } from '@storybook/manager-api';
import type { API, State } from '@storybook/manager-api';
import type { Addon_BaseType, Addon_Collection } from '@storybook/types';
import type { PreviewProps } from './utils/types';

const addonNotes: Addon_BaseType = {
  id: 'notes',
  type: types.TAB,
  title: 'Notes',
  route: ({ storyId }) => `/info/${storyId}`,
  match: ({ viewMode }) => viewMode === 'info',
  render: () => null,
};

const mockAPI: Partial<API> = {
  on: (a, b) => () => {},
  emit: () => {},
  off: () => {},
  getElements: (type) =>
    type === types.TAB ? ({ notes: addonNotes } as Addon_Collection<any>) : {},
};

export const previewProps: PreviewProps = {
  id: 'string',
  storyId: 'story--id',
  api: mockAPI as API,
  entry: {
    tags: [],
    type: 'story',
    id: 'story--id',
    parent: 'root',
    depth: 1,
    title: 'kind',
    name: 'story name',
    importPath: './story.stories.tsx',
    prepared: true,
    parameters: {
      fileName: '',
      options: {},
    },
    args: {},
    kind: 'kind',
    isRoot: false,
    isComponent: false,
    isLeaf: true,
  },
  path: 'string',
  viewMode: 'story',
  location: {} as any as State['location'],
  baseUrl: 'http://example.com',
  queryParams: {},
  options: {
    isFullscreen: false,
    showTabs: true,
    showToolbar: true,
  },
  withLoader: false,
  description: '',
  refs: {},
};
