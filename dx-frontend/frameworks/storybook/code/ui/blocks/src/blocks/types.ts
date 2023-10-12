import type { ModuleExport } from '@storybook/types';

export const PRIMARY_STORY = '^';

// TODO

export type Component = any;

export type DocsStoryProps = {
  of: ModuleExport;
  expanded?: boolean;
  withToolbar?: boolean;
  __forceInitialArgs?: boolean;
  __primary?: boolean;
};
