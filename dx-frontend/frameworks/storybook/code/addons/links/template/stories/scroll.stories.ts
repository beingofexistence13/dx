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
        <div style="marginBottom:100vh"></div>
        <a class="link" href="#" data-sb-story="basic">go to basic</a>
      </div>
    `,
  },
};
export const Other = {
  args: {
    content: `
      <div>
        <div style="marginBottom:100vh"></div>
        <a class="link" href="#" data-sb-story="basic">to to basic</a>
      </div>
    `,
  },
};
export const Third = {
  args: {
    content: `
      <div>
        <div style="marginBottom:100vh"></div>
        <a class="link" href="#" data-sb-story="other">go to other</a>
      </div>
    `,
  },
};
