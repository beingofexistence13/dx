/* eslint-disable no-param-reassign */
import type { RenderContext, ArgsStoryFn } from '@storybook/types';
import type { SvelteComponentTyped } from 'svelte';
import { RESET_STORY_ARGS } from '@storybook/core-events';
// ! DO NOT change this PreviewRender import to a relative path, it will break it.
// ! A relative import will be compiled at build time, and Svelte will be unable to
// ! render the component together with the user's Svelte components
// ! importing from @storybook/svelte will make sure that it is compiled at runtime
// ! with the same bundle as the user's Svelte components
// eslint-disable-next-line import/no-extraneous-dependencies
import PreviewRender from '@storybook/svelte/templates/PreviewRender.svelte';
import { addons } from '@storybook/preview-api';

import type { SvelteRenderer } from './types';

const componentsByDomElement = new Map<SvelteRenderer['canvasElement'], SvelteComponentTyped>();

function teardown(canvasElement: SvelteRenderer['canvasElement']) {
  if (!componentsByDomElement.has(canvasElement)) {
    return;
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- we know it exists because we just checked
  componentsByDomElement.get(canvasElement)!.$destroy();

  canvasElement.innerHTML = '';
  componentsByDomElement.delete(canvasElement);
}

/**
 * This is a workaround for the issue that when resetting args,
 * the story needs to be remounted completely to revert to the component's default props.
 * This is because Svelte does not itself revert to defaults when a prop is undefined.
 * See https://github.com/storybookjs/storybook/issues/21470#issuecomment-1467056479
 *
 * We listen for the RESET_STORY_ARGS event and store the storyId to be reset
 * We then use this in the renderToCanvas function to force remount the story
 */
const storyIdsToRemountFromResetArgsEvent = new Set<string>();
addons.getChannel().on(RESET_STORY_ARGS, ({ storyId }) => {
  storyIdsToRemountFromResetArgsEvent.add(storyId);
});

export function renderToCanvas(
  {
    storyFn,
    kind,
    name,
    showMain,
    showError,
    storyContext,
    forceRemount,
  }: RenderContext<SvelteRenderer>,
  canvasElement: SvelteRenderer['canvasElement']
) {
  const existingComponent = componentsByDomElement.get(canvasElement);

  let remount = forceRemount;

  if (storyIdsToRemountFromResetArgsEvent.has(storyContext.id)) {
    remount = true;
    storyIdsToRemountFromResetArgsEvent.delete(storyContext.id);
  }

  if (remount) {
    teardown(canvasElement);
  }

  if (!existingComponent || remount) {
    const createdComponent = new PreviewRender({
      target: canvasElement,
      props: {
        storyFn,
        storyContext,
        name,
        kind,
        showError,
      },
    }) as SvelteComponentTyped;
    componentsByDomElement.set(canvasElement, createdComponent);
  } else {
    existingComponent.$set({
      storyFn,
      storyContext,
      name,
      kind,
      showError,
    });
  }

  showMain();

  // teardown the component when the story changes
  return () => {
    teardown(canvasElement);
  };
}

export const render: ArgsStoryFn<SvelteRenderer> = (args, context) => {
  const { id, component: Component } = context;
  if (!Component) {
    throw new Error(
      `Unable to render story ${id} as the component annotation is missing from the default export`
    );
  }

  return { Component, props: args };
};
