import { global as globalThis } from '@storybook/global';
import { linkTo } from '@storybook/addon-links';

export default {
  component: globalThis.Components.Button,
  args: {
    label: 'Click Me!',
  },
  parameters: {
    chromatic: { disable: true },
  },
};

export const ID = {
  args: {
    onClick: linkTo('addons-links-parameters--basic'),
  },
};
export const Title = {
  args: {
    onClick: linkTo('addons-links-parameters'),
  },
};
export const Basic = {
  args: {
    onClick: linkTo('addons-links-parameters', 'basic'),
  },
};
export const Other = {
  args: {
    onClick: linkTo('addons-links-parameters', 'basic'),
  },
};
export const Third = {
  args: {
    onClick: linkTo('addons-links-parameters', 'other'),
  },
};

export const Callback = {
  args: {
    onClick: linkTo('addons-links-parameters', (event: Event) => 'basic'),
  },
};
