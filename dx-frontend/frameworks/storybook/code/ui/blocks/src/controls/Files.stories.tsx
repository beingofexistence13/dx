import type { Meta, StoryObj } from '@storybook/react';
import { FilesControl } from './Files';

export default {
  component: FilesControl,
  tags: ['autodocs'],
  parameters: { withRawArg: 'value', controls: { include: ['value', 'accept'] } },
  argTypes: {
    value: {
      description: 'Selected file',
      control: { type: 'file' },
    },
  },
  args: { name: 'files' },
} as Meta<typeof FilesControl>;

export const Undefined: StoryObj<typeof FilesControl> = {
  args: { value: undefined },
};
// for security reasons a file input field cannot have an initial value, so it doesn't make sense to have stories for it

export const AcceptAnything: StoryObj<typeof FilesControl> = {
  args: { accept: '*/*' },
};

export const AcceptPDFs: StoryObj<typeof FilesControl> = {
  name: 'Accept PDFs',
  args: { accept: '.pdf' },
};
