import type { PluginOption } from 'vite';

function checkName(plugin: PluginOption, names: string[]) {
  return (
    plugin !== null && typeof plugin === 'object' && 'name' in plugin && names.includes(plugin.name)
  );
}

/**
 * Returns true if ANY of the plugins in the array have a name that matches one of the names in the names array.
 * Will resolve any promises in the array.
 */
export async function hasVitePlugins(plugins: PluginOption[], names: string[]) {
  const resolvedPlugins = await Promise.all(plugins);
  // eslint-disable-next-line no-restricted-syntax -- we need to await in the loop
  for (const plugin of resolvedPlugins) {
    // eslint-disable-next-line no-await-in-loop -- we need to await in the loop
    if (Array.isArray(plugin) && Boolean(await hasVitePlugins(plugin, names))) {
      return true;
    }
    if (checkName(plugin, names)) {
      return true;
    }
  }
  return false;
}
