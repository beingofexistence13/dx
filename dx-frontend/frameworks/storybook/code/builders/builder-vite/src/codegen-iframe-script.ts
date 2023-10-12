import { getRendererName } from '@storybook/core-common';
import type { Options, PreviewAnnotation } from '@storybook/types';
import { virtualPreviewFile, virtualStoriesFile } from './virtual-file-names';
import { processPreviewAnnotation } from './utils/process-preview-annotation';

export async function generateIframeScriptCode(options: Options, projectRoot: string) {
  const { presets } = options;
  const rendererName = await getRendererName(options);

  const previewAnnotations = await presets.apply<PreviewAnnotation[]>(
    'previewAnnotations',
    [],
    options
  );
  const configEntries = [...previewAnnotations]
    .filter(Boolean)
    .map((path) => processPreviewAnnotation(path, projectRoot));

  const filesToImport = (files: string[], name: string) =>
    files.map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'${el}'`).join('\n');

  const importArray = (name: string, length: number) =>
    new Array(length).fill(0).map((_, i) => `${name}_${i}`);

  // noinspection UnnecessaryLocalVariableJS
  /** @todo Inline variable and remove `noinspection` */
  // language=JavaScript
  const code = `
    // Ensure that the client API is initialized by the framework before any other iframe code
    // is loaded. That way our client-apis can assume the existence of the API+store
    import { configure } from '${rendererName}';

    import { logger } from '@storybook/client-logger';
    import * as previewApi from "@storybook/preview-api";
    ${filesToImport(configEntries, 'config')}

    import * as preview from '${virtualPreviewFile}';
    import { configStories } from '${virtualStoriesFile}';

    const {
      addDecorator,
      addParameters,
      addLoader,
      addArgs,
      addArgTypes,
      addStepRunner,
      addArgTypesEnhancer,
      addArgsEnhancer,
      setGlobalRender,
    } = previewApi;

    const configs = [${importArray('config', configEntries.length)
      .concat('preview.default')
      .join(',')}].filter(Boolean)

    configs.map(config => config.default ? config.default : config).forEach(config => {
      Object.keys(config).forEach((key) => {
        const value = config[key];
        switch (key) {
          case 'args': {
            return addArgs(value);
          }
          case 'argTypes': {
            return addArgTypes(value);
          }
          case 'decorators': {
            return value.forEach((decorator) => addDecorator(decorator, false));
          }
          case 'loaders': {
            return value.forEach((loader) => addLoader(loader, false));
          }
          case 'parameters': {
            return addParameters({ ...value }, false);
          }
          case 'argTypesEnhancers': {
            return value.forEach((enhancer) => addArgTypesEnhancer(enhancer));
          }
          case 'argsEnhancers': {
            return value.forEach((enhancer) => addArgsEnhancer(enhancer))
          }
          case 'render': {
            return setGlobalRender(value)
          }
          case 'globals':
          case 'globalTypes': {
            const v = {};
            v[key] = value;
            return addParameters(v, false);
          }
          case 'decorateStory':
          case 'applyDecorators':
          case 'renderToDOM': // deprecated
          case 'renderToCanvas': {
            return null; // This key is not handled directly in v6 mode.
          }
          case 'runStep': {
            return addStepRunner(value);
          }
          default: {
            // eslint-disable-next-line prefer-template
            return console.log(key + ' was not supported :( !');
          }
        }
      });
    })
    
    /* TODO: not quite sure what to do with this, to fix HMR
    if (import.meta.hot) {
        import.meta.hot.accept();    
    }
    */

    configStories(configure);
    `.trim();
  return code;
}
