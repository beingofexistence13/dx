import type { FC, ComponentProps } from 'react';
import React, { useContext } from 'react';
import type {
  Renderer,
  ModuleExport,
  ModuleExports,
  PreparedStory,
  StoryAnnotations,
  StoryId,
} from '@storybook/types';
import { deprecate } from '@storybook/client-logger';

import dedent from 'ts-dedent';
import { Story as PureStory, StorySkeleton } from '../components';
import type { DocsContextProps } from './DocsContext';
import { DocsContext } from './DocsContext';
import { useStory } from './useStory';

type PureStoryProps = ComponentProps<typeof PureStory>;

/**
 * Props to define a story
 *
 * @deprecated Define stories in CSF files
 */
type StoryDefProps = StoryAnnotations;

/**
 * Props to reference another story
 */
type StoryRefProps = {
  /**
   * @deprecated Use of={storyExport} instead
   */
  id?: string;
  /**
   * @deprecated Use of={storyExport} and define the story in the CSF file
   */
  story?: StoryAnnotations;
  /**
   * Pass the export defining a story to render that story
   *
   * ```jsx
   * import { Meta, Story } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Meta of={ButtonStories} />
   * <Story of={ButtonStories.Primary} />
   * ```
   */
  of?: ModuleExport;
  /**
   * Pass all exports of the CSF file if this MDX file is unattached
   *
   * ```jsx
   * import { Story } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Story of={ButtonStories.Primary} meta={ButtonStories} />
   * ```
   */
  meta?: ModuleExports;
};

type StoryParameters = {
  /**
   * Render the story inline or in an iframe
   */
  inline?: boolean;
  /**
   * When rendering in an iframe (`inline={false}`), set the story height
   */
  height?: string;
  /**
   * Whether to run the story's play function
   */
  autoplay?: boolean;
  /**
   * Internal prop to control if a story re-renders on args updates
   */
  __forceInitialArgs?: boolean;
  /**
   * Internal prop if this story is the primary story
   */
  __primary?: boolean;
};

export type StoryProps = (StoryDefProps | StoryRefProps) & StoryParameters;

export const getStoryId = (props: StoryProps, context: DocsContextProps): StoryId => {
  const { id, of, meta, story } = props as StoryRefProps;
  if ('of' in props && of === undefined) {
    throw new Error('Unexpected `of={undefined}`, did you mistype a CSF file reference?');
  }

  if (id) {
    deprecate(dedent`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`);
    return id;
  }

  const { name } = props as StoryDefProps;
  if (name) {
    deprecate(dedent`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`);
    return context.storyIdByName(name);
  }

  // The `story={moduleExports}` prop is a legacy prop for stories defined in CSF files, but
  // "declared" in MDX files (the CSF file has no meta export or doesn't match the stories glob).
  // In this case, the `.stories.mdx` file will have actually ended up declaring the story
  // so we can reference the story just the same as an `of={moduleExports}` would have.
  // See https://github.com/storybookjs/mdx2-csf/issues/3
  if (story) {
    deprecate(dedent`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`);
  }

  if (meta) context.referenceMeta(meta, false);
  const resolved = context.resolveOf(of || story || 'story', ['story']);
  return resolved.story.id;
};

export const getStoryProps = <TFramework extends Renderer>(
  props: StoryParameters,
  story: PreparedStory<TFramework>,
  context: DocsContextProps<TFramework>
): PureStoryProps => {
  const { parameters = {} } = story || {};
  const { docs = {} } = parameters;
  const storyParameters = (docs.story || {}) as StoryParameters & { iframeHeight?: string };

  if (docs.disable) {
    return null;
  }

  // prefer block props, then story parameters defined by the framework-specific settings
  // and optionally overridden by users

  // Deprecated parameters
  const { inlineStories, iframeHeight } = docs as {
    inlineStories?: boolean;
    iframeHeight?: string;
    autoplay?: boolean;
  };
  if (typeof inlineStories !== 'undefined')
    deprecate(dedent`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  const inline = props.inline ?? storyParameters.inline ?? inlineStories ?? false;

  if (typeof iframeHeight !== 'undefined') {
    deprecate(dedent`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);
  }

  if (inline) {
    const height = props.height ?? storyParameters.height;
    const autoplay = props.autoplay ?? storyParameters.autoplay ?? false;
    return {
      story,
      inline: true,
      height,
      autoplay,
      // eslint-disable-next-line no-underscore-dangle
      forceInitialArgs: !!props.__forceInitialArgs,
      // eslint-disable-next-line no-underscore-dangle
      primary: !!props.__primary,
      renderStoryToElement: context.renderStoryToElement,
    };
  }

  const height =
    props.height ??
    storyParameters.height ??
    storyParameters.iframeHeight ??
    iframeHeight ??
    '100px';
  return {
    story,
    inline: false,
    height,
    // eslint-disable-next-line no-underscore-dangle
    primary: !!props.__primary,
  };
};

const Story: FC<StoryProps> = (props = { __forceInitialArgs: false, __primary: false }) => {
  const context = useContext(DocsContext);
  const storyId = getStoryId(props, context);
  const story = useStory(storyId, context);

  if (!story) {
    return <StorySkeleton />;
  }

  const storyProps = getStoryProps(props, story, context);
  if (!storyProps) {
    return null;
  }

  return <PureStory {...storyProps} />;
};

export { Story };
