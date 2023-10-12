const PLUGIN_NAME = 'storybook-normalize-angular-entry-plugin';

/**
 * Angular's webpack plugin @angular-devkit/build-angular/src/webpack/plugins/styles-webpack-plugin.js
 * transforms the original webpackOptions.entry point array into a structure like this:
 *
 * ```js
 * {
 *  main: {
 *    import: [...]
 *  },
 *
 *  styles: {
 *    import: [...]
 *  },
 * }
 * ```
 *
 * Storybook throws an __webpack_require__.nmd is not a function error, when another runtime bundle (styles~runtime.iframe.bundle.js) is loaded.
 * To prevent this error, we have to normalize the entry point to only generate one runtime bundle (main~runtime.iframe.bundle.js).
 */
export default class StorybookNormalizeAngularEntryPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.environment.tap(PLUGIN_NAME, () => {
      const webpackOptions = compiler.options;
      const entry =
        typeof webpackOptions.entry === 'function' ? webpackOptions.entry() : webpackOptions.entry;

      webpackOptions.entry = async () => {
        const entryResult = await entry;

        if (entryResult.main && entryResult.styles) {
          return {
            main: {
              import: Array.from(
                new Set([...entryResult.main.import, ...entryResult.styles.import])
              ),
            },
          };
        }

        return entry;
      };
    });

    compiler.hooks.thisCompilation.tap(PLUGIN_NAME, (compilation) => {
      this.compilation = compilation;
    });
  }
}
