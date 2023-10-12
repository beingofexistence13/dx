import { BuilderContext } from '@angular-devkit/architect';
import {
  AssetPattern,
  StyleElement,
  StylePreprocessorOptions,
} from '@angular-devkit/build-angular/src/builders/browser/schema';
import { LoadOptions, CLIOptions, BuilderOptions } from '@storybook/types';

export type StandaloneOptions = CLIOptions &
  LoadOptions &
  BuilderOptions & {
    mode?: 'static' | 'dev';
    enableProdMode: boolean;
    angularBrowserTarget?: string | null;
    angularBuilderOptions?: Record<string, any> & {
      styles?: StyleElement[];
      stylePreprocessorOptions?: StylePreprocessorOptions;
      assets?: AssetPattern[];
    };
    angularBuilderContext?: BuilderContext | null;
    tsConfig?: string;
  };
