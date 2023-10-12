import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// More on how to set up stories at: https://storybook.js.org/docs/ember/writing-stories/introduction
export default {
  title: 'Example/Button',
  render: (args) => ({
    template: hbs`<button {{action onClick}}>{{label}}</button>`,
    context: args,
  }),
  argTypes: {
    label: { control: 'text' },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/ember/writing-stories/args
export const Text = {
  args: {
    label: 'Button',
    onClick: action('onClick'),
  },
};

export const Emoji = {
  args: {
    label: '😀 😎 👍 💯',
  },
};

export const TextWithAction = {
  render: () => ({
    template: hbs`
    <button {{action onClick}}>
      Trigger Action
    </button>
  `,
    context: {
      onClick: () => action('This was clicked')(),
    },
  }),
  name: 'With an action',
  parameters: {
    notes: 'My notes on a button with emojis',
  },
};

export const ButtonWithLinkToAnotherStory = {
  render: () => ({
    template: hbs`
    <button {{action onClick}}>
      Go to Welcome Story
    </button>
  `,
    context: {
      onClick: linkTo('example-introduction--page'),
    },
  }),
  name: 'button with link to another story',
};
