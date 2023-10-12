import type { Configuration, Stats } from 'webpack';
import type {
  Options,
  BuilderResult as BuilderResultBase,
  StorybookConfig,
} from '@storybook/core-webpack';

import type ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

type TypeScriptOptionsBase = Required<StorybookConfig>['typescript'];

/**
 * Options for TypeScript usage within Storybook.
 */
export interface TypescriptOptions extends TypeScriptOptionsBase {
  /**
   * Configures `fork-ts-checker-webpack-plugin`
   */
  checkOptions?: ConstructorParameters<typeof ForkTsCheckerWebpackPlugin>[0];
}

export interface StorybookConfigWebpack extends Pick<StorybookConfig, 'webpack' | 'webpackFinal'> {
  /**
   * Modify or return a custom Webpack config after the Storybook's default configuration
   * has run (mostly used by addons).
   */
  webpack?: (config: Configuration, options: Options) => Configuration | Promise<Configuration>;

  /**
   * Modify or return a custom Webpack config after every addon has run.
   */
  webpackFinal?: (
    config: Configuration,
    options: Options
  ) => Configuration | Promise<Configuration>;
}

export type BuilderOptions = {
  fsCache?: boolean;
  useSWC?: boolean;
  lazyCompilation?: boolean;
};

export interface BuilderResult extends BuilderResultBase {
  stats?: Stats;
}
