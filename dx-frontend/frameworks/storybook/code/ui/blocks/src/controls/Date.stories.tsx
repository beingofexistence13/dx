import type { Meta, StoryObj } from '@storybook/react';
import { DateControl } from './Date';

export default {
  component: DateControl,
  tags: ['autodocs'],
  parameters: { withRawArg: 'value', controls: { include: ['value'] } },
  argTypes: {
    value: {
      description: 'The date',
      control: { type: 'date' },
    },
  },
  args: { name: 'date' },
} as Meta<typeof DateControl>;

export const Basic: StoryObj<typeof DateControl> = {
  args: { value: new Date('2020-10-20T09:30:02') },
};
export const Undefined: StoryObj<typeof DateControl> = {
  args: { value: undefined },
};
