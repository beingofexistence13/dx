import type { Meta, StoryObj } from '@storybook/react';
import { Stories } from './Stories';

const meta = {
  component: Stories,
  parameters: { docsStyles: true },
} satisfies Meta<typeof Stories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories'],
  },
};
export const WithoutPrimary: Story = {
  args: { includePrimary: false },
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories'],
  },
};
export const DifferentToolbars: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/StoriesParameters.stories'],
  },
};
