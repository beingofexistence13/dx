import * as webpackReal from 'webpack';
import { logger } from '@storybook/node-logger';
import type { Options, CoreConfig } from '@storybook/types';
import type { Configuration } from 'webpack';
import deprecate from 'util-deprecate';
import { dedent } from 'ts-dedent';
import { loadCustomWebpackConfig } from '@storybook/core-webpack';
import { createDefaultWebpackConfig } from '../preview/base-webpack.config';

export async function webpack(config: Configuration, options: Options) {
  // @ts-expect-error (Converted from ts-ignore)
  const { configDir, configType, presets, webpackConfig } = options;

  const coreOptions = await presets.apply<CoreConfig>('core');

  let defaultConfig = config;
  if (!coreOptions?.disableWebpackDefaults) {
    defaultConfig = await createDefaultWebpackConfig(config, options);
  }

  const finalDefaultConfig = await presets.apply('webpackFinal', defaultConfig, options);

  // through standalone webpackConfig option
  if (webpackConfig) {
    return deprecate(
      webpackConfig,
      dedent`
      You've provided a webpack config directly in CallOptions, this is not recommended. Please use presets instead. This feature will be removed in 7.0
      `
    )(finalDefaultConfig);
  }

  // Check whether user has a custom webpack config file and
  // return the (extended) base configuration if it's not available.
  const customConfig = loadCustomWebpackConfig(configDir);

  if (typeof customConfig === 'function') {
    logger.info('=> Loading custom Webpack config (full-control mode).');
    return customConfig({ config: finalDefaultConfig, mode: configType });
  }

  logger.info('=> Using default Webpack5 setup');
  return finalDefaultConfig;
}

export const webpackInstance = async () => webpackReal;
export const webpackVersion = async () => '5';
