import React from 'react';
import { ActiveTabs } from '@storybook/manager-api';
import type { DecoratorFn } from '@storybook/react';

import { BaseLocationProvider } from '@storybook/router';
import { Addon_TypesEnum } from '@storybook/types';
import type { MobileProps } from './mobile';
import { Mobile } from './mobile';

import { mockProps, realProps, MockPage } from './app.mockdata';

export default {
  title: 'Layout/Mobile',
  component: Mobile,
  parameters: {
    passArgsFirst: false,
    path: 'story/my-id',
    layout: 'fullscreen',
    viewport: {
      viewports: {
        mobile1: {
          name: 'Small mobile',
          styles: {
            height: '568px',
            width: '320px',
          },
          type: 'mobile',
        },
      },
      defaultViewport: 'mobile1',
      defaultOrientation: 'portrait',
    },
    theme: 'light',
    chromatic: { viewports: [320] },
  },
  decorators: [
    ((StoryFn, c) => {
      const mocked = true;

      const props = mocked ? mockProps : realProps;

      return (
        <BaseLocationProvider location={`/?path=/${c.parameters.path}`} navigator={{} as any}>
          <div style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0 }}>
            <StoryFn props={props} {...c} />
          </div>
        </BaseLocationProvider>
      );
    }) as DecoratorFn,
  ],
};

export const InitialSidebar = ({ props }: { props: MobileProps }) => (
  <Mobile {...props} options={{ ...props.options, initialActive: ActiveTabs.SIDEBAR }} />
);
export const InitialCanvas = ({ props }: { props: MobileProps }) => (
  <Mobile {...props} options={{ ...props.options, initialActive: ActiveTabs.CANVAS }} />
);
export const InitialAddons = ({ props }: { props: MobileProps }) => (
  <Mobile {...props} options={{ ...props.options, initialActive: ActiveTabs.ADDONS }} />
);
export const NoPanel = ({ props }: { props: MobileProps }) => (
  <Mobile {...props} options={{ ...props.options, showPanel: false }} />
);

export const Fullscreen = ({ props }: { props: MobileProps }) => (
  <Mobile
    {...props}
    options={{ ...props.options, initialActive: ActiveTabs.SIDEBAR, isFullscreen: true }}
  />
);

export const Page = ({ props }: { props: MobileProps }) => (
  <Mobile
    {...props}
    options={{ ...props.options, initialActive: ActiveTabs.CANVAS }}
    pages={[
      {
        id: 'settings',
        url: '/settings',
        title: 'Settings',
        type: Addon_TypesEnum.experimental_PAGE,
        render: () => <MockPage />,
      },
    ]}
    viewMode="settings"
  />
);
Page.parameters = {
  path: '/settings/',
};
