import type { Meta, StoryObj } from '@storybook/react';
import * as ParametersStories from '../../examples/SourceParameters.stories';

import { Source } from '../Source';

const meta: Meta<typeof Source> = {
  component: Source,
  parameters: {
    relativeCsfPaths: ['../examples/Button.stories', '../examples/SourceParameters.stories'],
    attached: false,
    docsStyles: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Id: Story = {
  args: {
    id: 'storybook-blocks-examples-button--primary',
  },
};

export const Ids: Story = {
  args: {
    ids: [
      'storybook-blocks-examples-button--primary',
      'storybook-blocks-examples-button--secondary',
    ],
  },
};

export const SourceTransformSourceParameter: Story = {
  args: {
    of: ParametersStories.SourceTransformSource,
  },
};

export const DocsTransformSourceParameter: Story = {
  args: {
    of: ParametersStories.DocsTransformSource,
  },
};

export const JsxTransformSourceParameter: Story = {
  args: {
    of: ParametersStories.JsxTransformSource,
  },
};
