import { Preview, composeConfigs } from '@storybook/preview-api';
import type {
  Renderer,
  ComponentTitle,
  Path,
  ProjectAnnotations,
  ModuleExports,
  StoryIndex,
} from '@storybook/types';
import { Channel } from '@storybook/channels';

import { ExternalDocsContext } from './ExternalDocsContext';

type MetaExports = ModuleExports;

class ConstantMap<TKey, TValue extends string> {
  entries = new Map<TKey, TValue>();

  constructor(private prefix: string) {}

  get(key: TKey) {
    if (!this.entries.has(key)) {
      this.entries.set(key, `${this.prefix}${this.entries.size}` as TValue);
    }
    return this.entries.get(key);
  }
}

export class ExternalPreview<TRenderer extends Renderer = Renderer> extends Preview<TRenderer> {
  private importPaths = new ConstantMap<MetaExports, Path>('./importPath/');

  private titles = new ConstantMap<MetaExports, ComponentTitle>('title-');

  private storyIndex: StoryIndex = { v: 4, entries: {} };

  private moduleExportsByImportPath: Record<Path, ModuleExports> = {};

  constructor(public projectAnnotations: ProjectAnnotations<TRenderer>) {
    super(new Channel({}));

    this.initialize({
      getStoryIndex: () => this.storyIndex,
      importFn: (path: Path) => {
        return Promise.resolve(this.moduleExportsByImportPath[path]);
      },
      getProjectAnnotations: () =>
        composeConfigs([
          { parameters: { docs: { story: { inline: true } } } },
          this.projectAnnotations,
        ]),
    });
  }

  processMetaExports = (metaExports: MetaExports) => {
    const importPath = this.importPaths.get(metaExports);
    this.moduleExportsByImportPath[importPath] = metaExports;

    const title = metaExports.default.title || this.titles.get(metaExports);

    const csfFile = this.storyStore.processCSFFileWithCache<TRenderer>(
      metaExports,
      importPath,
      title
    );

    Object.values(csfFile.stories).forEach(({ id, name }) => {
      this.storyIndex.entries[id] = {
        id,
        importPath,
        title,
        name,
        type: 'story',
      };
    });

    this.onStoriesChanged({ storyIndex: this.storyIndex });

    return csfFile;
  };

  docsContext = () => {
    return new ExternalDocsContext(
      this.channel,
      this.storyStore,
      this.renderStoryToElement.bind(this),
      this.processMetaExports.bind(this)
    );
  };
}
