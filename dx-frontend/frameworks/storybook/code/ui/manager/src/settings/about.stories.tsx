import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AboutScreen } from './about';

const meta = {
  component: AboutScreen,
  title: 'Settings/AboutScreen',
  decorators: [
    (Story) => (
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof AboutScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    current: {
      version: '7.0.1',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/ur4kydUbRqdDyfoZWzdiIw/Storybook-app?type=design&node-id=9564-120444&mode=design&t=0TPINZFpwgFQFQeX-4',
    },
  },
};
