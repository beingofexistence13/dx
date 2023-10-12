// @TODO: use addon-interactions and remove the rule disable above
import React, { useState } from 'react';
import type { ComponentEntry, IndexHash } from '@storybook/manager-api';
import { action } from '@storybook/addon-actions';

import type { StoryObj, Meta } from '@storybook/react';
import { within } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
import { Tree } from './Tree';
import { index } from './mockdata.large';
import { DEFAULT_REF_ID } from './Sidebar';

const customViewports = {
  sized: {
    name: 'Sized',
    styles: {
      width: '380px',
      height: '90%',
    },
  },
};

const meta = {
  component: Tree,
  title: 'Sidebar/Tree',
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'fullscreen',
    withSymbols: true,
    theme: 'light',
    viewport: {
      defaultViewport: 'sized',
      viewports: customViewports,
    },
    chromatic: { viewports: [380] },
  },
} as Meta<typeof Tree>;

export default meta;

const storyId = Object.values(index).find((story) => story.type === 'story').id;

type Story = StoryObj<typeof meta>;

export const Full: Story = {
  args: {
    docsMode: false,
    isBrowsing: true,
    isMain: true,
    refId: DEFAULT_REF_ID,
    setHighlightedItemId: action('setHighlightedItemId'),
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState(storyId);
    return (
      <Tree
        {...args}
        data={index}
        selectedStoryId={selectedId}
        onSelectStoryId={setSelectedId}
        highlightedRef={{ current: { itemId: selectedId, refId: DEFAULT_REF_ID } }}
      />
    );
  },
};
export const Dark: Story = {
  ...Full,
  parameters: { theme: 'dark' },
};

export const SingleStoryComponents: Story = {
  args: {
    docsMode: false,
    isBrowsing: true,
    isMain: true,
    refId: DEFAULT_REF_ID,
    setHighlightedItemId: action('setHighlightedItemId'),
  },
  render: (args) => {
    const [selectedId, setSelectedId] = useState('tooltip-tooltipbuildlist--default');
    return (
      <Tree
        {...args}
        data={{
          ...{
            single: {
              type: 'component',
              name: 'Single',
              id: 'single',
              isRoot: false,
              isLeaf: false,
              isComponent: true,
              parent: null,
              depth: 0,
              children: ['single--single'],
              renderLabel: () => <span>🔥 Single</span>,
            },
            'single--single': {
              type: 'story',
              id: 'single--single',
              title: 'Single',
              name: 'Single',
              kind: 'single',
              tags: [],
              isRoot: false,
              isLeaf: true,
              isComponent: false,
              prepared: true,
              args: {},
              argTypes: {},
              initialArgs: {},
              depth: 1,
              parent: 'single',
              renderLabel: () => <span>🔥 Single</span>,
              importPath: './single.stories.js',
            },
          },
          ...Object.keys(index).reduce((acc, key) => {
            if (key === 'tooltip-tooltipselect--default') {
              acc['tooltip-tooltipselect--tooltipselect'] = {
                ...index[key],
                id: 'tooltip-tooltipselect--tooltipselect',
                name: 'TooltipSelect',
              };
              return acc;
            }
            if (key === 'tooltip-tooltipselect') {
              acc[key] = {
                ...(index[key] as ComponentEntry),
                children: ['tooltip-tooltipselect--tooltipselect'],
              };
              return acc;
            }
            if (key.startsWith('tooltip')) {
              acc[key] = index[key];
            }
            return acc;
          }, {} as IndexHash),
        }}
        highlightedRef={{ current: { itemId: selectedId, refId: DEFAULT_REF_ID } }}
        selectedStoryId={selectedId}
        onSelectStoryId={setSelectedId}
      />
    );
  },
};

export const DocsOnlySingleStoryComponents = {
  render: () => {
    const [selectedId, setSelectedId] = useState('tooltip-tooltipbuildlist--default');
    return (
      <Tree
        docsMode={false}
        isBrowsing
        isMain
        refId={DEFAULT_REF_ID}
        data={{
          ...{
            single: {
              type: 'component',
              name: 'Single',
              isRoot: false,
              isLeaf: false,
              isComponent: true,
              id: 'single',
              parent: null,
              depth: 0,
              children: ['single--docs'],
            },
            'single--docs': {
              type: 'docs',
              id: 'single--docs',
              title: 'Single',
              name: 'Single',
              kind: 'single',
              tags: [],
              isRoot: false,
              isLeaf: true,
              isComponent: false,
              prepared: true,
              depth: 1,
              parent: 'single',
              importPath: './single.stories.js',
            },
          },
          ...Object.keys(index).reduce((acc, key) => {
            if (key === 'tooltip-tooltipselect--default') {
              acc['tooltip-tooltipselect--tooltipselect'] = {
                ...index[key],
                id: 'tooltip-tooltipselect--tooltipselect',
                name: 'TooltipSelect',
              };
              return acc;
            }
            if (key === 'tooltip-tooltipselect') {
              acc[key] = {
                ...(index[key] as ComponentEntry),
                children: ['tooltip-tooltipselect--tooltipselect'],
              };
              return acc;
            }
            if (key.startsWith('tooltip')) {
              acc[key] = index[key];
            }
            return acc;
          }, {} as IndexHash),
        }}
        highlightedRef={{ current: { itemId: selectedId, refId: DEFAULT_REF_ID } }}
        setHighlightedItemId={action('setHighlightedItemId')}
        selectedStoryId={selectedId}
        onSelectStoryId={setSelectedId}
      />
    );
  },
};

// SkipToCanvas Link only shows on desktop widths
export const SkipToCanvasLinkFocused: Story = {
  ...DocsOnlySingleStoryComponents,
  parameters: {
    chromatic: { disable: true },
    viewport: {
      defaultViewport: 'sized',
      viewports: customViewports,
      defaultOrientation: 'landscape',
    },
  },
  play: async ({ canvasElement }) => {
    const screen = await within(canvasElement);
    const link = await screen.findByText('Skip to canvas');

    await link.focus();

    await expect(link).toBeVisible();
  },
};
