import { parameters as docsParams } from './docs/config';

export { renderToCanvas, render } from './render';

export const parameters: {} = { renderer: 'preact' as const, ...docsParams };
