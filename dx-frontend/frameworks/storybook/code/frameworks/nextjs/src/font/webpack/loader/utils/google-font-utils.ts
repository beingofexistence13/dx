/* eslint-disable import/no-mutable-exports */

import dedent from 'ts-dedent';

type FontOptions = {
  fontFamily: string;
  weights: string[];
  styles: string[];
  display: string;
  preload: boolean;
  selectedVariableAxes?: string[];
  fallback?: string[];
  adjustFontFallback: boolean;
  variable?: string;
  subsets: string[];
};

let validateData: (functionName: string, fontData: any, config: any) => FontOptions;

let getUrl: (
  fontFamily: string,
  axes: {
    wght?: string[];
    ital?: string[];
    variableAxes?: [string, string][];
  },
  display: string
) => string;

let getFontAxes: (
  fontFamily: string,
  weights: string[],
  styles: string[],
  selectedVariableAxes?: string[]
) => {
  wght?: string[];
  ital?: string[];
  variableAxes?: [string, string][];
};

let fetchCSSFromGoogleFonts: (url: string, fontFamily: string) => Promise<any>;

// Support @next/font
try {
  const fontUtils = require('@next/font/dist/google/utils');
  validateData = fontUtils.validateData;
  getUrl = fontUtils.getUrl;
  getFontAxes = fontUtils.getFontAxes;
  fetchCSSFromGoogleFonts = fontUtils.fetchCSSFromGoogleFonts;
} catch (_) {
  // Support next/font prior to v13.2.4
  try {
    const fontUtils = require('next/dist/compiled/@next/font/dist/google/utils');
    validateData = fontUtils.validateData;
    getUrl = fontUtils.getUrl;
    getFontAxes = fontUtils.getFontAxes;
    fetchCSSFromGoogleFonts = fontUtils.fetchCSSFromGoogleFonts;
  } catch (__) {
    // Support next/font since v13.2.4
    try {
      validateData = (functionName, fontData, config) =>
        require('next/dist/compiled/@next/font/dist/google/validate-google-font-function-call').validateGoogleFontFunctionCall(
          functionName,
          fontData[0],
          config
        );
      getUrl =
        require('next/dist/compiled/@next/font/dist/google/get-google-fonts-url').getGoogleFontsUrl;
      getFontAxes = require('next/dist/compiled/@next/font/dist/google/get-font-axes').getFontAxes;
      fetchCSSFromGoogleFonts =
        require('next/dist/compiled/@next/font/dist/google/fetch-css-from-google-fonts').fetchCSSFromGoogleFonts;
    } catch (e) {
      throw new Error(dedent`
        We are unable to load the helper functions to use next/font/google.
        Please downgrade Next.js to version 13.2.4 to continue to use next/font/google in Storybook.
        Feel free to open a Github Issue!
      `);
    }
  }
}

export { validateData, getUrl, getFontAxes, fetchCSSFromGoogleFonts };
