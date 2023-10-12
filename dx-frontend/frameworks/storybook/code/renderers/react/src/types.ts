import type { ComponentType, ReactElement } from 'react';
import type { WebRenderer } from '@storybook/types';

export type { RenderContext } from '@storybook/types';
export type { StoryContext } from '@storybook/types';

/**
 * @deprecated Use `ReactRenderer` instead.
 */
export type ReactFramework = ReactRenderer;
export interface ReactRenderer extends WebRenderer {
  component: ComponentType<this['T']>;
  storyResult: StoryFnReactReturnType;
}

export interface ShowErrorArgs {
  title: string;
  description: string;
}

export type StoryFnReactReturnType = ReactElement<unknown>;
