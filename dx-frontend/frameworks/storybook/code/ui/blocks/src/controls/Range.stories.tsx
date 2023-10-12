import type { Meta, StoryObj } from '@storybook/react';
import { RangeControl } from './Range';

export default {
  component: RangeControl,
  tags: ['autodocs'],
  parameters: { withRawArg: 'value', controls: { include: ['value', 'min', 'max', 'step'] } },
  args: { name: 'range' },
} as Meta<typeof RangeControl>;

export const Undefined: StoryObj<typeof RangeControl> = {
  args: {
    value: undefined,
  },
};

export const Zero: StoryObj<typeof RangeControl> = {
  args: {
    value: 0,
  },
};
export const WithMin: StoryObj<typeof RangeControl> = {
  args: {
    min: 5,
    value: 20,
  },
};
export const WithMax: StoryObj<typeof RangeControl> = {
  args: {
    max: 50,
    value: 20,
  },
};
export const WithBigMax: StoryObj<typeof RangeControl> = {
  args: {
    max: 10000000000,
    value: 20,
  },
};
export const WithMinAndMax: StoryObj<typeof RangeControl> = {
  args: {
    min: 10,
    max: 50,
    value: 20,
  },
};

export const LessThanMin: StoryObj<typeof RangeControl> = {
  args: {
    min: 10,
    value: 5,
  },
};

export const MoreThanMax: StoryObj<typeof RangeControl> = {
  args: {
    max: 20,
    value: 50,
  },
};

export const WithSteps: StoryObj<typeof RangeControl> = {
  args: {
    step: 5,
    value: 50,
  },
};

export const Decimals: StoryObj<typeof RangeControl> = {
  args: {
    step: 0.000000000002,
    value: 989.123123123123,
    max: 2000,
  },
};
export const WithInfiniteMax: StoryObj<typeof RangeControl> = {
  args: {
    max: Infinity,
    value: 50,
  },
};
