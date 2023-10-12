/* eslint-disable @typescript-eslint/naming-convention */

import type { ReactElement } from 'react';
import type { RenderData } from '../../../router/src/types';
import type { Channel } from '../../../channels/src';
import type { ThemeVars } from '../../../theming/src/types';
import type { DocsOptions } from './core-common';
import type { API_FilterFunction, API_HashEntry, API_IndexHash } from './api-stories';
import type { SetStoriesStory, SetStoriesStoryData } from './channelApi';
import type { Addon_BaseType, Addon_Collection, Addon_RenderOptions, Addon_Type } from './addons';
import type { StoryIndex } from './indexer';

type OrString<T extends string> = T | (string & {});

export type API_ViewMode = OrString<'story' | 'docs' | 'settings'> | undefined;

export type API_RenderOptions = Addon_RenderOptions;

export interface API_RouteOptions {
  storyId: string;
  viewMode: API_ViewMode;
  location: RenderData['location'];
  path: string;
}
export interface API_MatchOptions {
  storyId: string;
  viewMode: API_ViewMode;
  location: RenderData['location'];
  path: string;
}

/**
 * @deprecated this is synonymous with `Addon_Type`. This interface will be removed in 8.0
 */
export type API_Addon = Addon_Type;

/**
 * @deprecated this is synonymous with `Addon_Collection`. This interface will be removed in 8.0
 */
export type API_Collection<T = Addon_Type> = Addon_Collection<T>;

/**
 * @deprecated This interface will be removed in 8.0
 */
export type API_Panels = Addon_Collection<Addon_BaseType>;

export type API_StateMerger<S> = (input: S) => S;

export interface API_ProviderData<API> {
  provider: API_Provider<API>;
  docsOptions: DocsOptions;
}

export interface API_Provider<API> {
  channel?: Channel;
  /**
   * @deprecated will be removed in 8.0, please use channel instead
   */
  serverChannel?: Channel;
  renderPreview?: API_IframeRenderer;
  handleAPI(api: API): void;
  getConfig(): {
    sidebar?: API_SidebarOptions;
    theme?: ThemeVars;
    StoryMapper?: API_StoryMapper;
    [k: string]: any;
  } & Partial<API_UIOptions>;
  [key: string]: any;
}

export type API_IframeRenderer = (
  storyId: string,
  viewMode: API_ViewMode,
  id: string,
  baseUrl: string,
  scale: number,
  queryParams: Record<string, any>
) => ReactElement<any, any> | null;

export interface API_UIOptions {
  name?: string;
  url?: string;
  goFullScreen: boolean;
  showStoriesPanel: boolean;
  showAddonPanel: boolean;
  addonPanelInRight: boolean;
  theme?: ThemeVars;
  selectedPanel?: string;
}

export interface API_Layout {
  initialActive: API_ActiveTabsType;
  isFullscreen: boolean;
  showPanel: boolean;
  panelPosition: API_PanelPositions;
  showNav: boolean;
  showTabs: boolean;
  showToolbar: boolean;
  /**
   * @deprecated, will be removed in 8.0 - this API no longer works
   */
  isToolshown?: boolean;
}

export interface API_UI {
  name?: string;
  url?: string;
  enableShortcuts: boolean;
}

export type API_PanelPositions = 'bottom' | 'right';
export type API_ActiveTabsType = 'sidebar' | 'canvas' | 'addons';

export interface API_SidebarOptions {
  showRoots?: boolean;
  filters?: Record<string, API_FilterFunction>;
  collapsedRoots?: string[];
  renderLabel?: (item: API_HashEntry) => any;
}

interface OnClearOptions {
  /**
   *  True when the user dismissed the notification.
   */
  dismissed: boolean;
}

export interface API_Notification {
  id: string;
  link: string;
  content: {
    headline: string;
    subHeadline?: string | any;
  };
  icon?: {
    name: string;
    color?: string;
  };
  onClear?: (options: OnClearOptions) => void;
}

type API_Versions = Record<string, string>;

export type API_SetRefData = Partial<
  API_ComposedRef & {
    setStoriesData: SetStoriesStoryData;
    storyIndex: StoryIndex;
  }
>;

export type API_StoryMapper = (ref: API_ComposedRef, story: SetStoriesStory) => SetStoriesStory;

export interface API_LoadedRefData {
  index?: API_IndexHash;
  indexError?: Error;
  previewInitialized: boolean;
}

export interface API_ComposedRef extends API_LoadedRefData {
  id: string;
  title?: string;
  url: string;
  type?: 'auto-inject' | 'unknown' | 'lazy' | 'server-checked';
  expanded?: boolean;
  versions?: API_Versions;
  loginUrl?: string;
  version?: string;
}

export type API_ComposedRefUpdate = Partial<
  Pick<
    API_ComposedRef,
    | 'title'
    | 'type'
    | 'expanded'
    | 'index'
    | 'versions'
    | 'loginUrl'
    | 'version'
    | 'indexError'
    | 'previewInitialized'
  >
>;

export type API_Refs = Record<string, API_ComposedRef>;
export type API_RefId = string;
export type API_RefUrl = string;
