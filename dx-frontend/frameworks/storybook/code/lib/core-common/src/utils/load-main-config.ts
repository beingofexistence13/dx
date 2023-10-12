import path from 'path';
import type { StorybookConfig } from '@storybook/types';
import { serverRequire, serverResolve } from './interpret-require';
import { validateConfigurationFiles } from './validate-configuration-files';

export async function loadMainConfig({
  configDir = '.storybook',
  noCache = false,
}: {
  configDir: string;
  noCache?: boolean;
}): Promise<StorybookConfig> {
  await validateConfigurationFiles(configDir);

  const mainJsPath = serverResolve(path.resolve(configDir, 'main')) as string;

  if (noCache && mainJsPath && require.cache[mainJsPath]) {
    delete require.cache[mainJsPath];
  }

  return serverRequire(mainJsPath);
}
