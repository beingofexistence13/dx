import { baseGenerator } from '../baseGenerator';
import type { Generator } from '../types';

const generator: Generator = async (packageManager, npmOptions, options) => {
  await baseGenerator(packageManager, npmOptions, options, 'svelte', {
    extensions: ['js', 'jsx', 'ts', 'tsx', 'svelte'],
  });
};

export default generator;
