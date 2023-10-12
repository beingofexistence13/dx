/// <reference types="vite/client" />
import type { Meta, StoryObj } from '@storybook/react';

import { Story as StoryBlock } from '../Story';
import * as ButtonStories from '../../examples/Button.stories';

const meta: Meta<typeof StoryBlock> = {
  component: StoryBlock,
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories'],
    docsStyles: true,
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const blocksAwareId = `${
  import.meta.env.STORYBOOK_BLOCKS_ONLY === 'true' ? '' : 'storybook-blocks-'
}example-button--primary`;

export const Id: Story = {
  args: {
    id: blocksAwareId,
  },
};

export const Name: Story = {
  args: {
    name: 'Secondary',
  },
};

export const StoryProp: Story = {
  name: 'Story',
  args: {
    story: ButtonStories.Primary,
  },
};
