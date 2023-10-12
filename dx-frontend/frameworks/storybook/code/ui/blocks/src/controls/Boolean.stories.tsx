import { expect } from '@storybook/jest';
import type { Meta, StoryObj } from '@storybook/react';
import { within, fireEvent } from '@storybook/testing-library';
import { addons } from '@storybook/preview-api';
import { RESET_STORY_ARGS, STORY_ARGS_UPDATED } from '@storybook/core-events';
import { BooleanControl } from './Boolean';

const meta = {
  component: BooleanControl,
  tags: ['autodocs'],
  parameters: {
    withRawArg: 'value',
    controls: { include: ['value'] },
    notes: 'These are notes for the Boolean control stories',
    info: 'This is info for the Boolean control stories',
    jsx: { useBooleanShorthandSyntax: false },
  },
  args: { name: 'boolean' },
} as Meta<typeof BooleanControl>;

export default meta;

export const True: StoryObj<typeof BooleanControl> = {
  args: {
    value: true,
  },
};
export const False: StoryObj<typeof BooleanControl> = {
  args: {
    value: false,
  },
};

export const Undefined: StoryObj<typeof BooleanControl> = {
  args: {
    value: undefined,
  },
};

export const Toggling: StoryObj<typeof BooleanControl> = {
  args: {
    value: undefined,
  },
  play: async ({ canvasElement, id }) => {
    const channel = addons.getChannel();

    channel.emit(RESET_STORY_ARGS, { storyId: id });
    await new Promise<void>((resolve) => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });

    const canvas = within(canvasElement);

    // from Undefined to False
    const setBooleanControl = canvas.getByText('Set boolean');
    await fireEvent.click(setBooleanControl);

    let toggle = await canvas.findByTitle('Change to true');
    expect(toggle).toBeInTheDocument();

    // from False to True
    await fireEvent.click(toggle);
    toggle = await canvas.findByTitle('Change to false');
    expect(toggle).toBeInTheDocument();

    // from True to False
    await fireEvent.click(toggle);
    toggle = await canvas.findByTitle('Change to true');
    expect(toggle).toBeInTheDocument();
  },
};

export const TogglingInDocs: StoryObj<typeof BooleanControl> = {
  ...Toggling,
  parameters: {
    docs: {
      autoplay: true,
    },
  },
};
