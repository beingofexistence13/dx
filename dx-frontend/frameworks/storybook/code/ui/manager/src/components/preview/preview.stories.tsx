import React from 'react';

import { parsePath, createPath } from 'history';
import type { Combo, StoryEntry } from '@storybook/manager-api';
import { Provider as ManagerProvider, Consumer } from '@storybook/manager-api';
import { Location, BaseLocationProvider } from '@storybook/router';

import { ThemeProvider, ensure as ensureTheme, themes } from '@storybook/theming';

import type { DecoratorFn } from '@storybook/react';
import { Preview } from './preview';

import { PrettyFakeProvider } from '../../FakeProvider';
import { previewProps } from './preview.mockdata';

const provider = new PrettyFakeProvider();
const staticNavigator = {
  createHref(to: any) {
    return typeof to === 'string' ? to : createPath(to);
  },

  push() {},

  replace() {},

  go() {},

  back() {},

  forward() {},
};

export default {
  title: 'Preview',
  component: Preview,
  decorators: [
    ((StoryFn, c) => {
      const locationProp = parsePath('/?path=/story/story--id');

      const location = {
        pathname: locationProp.pathname || '/',
        search: locationProp.search || '',
        hash: locationProp.hash || '',
        // @ts-expect-error (invalid input)
        state: null,
        key: 'default',
      };

      return (
        <BaseLocationProvider
          key="location.provider"
          basename={undefined}
          location={location}
          navigator={staticNavigator}
          static
        >
          <Location key="location.consumer">
            {(locationData) => (
              <ManagerProvider
                key="manager"
                provider={provider}
                {...locationData}
                docsOptions={{ docsMode: false }}
                path="/story/story--id"
                storyId="story--id"
                navigate={() => {}}
              >
                <ThemeProvider key="theme.provider" theme={ensureTheme(themes.light)}>
                  <StoryFn {...c} />
                </ThemeProvider>
              </ManagerProvider>
            )}
          </Location>
        </BaseLocationProvider>
      );
    }) as DecoratorFn,
  ],
};

export const NoTabs = () => (
  <Consumer>
    {({ api }: Combo) => {
      return (
        <Preview
          {...previewProps}
          api={{ ...api, getElements: () => ({}) }}
          entry={{
            ...(previewProps.entry as StoryEntry),
            parameters: { previewTabs: { canvas: { hidden: true } } },
          }}
        />
      );
    }}
  </Consumer>
);

export const HideFullscreen = () => (
  <Consumer>
    {({ api }: Combo) => {
      return (
        <Preview
          {...previewProps}
          api={{ ...api, getElements: () => ({}) }}
          entry={{
            ...(previewProps.entry as StoryEntry),
            parameters: { toolbar: { fullscreen: { hidden: true } } },
          }}
        />
      );
    }}
  </Consumer>
);

export const HideAllDefaultTools = () => (
  <Consumer>
    {({ api }: Combo) => {
      return (
        <Preview
          {...previewProps}
          api={{ ...api, getElements: () => ({}) }}
          entry={{
            ...(previewProps.entry as StoryEntry),
            parameters: {
              toolbar: {
                title: { hidden: true },
                remount: { hidden: true },
                zoom: { hidden: true },
                eject: { hidden: true },
                copy: { hidden: true },
                fullscreen: { hidden: true },
              },
            },
          }}
        />
      );
    }}
  </Consumer>
);

export const WithCanvasTab = () => (
  <Consumer>
    {({ api }: Combo) => {
      return <Preview {...previewProps} api={{ ...api, getElements: () => ({}) }} />;
    }}
  </Consumer>
);

export const WithTabs = () => <Preview {...previewProps} />;

export const WithTabsHidden = () => (
  <Consumer>
    {({ api }: Combo) => {
      return (
        <Preview
          {...previewProps}
          options={{ ...previewProps.options, showTabs: false }}
          api={{ ...api, getElements: () => ({}) }}
        />
      );
    }}
  </Consumer>
);
