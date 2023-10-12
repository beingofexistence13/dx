/* eslint-disable import/no-mutable-exports */
import dedent from 'ts-dedent';

type FontOptions = {
  src: Array<{
    path: string;
    weight?: string;
    style?: string;
    ext: string;
    format: string;
  }>;
  display: string;
  weight?: string;
  style?: string;
  fallback?: string[];
  preload: boolean;
  variable?: string;
  adjustFontFallback?: string | false;
  declarations?: Array<{
    prop: string;
    value: string;
  }>;
};

let validateData: (functionName: string, fontData: any) => FontOptions;

// Support @next/font
try {
  const fontUtils = require('@next/font/dist/local/utils');
  validateData = fontUtils.validateData;
} catch (_) {
  // Support next/font prior to v13.2.4
  try {
    const fontUtils = require('next/dist/compiled/@next/font/dist/local/utils');
    validateData = fontUtils.validateData;
  } catch (__) {
    // Support next/font since v13.2.4
    try {
      validateData =
        require('next/dist/compiled/@next/font/dist/local/validate-local-font-function-call').validateLocalFontFunctionCall;
    } catch (e) {
      throw new Error(dedent`
        We are unable to load the helper functions to use next/font/local.
        Please downgrade Next.js to version 13.2.4 to continue to use next/font/local in Storybook.
        Feel free to open a Github Issue!
      `);
    }
  }
}

export { validateData };
