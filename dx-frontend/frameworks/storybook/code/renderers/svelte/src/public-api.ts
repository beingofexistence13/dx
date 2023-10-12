/* eslint-disable prefer-destructuring */
import { start } from '@storybook/preview-api';
import type { Addon_ClientStoryApi, Addon_Loadable } from '@storybook/types';
import { decorateStory } from './decorators';

import type { SvelteRenderer } from './types';
import { render, renderToCanvas } from './render';

const RENDERER = 'svelte';

interface ClientApi extends Addon_ClientStoryApi<SvelteRenderer['storyResult']> {
  configure(loader: Addon_Loadable, module: NodeModule): void;
  forceReRender(): void;
  raw: () => any; // todo add type
}

const api = start<SvelteRenderer>(renderToCanvas, {
  decorateStory,
  render,
});

export const storiesOf: ClientApi['storiesOf'] = (kind, m) => {
  return (api.clientApi.storiesOf(kind, m) as ReturnType<ClientApi['storiesOf']>).addParameters({
    renderer: RENDERER,
  });
};

export const configure: ClientApi['configure'] = (...args) => api.configure(RENDERER, ...args);
export const forceReRender: ClientApi['forceReRender'] = api.forceReRender;
export const raw: ClientApi['raw'] = api.clientApi.raw;
