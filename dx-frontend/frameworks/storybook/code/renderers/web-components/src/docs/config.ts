import type { Addon_DecoratorFunction, ArgTypesEnhancer } from '@storybook/types';
import { SourceType, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes, extractComponentDescription } from './custom-elements';
import { sourceDecorator } from './sourceDecorator';
import type { StoryFnHtmlReturnType } from '../types';

export const decorators: Addon_DecoratorFunction<StoryFnHtmlReturnType>[] = [sourceDecorator];

export const parameters: object = {
  docs: {
    extractArgTypes,
    extractComponentDescription,
    story: { inline: true },
    source: {
      type: SourceType.DYNAMIC,
      language: 'html',
    },
  },
};

export const argTypesEnhancers: ArgTypesEnhancer[] = [enhanceArgTypes];
