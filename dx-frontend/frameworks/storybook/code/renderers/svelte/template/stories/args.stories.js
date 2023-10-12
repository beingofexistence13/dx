import { expect } from '@storybook/jest';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import {
  UPDATE_STORY_ARGS,
  STORY_ARGS_UPDATED,
  RESET_STORY_ARGS,
  STORY_RENDERED,
} from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import ButtonView from './views/ButtonView.svelte';

export default {
  component: ButtonView,
};

export const RemountOnResetStoryArgs = {
  play: async ({ canvasElement, id }) => {
    const canvas = await within(canvasElement);
    const channel = addons.getChannel();

    // Just to ensure the story is always in a clean state from the beginning, not really part of the test
    await channel.emit(RESET_STORY_ARGS, { storyId: id });
    await new Promise((resolve) => {
      channel.once(STORY_RENDERED, resolve);
    });
    const button = await canvas.getByRole('button');
    await expect(button).toHaveTextContent('You clicked: 0');

    await userEvent.click(button);
    await expect(button).toHaveTextContent('You clicked: 1');

    await channel.emit(UPDATE_STORY_ARGS, { storyId: id, updatedArgs: { text: 'Changed' } });
    await new Promise((resolve) => {
      channel.once(STORY_RENDERED, resolve);
    });
    await expect(button).toHaveTextContent('Changed: 1');

    // expect that all state and args are reset after RESET_STORY_ARGS because Svelte needs to remount the component
    // most other renderers would have 'You clicked: 1' here because they don't remount the component
    // if this doesn't fully remount it would be 'undefined: 1' because undefined args are used as is in Svelte, and the state is kept
    await channel.emit(RESET_STORY_ARGS, { storyId: id });
    await waitFor(async () =>
      expect(await within(canvasElement).getByRole('button')).toHaveTextContent('You clicked: 0')
    );
  },
};
