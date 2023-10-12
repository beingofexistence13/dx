import { start } from '@storybook/preview-api';

import './globals';
import type { EmberRenderer } from './types';
import { renderToCanvas } from './render';

const { configure: coreConfigure, clientApi, forceReRender } = start<EmberRenderer>(renderToCanvas);

export const { raw } = clientApi;

const RENDERER = 'ember';
export const storiesOf = (kind: string, m: any) =>
  clientApi.storiesOf(kind, m).addParameters({ renderer: RENDERER });
export const configure = (...args: any[]) => coreConfigure(RENDERER, ...args);

export { forceReRender };
