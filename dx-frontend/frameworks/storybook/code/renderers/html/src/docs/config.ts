import type { Addon_DecoratorFunction, ArgTypesEnhancer } from '@storybook/types';
import { SourceType, enhanceArgTypes } from '@storybook/docs-tools';

import { sourceDecorator } from './sourceDecorator';
import type { Parameters, StoryFnHtmlReturnType } from '../types';

export const decorators: Addon_DecoratorFunction<StoryFnHtmlReturnType>[] = [
  sourceDecorator as Addon_DecoratorFunction<StoryFnHtmlReturnType>,
];

export const parameters: Partial<Parameters> = {
  docs: {
    story: { inline: true },
    source: {
      type: SourceType.DYNAMIC,
      language: 'html',
      code: undefined,
      excludeDecorators: undefined,
    },
  },
};

export const argTypesEnhancers: ArgTypesEnhancer[] = [enhanceArgTypes];
