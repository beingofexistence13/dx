import type { PluginOption } from 'vite';

/**
 * Recursively removes all plugins with the names given
 * Resolves async plugins
 */
export const withoutVitePlugins = async (
  plugins: PluginOption[] = [],
  namesToRemove: string[]
): Promise<PluginOption[]> => {
  const result = [];
  const resolvedPlugins = await Promise.all(plugins);
  // eslint-disable-next-line no-restricted-syntax -- we need to await in the loop
  for (const plugin of resolvedPlugins) {
    if (Array.isArray(plugin)) {
      // eslint-disable-next-line no-await-in-loop
      result.push(await withoutVitePlugins(plugin, namesToRemove));
    }
    if (plugin && 'name' in plugin && !namesToRemove.includes(plugin.name)) {
      result.push(plugin);
    }
  }
  return result;
};
