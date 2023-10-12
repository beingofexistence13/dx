import { global as globalThis } from '@storybook/global';

export default {
  component: globalThis.Components.Button,
  // FIXME: remove array subcomponents in 7.0?
  subcomponents: {
    Pre: globalThis.Components.Pre,
  },
  tags: ['autodocs'],
  args: { label: 'Click Me!' },
  parameters: {
    docs: {
      description: {
        component: '**Component** description',
      },
    },
    chromatic: { disable: true },
  },
};

export const Basic = {};

export const CustomDescription = {
  parameters: {
    docs: {
      description: {
        story: '**Story** description',
      },
    },
  },
};
