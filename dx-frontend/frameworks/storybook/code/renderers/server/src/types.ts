import type { StoryContext as StoryContextBase, WebRenderer } from '@storybook/types';

export type { RenderContext } from '@storybook/types';

export type StoryFnServerReturnType = any;
export type StoryContext = StoryContextBase<ServerRenderer>;

/**
 * @deprecated Use `ServerRenderer` instead.
 */
export type ServerFramework = ServerRenderer;
export interface ServerRenderer extends WebRenderer {
  component: string;
  storyResult: StoryFnServerReturnType;
}

export type FetchStoryHtmlType = (
  url: string,
  id: string,
  params: any,
  context: StoryContext
) => Promise<string | Node>;

export interface ShowErrorArgs {
  title: string;
  description: string;
}
