import type { Addon_DecoratorFunction, ArgTypesEnhancer } from '@storybook/types';
import { enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes } from './extractArgTypes';
import { extractComponentDescription } from './extractComponentDescription';
import { sourceDecorator } from './sourceDecorator';

export const parameters: {} = {
  docs: {
    story: { inline: true },
    extractArgTypes,
    extractComponentDescription,
  },
};

export const decorators: Addon_DecoratorFunction<unknown>[] = [sourceDecorator];

export const argTypesEnhancers: ArgTypesEnhancer[] = [enhanceArgTypes];
