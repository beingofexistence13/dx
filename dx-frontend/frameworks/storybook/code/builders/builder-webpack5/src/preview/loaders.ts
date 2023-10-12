import { getProjectRoot } from '@storybook/core-common';
import type { Options } from '@swc/core';
import { dedent } from 'ts-dedent';
import { logger } from '@storybook/node-logger';
import type { TypescriptOptions } from '../types';

export const createBabelLoader = (
  options: any,
  typescriptOptions: TypescriptOptions,
  excludes: string[] = []
) => {
  return {
    test: typescriptOptions.skipBabel ? /\.(mjs|jsx?)$/ : /\.(mjs|tsx?|jsx?)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options,
      },
    ],
    include: [getProjectRoot()],
    exclude: [/node_modules/, ...excludes],
  };
};

export const createSWCLoader = (excludes: string[] = []) => {
  logger.warn(dedent`
    The SWC loader is an experimental feature and may change or even be removed at any time.
  `);

  const config: Options = {
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true,
        dynamicImport: true,
      },
    },
  };
  return {
    test: /\.(mjs|cjs|tsx?|jsx?)$/,
    use: [
      {
        loader: require.resolve('swc-loader'),
        options: config,
      },
    ],
    include: [getProjectRoot()],
    exclude: [/node_modules/, ...excludes],
  };
};
