import type { StorybookConfig } from './types';

export * from './types';

export const webpack: StorybookConfig['webpack'] = (config) => {
  const rules = [
    ...(config.module?.rules || []),
    {
      test: [
        new RegExp(`src(.*)\\.js$`),
        new RegExp(`packages(\\/|\\\\)*(\\/|\\\\)src(\\/|\\\\)(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)lit\\/(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)lit-html(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)lit-element(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)@open-wc(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)@polymer(.*)\\.js$`),
        new RegExp(`node_modules(\\/|\\\\)@vaadin(.*)\\.js$`),
      ],
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          compact: false,
          presets: [
            [
              require.resolve('@babel/preset-env'),
              {
                useBuiltIns: 'entry',
                corejs: 3,
                targets: { chrome: '100', esmodules: true },
              },
            ],
          ],
          plugins: [
            require.resolve('@babel/plugin-syntax-dynamic-import'),
            require.resolve('@babel/plugin-syntax-import-meta'),
            // webpack does not support import.meta.url yet, so we rewrite them in babel
            [require.resolve('babel-plugin-bundled-import-meta'), { importStyle: 'baseURI' }],
          ],
        },
      },
    },
  ];

  // eslint-disable-next-line no-param-reassign
  config.module = config.module || {};
  // eslint-disable-next-line no-param-reassign
  config.module.rules = rules;

  return config;
};
