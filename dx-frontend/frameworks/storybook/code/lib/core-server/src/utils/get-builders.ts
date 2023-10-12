import type { Builder, CoreConfig, Options } from '@storybook/types';
import { MissingBuilderError } from '@storybook/core-events/server-errors';
import { pathToFileURL } from 'node:url';

export async function getManagerBuilder(): Promise<Builder<unknown>> {
  return import('@storybook/builder-manager');
}

export async function getPreviewBuilder(
  builderName: string,
  configDir: string
): Promise<Builder<unknown>> {
  const builderPackage = require.resolve(
    ['webpack5'].includes(builderName) ? `@storybook/builder-${builderName}` : builderName,
    { paths: [configDir] }
  );
  const previewBuilder = await import(pathToFileURL(builderPackage).href);
  return previewBuilder;
}

export async function getBuilders({ presets, configDir }: Options): Promise<Builder<unknown>[]> {
  const { builder } = await presets.apply<CoreConfig>('core', {});

  if (!builder) {
    throw new MissingBuilderError();
  }

  const builderName = typeof builder === 'string' ? builder : builder.name;

  return Promise.all([getPreviewBuilder(builderName, configDir), getManagerBuilder()]);
}
