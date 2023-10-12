import type { Configuration } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const mergePlugins = (...args: Configuration['plugins']): Configuration['plugins'] =>
  args.reduce((plugins, plugin) => {
    if (
      plugins.some(
        (includedPlugin) => includedPlugin.constructor.name === plugin.constructor.name
      ) ||
      plugin.constructor.name === 'WebpackManifestPlugin'
    ) {
      return plugins;
    }
    let updatedPlugin = plugin;
    if (plugin.constructor.name === 'ReactRefreshPlugin') {
      // Storybook uses webpack-hot-middleware
      // https://github.com/storybookjs/presets/issues/177

      updatedPlugin = new ReactRefreshWebpackPlugin({
        overlay: {
          sockIntegration: 'whm',
        },
      });
    }
    return [...plugins, updatedPlugin];
  }, [] as Configuration['plugins']);
