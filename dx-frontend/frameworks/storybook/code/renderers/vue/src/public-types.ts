import type {
  AnnotatedStoryFn,
  Args,
  ArgsFromMeta,
  ArgsStoryFn,
  ComponentAnnotations,
  DecoratorFunction,
  LoaderFunction,
  StoryAnnotations,
  StoryContext as GenericStoryContext,
  StrictArgs,
  ProjectAnnotations,
} from '@storybook/types';
import type { SetOptional, Simplify } from 'type-fest';
import type { Component } from 'vue';
import type { ExtendedVue } from 'vue/types/vue';
import type { VueRenderer } from './types';

export type { Args, ArgTypes, Parameters, StrictArgs } from '@storybook/types';
export type { VueRenderer };

/**
 * Metadata to configure the stories for a component.
 *
 * @see [Default export](https://storybook.js.org/docs/formats/component-story-format/#default-export)
 */
export type Meta<TCmpOrArgs = Args> = ComponentAnnotations<
  VueRenderer,
  ComponentPropsOrProps<TCmpOrArgs>
>;

/**
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryFn<TCmpOrArgs = Args> = AnnotatedStoryFn<
  VueRenderer,
  ComponentPropsOrProps<TCmpOrArgs>
>;

/**
 * Story function that represents a CSFv3 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type StoryObj<TMetaOrCmpOrArgs = Args> = TMetaOrCmpOrArgs extends {
  render?: ArgsStoryFn<VueRenderer, any>;
  component?: infer C;
  args?: infer DefaultArgs;
}
  ? TMetaOrCmpOrArgs extends Component<any> // needed because StoryObj<typeof Button> falls into this branch, see test
    ? StoryAnnotations<VueRenderer, ComponentPropsOrProps<TMetaOrCmpOrArgs>>
    : Simplify<ComponentProps<C> & ArgsFromMeta<VueRenderer, TMetaOrCmpOrArgs>> extends infer TArgs
    ? StoryAnnotations<
        VueRenderer,
        TArgs,
        SetOptional<TArgs, Extract<keyof TArgs, keyof DefaultArgs>>
      >
    : never
  : StoryAnnotations<VueRenderer, ComponentPropsOrProps<TMetaOrCmpOrArgs>>;

type ComponentProps<C> = C extends ExtendedVue<any, any, any, any, infer P>
  ? P
  : C extends Component<any, any, any, infer P>
  ? P
  : unknown;

type ComponentPropsOrProps<TCmpOrArgs> = TCmpOrArgs extends Component<any>
  ? unknown extends ComponentProps<TCmpOrArgs>
    ? TCmpOrArgs
    : ComponentProps<TCmpOrArgs>
  : TCmpOrArgs;

/**
 * @deprecated Use `StoryFn` instead.
 * Use `StoryObj` if you want to migrate to CSF3, which uses objects instead of functions to represent stories.
 * You can read more about the CSF3 format here: https://storybook.js.org/blog/component-story-format-3-0/
 *
 * Story function that represents a CSFv2 component example.
 *
 * @see [Named Story exports](https://storybook.js.org/docs/formats/component-story-format/#named-story-exports)
 */
export type Story<TArgs = Args> = StoryFn<TArgs>;

export type Decorator<TArgs = StrictArgs> = DecoratorFunction<VueRenderer, TArgs>;
export type Loader<TArgs = StrictArgs> = LoaderFunction<VueRenderer, TArgs>;
export type StoryContext<TArgs = StrictArgs> = GenericStoryContext<VueRenderer, TArgs>;
export type Preview = ProjectAnnotations<VueRenderer>;
