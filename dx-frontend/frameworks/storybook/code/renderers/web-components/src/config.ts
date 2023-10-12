import { parameters as docsParams } from './docs/config';

export const parameters: {} = { renderer: 'web-components' as const, ...docsParams };
export { decorators, argTypesEnhancers } from './docs/config';
export { render, renderToCanvas } from './render';
