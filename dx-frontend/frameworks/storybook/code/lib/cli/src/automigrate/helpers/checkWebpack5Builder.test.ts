import type { StorybookConfig } from '@storybook/types';
import { checkWebpack5Builder } from './checkWebpack5Builder';
import { getBuilderPackageName } from './mainConfigFile';

const mockMainConfig: StorybookConfig = {
  framework: 'react',
  addons: [],
  stories: [],
};

jest.mock('./mainConfigFile');

describe('checkWebpack5Builder', () => {
  let loggerWarnSpy: jest.SpyInstance;
  let loggerInfoSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    loggerInfoSpy = jest.spyOn(console, 'info').mockImplementation();
  });

  afterEach(() => {
    loggerWarnSpy.mockRestore();
    loggerInfoSpy.mockRestore();
  });

  it('should return null and log a warning if storybook version is below 6.3.0', async () => {
    const result = await checkWebpack5Builder({
      mainConfig: mockMainConfig,
      storybookVersion: '6.2.9',
    });
    expect(result).toBeNull();
    expect(loggerWarnSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('should return null if storybook version is 7.0.0 or above', async () => {
    const result = await checkWebpack5Builder({
      mainConfig: mockMainConfig,
      storybookVersion: '7.0.0',
    });
    expect(result).toBeNull();
    expect(loggerWarnSpy).not.toHaveBeenCalled();
  });

  it('should return null and log a warning if mainConfig is missing', async () => {
    const result = await checkWebpack5Builder({
      mainConfig: undefined,
      storybookVersion: '6.3.0',
    });
    expect(result).toBeNull();
    expect(loggerWarnSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('should return null and log an info message if builderPackageName is found but not "webpack4"', async () => {
    jest.mocked(getBuilderPackageName).mockReturnValueOnce('webpack5');

    const result = await checkWebpack5Builder({
      mainConfig: mockMainConfig,
      storybookVersion: '6.3.0',
    });

    expect(result).toBeNull();
    expect(loggerInfoSpy).toHaveBeenCalledWith(expect.any(String));
  });

  it('should return { storybookVersion } if all checks pass', async () => {
    jest.mocked(getBuilderPackageName).mockReturnValueOnce('webpack4');

    const result = await checkWebpack5Builder({
      mainConfig: mockMainConfig,
      storybookVersion: '6.3.0',
    });

    expect(result).toEqual({ storybookVersion: '6.3.0' });
    expect(loggerWarnSpy).not.toHaveBeenCalled();
    expect(loggerInfoSpy).not.toHaveBeenCalled();
  });
});
