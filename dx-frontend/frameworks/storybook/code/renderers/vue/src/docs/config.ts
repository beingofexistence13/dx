import type { Addon_DecoratorFunction, ArgTypesEnhancer } from '@storybook/types';
import { extractComponentDescription, enhanceArgTypes } from '@storybook/docs-tools';
import { extractArgTypes } from './extractArgTypes';
import { sourceDecorator } from './sourceDecorator';

export const parameters: {} = {
  docs: {
    story: { inline: true, iframeHeight: '120px' },
    extractArgTypes,
    extractComponentDescription,
  },
};

export const decorators: Addon_DecoratorFunction<any>[] = [sourceDecorator];

export const argTypesEnhancers: ArgTypesEnhancer[] = [enhanceArgTypes];
