import React from 'react';
import type { Args } from '@storybook/types';

import { Button } from './Button';
import { Icons } from '../icon/icon';
import { Form } from '../form/index';

export default {
  component: Button,
};

export const Default = { args: { children: 'Default' } };

export const FormButton = {
  render: (args: Args) => <Form.Button {...args} />,
  args: { children: 'Form.Button' },
};

export const Primary = { args: { primary: true, children: 'Primary' } };
export const Secondary = { args: { secondary: true, children: 'Secondary' } };
export const Tertiary = { args: { tertiary: true, children: 'Tertiary' } };
export const Gray = { args: { gray: true, children: 'Gray' } };

export const Outline = { args: { outline: true, children: 'Outline' } };
export const OutlinePrimary = {
  args: { outline: true, primary: true, children: 'Outline Primary' },
};
export const OutlineSecondary = {
  args: { outline: true, secondary: true, children: 'Outline Secondary' },
};
export const OutlineTertiary = {
  args: { outline: true, tertiary: true, children: 'Outline Tertiary' },
};

export const Disabled = { args: { disabled: true, children: 'Disabled' } };
export const DisabledPrimary = {
  args: { disabled: true, primary: true, children: 'Disabled Priary' },
};
export const DisabledSecondary = {
  args: { disabled: true, secondary: true, children: 'Disabled Secondary' },
};
export const DisabledTertiary = {
  args: { disabled: true, tertiary: true, children: 'Disabled Tertiary' },
};
export const DisabledGray = {
  args: { disabled: true, gray: true, children: 'Disabled Gray' },
};

export const Small = { args: { small: true, children: 'Small' } };
export const SmallPrimary = {
  args: { small: true, primary: true, children: 'Small Priary' },
};
export const SmallSecondary = {
  args: { small: true, secondary: true, children: 'Small Secondary' },
};
export const SmallTertiary = {
  args: { small: true, tertiary: true, children: 'Small Tertiary' },
};
export const SmallGray = {
  args: { small: true, gray: true, children: 'Small Gray' },
};

export const IconPrimary = {
  args: {
    primary: true,
    containsIcon: true,
    title: 'link',
    children: <Icons icon="link" />,
  },
};
export const IconOutline = {
  args: { outline: true, containsIcon: true, title: 'link', children: <Icons icon="link" /> },
};
export const IconOutlineSmall = {
  args: {
    outline: true,
    containsIcon: true,
    small: true,
    title: 'link',
    children: <Icons icon="link" />,
  },
};
