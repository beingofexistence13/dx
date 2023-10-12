import type { Addon_DecoratorFunction, ArgTypesEnhancer } from '@storybook/types';
import { extractComponentDescription, enhanceArgTypes } from '@storybook/docs-tools';

import { extractArgTypes } from './extractArgTypes';
import { jsxDecorator } from './jsxDecorator';
import type { StoryFnReactReturnType } from '../types';

export const parameters: {} = {
  docs: {
    story: { inline: true },
    extractArgTypes,
    extractComponentDescription,
  },
};

export const decorators: Addon_DecoratorFunction<StoryFnReactReturnType>[] = [jsxDecorator];

export const argTypesEnhancers: ArgTypesEnhancer[] = [enhanceArgTypes];
