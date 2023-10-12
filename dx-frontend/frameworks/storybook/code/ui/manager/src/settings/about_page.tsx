import type { FC } from 'react';
import React, { Component, useCallback } from 'react';

import { type API, useStorybookApi, useStorybookState } from '@storybook/manager-api';

import { AboutScreen } from './about';

// Clear a notification on mount. This could be exported by core/notifications.js perhaps?
class NotificationClearer extends Component<{ api: API; notificationId: string }> {
  componentDidMount() {
    const { api, notificationId } = this.props;
    api.clearNotification(notificationId);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

const AboutPage: FC = () => {
  const api = useStorybookApi();
  const state = useStorybookState();

  const onNavigateToWhatsNew = useCallback(() => {
    api.changeSettingsTab('whats-new');
  }, [api]);
  return (
    <NotificationClearer api={api} notificationId="update">
      <AboutScreen
        current={api.getCurrentVersion()}
        onNavigateToWhatsNew={
          state.whatsNewData?.status === 'SUCCESS' ? onNavigateToWhatsNew : undefined
        }
      />
    </NotificationClearer>
  );
};

export { AboutPage };
