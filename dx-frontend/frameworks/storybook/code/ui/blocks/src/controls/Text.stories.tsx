import type { Meta, StoryObj } from '@storybook/react';
import { TextControl } from './Text';

export default {
  component: TextControl,
  tags: ['autodocs'],
  parameters: { withRawArg: 'value', controls: { include: ['value', 'maxLength'] } },
  args: { name: 'text' },
} as Meta<typeof TextControl>;

export const Basic: StoryObj<typeof TextControl> = {
  args: {
    value: 'Storybook says hi. 👋',
  },
};

export const Empty: StoryObj<typeof TextControl> = {
  args: {
    value: '',
  },
};

export const Undefined: StoryObj<typeof TextControl> = {
  args: {
    value: undefined,
  },
};

export const WithMaxLength: StoryObj<typeof TextControl> = {
  args: {
    value: "You can't finish this sente",
    maxLength: 28,
  },
};
