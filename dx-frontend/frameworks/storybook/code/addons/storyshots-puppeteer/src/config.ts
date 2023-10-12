import type { MatchImageSnapshotOptions } from 'jest-image-snapshot';
import type { ScreenshotOptions, Browser, Page, ElementHandle, LaunchOptions } from 'puppeteer';

type PuppeteerLifeCycleEvent = 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';

export interface Context {
  kind: string;
  story: string;
  parameters: {
    [key: string]: any;
  };
}

interface Options {
  context: Context;
  url: string;
}

interface Base64ScreenShotOptions extends ScreenshotOptions {
  encoding: 'base64';
}

interface DirectNavigationOptions {
  referer?: string;
  timeout?: number;
  waitUntil?: PuppeteerLifeCycleEvent | PuppeteerLifeCycleEvent[];
}

export interface CommonConfig {
  storybookUrl: string;
  chromeExecutablePath?: string;
  getGotoOptions: (options: Options) => DirectNavigationOptions | undefined;
  customizePage: (page: Page) => Promise<void>;
  getCustomBrowser?: () => Promise<Browser>;
  /**
   * Puppeteer browser launch options:
   * {@link https://pptr.dev/api/puppeteer.puppeteernode.launch/ puppeteer.launch()}
   */
  browserLaunchOptions: LaunchOptions;
  setupTimeout: number;
  testTimeout: number;
}

export interface PuppeteerTestConfig extends CommonConfig {
  testBody: ((page: Page, options: Options) => void | Promise<void>) & {
    filter?: (options: Options) => boolean;
  };
}

export interface ImageSnapshotConfig extends CommonConfig {
  getMatchOptions: (options: Options) => MatchImageSnapshotOptions | undefined;
  getScreenshotOptions: (options: Options) => Base64ScreenShotOptions;
  beforeScreenshot: (page: Page, options: Options) => Promise<void | ElementHandle>;
  afterScreenshot: (options: { image: string | void | Buffer; context: Context }) => Promise<void>;
}

export interface AxeConfig extends CommonConfig {
  beforeAxeTest: (page: Page, options: Options) => Promise<void>;
}

const noop: () => undefined = () => undefined;
const asyncNoop: () => Promise<undefined> = async () => undefined;

export const defaultCommonConfig: CommonConfig = {
  storybookUrl: 'http://localhost:6006',
  chromeExecutablePath: process.env.SB_CHROMIUM_PATH,
  getGotoOptions: noop,
  customizePage: asyncNoop,
  getCustomBrowser: undefined,
  browserLaunchOptions: {},
  setupTimeout: 15000,
  testTimeout: 15000,
};

const getTestBody = (options: Options) => options.context.parameters.puppeteerTest;

function defaultTestBody(page: Page, options: Options) {
  const testBody = getTestBody(options);
  if (testBody != null) {
    return testBody(page, options);
  }
  return null;
}

defaultTestBody.filter = (options: Options) => getTestBody(options) != null;

export const defaultPuppeteerTestConfig: PuppeteerTestConfig = {
  ...defaultCommonConfig,
  testBody: defaultTestBody,
};

// We consider taking the full page is a reasonable default.
const defaultScreenshotOptions = () => ({ fullPage: true, encoding: 'base64' } as const);
export const defaultImageSnapshotConfig: ImageSnapshotConfig = {
  ...defaultCommonConfig,
  getMatchOptions: noop,
  getScreenshotOptions: defaultScreenshotOptions,
  beforeScreenshot: asyncNoop,
  afterScreenshot: asyncNoop,
};

export const defaultAxeConfig: AxeConfig = {
  ...defaultCommonConfig,
  beforeAxeTest: asyncNoop,
};
