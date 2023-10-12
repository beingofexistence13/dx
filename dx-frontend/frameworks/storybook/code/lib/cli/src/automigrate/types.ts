import type { StorybookConfig } from '@storybook/types';
import type { JsPackageManager, PackageManagerName } from '../js-package-manager';

export interface CheckOptions {
  packageManager: JsPackageManager;
  rendererPackage?: string;
  configDir?: string;
  mainConfig: StorybookConfig;
  storybookVersion: string;
  previewConfigPath?: string;
  mainConfigPath?: string;
}

export interface RunOptions<ResultType> {
  packageManager: JsPackageManager;
  result: ResultType;
  dryRun?: boolean;
  mainConfigPath?: string;
  skipInstall?: boolean;
}

export interface Fix<ResultType = any> {
  id: string;
  promptOnly?: boolean;
  check: (options: CheckOptions) => Promise<ResultType | void>;
  prompt: (result: ResultType) => string;
  run?: (options: RunOptions<ResultType>) => Promise<void>;
}

export type FixId = string;

export enum PreCheckFailure {
  UNDETECTED_SB_VERSION = 'undetected_sb_version',
  MAINJS_NOT_FOUND = 'mainjs_not_found',
  MAINJS_EVALUATION = 'mainjs_evaluation_error',
}

export interface FixOptions {
  fixId?: FixId;
  list?: boolean;
  fixes?: Fix[];
  yes?: boolean;
  dryRun?: boolean;
  useNpm?: boolean;
  packageManager?: PackageManagerName;
  configDir?: string;
  renderer?: string;
  skipInstall?: boolean;
  hideMigrationSummary?: boolean;
}

export enum FixStatus {
  CHECK_FAILED = 'check_failed',
  UNNECESSARY = 'unnecessary',
  MANUAL_SUCCEEDED = 'manual_succeeded',
  MANUAL_SKIPPED = 'manual_skipped',
  SKIPPED = 'skipped',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

export type FixSummary = {
  skipped: FixId[];
  manual: FixId[];
  succeeded: FixId[];
  failed: Record<FixId, string>;
};
