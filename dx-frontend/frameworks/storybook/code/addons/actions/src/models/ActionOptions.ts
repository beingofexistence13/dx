import type { Options as TelejsonOptions } from 'telejson';

interface Options {
  depth: number; // backards compatibility, remove in 7.0
  clearOnStoryChange: boolean;
  limit: number;
}

export type ActionOptions = Partial<Options> & Partial<TelejsonOptions>;
