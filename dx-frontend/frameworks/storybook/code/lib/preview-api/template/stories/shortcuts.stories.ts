import { global as globalThis } from '@storybook/global';
import { userEvent, within } from '@storybook/testing-library';
import { PREVIEW_KEYDOWN } from '@storybook/core-events';
import { jest, expect } from '@storybook/jest';
import type { PlayFunctionContext } from '@storybook/csf';

export default {
  component: globalThis.Components.Form,
  tags: ['autodocs'],
};

export const KeydownDuringPlay = {
  play: async ({ canvasElement }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;

    const previewKeydown = jest.fn();
    channel.on(PREVIEW_KEYDOWN, previewKeydown);
    const button = await within(canvasElement).findByText('Submit');
    await userEvent.type(button, 's');

    await expect(previewKeydown).not.toBeCalled();
  },
};
