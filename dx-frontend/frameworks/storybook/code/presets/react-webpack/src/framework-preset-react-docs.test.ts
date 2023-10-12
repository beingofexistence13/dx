import ReactDocgenTypescriptPlugin from '@storybook/react-docgen-typescript-plugin';
import type { TypescriptOptions } from '@storybook/core-webpack';
import * as preset from './framework-preset-react-docs';

describe('framework-preset-react-docgen', () => {
  const babelPluginReactDocgenPath = require.resolve('babel-plugin-react-docgen');
  const presetsListWithDocs = [{ name: '@storybook/addon-docs', options: {}, preset: null }];

  describe('react-docgen', () => {
    it('should return the babel config with the extra plugin', async () => {
      const babelConfig = {
        babelrc: false,
        presets: ['env', 'foo-preset'],
        plugins: ['foo-plugin'],
      };

      const config = await preset.babel?.(babelConfig, {
        presets: {
          apply: async () =>
            ({
              check: false,
              reactDocgen: 'react-docgen',
            } as Partial<TypescriptOptions>),
        },
        presetsList: presetsListWithDocs,
      } as any);

      expect(config).toEqual({
        babelrc: false,
        plugins: ['foo-plugin'],
        presets: ['env', 'foo-preset'],
        overrides: [
          {
            test: /\.(cjs|mjs|tsx?|jsx?)$/,
            plugins: [[babelPluginReactDocgenPath]],
          },
        ],
      });
    });
  });

  describe('react-docgen-typescript', () => {
    it('should return the webpack config with the extra plugin', async () => {
      const webpackConfig = {
        plugins: [],
      };

      const config = await preset.webpackFinal?.(webpackConfig, {
        presets: {
          // @ts-expect-error (not strict)
          apply: async () =>
            ({
              check: false,
              reactDocgen: 'react-docgen-typescript',
            } as Partial<TypescriptOptions>),
        },
        presetsList: presetsListWithDocs,
      });

      expect(config).toEqual({
        plugins: [expect.any(ReactDocgenTypescriptPlugin)],
      });
    });
  });

  describe('no docgen', () => {
    it('should not add any extra plugins', async () => {
      const babelConfig = {
        babelrc: false,
        presets: ['env', 'foo-preset'],
        plugins: ['foo-plugin'],
      };

      const webpackConfig = {
        plugins: [],
      };

      const outputBabelconfig = await preset.babel?.(babelConfig, {
        presets: {
          // @ts-expect-error (Converted from ts-ignore)
          apply: async () =>
            ({
              check: false,
              reactDocgen: false,
            } as Partial<TypescriptOptions>),
        },
        presetsList: presetsListWithDocs,
      });
      const outputWebpackconfig = await preset.webpackFinal?.(webpackConfig, {
        presets: {
          // @ts-expect-error (Converted from ts-ignore)
          apply: async () =>
            ({
              check: false,
              reactDocgen: false,
            } as Partial<TypescriptOptions>),
        },
        presetsList: presetsListWithDocs,
      });

      expect(outputBabelconfig).toEqual({
        babelrc: false,
        presets: ['env', 'foo-preset'],
        plugins: ['foo-plugin'],
      });
      expect(outputWebpackconfig).toEqual({
        plugins: [],
      });
    });
  });

  describe('no docs or controls addon used', () => {
    it('should not add any extra plugins', async () => {
      const babelConfig = {
        babelrc: false,
        presets: ['env', 'foo-preset'],
        plugins: ['foo-plugin'],
      };

      const webpackConfig = {
        plugins: [],
      };

      const outputBabelconfig = await preset.babel?.(babelConfig, {
        presets: {
          // @ts-expect-error (Converted from ts-ignore)
          apply: async () =>
            ({
              check: false,
              reactDocgen: 'react-docgen-typescript',
            } as Partial<TypescriptOptions>),
        },
        presetsList: [],
      });
      const outputWebpackconfig = await preset.webpackFinal?.(webpackConfig, {
        presets: {
          // @ts-expect-error (Converted from ts-ignore)
          apply: async () =>
            ({
              check: false,
              reactDocgen: 'react-docgen-typescript',
            } as Partial<TypescriptOptions>),
        },
        presetsList: [],
      });

      expect(outputBabelconfig).toEqual({
        babelrc: false,
        presets: ['env', 'foo-preset'],
        plugins: ['foo-plugin'],
      });
      expect(outputWebpackconfig).toEqual({
        plugins: [],
      });
    });
  });
});
