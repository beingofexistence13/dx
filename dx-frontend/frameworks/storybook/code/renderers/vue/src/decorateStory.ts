import type { VueConstructor, ComponentOptions } from 'vue';
import Vue from 'vue';
import type { DecoratorFunction, StoryContext, LegacyStoryFn } from '@storybook/types';
import { sanitizeStoryContextUpdate } from '@storybook/preview-api';

import type { StoryFnVueReturnType, VueRenderer } from './types';
import { extractProps } from './util';
import { VALUES } from './render';

export const WRAPS = 'STORYBOOK_WRAPS';

function prepare(
  rawStory: StoryFnVueReturnType,
  innerStory?: StoryFnVueReturnType,
  context?: StoryContext<VueRenderer>
): VueConstructor | null {
  let story: ComponentOptions<Vue> | VueConstructor;

  if (typeof rawStory === 'string') {
    story = { template: rawStory };
  } else if (rawStory != null) {
    story = rawStory as ComponentOptions<Vue>;
  } else {
    return null;
  }

  // @ts-expect-error (Converted from ts-ignore)
  // eslint-disable-next-line no-underscore-dangle
  if (!story._isVue) {
    if (innerStory) {
      story.components = { ...(story.components || {}), story: innerStory };
    }
    story = Vue.extend(story);
    // @ts-expect-error // https://github.com/storybookjs/storybook/pull/7578#discussion_r307984824
  } else if (story.options[WRAPS]) {
    return story as VueConstructor;
  }

  return Vue.extend({
    // @ts-expect-error // https://github.com/storybookjs/storybook/pull/7578#discussion_r307985279
    [WRAPS]: story,
    [VALUES]: {
      // @ts-expect-error // https://github.com/storybookjs/storybook/pull/7578#discussion_r307984824
      ...(innerStory ? innerStory.options[VALUES] : {}),
      // @ts-expect-error // https://github.com/storybookjs/storybook/pull/7578#discussion_r307984824
      ...extractProps(story),
      ...(context?.args || {}),
    },
    functional: true,
    render(h, { data, parent, children }) {
      return h(
        story,
        {
          ...data,
          // @ts-expect-error // https://github.com/storybookjs/storybook/pull/7578#discussion_r307986196
          props: { ...(data.props || {}), ...parent.$root[VALUES] },
        },
        children
      );
    },
  });
}

export function decorateStory(
  storyFn: LegacyStoryFn<VueRenderer>,
  decorators: DecoratorFunction<VueRenderer>[]
) {
  return decorators.reduce(
    (decorated: LegacyStoryFn<VueRenderer>, decorator) => (context: StoryContext<VueRenderer>) => {
      let story: VueRenderer['storyResult'] | undefined;

      const decoratedStory = decorator((update) => {
        story = decorated({ ...context, ...sanitizeStoryContextUpdate(update) });
        return story;
      }, context);

      if (!story) {
        story = decorated(context);
      }

      if (decoratedStory === story) {
        return story;
      }

      return prepare(decoratedStory, story) as VueRenderer['storyResult'];
    },
    (context) => {
      return prepare(storyFn(context), undefined, context) as VueRenderer['storyResult'];
    }
  );
}
