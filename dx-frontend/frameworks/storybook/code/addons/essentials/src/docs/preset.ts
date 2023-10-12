import { dirname, join } from 'path';

// eslint-disable-next-line import/export
export * from '@storybook/addon-docs/dist/preset';

export const mdxLoaderOptions = async (config: any) => {
  // eslint-disable-next-line no-param-reassign
  config.mdxCompileOptions.providerImportSource = join(
    dirname(require.resolve('@storybook/addon-docs/package.json')),
    '/dist/shims/mdx-react-shim'
  );
  return config;
};
