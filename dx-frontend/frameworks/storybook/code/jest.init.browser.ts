import './jest.init.base';
import EventEmitter from 'events';
import { webcrypto } from 'node:crypto';

// Mock for matchMedia since it's not yet implemented in JSDOM (https://jestjs.io/docs/en/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom)
global.window.matchMedia = jest.fn().mockImplementation((query) => {
  return {
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
});

class EventSourceMock {
  static sources: EventSourceMock[] = [];

  static reset() {
    this.sources = [];
  }

  emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
    EventSourceMock.sources.push(this);
  }

  addEventListener(event: string, cb: (data: any) => void) {
    this.emitter.on(event, cb);
  }

  emit(event: string, data: any) {
    this.emitter.emit(event, data);
  }
}

global.window.EventSource = EventSourceMock as any;

Object.defineProperty(window, 'crypto', {
  get() {
    return webcrypto;
  },
});
