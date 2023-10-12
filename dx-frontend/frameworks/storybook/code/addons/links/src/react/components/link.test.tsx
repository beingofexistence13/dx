import React from 'react';
import { addons } from '@storybook/preview-api';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SELECT_STORY } from '@storybook/core-events';
import LinkTo from './link';

jest.mock('@storybook/preview-api');
jest.mock('@storybook/global', () => ({
  global: {
    document: {
      location: {
        origin: 'origin',
        pathname: 'pathname',
        search: 'search',
      },
    },
    window: global,
    __STORYBOOK_STORY_STORE__: {
      fromId: jest.fn(() => ({})),
    },
  },
}));

const mockChannel = () => {
  return {
    emit: jest.fn(),
    on: jest.fn(),
    once: jest.fn(),
  };
};
const mockAddons = addons as unknown as jest.Mocked<typeof addons>;

describe('LinkTo', () => {
  describe('render', () => {
    it('should render a link', async () => {
      const channel = mockChannel() as any;
      mockAddons.getChannel.mockReturnValue(channel);

      const { container } = render(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <LinkTo title="foo" name="bar">
          link
        </LinkTo>
      );

      await waitFor(() => {
        expect(screen.getByText('link')).toHaveAttribute(
          'href',
          'originpathname?path=/story/foo--bar'
        );
      });
      expect(container.firstChild).toMatchInlineSnapshot(`
        <a
          href="originpathname?path=/story/foo--bar"
        >
          link
        </a>
      `);
    });
  });

  describe('events', () => {
    it('should select the kind and story on click', () => {
      const channel = {
        emit: jest.fn(),
        on: jest.fn(),
      } as any;
      mockAddons.getChannel.mockReturnValue(channel);

      render(
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <LinkTo title="foo" name="bar">
          link
        </LinkTo>
      );
      userEvent.click(screen.getByText('link'));

      expect(channel.emit).toHaveBeenLastCalledWith(
        SELECT_STORY,
        expect.objectContaining({
          title: 'foo',
          name: 'bar',
        })
      );
    });
  });
});
