import type { Meta, StoryObj } from '@storybook/react';
import { NumberControl } from './Number';

export default {
  component: NumberControl,
  tags: ['autodocs'],
  parameters: { withRawArg: 'value', controls: { include: ['value', 'min', 'max', 'step'] } },
  args: { name: 'number' },
} as Meta<typeof NumberControl>;

export const Undefined: StoryObj<typeof NumberControl> = {
  args: { value: undefined },
};
// for security reasons a file input field cannot have an initial value, so it doesn't make sense to have stories for it

export const Ten: StoryObj<typeof NumberControl> = {
  args: { value: 10 },
};
export const Zero: StoryObj<typeof NumberControl> = {
  args: { value: 0 },
};

export const WithMin: StoryObj<typeof NumberControl> = {
  args: { min: 1, value: 3 },
};
export const WithMax: StoryObj<typeof NumberControl> = {
  args: { max: 7, value: 3 },
};
export const WithMinAndMax: StoryObj<typeof NumberControl> = {
  args: { min: -2, max: 5, value: 3 },
};
export const LessThanMin: StoryObj<typeof NumberControl> = {
  args: { min: 3, value: 1 },
};
export const MoreThanMax: StoryObj<typeof NumberControl> = {
  args: { max: 3, value: 6 },
};

export const WithStep: StoryObj<typeof NumberControl> = {
  args: { step: 5, value: 3 },
};
