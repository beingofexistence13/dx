/* eslint-disable no-param-reassign */
import { dedent } from 'ts-dedent';
import { deprecate } from '@storybook/node-logger';

import remarkGfm from 'remark-gfm';

export const mdxLoaderOptions = async (config: any) => {
  config.mdxCompileOptions.remarkPlugins = config.mdxCompileOptions.remarkPlugins || [];
  config.mdxCompileOptions.remarkPlugins.push(remarkGfm);
  return config;
};

deprecate(dedent`
  The "@storybook/addon-mdx-gfm" addon is meant as a migration assistant for Storybook 7.0; and will likely be removed in a future version.
  It's recommended you read this document:
  https://storybook.js.org/docs/react/writing-docs/mdx#lack-of-github-flavored-markdown-gfm

  Once you've made the necessary changes, you can remove the addon from your package.json and storybook config.
`);
