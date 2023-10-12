import type { ViewportMap } from './Viewport';

export interface ViewportAddonParameter {
  disable?: boolean;
  defaultOrientation?: 'portrait' | 'landscape';
  defaultViewport?: string;
  viewports?: ViewportMap;
}
