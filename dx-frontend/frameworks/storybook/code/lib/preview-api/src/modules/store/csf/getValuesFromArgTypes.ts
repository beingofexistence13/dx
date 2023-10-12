import type { ArgTypes } from '@storybook/types';

export const getValuesFromArgTypes = (argTypes: ArgTypes = {}) =>
  Object.entries(argTypes).reduce((acc, [arg, { defaultValue }]) => {
    if (typeof defaultValue !== 'undefined') {
      acc[arg] = defaultValue;
    }
    return acc;
  }, {} as ArgTypes);
