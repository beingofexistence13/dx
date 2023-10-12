import { logger } from '@storybook/client-logger';
import { expect } from '@jest/globals';

import { inferArgTypes } from './inferArgTypes';

jest.mock('@storybook/client-logger');

describe('inferArgTypes', () => {
  it('infers scalar types', () => {
    expect(
      inferArgTypes({
        initialArgs: {
          a: true,
          b: 'string',
          c: 1,
          d: () => {},
          e: Symbol('foo'),
        },
      } as any)
    ).toEqual({
      a: { name: 'a', type: { name: 'boolean' } },
      b: { name: 'b', type: { name: 'string' } },
      c: { name: 'c', type: { name: 'number' } },
      d: { name: 'd', type: { name: 'function' } },
      e: { name: 'e', type: { name: 'symbol' } },
    });
  });

  it('infers array types', () => {
    expect(
      inferArgTypes({
        initialArgs: {
          a: [1, 2, 3],
          b: ['a', 'b', 'c'],
          c: [],
        },
      } as any)
    ).toEqual({
      a: { name: 'a', type: { name: 'array', value: { name: 'number' } } },
      b: { name: 'b', type: { name: 'array', value: { name: 'string' } } },
      c: { name: 'c', type: { name: 'array', value: { name: 'other', value: 'unknown' } } },
    });
  });

  it('infers object types', () => {
    expect(
      inferArgTypes({
        initialArgs: {
          a: {
            x: 'string',
            y: 1,
          },
        },
      } as any)
    ).toEqual({
      a: {
        name: 'a',
        type: { name: 'object', value: { x: { name: 'string' }, y: { name: 'number' } } },
      },
    });
  });

  it('infers nested types', () => {
    expect(
      inferArgTypes({
        initialArgs: {
          a: [
            {
              x: 'string',
            },
          ],
        },
      } as any)
    ).toEqual({
      a: {
        name: 'a',
        type: { name: 'array', value: { name: 'object', value: { x: { name: 'string' } } } },
      },
    });
  });

  it('avoid cycles', () => {
    const cyclic: any = {};
    cyclic.foo = cyclic;

    (logger.warn as jest.MockedFunction<typeof logger.warn>).mockClear();
    expect(
      inferArgTypes({
        initialArgs: {
          a: cyclic,
        },
      } as any)
    ).toEqual({
      a: {
        name: 'a',
        type: { name: 'object', value: { foo: { name: 'other', value: 'cyclic object' } } },
      },
    });
    expect(logger.warn).toHaveBeenCalled();
  });

  it('ensures names', () => {
    (logger.warn as jest.MockedFunction<typeof logger.warn>).mockClear();
    expect(
      inferArgTypes({
        initialArgs: {
          a: 1,
        },
        argTypes: {
          a: {
            control: {
              type: 'range',
            },
          },
        },
      } as any)
    ).toEqual({
      a: {
        name: 'a',
        type: { name: 'number' },
        control: { type: 'range' },
      },
    });
  });

  it('ensures names even with no arg', () => {
    (logger.warn as jest.MockedFunction<typeof logger.warn>).mockClear();
    expect(
      inferArgTypes({
        argTypes: {
          a: {
            type: {
              name: 'string',
            },
          },
        },
      } as any)
    ).toEqual({
      a: {
        name: 'a',
        type: { name: 'string' },
      },
    });
  });
});
