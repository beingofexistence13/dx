import type { Addon_DecoratorFunction } from '@storybook/types';
import { withLinks } from './index';

export const decorators: Addon_DecoratorFunction[] = [withLinks];
