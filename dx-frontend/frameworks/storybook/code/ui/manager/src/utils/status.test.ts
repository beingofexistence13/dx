import { getHighestStatus, getGroupStatus } from './status';
import { mockDataset } from '../components/sidebar/mockdata';

describe('getHighestStatus', () => {
  test('default value', () => {
    expect(getHighestStatus([])).toBe('unknown');
  });
  test('should return the highest status', () => {
    expect(getHighestStatus(['success', 'error', 'warn', 'pending'])).toBe('error');
    expect(getHighestStatus(['error', 'error', 'warn', 'pending'])).toBe('error');
    expect(getHighestStatus(['warn', 'pending'])).toBe('warn');
  });
});

describe('getGroupStatus', () => {
  test('empty case', () => {
    expect(getGroupStatus({}, {})).toEqual({});
  });
  test('should return a color', () => {
    expect(
      getGroupStatus(mockDataset.withRoot, {
        'group-1--child-b1': { a: { status: 'warn', description: '', title: '' } },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "group-1": "warn",
        "root-1-child-a1": "unknown",
        "root-1-child-a2": "unknown",
        "root-3-child-a2": "unknown",
      }
    `);
  });
  test('should return the highest status', () => {
    expect(
      getGroupStatus(mockDataset.withRoot, {
        'group-1--child-b1': {
          a: { status: 'warn', description: '', title: '' },
          b: { status: 'error', description: '', title: '' },
        },
      })
    ).toMatchInlineSnapshot(`
      Object {
        "group-1": "error",
        "root-1-child-a1": "unknown",
        "root-1-child-a2": "unknown",
        "root-3-child-a2": "unknown",
      }
    `);
  });
});
