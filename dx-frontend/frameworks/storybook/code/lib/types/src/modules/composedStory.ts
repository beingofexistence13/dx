/* eslint-disable @typescript-eslint/naming-convention */

import type { Renderer, StoryId } from '@storybook/csf';

import type {
  AnnotatedStoryFn,
  Args,
  ComponentAnnotations,
  Parameters,
  StoryAnnotations,
  StoryAnnotationsOrFn,
  StoryContext,
} from './csf';

import type { ProjectAnnotations } from './story';

// TODO -- I think the name "CSFExports" overlaps here a bit with the types in csfFile.ts
// we might want to reconcile @yannbf
export type Store_CSFExports<TRenderer extends Renderer = Renderer, TArgs extends Args = Args> = {
  default: ComponentAnnotations<TRenderer, TArgs>;
  __esModule?: boolean;
  __namedExportsOrder?: string[];
};

/**
 * Type for the play function returned by a composed story, which will contain everything needed in the context,
 * except the canvasElement, which should be passed by the user.
 * It's useful for scenarios where the user wants to execute the play function in test environments, e.g.
 *
 * const { PrimaryButton } = composeStories(stories)
 * const { container } = render(<PrimaryButton />) // or PrimaryButton()
 * PrimaryButton.play({ canvasElement: container })
 */
export type ComposedStoryPlayContext<TRenderer extends Renderer = Renderer, TArgs = Args> = Partial<
  StoryContext<TRenderer, TArgs> & Pick<StoryContext<TRenderer, TArgs>, 'canvasElement'>
>;

export type ComposedStoryPlayFn<TRenderer extends Renderer = Renderer, TArgs = Args> = (
  context: ComposedStoryPlayContext<TRenderer, TArgs>
) => Promise<void> | void;

/**
 * A story function with partial args, used internally by composeStory
 */
export type PartialArgsStoryFn<TRenderer extends Renderer = Renderer, TArgs = Args> = (
  args?: TArgs
) => (TRenderer & {
  T: TArgs;
})['storyResult'];

/**
 * A story that got recomposed for portable stories, containing all the necessary data to be rendered in external environments
 */
export type ComposedStoryFn<
  TRenderer extends Renderer = Renderer,
  TArgs = Args
> = PartialArgsStoryFn<TRenderer, TArgs> & {
  play: ComposedStoryPlayFn<TRenderer, TArgs>;
  args: TArgs;
  id: StoryId;
  storyName: string;
  parameters: Parameters;
};
/**
 * Based on a module of stories, it returns all stories within it, filtering non-stories
 * Each story will have partial props, as their props should be handled when composing stories
 */
export type StoriesWithPartialProps<TRenderer extends Renderer, TModule> = {
  // T represents the whole ES module of a stories file. K of T means named exports (basically the Story type)
  // 1. pick the keys K of T that have properties that are Story<AnyProps>
  // 2. infer the actual prop type for each Story
  // 3. reconstruct Story with Partial. Story<Props> -> Story<Partial<Props>>
  [K in keyof TModule as TModule[K] extends StoryAnnotationsOrFn<infer _, infer _TProps>
    ? K
    : never]: TModule[K] extends StoryAnnotationsOrFn<infer _, infer TProps>
    ? ComposedStoryFn<TRenderer, Partial<TProps>>
    : unknown;
};

/**
 * Type used for integrators of portable stories, as reference when creating their own composeStory function
 */
export interface ComposeStoryFn<TRenderer extends Renderer = Renderer, TArgs extends Args = Args> {
  (
    storyAnnotations: AnnotatedStoryFn<TRenderer, TArgs> | StoryAnnotations<TRenderer, TArgs>,
    componentAnnotations: ComponentAnnotations<TRenderer, TArgs>,
    projectAnnotations: ProjectAnnotations<TRenderer>,
    exportsName?: string
  ): ComposedStoryFn;
}
