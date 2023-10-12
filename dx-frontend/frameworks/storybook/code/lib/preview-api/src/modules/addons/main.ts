import { global } from '@storybook/global';

import type { Channel } from '@storybook/channels';
import { mockChannel } from './storybook-channel-mock';

export class AddonStore {
  constructor() {
    this.promise = new Promise((res) => {
      this.resolve = () => res(this.getChannel());
    }) as Promise<Channel>;
  }

  private channel: Channel | undefined;

  /**
   * @deprecated will be removed in 8.0, please use channel instead
   */
  private serverChannel: Channel | undefined;

  private promise: any;

  private resolve: any;

  getChannel = (): Channel => {
    // this.channel should get overwritten by setChannel. If it wasn't called (e.g. in non-browser environment), set a mock instead.
    if (!this.channel) {
      const channel = mockChannel();
      this.setChannel(channel);
      return channel;
    }

    return this.channel;
  };

  /**
   * @deprecated will be removed in 8.0, please use getChannel instead
   */
  getServerChannel = (): Channel => {
    if (!this.serverChannel) {
      throw new Error('Accessing non-existent serverChannel');
    }

    return this.serverChannel;
  };

  ready = (): Promise<Channel> => this.promise;

  hasChannel = (): boolean => !!this.channel;

  /**
   * @deprecated will be removed in 8.0, please use the normal channel instead
   */
  hasServerChannel = (): boolean => !!this.serverChannel;

  setChannel = (channel: Channel): void => {
    this.channel = channel;
    this.resolve();
  };

  /**
   * @deprecated will be removed in 8.0, please use the normal channel instead
   */
  setServerChannel = (channel: Channel): void => {
    this.serverChannel = channel;
  };
}

// Enforce addons store to be a singleton
const KEY = '__STORYBOOK_ADDONS_PREVIEW';

function getAddonsStore(): AddonStore {
  if (!global[KEY]) {
    global[KEY] = new AddonStore();
  }
  return global[KEY];
}

// Exporting this twice in order to to be able to import it like { addons } instead of 'addons'
// prefer import { addons } from '@storybook/addons' over import addons from '@storybook/addons'
//
// See public_api.ts

export const addons = getAddonsStore();
