import React from 'react';
import { LocationProvider } from '@storybook/router';

import NotificationList from './NotificationList';
import itemMeta, * as itemStories from './NotificationItem.stories.jsx';

export default {
  component: NotificationList,
  title: 'Notifications/NotificationList',
  decorators: [
    (StoryFn) => (
      <LocationProvider>
        <StoryFn />
      </LocationProvider>
    ),

    (storyFn) => (
      <div style={{ width: '240px', margin: '1rem', position: 'relative', height: '100%' }}>
        {storyFn()}
      </div>
    ),
  ],
  excludeStories: /.*Data$/,
};

// eslint-disable-next-line no-underscore-dangle, import/namespace
const ordering = itemStories.__namedExportsOrder;

const items = (Array.isArray(ordering) ? ordering : Array.from(Object.keys(itemStories)))
  .filter((key) => itemMeta.excludeStories.exec(key))
  // eslint-disable-next-line import/namespace
  .map((key) => itemStories[key]);

export const singleData = [items[0]];
export const allData = items;

function clearNotification(id) {}

export const Single = () => (
  <NotificationList
    notifications={singleData}
    clearNotification={clearNotification}
    placement={{ position: 'relative' }}
  />
);

export const All = () => (
  <NotificationList
    notifications={allData}
    clearNotification={clearNotification}
    placement={{ position: 'relative' }}
  />
);

export const Placement = () => (
  // Note: position:absolute is only for QA/testing. Use position:fixed when integrating into the real UI.
  <NotificationList
    placement={{ position: 'absolute', left: 20, bottom: 20 }}
    clearNotification={clearNotification}
    notifications={allData}
  />
);
