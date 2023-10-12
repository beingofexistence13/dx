// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./typings.d.ts" />
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./emotionAugmentation.d.ts" />

export { default as styled } from '@emotion/styled';

export type { StyledComponent } from '@emotion/styled';

export {
  CacheProvider,
  ClassNames,
  css,
  Global,
  jsx,
  keyframes,
  ThemeProvider,
  useTheme,
  withTheme,
} from '@emotion/react';
export type { CSSObject, Keyframes } from '@emotion/react';

export * from './base';
export * from './types';

export { default as createCache } from '@emotion/cache';
export { default as isPropValid } from '@emotion/is-prop-valid';

export { createGlobal, createReset } from './global';
export * from './create';
export * from './convert';
export * from './ensure';

export { lightenColor as lighten, darkenColor as darken } from './utils';

export const ignoreSsrWarning =
  '/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */';
