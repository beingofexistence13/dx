import { sync as spawnSync } from 'cross-spawn';
import { sync as findUpSync } from 'find-up';
import path from 'path';
import { JsPackageManagerFactory } from './JsPackageManagerFactory';
import { NPMProxy } from './NPMProxy';
import { PNPMProxy } from './PNPMProxy';
import { Yarn1Proxy } from './Yarn1Proxy';
import { Yarn2Proxy } from './Yarn2Proxy';

jest.mock('cross-spawn');
const spawnSyncMock = spawnSync as jest.Mock;

jest.mock('find-up');
const findUpSyncMock = findUpSync as unknown as jest.Mock;

describe('JsPackageManagerFactory', () => {
  beforeEach(() => {
    findUpSyncMock.mockReturnValue(undefined);
  });

  describe('getPackageManager', () => {
    describe('return an NPM proxy', () => {
      it('when `force` option is `npm`', () => {
        expect(JsPackageManagerFactory.getPackageManager({ force: 'npm' })).toBeInstanceOf(
          NPMProxy
        );
      });

      it('when all package managers are ok, but only a `package-lock.json` file', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        // There is only a package-lock.json
        findUpSyncMock.mockImplementation(() => '/Users/johndoe/Documents/package-lock.json');

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(NPMProxy);
      });
    });

    describe('return a PNPM proxy', () => {
      it('when `force` option is `pnpm`', () => {
        expect(JsPackageManagerFactory.getPackageManager({ force: 'pnpm' })).toBeInstanceOf(
          PNPMProxy
        );
      });

      it('when all package managers are ok, but only a `pnpm-lock.yaml` file', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        // There is only a pnpm-lock.yaml
        findUpSyncMock.mockImplementation(() => '/Users/johndoe/Documents/pnpm-lock.yaml');

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(PNPMProxy);
      });

      it('when a pnpm-lock.yaml file is closer than a yarn.lock', () => {
        // Allow find-up to work as normal, we'll set the cwd to our fixture package
        findUpSyncMock.mockImplementation(jest.requireActual('find-up').sync);

        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });
        const fixture = path.join(__dirname, 'fixtures', 'pnpm-workspace', 'package');
        expect(JsPackageManagerFactory.getPackageManager({}, fixture)).toBeInstanceOf(PNPMProxy);
      });
    });

    describe('return a Yarn 1 proxy', () => {
      it('when `force` option is `yarn1`', () => {
        expect(JsPackageManagerFactory.getPackageManager({ force: 'yarn1' })).toBeInstanceOf(
          Yarn1Proxy
        );
      });

      it('when Yarn command is ok, Yarn version is <2, NPM is ko, PNPM is ko', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ko
          if (command === 'npm') {
            return {
              status: 1,
            };
          }
          // PNPM is ko
          if (command === 'pnpm') {
            return {
              status: 1,
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        // there is no lockfile
        findUpSyncMock.mockReturnValue(undefined);

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(Yarn1Proxy);
      });

      it('when Yarn command is ok, Yarn version is <2, NPM and PNPM are ok, there is a `yarn.lock` file', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        // There is a yarn.lock
        findUpSyncMock.mockImplementation(() => '/Users/johndoe/Documents/yarn.lock');

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(Yarn1Proxy);
      });

      it('when multiple lockfiles are in a project, prefers yarn', () => {
        // Allow find-up to work as normal, we'll set the cwd to our fixture package
        findUpSyncMock.mockImplementation(jest.requireActual('find-up').sync);

        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '1.22.4',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });
        const fixture = path.join(__dirname, 'fixtures', 'multiple-lockfiles');
        expect(JsPackageManagerFactory.getPackageManager({}, fixture)).toBeInstanceOf(Yarn1Proxy);
      });
    });

    describe('return a Yarn 2 proxy', () => {
      it('when `force` option is `yarn2`', () => {
        expect(JsPackageManagerFactory.getPackageManager({ force: 'yarn2' })).toBeInstanceOf(
          Yarn2Proxy
        );
      });

      it('when Yarn command is ok, Yarn version is >=2, NPM is ko, PNPM is ko', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '2.0.0-rc.33',
            };
          }
          // NPM is ko
          if (command === 'npm') {
            return {
              status: 1,
            };
          }
          // PNPM is ko
          if (command === 'pnpm') {
            return {
              status: 1,
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(Yarn2Proxy);
      });

      it('when Yarn command is ok, Yarn version is >=2, NPM and PNPM are ok, there is a `yarn.lock` file', () => {
        spawnSyncMock.mockImplementation((command) => {
          // Yarn is ok
          if (command === 'yarn') {
            return {
              status: 0,
              output: '2.0.0-rc.33',
            };
          }
          // NPM is ok
          if (command === 'npm') {
            return {
              status: 0,
              output: '6.5.12',
            };
          }
          // PNPM is ok
          if (command === 'pnpm') {
            return {
              status: 0,
              output: '7.9.5',
            };
          }
          // Unknown package manager is ko
          return {
            status: 1,
          };
        });

        // There is a yarn.lock
        findUpSyncMock.mockImplementation(() => '/Users/johndoe/Documents/yarn.lock');

        expect(JsPackageManagerFactory.getPackageManager()).toBeInstanceOf(Yarn2Proxy);
      });
    });

    it('throws an error if Yarn, NPM, and PNPM are not found', () => {
      spawnSyncMock.mockReturnValue({ status: 1 });
      expect(() => JsPackageManagerFactory.getPackageManager()).toThrow();
    });
  });
});
