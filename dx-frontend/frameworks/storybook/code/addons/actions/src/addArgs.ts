import type { ArgsEnhancer } from '@storybook/types';
import { addActionsFromArgTypes, inferActionsFromArgTypesRegex } from './addArgsHelpers';

export const argsEnhancers: ArgsEnhancer[] = [
  addActionsFromArgTypes,
  inferActionsFromArgTypesRegex,
];
