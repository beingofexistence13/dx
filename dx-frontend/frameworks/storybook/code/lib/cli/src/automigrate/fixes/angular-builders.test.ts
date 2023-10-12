import type { StorybookConfig } from '@storybook/types';
import { angularBuilders } from './angular-builders';
import * as helpers from '../../helpers';
import * as angularHelpers from '../../generators/ANGULAR/helpers';
import type { JsPackageManager } from '../../js-package-manager';

const checkAngularBuilders = async ({
  packageManager,
  mainConfig = {},
  storybookVersion = '7.0.0',
}: {
  packageManager: Partial<JsPackageManager>;
  mainConfig?: Partial<StorybookConfig>;
  storybookVersion?: string;
}) => {
  return angularBuilders.check({
    packageManager: packageManager as any,
    storybookVersion,
    mainConfig: mainConfig as any,
  });
};

jest.mock('../../helpers', () => ({
  ...jest.requireActual('../../helpers'),
  isNxProject: jest.fn(),
}));

jest.mock('../../generators/ANGULAR/helpers', () => ({
  ...jest.requireActual('../../generators/ANGULAR/helpers'),
  AngularJSON: jest.fn(),
}));

describe('is Nx project', () => {
  beforeEach(() => {
    (helpers.isNxProject as any as jest.SpyInstance).mockResolvedValue(true);
  });

  const packageManager = {
    getPackageVersion: jest.fn().mockImplementation((packageName) => {
      if (packageName === '@angular/core') {
        return '12.0.0';
      }

      return null;
    }),
  } as Partial<JsPackageManager>;

  it('should return null', async () => {
    await expect(checkAngularBuilders({ packageManager })).resolves.toBeNull();
  });
});

describe('is not Nx project', () => {
  beforeEach(() => {
    (helpers.isNxProject as any as jest.SpyInstance).mockResolvedValue(false);
  });

  describe('angular builders', () => {
    afterEach(jest.restoreAllMocks);

    describe('Angular not found', () => {
      const packageManager = {
        getPackageVersion: jest.fn().mockReturnValue(null),
      } as Partial<JsPackageManager>;

      it('should return null', async () => {
        await expect(checkAngularBuilders({ packageManager })).resolves.toBeNull();
      });
    });

    describe('Angular < 14.0.0', () => {
      const packageManager = {
        getPackageVersion: (packageName: string) => {
          if (packageName === '@angular/core') {
            return Promise.resolve('12.0.0');
          }

          return null;
        },
      } as Partial<JsPackageManager>;

      it('should throw an Error', async () => {
        await expect(
          checkAngularBuilders({ packageManager, mainConfig: { framework: '@storybook/angular' } })
        ).rejects.toThrowErrorMatchingSnapshot();
      });
    });

    describe('Angular >= 14.0.0', () => {
      const packageManager = {
        getPackageVersion: (packageName) => {
          if (packageName === '@angular/core') {
            return Promise.resolve('15.0.0');
          }

          return null;
        },
      } as Partial<JsPackageManager>;

      describe('has one Storybook builder defined', () => {
        beforeEach(() => {
          // Mock AngularJSON.constructor
          (angularHelpers.AngularJSON as jest.Mock).mockImplementation(() => ({
            hasStorybookBuilder: true,
          }));
        });

        it('should return null', async () => {
          await expect(
            checkAngularBuilders({
              packageManager,
              mainConfig: { framework: '@storybook/angular' },
            })
          ).resolves.toBeNull();
        });
      });

      describe('has multiple projects without root project defined', () => {
        beforeEach(() => {
          // Mock AngularJSON.constructor
          (angularHelpers.AngularJSON as jest.Mock).mockImplementation(() => ({
            hasStorybookBuilder: false,
            projects: {
              project1: { root: 'project1', architect: {} },
              project2: { root: 'project2', architect: {} },
            },
            rootProject: null,
          }));
        });

        it('should return null', async () => {
          await expect(
            checkAngularBuilders({
              packageManager,
              mainConfig: { framework: '@storybook/angular' },
            })
          ).resolves.toBeNull();
        });
      });

      describe('has one project', () => {
        beforeEach(() => {
          // Mock AngularJSON.constructor
          (angularHelpers.AngularJSON as jest.Mock).mockImplementation(() => ({
            hasStorybookBuilder: false,
            projects: {
              project1: { root: 'project1', architect: {} },
            },
            rootProject: 'project1',
          }));
        });

        it('should proceed and return data', async () => {
          await expect(
            checkAngularBuilders({
              packageManager,
              mainConfig: { framework: '@storybook/angular' },
            })
          ).resolves.toMatchObject({
            mainConfig: {},
            packageManager: {},
          });
        });
      });
    });
  });
});
