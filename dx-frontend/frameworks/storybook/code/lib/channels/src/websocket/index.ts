/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../typings.d.ts" />

import { global } from '@storybook/global';
import { logger } from '@storybook/client-logger';
import { isJSON, parse, stringify } from 'telejson';
import invariant from 'tiny-invariant';
import { Channel } from '../main';
import type { ChannelTransport, ChannelHandler } from '../types';

const { WebSocket } = global;

type OnError = (message: Event) => void;

interface WebsocketTransportArgs {
  url: string;
  onError: OnError;
}

interface CreateChannelArgs {
  url?: string;
  async?: boolean;
  onError?: OnError;
}

export class WebsocketTransport implements ChannelTransport {
  private buffer: string[] = [];

  private handler?: ChannelHandler;

  private socket: WebSocket;

  private isReady = false;

  constructor({ url, onError }: WebsocketTransportArgs) {
    this.socket = new WebSocket(url);
    this.socket.onopen = () => {
      this.isReady = true;
      this.flush();
    };
    this.socket.onmessage = ({ data }) => {
      const event = typeof data === 'string' && isJSON(data) ? parse(data) : data;
      invariant(this.handler, 'WebsocketTransport handler should be set');
      this.handler(event);
    };
    this.socket.onerror = (e) => {
      if (onError) {
        onError(e);
      }
    };
  }

  setHandler(handler: ChannelHandler) {
    this.handler = handler;
  }

  send(event: any) {
    if (!this.isReady) {
      this.sendLater(event);
    } else {
      this.sendNow(event);
    }
  }

  private sendLater(event: any) {
    this.buffer.push(event);
  }

  private sendNow(event: any) {
    const data = stringify(event, { maxDepth: 15, allowFunction: true });
    this.socket.send(data);
  }

  private flush() {
    const { buffer } = this;
    this.buffer = [];
    buffer.forEach((event) => this.send(event));
  }
}

/**
 * @deprecated This function is deprecated. Use the `createBrowserChannel` factory function from `@storybook/channels` instead. This API will be removed in 8.0.
 * @param {CreateChannelArgs} options - The options for creating the channel.
 * @param {string} [options.url] - The URL of the WebSocket server to connect to.
 * @param {boolean} [options.async=false] - Whether the channel should be asynchronous.
 * @param {OnError} [options.onError] - A function to handle errors that occur during the channel's lifetime.
 * @returns {Channel} - The newly created channel.
 */
export function createChannel({
  url,
  async = false,
  onError = (err) => logger.warn(err),
}: CreateChannelArgs) {
  let channelUrl = url;
  if (!channelUrl) {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const { hostname, port } = window.location;
    channelUrl = `${protocol}://${hostname}:${port}/storybook-server-channel`;
  }

  const transport = new WebsocketTransport({ url: channelUrl, onError });
  return new Channel({ transport, async });
}

// backwards compat with builder-vite
export default createChannel;
