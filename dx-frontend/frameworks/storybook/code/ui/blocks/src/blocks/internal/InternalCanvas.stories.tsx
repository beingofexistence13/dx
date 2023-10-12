/// <reference types="@types/jest" />;
/// <reference types="@testing-library/jest-dom" />;
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Canvas, SourceState } from '../Canvas';
import { Story as StoryComponent } from '../Story';
import * as ButtonStories from '../../examples/Button.stories';
import * as CanvasParameterStories from '../../examples/CanvasParameters.stories';

const meta: Meta<typeof Canvas> = {
  component: Canvas,
  parameters: {
    theme: 'light',
    relativeCsfPaths: ['../examples/Button.stories', '../examples/CanvasParameters.stories'],
    docsStyles: true,
  },
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>
    );
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

const expectAmountOfStoriesInSource =
  (amount: number): Story['play'] =>
  async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Arrange - find the "Show code" button
    const showCodeButton = await canvas.findByText('Show code');
    await expect(showCodeButton).toBeInTheDocument();

    // Act - click button to show code
    await userEvent.click(showCodeButton);

    // Assert - check that the correct amount of stories' source is shown
    const buttonNodes = await canvas.findAllByText(`label`);
    await expect(buttonNodes).toHaveLength(amount);
  };

export const BasicStoryChild: Story = {};

export const BasicStoryChildUnattached: Story = {
  parameters: { attached: false },
};

export const NoStoryChildrenUnattached: Story = {
  parameters: { attached: false },
  render: (args) => {
    return (
      <Canvas {...args}>
        <p>This is a plain paragraph, no stories</p>
      </Canvas>
    );
  },
};
export const NoStoryChildrenUnattachedWithMDXSource: Story = {
  ...NoStoryChildrenUnattached,
  args: {
    mdxSource: `const customStaticSource = true;`,
  },
};

export const WithSourceOpen: Story = {
  args: {
    withSource: SourceState.OPEN,
  },
};
export const WithSourceClosed: Story = {
  args: {
    withSource: SourceState.CLOSED,
  },
};

export const WithMdxSource: Story = {
  name: 'With MDX Source',
  args: {
    withSource: SourceState.OPEN,
    mdxSource: `<Button
  label="Button"
  primary
  onClick={() => {
    console.log('this is custom source for the source viewer')
  }}
/>`,
  },
};

export const WithoutSource: Story = {
  args: {
    withSource: SourceState.NONE,
  },
};

export const LayoutProp: Story = {
  args: {
    layout: 'fullscreen',
  },
};

export const LayoutAsChildProp: Story = {
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={ButtonStories.Primary} parameters={{ layout: 'fullscreen' }} />
      </Canvas>
    );
  },
};

export const LayoutAsChildPropMultiple: Story = {
  args: { isColumn: true },
  render: (args) => {
    return (
      <Canvas {...args}>
        <h1>Fullscreen</h1>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} parameters={{ layout: 'fullscreen' }} />
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>
    );
  },
};

export const LayoutAsParameter: Story = {
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={CanvasParameterStories.LayoutFullscreen} />
      </Canvas>
    );
  },
};

export const MultipleChildren: Story = {
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
      </Canvas>
    );
  },
  play: expectAmountOfStoriesInSource(2),
};

export const MultipleChildrenColumns: Story = {
  args: {
    isColumn: true,
  },
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
      </Canvas>
    );
  },
  play: expectAmountOfStoriesInSource(2),
};

export const MultipleChildrenThreeColumns: Story = {
  args: {
    columns: 3,
  },
  render: (args) => {
    return (
      <Canvas {...args}>
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Secondary} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Large} />
        <StoryComponent of={ButtonStories.Primary} />
        <StoryComponent of={ButtonStories.Primary} />
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>
    );
  },
  play: expectAmountOfStoriesInSource(9),
};

export const MixedChildrenStories: Story = {
  args: { isColumn: true },
  render: (args) => {
    return (
      <Canvas {...args}>
        <h1>Headline for secondary Button</h1>
        <StoryComponent of={ButtonStories.Secondary} />
        <h1>Headline for primary Button</h1>
        <StoryComponent of={ButtonStories.Primary} />
      </Canvas>
    );
  },
  play: async (args) => {
    // this function will also expand the source code
    await expectAmountOfStoriesInSource(2)(args);
    const canvas = within(args.canvasElement);

    // Assert - only find two headlines, those in the story, and none in the source code
    expect(canvas.queryAllByText(/Headline for /i)).toHaveLength(2);
  },
};
