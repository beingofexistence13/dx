import fs from 'fs';
import path from 'path';
import type {
  Renderer,
  ArgsEnhancer,
  ArgTypesEnhancer,
  NormalizedStoriesSpecifier,
  StoriesEntry,
  DecoratorFunction,
} from '@storybook/types';
import { toRequireContext } from '@storybook/core-webpack';
import { normalizeStoriesEntry } from '@storybook/core-common';
import registerRequireContextHook from '@storybook/babel-plugin-require-context-hook/register';
import { global } from '@storybook/global';

import type { ClientApi } from './Loader';
import type { StoryshotsOptions } from '../api/StoryshotsOptions';

registerRequireContextHook();

const isFile = (file: string): boolean => {
  try {
    return fs.lstatSync(file).isFile();
  } catch (e) {
    return false;
  }
};

interface Output {
  features?: Record<string, boolean>;
  preview?: string;
  stories?: NormalizedStoriesSpecifier[];
  requireContexts?: string[];
}

const supportedExtensions = ['ts', 'tsx', 'js', 'jsx', 'cjs', 'mjs'];

const resolveFile = (configDir: string, supportedFilenames: string[]) =>
  supportedFilenames
    .flatMap((filename) =>
      supportedExtensions.map((ext) => path.join(configDir, `${filename}.${ext}`))
    )
    .find(isFile) || false;

export const getPreviewFile = (configDir: string): string | false =>
  resolveFile(configDir, ['preview', 'config']);

export const getMainFile = (configDir: string): string | false => resolveFile(configDir, ['main']);

function getConfigPathParts(input: string): Output {
  const configDir = path.resolve(input);

  if (fs.lstatSync(configDir).isDirectory()) {
    const output: Output = {};

    const preview = getPreviewFile(configDir);
    const main = getMainFile(configDir);

    if (preview) {
      output.preview = preview;
    }
    if (main) {
      const { default: defaultExport, ...rest } = jest.requireActual(main);
      const { stories = [], features = {} } = defaultExport || rest;

      output.features = features;

      const workingDir = process.cwd();
      output.stories = stories.map((entry: StoriesEntry) => {
        const specifier = normalizeStoriesEntry(entry, {
          configDir,
          workingDir,
        });

        return specifier;
      });
      output.requireContexts = output.stories?.map((specifier) => {
        const { path: basePath, recursive, match } = toRequireContext(specifier);

        // eslint-disable-next-line no-underscore-dangle
        return global.__requireContext(workingDir, basePath, recursive, match);
      });
    }

    return output;
  }

  return { preview: configDir };
}

function configure<TRenderer extends Renderer>(
  options: {
    storybook: ClientApi<TRenderer>;
  } & StoryshotsOptions
): void {
  const { configPath = '.storybook', config, storybook } = options;

  if (config && typeof config === 'function') {
    config(storybook);
    return;
  }

  const {
    preview,
    features = {},
    stories = [],
    requireContexts = [],
  } = getConfigPathParts(configPath);

  global.FEATURES = features;
  global.CONFIG_TYPE = 'DEVELOPMENT';
  global.STORIES = stories.map((specifier) => ({
    ...specifier,
    importPathMatcher: specifier.importPathMatcher.source,
  }));

  if (preview) {
    // This is essentially the same code as builders/builder-webpack5/templates/virtualModuleEntry.template
    const {
      parameters,
      decorators,
      globals,
      globalTypes,
      argsEnhancers,
      argTypesEnhancers,
      runStep,
    } = jest.requireActual(preview);

    if (decorators) {
      decorators.forEach((decorator: DecoratorFunction<TRenderer>) =>
        storybook.addDecorator(decorator)
      );
    }
    if (parameters || globals || globalTypes) {
      storybook.addParameters({ ...parameters, globals, globalTypes });
    }
    if (runStep) {
      storybook.addStepRunner(runStep);
    }
    if (argsEnhancers) {
      argsEnhancers.forEach((enhancer: ArgsEnhancer<TRenderer>) =>
        storybook.addArgsEnhancer(enhancer as any)
      );
    }
    if (argTypesEnhancers) {
      argTypesEnhancers.forEach((enhancer: ArgTypesEnhancer<TRenderer>) =>
        storybook.addArgTypesEnhancer(enhancer as any)
      );
    }
  }

  if (requireContexts && requireContexts.length) {
    storybook.configure(requireContexts, false, false);
  }
}

export default configure;
