import fs from 'fs';
import path from 'path';
import * as pico from 'picomatch';
import slash from 'slash';

import type { StoriesEntry, NormalizedStoriesSpecifier } from '@storybook/types';
import { InvalidStoriesEntryError } from '@storybook/core-events/server-errors';
import { normalizeStoryPath } from './paths';
import { globToRegexp } from './glob-to-regexp';

const DEFAULT_TITLE_PREFIX = '';
const DEFAULT_FILES = '**/*.@(mdx|stories.@(js|jsx|mjs|ts|tsx))';

const isDirectory = (configDir: string, entry: string) => {
  try {
    return fs.lstatSync(path.resolve(configDir, entry)).isDirectory();
  } catch (err) {
    return false;
  }
};

export const getDirectoryFromWorkingDir = ({
  configDir,
  workingDir,
  directory,
}: NormalizeOptions & { directory: string }) => {
  const directoryFromConfig = path.resolve(configDir, directory);
  const directoryFromWorking = path.relative(workingDir, directoryFromConfig);

  // relative('/foo', '/foo/src') => 'src'
  // but we want `./src` to match importPaths
  return normalizeStoryPath(directoryFromWorking);
};

export const normalizeStoriesEntry = (
  entry: StoriesEntry,
  { configDir, workingDir }: NormalizeOptions
): NormalizedStoriesSpecifier => {
  let specifierWithoutMatcher: Omit<NormalizedStoriesSpecifier, 'importPathMatcher'>;

  if (typeof entry === 'string') {
    const globResult = pico.scan(entry);
    if (globResult.isGlob) {
      const directory = globResult.prefix + globResult.base;
      const files = globResult.glob;

      specifierWithoutMatcher = {
        titlePrefix: DEFAULT_TITLE_PREFIX,
        directory,
        files,
      };
    } else if (isDirectory(configDir, entry)) {
      specifierWithoutMatcher = {
        titlePrefix: DEFAULT_TITLE_PREFIX,
        directory: entry,
        files: DEFAULT_FILES,
      };
    } else {
      specifierWithoutMatcher = {
        titlePrefix: DEFAULT_TITLE_PREFIX,
        directory: path.dirname(entry),
        files: path.basename(entry),
      };
    }
  } else {
    specifierWithoutMatcher = {
      titlePrefix: DEFAULT_TITLE_PREFIX,
      files: DEFAULT_FILES,
      ...entry,
    };
  }

  // We are going to be doing everything with node importPaths which use
  // URL format, i.e. `/` as a separator, so let's make sure we've normalized
  const files = slash(specifierWithoutMatcher.files);

  // At this stage `directory` is relative to `main.js` (the config dir)
  // We want to work relative to the working dir, so we transform it here.
  const { directory: directoryRelativeToConfig } = specifierWithoutMatcher;

  const directory = slash(
    getDirectoryFromWorkingDir({
      configDir,
      workingDir,
      directory: directoryRelativeToConfig,
    })
  ).replace(/\/$/, '');

  // Now make the importFn matcher.
  const importPathMatcher = globToRegexp(`${directory}/${files}`);

  return {
    ...specifierWithoutMatcher,
    directory,
    importPathMatcher,
  };
};

interface NormalizeOptions {
  configDir: string;
  workingDir: string;
}

export const normalizeStories = (entries: StoriesEntry[], options: NormalizeOptions) => {
  if (!entries || (Array.isArray(entries) && entries.length === 0)) {
    throw new InvalidStoriesEntryError();
  }

  return entries.map((entry) => normalizeStoriesEntry(entry, options));
};
