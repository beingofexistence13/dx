/* eslint-disable global-require,import/no-dynamic-require */
import fs from 'fs';
import path from 'path';
import type { Loader } from './Loader';
import type { StoryshotsOptions } from '../api/StoryshotsOptions';

const loaderScriptName = 'loader.js';

const isDirectory = (source: string) => fs.lstatSync(source).isDirectory();

function getLoaders(): Loader[] {
  return fs
    .readdirSync(__dirname)
    .map((name) => path.join(__dirname, name))
    .filter(isDirectory)
    .map((framework) => {
      const pa = path.join(framework, loaderScriptName);
      const pb = path.join(framework, 'loader.ts');

      if (fs.existsSync(pa)) {
        return pa;
      }

      if (fs.existsSync(pb)) {
        return pb;
      }

      return null;
    })
    .filter(Boolean)
    .map((loader) => loader && require(loader).default);
}

function loadFramework(options: StoryshotsOptions) {
  const loaders = getLoaders();

  const loader = loaders.find((frameworkLoader) => frameworkLoader.test(options));

  if (!loader) {
    throw new Error(
      "Couldn't find an appropriate framework loader -- do you need to set the `framework` option?"
    );
  }

  return loader.load(options);
}

export default loadFramework;
