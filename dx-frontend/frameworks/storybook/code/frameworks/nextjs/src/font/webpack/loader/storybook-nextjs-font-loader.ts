import { getFontFaceDeclarations as getGoogleFontFaceDeclarations } from './google/get-font-face-declarations';
import { getFontFaceDeclarations as getLocalFontFaceDeclarations } from './local/get-font-face-declarations';
import type { LoaderOptions } from './types';
import { getCSSMeta } from './utils/get-css-meta';
import { setFontDeclarationsInHead } from './utils/set-font-declarations-in-head';

type FontFaceDeclaration = {
  id: string;
  fontFamily: string;
  fontFaceCSS: any;
  weights: string[];
  styles: string[];
  variable?: string;
};

export default async function storybookNextjsFontLoader(this: any) {
  const options = this.getOptions() as LoaderOptions;

  // get execution context
  const rootCtx = this.rootContext;

  let fontFaceDeclaration: FontFaceDeclaration | undefined;

  if (options.source === 'next/font/google' || options.source === '@next/font/google') {
    fontFaceDeclaration = await getGoogleFontFaceDeclarations(options);
  }

  if (options.source === 'next/font/local' || options.source === '@next/font/local') {
    fontFaceDeclaration = await getLocalFontFaceDeclarations(options, rootCtx);
  }

  if (typeof fontFaceDeclaration !== 'undefined') {
    const cssMeta = getCSSMeta(fontFaceDeclaration);

    return `
    ${setFontDeclarationsInHead({
      fontFaceCSS: cssMeta.fontFaceCSS,
      id: fontFaceDeclaration.id,
      classNamesCSS: cssMeta.classNamesCSS,
    })}

    module.exports = {
      className: "${cssMeta.className}", 
      style: ${JSON.stringify(cssMeta.style)}
      ${cssMeta.variableClassName ? `, variable: "${cssMeta.variableClassName}"` : ''}
    }
    `;
  }

  return `module.exports = {}`;
}
