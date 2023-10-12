// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../../test-typings.d.ts" />

import { dedent } from 'ts-dedent';
import { sep } from 'path';

import { InvalidStoriesEntryError } from '@storybook/core-events/server-errors';
import {
  getDirectoryFromWorkingDir,
  normalizeStories,
  normalizeStoriesEntry,
} from '../normalize-stories';

expect.addSnapshotSerializer({
  print: (val: any) => JSON.stringify(val, null, 2),
  test: (val) => typeof val !== 'string',
});

expect.extend({
  toMatchPaths(regex: RegExp, paths: string[]) {
    const matched = paths.map((p) => !!p.match(regex));

    const pass = matched.every(Boolean);
    const failures = paths.filter((_, i) => (pass ? matched[i] : !matched[i]));
    const message = () => dedent`Expected ${regex} to ${pass ? 'not ' : ''}match all strings.
    
    Failures:${['', ...failures].join('\n - ')}`;
    return {
      pass,
      message,
    };
  },
});

jest.mock('fs', () => {
  const mockStat = (
    path: string,
    options: Record<string, any>,
    cb: (error?: Error, stats?: Record<string, any>) => void
  ) => {
    cb(undefined, {
      isDirectory: () => !path.match(/\.[a-z]+$/),
    });
  };

  return {
    access: (path: string, mode: number, cb: (err?: Error) => void): void => undefined,
    lstatSync: (path: string) => ({
      isDirectory: () => !path.match(/\.[a-z]+$/),
    }),
    stat: mockStat,
    lstat: mockStat,
  };
});

const options = {
  configDir: '/path/to/project/.storybook',
  workingDir: '/path/to/project',
};

describe('normalizeStoriesEntry', () => {
  it('direct file path', () => {
    const specifier = normalizeStoriesEntry('../path/to/file.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": "./path/to",
        "files": "file.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths(['./path/to/file.stories.mdx']);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './path/to/file.stories.js',
      './file.stories.mdx',
      '../file.stories.mdx',
    ]);
  });

  it('story in config dir', () => {
    const specifier = normalizeStoriesEntry('./file.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": "./.storybook",
        "files": "file.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths(['./.storybook/file.stories.mdx']);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      '.storybook/file.stories.mdx',
      './file.stories.mdx',
      '../file.stories.mdx',
    ]);
  });

  it('non-recursive files glob', () => {
    const specifier = normalizeStoriesEntry('../*/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "*/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths([
      './path/file.stories.mdx',
      './second-path/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './path/file.stories.js',
      './path/to/file.stories.mdx',
      './file.stories.mdx',
      '../file.stories.mdx',
    ]);
  });

  it('double non-recursive directory/files glob', () => {
    const specifier = normalizeStoriesEntry('../*/*/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "*/*/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths([
      './path/to/file.stories.mdx',
      './second-path/to/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './file.stories.mdx',
      './path/file.stories.mdx',
      './path/to/third/file.stories.mdx',
      './path/to/file.stories.js',
      '../file.stories.mdx',
    ]);
  });

  it('directory/files glob', () => {
    const specifier = normalizeStoriesEntry('../**/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "**/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);
    expect(specifier.importPathMatcher).toMatchPaths([
      './file.stories.mdx',
      './path/file.stories.mdx',
      './path/to/file.stories.mdx',
      './path/to/third/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './file.stories.js',
      '../file.stories.mdx',
    ]);
  });

  it('double stars glob', () => {
    const specifier = normalizeStoriesEntry('../**/foo/**/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "**/foo/**/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths([
      './foo/file.stories.mdx',
      './path/to/foo/file.stories.mdx',
      './path/to/foo/third/fourth/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './file.stories.mdx',
      './file.stories.js',
      '../file.stories.mdx',
    ]);
  });

  it('intermediate directory glob', () => {
    const specifier = normalizeStoriesEntry('../**/foo/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "**/foo/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths([
      './path/to/foo/file.stories.mdx',
      './foo/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './file.stories.mdx',
      './file.stories.js',
      './path/to/foo/third/fourth/file.stories.mdx',
      '../file.stories.mdx',
    ]);
  });

  it('directory outside of working dir', () => {
    const specifier = normalizeStoriesEntry('../../src/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": "../src",
        "files": "*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths(['../src/file.stories.mdx']);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './src/file.stories.mdx',
      '../src/file.stories.js',
    ]);
  });

  it('directory', () => {
    const specifier = normalizeStoriesEntry('..', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
        "importPathMatcher": {}
      }
    `);
  });

  it('directory specifier', () => {
    const specifier = normalizeStoriesEntry({ directory: '..' }, options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "files": "**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
        "directory": ".",
        "importPathMatcher": {}
      }
    `);
  });

  it('directory/files specifier', () => {
    const specifier = normalizeStoriesEntry({ directory: '..', files: '*.stories.mdx' }, options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "files": "*.stories.mdx",
        "directory": ".",
        "importPathMatcher": {}
      }
    `);
  });

  it('directory/titlePrefix specifier', () => {
    const specifier = normalizeStoriesEntry({ directory: '..', titlePrefix: 'atoms' }, options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "atoms",
        "files": "**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))",
        "directory": ".",
        "importPathMatcher": {}
      }
    `);
  });

  it('directory/titlePrefix/files specifier', () => {
    const specifier = normalizeStoriesEntry(
      { directory: '..', titlePrefix: 'atoms', files: '*.stories.mdx' },
      options
    );
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "atoms",
        "files": "*.stories.mdx",
        "directory": ".",
        "importPathMatcher": {}
      }
    `);
  });

  it('globs with negation', () => {
    const specifier = normalizeStoriesEntry('../!(negation)/*.stories.mdx', options);
    expect(specifier).toMatchInlineSnapshot(`
      {
        "titlePrefix": "",
        "directory": ".",
        "files": "!(negation)/*.stories.mdx",
        "importPathMatcher": {}
      }
    `);

    expect(specifier.importPathMatcher).toMatchPaths([
      './path/file.stories.mdx',
      './second-path/file.stories.mdx',
    ]);
    expect(specifier.importPathMatcher).not.toMatchPaths([
      './path/file.stories.js',
      './path/to/file.stories.mdx',
      './file.stories.mdx',
      '../file.stories.mdx',
    ]);
  });
});

describe('getDirectoryFromWorkingDir', () => {
  it('should return normalized story path', () => {
    const normalizedPath = getDirectoryFromWorkingDir({
      configDir: '/path/to/project/.storybook',
      workingDir: '/path/to/project',
      directory: '/path/to/project/src',
    });
    expect(normalizedPath).toBe(`.${sep}src`);
  });
});

describe('normalizeStories', () => {
  it('should throw InvalidStoriesEntryError for empty entries', () => {
    expect(() => normalizeStories([], options)).toThrow(InvalidStoriesEntryError);
  });
});
