import type { Options, Presets } from '@storybook/types';
import { loadConfigFromFile } from 'vite';
import { commonConfig } from './vite-config';

jest.mock('vite', () => ({
  ...jest.requireActual('vite'),
  loadConfigFromFile: jest.fn(async () => ({})),
}));
const loadConfigFromFileMock = jest.mocked(loadConfigFromFile);

const dummyOptions: Options = {
  configType: 'DEVELOPMENT',
  configDir: '',
  packageJson: {},
  presets: {
    apply: async (key: string) =>
      ({
        framework: {
          name: '',
        },
        addons: [],
        core: {
          builder: {},
        },
        options: {},
      }[key]),
  } as Presets,
  presetsList: [],
};

describe('commonConfig', () => {
  it('should preserve default envPrefix', async () => {
    loadConfigFromFileMock.mockReturnValueOnce(
      Promise.resolve({
        config: {},
        path: '',
        dependencies: [],
      })
    );
    const config = await commonConfig(dummyOptions, 'development');
    expect(config.envPrefix).toStrictEqual(['VITE_', 'STORYBOOK_']);
  });

  it('should preserve custom envPrefix string', async () => {
    loadConfigFromFileMock.mockReturnValueOnce(
      Promise.resolve({
        config: { envPrefix: 'SECRET_' },
        path: '',
        dependencies: [],
      })
    );
    const config = await commonConfig(dummyOptions, 'development');
    expect(config.envPrefix).toStrictEqual(['SECRET_', 'STORYBOOK_']);
  });

  it('should preserve custom envPrefix array', async () => {
    loadConfigFromFileMock.mockReturnValueOnce(
      Promise.resolve({
        config: { envPrefix: ['SECRET_', 'VUE_'] },
        path: '',
        dependencies: [],
      })
    );
    const config = await commonConfig(dummyOptions, 'development');
    expect(config.envPrefix).toStrictEqual(['SECRET_', 'VUE_', 'STORYBOOK_']);
  });
});
