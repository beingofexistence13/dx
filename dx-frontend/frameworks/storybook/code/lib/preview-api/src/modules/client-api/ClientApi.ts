/* eslint-disable no-underscore-dangle */

import { dedent } from 'ts-dedent';
import { global } from '@storybook/global';
import { logger } from '@storybook/client-logger';
import { toId, sanitize } from '@storybook/csf';
import type {
  Args,
  StepRunner,
  ArgTypes,
  Renderer,
  DecoratorFunction,
  Parameters,
  ArgTypesEnhancer,
  ArgsEnhancer,
  LoaderFunction,
  StoryFn,
  Globals,
  GlobalTypes,
  Addon_ClientApiAddons,
  Addon_StoryApi,
  NormalizedComponentAnnotations,
  Path,
  ModuleImportFn,
  ModuleExports,
} from '@storybook/types';
import type { StoryStore } from '../../store';
import { combineParameters, composeStepRunners, normalizeInputTypes } from '../../store';

import { StoryStoreFacade } from './StoryStoreFacade';

const warningAlternatives = {
  addDecorator: `Instead, use \`export const decorators = [];\` in your \`preview.js\`.`,
  addParameters: `Instead, use \`export const parameters = {};\` in your \`preview.js\`.`,
  addLoader: `Instead, use \`export const loaders = [];\` in your \`preview.js\`.`,
  addArgs: '',
  addArgTypes: '',
  addArgsEnhancer: '',
  addArgTypesEnhancer: '',
  addStepRunner: '',
  getGlobalRender: '',
  setGlobalRender: '',
};

const checkMethod = (method: keyof typeof warningAlternatives) => {
  if (global.FEATURES?.storyStoreV7) {
    throw new Error(
      dedent`You cannot use \`${method}\` with the new Story Store.

      ${warningAlternatives[method]}`
    );
  }

  if (!global.__STORYBOOK_CLIENT_API__) {
    throw new Error(`Singleton client API not yet initialized, cannot call \`${method}\`.`);
  }
};

export const addDecorator = (decorator: DecoratorFunction<Renderer>) => {
  checkMethod('addDecorator');
  global.__STORYBOOK_CLIENT_API__?.addDecorator(decorator);
};

export const addParameters = (parameters: Parameters) => {
  checkMethod('addParameters');
  global.__STORYBOOK_CLIENT_API__?.addParameters(parameters);
};

export const addLoader = (loader: LoaderFunction<Renderer>) => {
  checkMethod('addLoader');
  global.__STORYBOOK_CLIENT_API__?.addLoader(loader);
};

export const addArgs = (args: Args) => {
  checkMethod('addArgs');
  global.__STORYBOOK_CLIENT_API__?.addArgs(args);
};

export const addArgTypes = (argTypes: ArgTypes) => {
  checkMethod('addArgTypes');
  global.__STORYBOOK_CLIENT_API__?.addArgTypes(argTypes);
};

export const addArgsEnhancer = (enhancer: ArgsEnhancer<Renderer>) => {
  checkMethod('addArgsEnhancer');
  global.__STORYBOOK_CLIENT_API__?.addArgsEnhancer(enhancer);
};

export const addArgTypesEnhancer = (enhancer: ArgTypesEnhancer<Renderer>) => {
  checkMethod('addArgTypesEnhancer');
  global.__STORYBOOK_CLIENT_API__?.addArgTypesEnhancer(enhancer);
};

export const addStepRunner = (stepRunner: StepRunner) => {
  checkMethod('addStepRunner');
  global.__STORYBOOK_CLIENT_API__?.addStepRunner(stepRunner);
};

export const getGlobalRender = () => {
  checkMethod('getGlobalRender');
  return global.__STORYBOOK_CLIENT_API__?.facade.projectAnnotations.render;
};

export const setGlobalRender = (render: StoryStoreFacade<any>['projectAnnotations']['render']) => {
  checkMethod('setGlobalRender');
  if (global.__STORYBOOK_CLIENT_API__) {
    global.__STORYBOOK_CLIENT_API__.facade.projectAnnotations.render = render;
  }
};

const invalidStoryTypes = new Set(['string', 'number', 'boolean', 'symbol']);
export class ClientApi<TRenderer extends Renderer> {
  facade: StoryStoreFacade<TRenderer>;

  storyStore?: StoryStore<TRenderer>;

  private addons: Addon_ClientApiAddons<TRenderer['storyResult']>;

  onImportFnChanged?: ({ importFn }: { importFn: ModuleImportFn }) => void;

  // If we don't get passed modules so don't know filenames, we can
  // just use numeric indexes
  private lastFileName = 0;

  constructor({ storyStore }: { storyStore?: StoryStore<TRenderer> } = {}) {
    this.facade = new StoryStoreFacade();

    this.addons = {};

    this.storyStore = storyStore;
  }

  importFn(path: Path) {
    return this.facade.importFn(path);
  }

  getStoryIndex() {
    if (!this.storyStore) {
      throw new Error('Cannot get story index before setting storyStore');
    }
    return this.facade.getStoryIndex(this.storyStore);
  }

  addDecorator = (decorator: DecoratorFunction<TRenderer>) => {
    this.facade.projectAnnotations.decorators?.push(decorator);
  };

  addParameters = ({
    globals,
    globalTypes,
    ...parameters
  }: Parameters & { globals?: Globals; globalTypes?: GlobalTypes }) => {
    this.facade.projectAnnotations.parameters = combineParameters(
      this.facade.projectAnnotations.parameters,
      parameters
    );
    if (globals) {
      this.facade.projectAnnotations.globals = {
        ...this.facade.projectAnnotations.globals,
        ...globals,
      };
    }
    if (globalTypes) {
      this.facade.projectAnnotations.globalTypes = {
        ...this.facade.projectAnnotations.globalTypes,
        ...normalizeInputTypes(globalTypes),
      };
    }
  };

  addStepRunner = (stepRunner: StepRunner) => {
    this.facade.projectAnnotations.runStep = composeStepRunners(
      [this.facade.projectAnnotations.runStep, stepRunner].filter(Boolean) as StepRunner[]
    );
  };

  addLoader = (loader: LoaderFunction<TRenderer>) => {
    this.facade.projectAnnotations.loaders?.push(loader);
  };

  addArgs = (args: Args) => {
    this.facade.projectAnnotations.args = {
      ...this.facade.projectAnnotations.args,
      ...args,
    };
  };

  addArgTypes = (argTypes: ArgTypes) => {
    this.facade.projectAnnotations.argTypes = {
      ...this.facade.projectAnnotations.argTypes,
      ...normalizeInputTypes(argTypes),
    };
  };

  addArgsEnhancer = (enhancer: ArgsEnhancer<TRenderer>) => {
    this.facade.projectAnnotations.argsEnhancers?.push(enhancer);
  };

  addArgTypesEnhancer = (enhancer: ArgTypesEnhancer<TRenderer>) => {
    this.facade.projectAnnotations.argTypesEnhancers?.push(enhancer);
  };

  // Because of the API of `storiesOf().add()` we don't have a good "end" call for a
  // storiesOf file to finish adding stories, and us to load it into the facade as a
  // single psuedo-CSF file. So instead we just keep collecting the CSF files and load
  // them all into the facade at the end.
  _addedExports = {} as Record<Path, ModuleExports>;

  _loadAddedExports() {
    Object.entries(this._addedExports).forEach(([fileName, fileExports]) =>
      this.facade.addStoriesFromExports(fileName, fileExports)
    );
  }

  // what are the occasions that "m" is a boolean vs an obj
  storiesOf = (kind: string, m?: NodeModule): Addon_StoryApi<TRenderer['storyResult']> => {
    if (!kind && typeof kind !== 'string') {
      throw new Error('Invalid or missing kind provided for stories, should be a string');
    }

    if (!m) {
      logger.warn(
        `Missing 'module' parameter for story with a kind of '${kind}'. It will break your HMR`
      );
    }

    if (m) {
      const proto = Object.getPrototypeOf(m);
      if (proto.exports && proto.exports.default) {
        // FIXME: throw an error in SB6.0
        logger.error(
          `Illegal mix of CSF default export and storiesOf calls in a single file: ${proto.i}`
        );
      }
    }

    // eslint-disable-next-line no-plusplus
    const baseFilename = m && m.id ? `${m.id}` : (this.lastFileName++).toString();
    let fileName = baseFilename;
    let i = 1;
    // Deal with `storiesOf()` being called twice in the same file.
    // On HMR, we clear _addedExports[fileName] below.

    while (this._addedExports[fileName]) {
      i += 1;
      fileName = `${baseFilename}-${i}`;
    }

    if (m && m.hot && m.hot.accept) {
      // This module used storiesOf(), so when it re-runs on HMR, it will reload
      // itself automatically without us needing to look at our imports
      m.hot.accept();
      m.hot.dispose(() => {
        this.facade.clearFilenameExports(fileName);

        delete this._addedExports[fileName];

        // We need to update the importFn as soon as the module re-evaluates
        // (and calls storiesOf() again, etc). We could call `onImportFnChanged()`
        // at the end of every setStories call (somehow), but then we'd need to
        // debounce it somehow for initial startup. Instead, we'll take advantage of
        // the fact that the evaluation of the module happens immediately in the same tick
        setTimeout(() => {
          this._loadAddedExports();
          this.onImportFnChanged?.({ importFn: this.importFn.bind(this) });
        }, 0);
      });
    }

    let hasAdded = false;
    const api: Addon_StoryApi<TRenderer['storyResult']> = {
      kind: kind.toString(),
      add: () => api,
      addDecorator: () => api,
      addLoader: () => api,
      addParameters: () => api,
    };

    // apply addons
    Object.keys(this.addons).forEach((name) => {
      const addon = this.addons[name];
      api[name] = (...args: any[]) => {
        addon.apply(api, args);
        return api;
      };
    });

    const meta: NormalizedComponentAnnotations<TRenderer> = {
      id: sanitize(kind),
      title: kind,
      decorators: [],
      loaders: [],
      parameters: {},
    };
    // We map these back to a simple default export, even though we have type guarantees at this point

    this._addedExports[fileName] = { default: meta };

    let counter = 0;
    api.add = (storyName: string, storyFn: StoryFn<TRenderer>, parameters: Parameters = {}) => {
      hasAdded = true;

      if (typeof storyName !== 'string') {
        throw new Error(`Invalid or missing storyName provided for a "${kind}" story.`);
      }

      if (!storyFn || Array.isArray(storyFn) || invalidStoryTypes.has(typeof storyFn)) {
        throw new Error(
          `Cannot load story "${storyName}" in "${kind}" due to invalid format. Storybook expected a function/object but received ${typeof storyFn} instead.`
        );
      }

      const { decorators, loaders, component, args, argTypes, ...storyParameters } = parameters;

      const storyId = parameters.__id || toId(kind, storyName);

      const csfExports = this._addedExports[fileName];
      // Whack a _ on the front incase it is "default"
      csfExports[`story${counter}`] = {
        name: storyName,
        parameters: { fileName, __id: storyId, ...storyParameters },
        decorators,
        loaders,
        args,
        argTypes,
        component,
        render: storyFn,
      };
      counter += 1;

      return api;
    };

    api.addDecorator = (decorator: DecoratorFunction<TRenderer>) => {
      if (hasAdded)
        throw new Error(`You cannot add a decorator after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);

      meta.decorators?.push(decorator);
      return api;
    };

    api.addLoader = (loader: LoaderFunction<TRenderer>) => {
      if (hasAdded) throw new Error(`You cannot add a loader after the first story for a kind.`);

      meta.loaders?.push(loader);
      return api;
    };

    api.addParameters = ({ component, args, argTypes, tags, ...parameters }: Parameters) => {
      if (hasAdded)
        throw new Error(`You cannot add parameters after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);

      meta.parameters = combineParameters(meta.parameters, parameters);
      if (component) meta.component = component;
      if (args) meta.args = { ...meta.args, ...args };
      if (argTypes) meta.argTypes = { ...meta.argTypes, ...argTypes };
      if (tags) meta.tags = tags;
      return api;
    };

    return api;
  };

  // @deprecated
  raw = () => {
    return this.storyStore?.raw();
  };

  // @deprecated
  get _storyStore() {
    return this.storyStore;
  }
}
