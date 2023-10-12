import type { Meta, StoryObj } from '@storybook/react';
import { Primary } from './Primary';

const meta = {
  component: Primary,
  parameters: {
    docsStyles: true,
  },
} satisfies Meta<typeof Primary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories'],
  },
};
export const WithoutToolbar: Story = {
  parameters: {
    relativeCsfPaths: ['../examples/StoriesParameters.stories'],
  },
};
