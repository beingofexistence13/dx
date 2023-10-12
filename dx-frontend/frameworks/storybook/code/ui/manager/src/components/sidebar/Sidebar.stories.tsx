import React from 'react';

import type { IndexHash, State } from '@storybook/manager-api';
import { types } from '@storybook/manager-api';
import type { StoryObj, Meta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Button, IconButton, Icons } from '@storybook/components';
import { Sidebar, DEFAULT_REF_ID } from './Sidebar';
import { standardData as standardHeaderData } from './Heading.stories';
import * as ExplorerStories from './Explorer.stories';
import { mockDataset } from './mockdata';
import type { RefType } from './types';

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

const meta = {
  component: Sidebar,
  title: 'Sidebar/Sidebar',
  excludeStories: /.*Data$/,
  parameters: { layout: 'fullscreen', withSymbols: true },
  decorators: [ExplorerStories.default.decorators[0]],
} as Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

const { menu } = standardHeaderData;
const index = mockDataset.withRoot as IndexHash;
const storyId = 'root-1-child-a2--grandchild-a1-1';

export const simpleData = { menu, index, storyId };
export const loadingData = { menu };

const refs: Record<string, RefType> = {
  optimized: {
    id: 'optimized',
    title: 'This is a ref',
    url: 'https://example.com',
    type: 'lazy',
    index,
    previewInitialized: true,
  },
};

const indexError = new Error('Failed to load index');

const refsError = {
  optimized: {
    ...refs.optimized,
    index: undefined as IndexHash,
    indexError,
  },
};

export const Simple: Story = {
  args: { previewInitialized: true },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      index={index as any}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
      status={{}}
    />
  ),
};

export const Loading: Story = {
  args: { previewInitialized: false },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
      status={{}}
    />
  ),
};

export const Empty: Story = {
  args: {
    previewInitialized: true,
  },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      index={{}}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
      status={{}}
    />
  ),
};

export const IndexError: Story = {
  args: {
    previewInitialized: true,
  },
  render: (args) => (
    <Sidebar
      {...args}
      indexError={indexError}
      extra={[]}
      menu={menu}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
      status={{}}
    />
  ),
};

export const WithRefs: Story = {
  args: {
    previewInitialized: true,
  },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      index={index as any}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={refs}
      status={{}}
    />
  ),
};

export const LoadingWithRefs: Story = {
  args: {
    previewInitialized: false,
  },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={refs}
      status={{}}
    />
  ),
};

export const LoadingWithRefError: Story = {
  args: {
    previewInitialized: false,
  },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={refsError}
      status={{}}
    />
  ),
};

export const StatusesCollapsed: Story = {
  args: {
    previewInitialized: true,
    status: Object.entries(index).reduce<State['status']>((acc, [id, item]) => {
      if (item.type !== 'story') {
        return acc;
      }

      if (item.name.includes('B')) {
        return {
          ...acc,
          [id]: {
            addonA: { status: 'warn', title: 'Addon A', description: 'We just wanted you to know' },
            addonB: { status: 'error', title: 'Addon B', description: 'This is a big deal!' },
          },
        };
      }
      return acc;
    }, {}),
  },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      index={index as any}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
    />
  ),
};

export const StatusesOpen: Story = {
  ...StatusesCollapsed,
  args: {
    ...StatusesCollapsed.args,
    status: Object.entries(index).reduce<State['status']>((acc, [id, item]) => {
      if (item.type !== 'story') {
        return acc;
      }

      return {
        ...acc,
        [id]: {
          addonA: { status: 'warn', title: 'Addon A', description: 'We just wanted you to know' },
          addonB: { status: 'error', title: 'Addon B', description: 'This is a big deal!' },
        },
      };
    }, {}),
  },
};

export const Searching: Story = {
  ...StatusesOpen,
  parameters: { theme: 'light', chromatic: { delay: 2200 } },
  play: async ({ canvasElement, step }) => {
    await step('wait 2000ms', () => wait(2000));
    const canvas = await within(canvasElement);
    const search = await canvas.findByPlaceholderText('Find components');
    userEvent.clear(search);
    userEvent.type(search, 'B2');
  },
};

export const Bottom: Story = {
  args: {
    previewInitialized: true,
  },
  parameters: { theme: 'light' },
  render: (args) => (
    <Sidebar
      {...args}
      menu={menu}
      extra={[]}
      index={index as any}
      storyId={storyId}
      refId={DEFAULT_REF_ID}
      refs={{}}
      status={{}}
      bottom={[
        {
          id: '1',
          type: types.experimental_SIDEBAR_BOTTOM,
          render: () => (
            <Button>
              <Icons icon="facehappy" />
              Custom addon A
            </Button>
          ),
        },
        {
          id: '2',
          type: types.experimental_SIDEBAR_BOTTOM,
          render: () => (
            <Button>
              {' '}
              <Icons icon="facehappy" />
              Custom addon B
            </Button>
          ),
        },
        {
          id: '3',
          type: types.experimental_SIDEBAR_BOTTOM,
          render: () => (
            <IconButton>
              {' '}
              <Icons icon="facehappy" />
            </IconButton>
          ),
        },
      ]}
    />
  ),
};
