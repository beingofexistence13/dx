import React, { useMemo } from 'react';

import type { Combo, StoriesHash } from '@storybook/manager-api';
import { types, Consumer } from '@storybook/manager-api';

import { Sidebar as SidebarComponent } from '../components/sidebar/Sidebar';
import { useMenu } from './menu';

export type Item = StoriesHash[keyof StoriesHash];

const Sidebar = React.memo(function Sideber() {
  const mapper = ({ state, api }: Combo) => {
    const {
      ui: { name, url, enableShortcuts },
      viewMode,
      storyId,
      refId,
      layout: { showToolbar, isFullscreen, showPanel, showNav },
      index,
      status,
      indexError,
      previewInitialized,
      refs,
    } = state;

    const menu = useMenu(
      state,
      api,
      showToolbar,
      isFullscreen,
      showPanel,
      showNav,
      enableShortcuts
    );

    const whatsNewNotificationsEnabled =
      state.whatsNewData?.status === 'SUCCESS' && !state.disableWhatsNewNotifications;

    const items = api.getElements(types.experimental_SIDEBAR_BOTTOM);
    const bottom = useMemo(() => Object.values(items), [items]);
    const top = useMemo(() => Object.values(api.getElements(types.experimental_SIDEBAR_TOP)), []);

    return {
      title: name,
      url,
      index,
      indexError,
      status,
      previewInitialized,
      refs,
      storyId,
      refId,
      viewMode,
      menu,
      menuHighlighted: whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
      enableShortcuts,
      bottom,
      extra: top,
    };
  };
  return (
    <Consumer filter={mapper}>
      {(fromState) => {
        return <SidebarComponent {...fromState} />;
      }}
    </Consumer>
  );
});

export default Sidebar;
