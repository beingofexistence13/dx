import type { Meta, StoryObj } from '@storybook/react';
import { ColorControl } from './Color';

export default {
  component: ColorControl,
  parameters: { withRawArg: 'value', controls: { include: ['value', 'startOpen'] } },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: {
        type: 'color',
      },
    },
  },
  args: { name: 'color' },
} as Meta<typeof ColorControl>;

export const Basic: StoryObj<typeof ColorControl> = {
  args: {
    value: '#ff00ff',
  },
};

export const Undefined: StoryObj<typeof ColorControl> = {
  args: {
    value: undefined,
  },
};

export const WithPresetColors: StoryObj<typeof ColorControl> = {
  args: {
    value: '#00ffff',
    presetColors: [
      { color: '#ff4785', title: 'Coral' },
      { color: '#1EA7FD', title: 'Ocean' },
      { color: 'rgb(252, 82, 31)', title: 'Orange' },
      { color: 'RGBA(255, 174, 0, 0.5)', title: 'Gold' },
      { color: 'hsl(101, 52%, 49%)', title: 'Green' },
      { color: 'HSLA(179,65%,53%,0.5)', title: 'Seafoam' },
      { color: '#6F2CAC', title: 'Purple' },
      { color: '#2A0481', title: 'Ultraviolet' },
      { color: 'black' },
      { color: '#333', title: 'Darkest' },
      { color: '#444', title: 'Darker' },
      { color: '#666', title: 'Dark' },
      { color: '#999', title: 'Mediumdark' },
      { color: '#ddd', title: 'Medium' },
      { color: '#EEE', title: 'Mediumlight' },
      { color: '#F3F3F3', title: 'Light' },
      { color: '#F8F8F8', title: 'Lighter' },
      { color: '#FFFFFF', title: 'Lightest' },
      '#fe4a49',
      '#FED766',
      'rgba(0, 159, 183, 1)',
      'HSLA(240,11%,91%,0.5)',
      'slategray',
    ],
  },
};

export const StartOpen: StoryObj<typeof ColorControl> = {
  args: {
    startOpen: true,
  },
};
