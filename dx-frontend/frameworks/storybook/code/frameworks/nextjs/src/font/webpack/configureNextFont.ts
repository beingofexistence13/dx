import type { Configuration } from 'webpack';

export function configureNextFont(baseConfig: Configuration) {
  baseConfig.plugins = [...(baseConfig.plugins || [])];
  baseConfig.resolveLoader = {
    ...baseConfig.resolveLoader,
    alias: {
      ...baseConfig.resolveLoader?.alias,
      'storybook-nextjs-font-loader': require.resolve(
        './font/webpack/loader/storybook-nextjs-font-loader'
      ),
    },
  };
}
