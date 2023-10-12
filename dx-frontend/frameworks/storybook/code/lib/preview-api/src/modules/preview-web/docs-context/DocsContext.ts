import type {
  Renderer,
  CSFFile,
  ModuleExport,
  ModuleExports,
  PreparedStory,
  StoryContextForLoaders,
  StoryId,
  StoryName,
  ResolvedModuleExportType,
  ResolvedModuleExportFromType,
} from '@storybook/types';
import type { Channel } from '@storybook/channels';

import dedent from 'ts-dedent';
import type { StoryStore } from '../../store';
import type { DocsContextProps } from './DocsContextProps';

export class DocsContext<TRenderer extends Renderer> implements DocsContextProps<TRenderer> {
  private componentStoriesValue: PreparedStory<TRenderer>[];

  private storyIdToCSFFile: Map<StoryId, CSFFile<TRenderer>>;

  private exportToStory: Map<ModuleExport, PreparedStory<TRenderer>>;

  private exportsToCSFFile: Map<ModuleExports, CSFFile<TRenderer>>;

  private nameToStoryId: Map<StoryName, StoryId>;

  private attachedCSFFile?: CSFFile<TRenderer>;

  private primaryStory?: PreparedStory<TRenderer>;

  constructor(
    public channel: Channel,
    protected store: StoryStore<TRenderer>,
    public renderStoryToElement: DocsContextProps['renderStoryToElement'],
    /** The CSF files known (via the index) to be refererenced by this docs file */
    csfFiles: CSFFile<TRenderer>[]
  ) {
    this.storyIdToCSFFile = new Map();
    this.exportToStory = new Map();
    this.exportsToCSFFile = new Map();
    this.nameToStoryId = new Map();
    this.componentStoriesValue = [];

    csfFiles.forEach((csfFile, index) => {
      this.referenceCSFFile(csfFile);
    });
  }

  // This docs entry references this CSF file and can synchronously load the stories, as well
  // as reference them by module export. If the CSF is part of the "component" stories, they
  // can also be referenced by name and are in the componentStories list.
  referenceCSFFile(csfFile: CSFFile<TRenderer>) {
    this.exportsToCSFFile.set(csfFile.moduleExports, csfFile);
    // Also set the default export as the component's exports,
    // to allow `import ButtonStories from './Button.stories'`
    this.exportsToCSFFile.set(csfFile.moduleExports.default, csfFile);

    const stories = this.store.componentStoriesFromCSFFile({ csfFile });

    stories.forEach((story) => {
      const annotation = csfFile.stories[story.id];
      this.storyIdToCSFFile.set(annotation.id, csfFile);
      this.exportToStory.set(annotation.moduleExport, story);
    });
  }

  attachCSFFile(csfFile: CSFFile<TRenderer>) {
    if (!this.exportsToCSFFile.has(csfFile.moduleExports)) {
      throw new Error('Cannot attach a CSF file that has not been referenced');
    }

    this.attachedCSFFile = csfFile;

    const stories = this.store.componentStoriesFromCSFFile({ csfFile });
    stories.forEach((story) => {
      this.nameToStoryId.set(story.name, story.id);
      this.componentStoriesValue.push(story);
      if (!this.primaryStory) this.primaryStory = story;
    });
  }

  referenceMeta(metaExports: ModuleExports, attach: boolean) {
    const resolved = this.resolveModuleExport(metaExports);
    if (resolved.type !== 'meta')
      throw new Error(
        '<Meta of={} /> must reference a CSF file module export or meta export. Did you mistakenly reference your component instead of your CSF file?'
      );

    if (attach) this.attachCSFFile(resolved.csfFile);
  }

  get projectAnnotations() {
    const { projectAnnotations } = this.store;
    if (!projectAnnotations) {
      throw new Error("Can't get projectAnnotations from DocsContext before they are initialized");
    }
    return projectAnnotations;
  }

  private resolveAttachedModuleExportType<TType extends ResolvedModuleExportType>(
    moduleExportType: TType
  ): ResolvedModuleExportFromType<TType, TRenderer> {
    type TResolvedExport = ResolvedModuleExportFromType<TType, TRenderer>;

    if (moduleExportType === 'story') {
      // If passed a type, we return the attached file, component or primary story
      if (!this.primaryStory)
        throw new Error(
          `No primary story attached to this docs file, did you forget to use <Meta of={} />?`
        );

      return { type: 'story', story: this.primaryStory } as TResolvedExport;
    }

    if (!this.attachedCSFFile)
      throw new Error(
        `No CSF file attached to this docs file, did you forget to use <Meta of={} />?`
      );

    if (moduleExportType === 'meta')
      return { type: 'meta', csfFile: this.attachedCSFFile } as TResolvedExport;

    const { component } = this.attachedCSFFile.meta;
    if (!component)
      throw new Error(
        `Attached CSF file does not defined a component, did you forget to export one?`
      );
    return { type: 'component', component } as TResolvedExport;
  }

  private resolveModuleExport<TType extends ResolvedModuleExportType>(
    moduleExportOrType: ModuleExport
  ): ResolvedModuleExportFromType<TType, TRenderer> {
    type TResolvedExport = ResolvedModuleExportFromType<TType, TRenderer>;

    const csfFile = this.exportsToCSFFile.get(moduleExportOrType);
    if (csfFile) return { type: 'meta', csfFile } as TResolvedExport;

    const story = this.exportToStory.get(moduleExportOrType);
    if (story) return { type: 'story', story } as TResolvedExport;

    // If the export isn't a module, default or story export, we assume it is a component
    return { type: 'component', component: moduleExportOrType } as TResolvedExport;
  }

  resolveOf<TType extends ResolvedModuleExportType>(
    moduleExportOrType: ModuleExport | TType,
    validTypes: TType[] = []
  ): ResolvedModuleExportFromType<TType, TRenderer> {
    type TResolvedExport = ResolvedModuleExportFromType<TType, TRenderer>;

    let resolved: TResolvedExport;
    if (['component', 'meta', 'story'].includes(moduleExportOrType)) {
      const type = moduleExportOrType as TType;
      resolved = this.resolveAttachedModuleExportType(type);
    } else {
      resolved = this.resolveModuleExport(moduleExportOrType);
    }

    if (validTypes.length && !validTypes.includes(resolved.type as TType)) {
      const prettyType = resolved.type === 'component' ? 'component or unknown' : resolved.type;
      throw new Error(dedent`Invalid value passed to the 'of' prop. The value was resolved to a '${prettyType}' type but the only types for this block are: ${validTypes.join(
        ', '
      )}.
        - Did you pass a component to the 'of' prop when the block only supports a story or a meta?
        - ... or vice versa?
        - Did you pass a story, CSF file or meta to the 'of' prop that is not indexed, ie. is not targeted by the 'stories' globs in the main configuration?`);
    }

    switch (resolved.type) {
      case 'component': {
        return {
          ...resolved,
          projectAnnotations: this.projectAnnotations,
        };
      }
      case 'meta': {
        return {
          ...resolved,
          preparedMeta: this.store.preparedMetaFromCSFFile({ csfFile: resolved.csfFile }),
        };
      }
      case 'story':
      default: {
        return resolved;
      }
    }
  }

  storyIdByName = (storyName: StoryName) => {
    const storyId = this.nameToStoryId.get(storyName);
    if (storyId) return storyId;

    throw new Error(`No story found with that name: ${storyName}`);
  };

  componentStories = () => {
    return this.componentStoriesValue;
  };

  storyById = (storyId?: StoryId) => {
    if (!storyId) {
      if (!this.primaryStory)
        throw new Error(
          `No primary story defined for docs entry. Did you forget to use \`<Meta>\`?`
        );

      return this.primaryStory;
    }
    const csfFile = this.storyIdToCSFFile.get(storyId);
    if (!csfFile)
      throw new Error(`Called \`storyById\` for story that was never loaded: ${storyId}`);
    return this.store.storyFromCSFFile({ storyId, csfFile });
  };

  getStoryContext = (story: PreparedStory<TRenderer>) => {
    return {
      ...this.store.getStoryContext(story),
      viewMode: 'docs',
    } as StoryContextForLoaders<TRenderer>;
  };

  loadStory = (id: StoryId) => {
    return this.store.loadStory({ storyId: id });
  };
}
