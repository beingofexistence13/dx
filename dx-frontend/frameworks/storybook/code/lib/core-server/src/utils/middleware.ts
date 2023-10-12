import path from 'path';
import fs from 'fs';

const fileExists = (basename: string) =>
  ['.js', '.cjs'].reduce((found: string, ext: string) => {
    const filename = `${basename}${ext}`;
    return !found && fs.existsSync(filename) ? filename : found;
  }, '');

export function getMiddleware(configDir: string) {
  const middlewarePath = fileExists(path.resolve(configDir, 'middleware'));
  if (middlewarePath) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    let middlewareModule = require(middlewarePath);
    // eslint-disable-next-line no-underscore-dangle
    if (middlewareModule.__esModule) {
      middlewareModule = middlewareModule.default;
    }
    return middlewareModule;
  }
  return () => {};
}
