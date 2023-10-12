import type { API_Notification } from '@storybook/types';
import type { ModuleFn } from '../lib/types';

export interface SubState {
  notifications: API_Notification[];
}

/**
 * The API for managing notifications.
 */
export interface SubAPI {
  /**
   * Adds a new notification to the list of notifications.
   * If a notification with the same ID already exists, it will be replaced.
   * @param notification - The notification to add.
   */
  addNotification: (notification: API_Notification) => void;

  /**
   * Removes a notification from the list of notifications and calls the onClear callback.
   * @param id - The ID of the notification to remove.
   */
  clearNotification: (id: string) => void;
}

export const init: ModuleFn = ({ store }) => {
  const api: SubAPI = {
    addNotification: (notification) => {
      // Get rid of it if already exists
      api.clearNotification(notification.id);

      const { notifications } = store.getState();

      store.setState({ notifications: [...notifications, notification] });
    },

    clearNotification: (id) => {
      const { notifications } = store.getState();

      store.setState({ notifications: notifications.filter((n) => n.id !== id) });

      const notification = notifications.find((n) => n.id === id);
      if (notification && notification.onClear) {
        notification.onClear({ dismissed: false });
      }
    },
  };

  const state: SubState = { notifications: [] };

  return { api, state };
};
