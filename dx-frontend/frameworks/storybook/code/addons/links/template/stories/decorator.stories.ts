import { global as globalThis } from '@storybook/global';
import { withLinks } from '@storybook/addon-links';

export default {
  component: globalThis.Components.Html,
  parameters: {
    chromatic: { disable: true },
  },
  decorators: [withLinks],
};

export const Basic = {
  args: {
    content: `
      <div>
        <a class="link" href="#" data-sb-story="other">go to other</a>
      </div>
    `,
  },
};
export const Other = {
  args: {
    content: `
      <div>
        <a class="link" href="#" data-sb-story="third">go to third</a>
      </div>
    `,
  },
};
export const Third = {
  args: {
    content: `
      <div>
        <a class="link" href="#" data-sb-story="basic">go to basic</a>
      </div>
    `,
  },
};
