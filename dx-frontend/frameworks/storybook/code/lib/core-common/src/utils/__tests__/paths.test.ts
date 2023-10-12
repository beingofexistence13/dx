import path from 'path';
import findUp from 'find-up';
import slash from 'slash';
import { normalizeStoryPath, getProjectRoot } from '../paths';

jest.mock('find-up');

describe('paths - normalizeStoryPath()', () => {
  it('returns a path starting with "./" unchanged', () => {
    const filename = `.${path.sep}${path.join('src', 'Comp.story.js')}`;
    expect(normalizeStoryPath(filename)).toEqual(filename);
  });

  it('returns a path starting with "../" unchanged', () => {
    const filename = path.join('..', 'src', 'Comp.story.js');
    expect(normalizeStoryPath(filename)).toEqual(filename);
  });

  it('returns a path equal to "." unchanged', () => {
    const filename = '.';
    expect(normalizeStoryPath(filename)).toEqual(filename);
  });

  it('returns a path equal to ".." unchanged', () => {
    const filename = '..';
    expect(normalizeStoryPath(filename)).toEqual(filename);
  });

  it('adds "./" to a normalized relative path', () => {
    const filename = path.join('src', 'Comp.story.js');
    expect(normalizeStoryPath(filename)).toEqual(`.${path.sep}${filename}`);
  });

  it('adds "./" to a hidden folder', () => {
    const filename = path.join('.storybook', 'Comp.story.js');
    expect(normalizeStoryPath(filename)).toEqual(`.${path.sep}${filename}`);
  });

  it('adds "./" to a hidden file', () => {
    const filename = `.Comp.story.js`;
    expect(normalizeStoryPath(filename)).toEqual(`.${path.sep}${filename}`);
  });
});

describe('getProjectRoot', () => {
  const mockedFindUp = findUp as jest.Mocked<typeof findUp>;

  it('should return the root directory containing a .git directory', () => {
    mockedFindUp.sync.mockImplementation((name) =>
      name === ('.git' as any) ? '/path/to/root' : undefined
    );

    expect(slash(getProjectRoot())).toBe('/path/to');
  });

  it('should return the root directory containing a .svn directory if there is no .git directory', () => {
    mockedFindUp.sync.mockImplementation((name) =>
      name === ('.svn' as any) ? '/path/to/root' : undefined
    );

    expect(slash(getProjectRoot())).toBe('/path/to');
  });

  it('should return the root directory containing a .yarn directory if there is no .git or .svn directory', () => {
    mockedFindUp.sync.mockImplementation((name) =>
      name === ('.yarn' as any) ? '/path/to/root' : undefined
    );

    expect(slash(getProjectRoot())).toBe('/path/to');
  });
});
