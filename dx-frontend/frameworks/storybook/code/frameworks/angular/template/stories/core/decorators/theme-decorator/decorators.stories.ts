import { Args, Meta, componentWrapperDecorator } from '@storybook/angular';

export const Base = (args: Args) => ({
  template: 'Change theme with the brush in toolbar',
  props: {
    ...args,
  },
});

export default {
  // title: 'Core / Decorators / Theme Decorators',
  component: Base,
  decorators: [
    componentWrapperDecorator(
      (story) => `<div [class]="myTheme">${story}</div>`,

      ({ globals }) => ({ myTheme: `${globals['theme']}-theme` })
    ),
  ],
} as Meta;
