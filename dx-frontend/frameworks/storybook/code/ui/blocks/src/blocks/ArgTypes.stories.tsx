import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ArgTypes } from './ArgTypes';
import * as ExampleStories from '../examples/ArgTypesParameters.stories';

const meta: Meta<typeof ArgTypes> = {
  title: 'Blocks/ArgTypes',
  component: ArgTypes,
  parameters: {
    relativeCsfPaths: ['../examples/ArgTypesParameters.stories'],
    docsStyles: true,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OfComponent: Story = {
  args: {
    of: ExampleStories.default.component,
  },
};

export const OfMeta: Story = {
  args: {
    of: ExampleStories.default,
  },
};

export const OfStory: Story = {
  args: {
    of: ExampleStories.NoParameters,
  },
};

export const OfUndefined: Story = {
  args: {
    // @ts-expect-error this is supposed to be undefined
    // eslint-disable-next-line import/namespace
    of: ExampleStories.NotDefined,
  },
  parameters: { chromatic: { disableSnapshot: true } },
  decorators: [(s) => (window?.navigator.userAgent.match(/StorybookTestRunner/) ? <div /> : s())],
};

// NOTE: this will throw with no of prop
export const OfStoryUnattached: Story = {
  parameters: { attached: false },
  args: {
    of: ExampleStories.NoParameters,
  },
};

export const IncludeProp: Story = {
  args: {
    of: ExampleStories.NoParameters,
    include: ['a'],
  },
};

export const IncludeParameter: Story = {
  args: {
    of: ExampleStories.Include,
  },
};

export const ExcludeProp: Story = {
  args: {
    of: ExampleStories.NoParameters,
    exclude: ['a'],
  },
};

export const ExcludeParameter: Story = {
  args: {
    of: ExampleStories.Exclude,
  },
};

export const SortProp: Story = {
  args: {
    of: ExampleStories.NoParameters,
    sort: 'alpha',
  },
};

export const SortParameter: Story = {
  args: {
    of: ExampleStories.Sort,
  },
};
