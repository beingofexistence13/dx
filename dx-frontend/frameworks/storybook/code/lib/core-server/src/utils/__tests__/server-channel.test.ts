import type { Server } from 'http';
import { Channel } from '@storybook/channels';

import { EventEmitter } from 'events';
import { stringify } from 'telejson';
import { getServerChannel, ServerChannelTransport } from '../get-server-channel';

describe('getServerChannel', () => {
  test('should return a channel', () => {
    const server = { on: jest.fn() } as any as Server;
    const result = getServerChannel(server);
    expect(result).toBeInstanceOf(Channel);
  });

  test('should attach to the http server', () => {
    const server = { on: jest.fn() } as any as Server;
    getServerChannel(server);
    expect(server.on).toHaveBeenCalledWith('upgrade', expect.any(Function));
  });
});

describe('ServerChannelTransport', () => {
  test('parses simple JSON', () => {
    const server = new EventEmitter() as any as Server;
    const socket = new EventEmitter();
    const transport = new ServerChannelTransport(server);
    const handler = jest.fn();
    transport.setHandler(handler);

    // @ts-expect-error (an internal API)
    transport.socket.emit('connection', socket);
    socket.emit('message', '"hello"');

    expect(handler).toHaveBeenCalledWith('hello');
  });
  test('parses object JSON', () => {
    const server = new EventEmitter() as any as Server;
    const socket = new EventEmitter();
    const transport = new ServerChannelTransport(server);
    const handler = jest.fn();
    transport.setHandler(handler);

    // @ts-expect-error (an internal API)
    transport.socket.emit('connection', socket);
    socket.emit('message', JSON.stringify({ type: 'hello' }));

    expect(handler).toHaveBeenCalledWith({ type: 'hello' });
  });
  test('supports telejson cyclical data', () => {
    const server = new EventEmitter() as any as Server;
    const socket = new EventEmitter();
    const transport = new ServerChannelTransport(server);
    const handler = jest.fn();
    transport.setHandler(handler);

    // @ts-expect-error (an internal API)
    transport.socket.emit('connection', socket);

    const input: any = { a: 1 };
    input.b = input;
    socket.emit('message', stringify(input));

    expect(handler.mock.calls[0][0]).toMatchInlineSnapshot(`
      Object {
        "a": 1,
        "b": [Circular],
      }
    `);
  });
  test('skips telejson classes and functions in data', () => {
    const server = new EventEmitter() as any as Server;
    const socket = new EventEmitter();
    const transport = new ServerChannelTransport(server);
    const handler = jest.fn();
    transport.setHandler(handler);

    // @ts-expect-error (an internal API)
    transport.socket.emit('connection', socket);

    const input = { a() {}, b: class {} };
    socket.emit('message', stringify(input));

    expect(handler.mock.calls[0][0].a).toEqual(expect.any(String));
    expect(handler.mock.calls[0][0].b).toEqual(expect.any(String));
  });
});
