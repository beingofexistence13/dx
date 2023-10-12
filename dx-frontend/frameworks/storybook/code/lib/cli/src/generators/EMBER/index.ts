import { CoreBuilder } from '../../project_types';
import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(
    packageManager,
    npmOptions,
    { ...options, builder: CoreBuilder.Webpack5 },
    'ember',
    {
      extraPackages: [
        // babel-plugin-ember-modules-api-polyfill is a peerDep of @storybook/ember
        'babel-plugin-ember-modules-api-polyfill',
        // babel-plugin-htmlbars-inline-precompile is a peerDep of @storybook/ember
        'babel-plugin-htmlbars-inline-precompile',
      ],
      staticDir: 'dist',
    }
  );
};

export default generator;
