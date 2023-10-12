import type { FC } from 'react';
import React from 'react';

import type { Combo } from '@storybook/manager-api';
import { Consumer } from '@storybook/manager-api';

import NotificationList from '../components/notifications/NotificationList';

const mapper = ({ state, api }: Combo) => {
  return {
    notifications: state.notifications,
    clearNotification: api.clearNotification,
  };
};

const NotificationConnect: FC<any> = (props) => (
  <Consumer filter={mapper}>
    {(fromState) => <NotificationList {...props} {...fromState} />}
  </Consumer>
);

export default NotificationConnect;
