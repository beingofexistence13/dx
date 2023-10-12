import { parameters as docsParams } from './docs/config';

export const parameters: {} = { renderer: 'react', ...docsParams };

export { decorators, argTypesEnhancers } from './docs/config';

export { render, renderToCanvas } from './render';

export { applyDecorators } from './applyDecorators';
