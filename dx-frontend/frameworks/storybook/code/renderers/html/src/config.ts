import { parameters as docsParams } from './docs/config';
import type { Parameters } from './types';

export const parameters: Parameters = { renderer: 'html', ...docsParams };

export { decorators, argTypesEnhancers } from './docs/config';
export { renderToCanvas, render } from './render';
