import { CoreBuilder } from '../../project_types';
import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(packageManager, npmOptions, options, 'vue', {
    extraPackages: async ({ builder }) => {
      return builder === CoreBuilder.Webpack5 ? ['vue-loader@^15.7.0'] : [];
    },
  });
};

export default generator;
