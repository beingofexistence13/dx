// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import loaderUtils from 'next/dist/compiled/loader-utils3';
import {
  GoogleFontsDownloadError,
  GoogleFontsLoadingError,
} from '@storybook/core-events/server-errors';
import type { LoaderOptions } from '../types';

const cssCache = new Map<string, Promise<string>>();

export async function getFontFaceDeclarations(options: LoaderOptions) {
  const {
    fetchCSSFromGoogleFonts,
    getFontAxes,
    getUrl,
    validateData,
  } = require('../utils/google-font-utils');

  const { fontFamily, weights, styles, selectedVariableAxes, display, variable } = validateData(
    options.fontFamily,
    [options.props],
    null
  );

  const fontAxes = getFontAxes(fontFamily, weights, styles, selectedVariableAxes);
  const url = getUrl(fontFamily, fontAxes, display);

  try {
    const hasCachedCSS = cssCache.has(url);
    const fontFaceCSS = hasCachedCSS
      ? cssCache.get(url)
      : await fetchCSSFromGoogleFonts(url, fontFamily).catch(() => null);
    if (!hasCachedCSS) {
      cssCache.set(url, fontFaceCSS);
    } else {
      cssCache.delete(url);
    }
    if (fontFaceCSS === null) {
      throw new GoogleFontsDownloadError({
        fontFamily,
        url,
      });
    }

    return {
      id: loaderUtils.getHashDigest(url, 'md5', 'hex', 6),
      fontFamily,
      fontFaceCSS,
      weights,
      styles,
      variable,
    };
  } catch (error) {
    throw new GoogleFontsLoadingError({ error, url });
  }
}
