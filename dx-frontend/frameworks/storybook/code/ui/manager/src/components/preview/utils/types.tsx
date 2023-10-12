import type { ReactElement } from 'react';
import type { State, API, LeafEntry } from '@storybook/manager-api';
import type { Addon_WrapperType, API_ViewMode, StoryId } from '@storybook/types';

export interface PreviewProps {
  api: API;
  viewMode: API_ViewMode;
  refs: State['refs'];
  storyId: StoryId;
  entry: LeafEntry;
  options: {
    isFullscreen: boolean;
    showTabs: boolean;
    showToolbar: boolean;
  };
  id: string;
  path: string;
  location: State['location'];
  queryParams: State['customQueryParams'];
  customCanvas?: CustomCanvasRenderer;
  description: string;
  baseUrl: string;
  withLoader: boolean;
}

export interface ApplyWrappersProps {
  wrappers: Addon_WrapperType[];
  viewMode: State['viewMode'];
  id: string;
  storyId: StoryId;
  active: boolean;
}

export type CustomCanvasRenderer = (
  storyId: string,
  viewMode: State['viewMode'],
  id: string,
  baseUrl: string,
  scale: number,
  queryParams: Record<string, any>
) => ReactElement<any, any> | null;

export interface FramesRendererProps {
  entry: LeafEntry;
  storyId: StoryId;
  refId: string;
  baseUrl: string;
  scale: number;
  viewMode: API_ViewMode;
  queryParams: State['customQueryParams'];
  refs: State['refs'];
}
