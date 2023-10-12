import dedent from 'ts-dedent';
import { Yarn2Proxy } from './Yarn2Proxy';

describe('Yarn 2 Proxy', () => {
  let yarn2Proxy: Yarn2Proxy;

  beforeEach(() => {
    yarn2Proxy = new Yarn2Proxy();
  });

  it('type should be yarn2', () => {
    expect(yarn2Proxy.type).toEqual('yarn2');
  });

  describe('initPackageJson', () => {
    it('should run `yarn init`', async () => {
      const executeCommandSpy = jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('');

      await yarn2Proxy.initPackageJson();

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({ command: 'yarn', args: ['init'] })
      );
    });
  });

  describe('installDependencies', () => {
    it('should run `yarn`', async () => {
      const executeCommandSpy = jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('');

      await yarn2Proxy.installDependencies();

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({ command: 'yarn', args: ['install'] })
      );
    });
  });

  describe('runScript', () => {
    it('should execute script `yarn compodoc -- -e json -d .`', async () => {
      const executeCommandSpy = jest
        .spyOn(yarn2Proxy, 'executeCommand')
        .mockResolvedValueOnce('7.1.0');

      await yarn2Proxy.runPackageCommand('compodoc', ['-e', 'json', '-d', '.']);

      expect(executeCommandSpy).toHaveBeenLastCalledWith(
        expect.objectContaining({
          command: 'yarn',
          args: ['compodoc', '-e', 'json', '-d', '.'],
        })
      );
    });
  });

  describe('setRegistryUrl', () => {
    it('should run `yarn config set npmRegistryServer https://foo.bar`', async () => {
      const executeCommandSpy = jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('');

      await yarn2Proxy.setRegistryURL('https://foo.bar');

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          command: 'npm',
          args: ['config', 'set', 'registry', 'https://foo.bar'],
        })
      );
    });
  });

  describe('addDependencies', () => {
    it('with devDep it should run `yarn install -D @storybook/preview-api`', async () => {
      const executeCommandSpy = jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('');

      await yarn2Proxy.addDependencies({ installAsDevDependencies: true }, [
        '@storybook/preview-api',
      ]);

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({ command: 'yarn', args: ['add', '-D', '@storybook/preview-api'] })
      );
    });
  });

  describe('removeDependencies', () => {
    it('should run `yarn remove @storybook/preview-api`', async () => {
      const executeCommandSpy = jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('');

      await yarn2Proxy.removeDependencies({}, ['@storybook/preview-api']);

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          command: 'yarn',
          args: ['remove', '@storybook/preview-api'],
        })
      );
    });

    it('skipInstall should only change package.json without running install', async () => {
      const executeCommandSpy = jest
        .spyOn(yarn2Proxy, 'executeCommand')
        .mockResolvedValueOnce('7.0.0');
      const writePackageSpy = jest
        .spyOn(yarn2Proxy, 'writePackageJson')
        .mockImplementation(jest.fn());

      await yarn2Proxy.removeDependencies(
        {
          skipInstall: true,
          packageJson: {
            devDependencies: {
              '@storybook/manager-webpack5': 'x.x.x',
              '@storybook/react': 'x.x.x',
            },
          },
        },
        ['@storybook/manager-webpack5']
      );

      expect(writePackageSpy).toHaveBeenCalledWith({
        devDependencies: {
          '@storybook/react': 'x.x.x',
        },
      });
      expect(executeCommandSpy).not.toHaveBeenCalled();
    });
  });

  describe('latestVersion', () => {
    it('without constraint it returns the latest version', async () => {
      const executeCommandSpy = jest
        .spyOn(yarn2Proxy, 'executeCommand')
        .mockResolvedValueOnce('{"name":"@storybook/preview-api","version":"5.3.19"}');

      const version = await yarn2Proxy.latestVersion('@storybook/preview-api');

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          command: 'yarn',
          args: ['npm', 'info', '@storybook/preview-api', '--fields', 'version', '--json'],
        })
      );
      expect(version).toEqual('5.3.19');
    });

    it('with constraint it returns the latest version satisfying the constraint', async () => {
      const executeCommandSpy = jest
        .spyOn(yarn2Proxy, 'executeCommand')
        .mockResolvedValueOnce(
          '{"name":"@storybook/preview-api","versions":["4.25.3","5.3.19","6.0.0-beta.23"]}'
        );

      const version = await yarn2Proxy.latestVersion('@storybook/preview-api', '5.X');

      expect(executeCommandSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          command: 'yarn',
          args: ['npm', 'info', '@storybook/preview-api', '--fields', 'versions', '--json'],
        })
      );
      expect(version).toEqual('5.3.19');
    });

    it('throws an error if command output is not a valid JSON', async () => {
      jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce('NOT A JSON');

      await expect(yarn2Proxy.latestVersion('@storybook/preview-api')).rejects.toThrow();
    });
  });

  describe('addPackageResolutions', () => {
    it('adds resolutions to package.json and account for existing resolutions', async () => {
      const writePackageSpy = jest
        .spyOn(yarn2Proxy, 'writePackageJson')
        .mockImplementation(jest.fn());

      jest.spyOn(yarn2Proxy, 'retrievePackageJson').mockImplementation(
        jest.fn(async () => ({
          dependencies: {},
          devDependencies: {},
          resolutions: {
            bar: 'x.x.x',
          },
        }))
      );

      const versions = {
        foo: 'x.x.x',
      };

      await yarn2Proxy.addPackageResolutions(versions);

      expect(writePackageSpy).toHaveBeenCalledWith({
        dependencies: {},
        devDependencies: {},
        resolutions: {
          ...versions,
          bar: 'x.x.x',
        },
      });
    });
  });

  describe('mapDependencies', () => {
    it('should display duplicated dependencies based on yarn2 output', async () => {
      // yarn info --name-only --recursive "@storybook/*" "storybook"
      jest.spyOn(yarn2Proxy, 'executeCommand').mockResolvedValueOnce(`
      "unrelated-and-should-be-filtered@npm:1.0.0"
      "@storybook/global@npm:5.0.0"
      "@storybook/instrumenter@npm:7.0.0-beta.12"
      "@storybook/instrumenter@npm:7.0.0-beta.19"
      "@storybook/jest@npm:0.0.11-next.0"
      "@storybook/manager-api@npm:7.0.0-beta.19"
      "@storybook/manager@npm:7.0.0-beta.19"
      "@storybook/mdx2-csf@npm:0.1.0-next.5"
      `);

      const installations = await yarn2Proxy.findInstallations(['@storybook/*']);

      expect(installations).toMatchInlineSnapshot(`
        Object {
          "dedupeCommand": "yarn dedupe",
          "dependencies": Object {
            "@storybook/global": Array [
              Object {
                "location": "",
                "version": "5.0.0",
              },
            ],
            "@storybook/instrumenter": Array [
              Object {
                "location": "",
                "version": "7.0.0-beta.12",
              },
              Object {
                "location": "",
                "version": "7.0.0-beta.19",
              },
            ],
            "@storybook/jest": Array [
              Object {
                "location": "",
                "version": "0.0.11-next.0",
              },
            ],
            "@storybook/manager": Array [
              Object {
                "location": "",
                "version": "7.0.0-beta.19",
              },
            ],
            "@storybook/manager-api": Array [
              Object {
                "location": "",
                "version": "7.0.0-beta.19",
              },
            ],
            "@storybook/mdx2-csf": Array [
              Object {
                "location": "",
                "version": "0.1.0-next.5",
              },
            ],
          },
          "duplicatedDependencies": Object {
            "@storybook/instrumenter": Array [
              "7.0.0-beta.12",
              "7.0.0-beta.19",
            ],
          },
          "infoCommand": "yarn why",
        }
      `);
    });
  });

  describe('parseErrors', () => {
    it('should parse yarn2 errors', () => {
      const YARN2_ERROR_SAMPLE = `
        ➤ YN0000: ┌ Resolution step
        ➤ YN0001: │ Error: react@npm:28.2.0: No candidates found
            at ge (/Users/yannbraga/.cache/node/corepack/yarn/3.5.1/yarn.js:439:8124)
            at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
            at async Promise.allSettled (index 8)
            at async io (/Users/yannbraga/.cache/node/corepack/yarn/3.5.1/yarn.js:390:10398)
        ➤ YN0000: └ Completed in 2s 369ms
        ➤ YN0000: Failed with errors in 2s 372ms
        ➤ YN0032: fsevents@npm:2.3.2: Implicit dependencies on node-gyp are discouraged
        ➤ YN0061: @npmcli/move-file@npm:2.0.1 is deprecated: This functionality has been moved to @npmcli/fs
      `;

      expect(yarn2Proxy.parseErrorFromLogs(YARN2_ERROR_SAMPLE)).toEqual(
        'YARN2 error YN0001 - EXCEPTION: react@npm:28.2.0: No candidates found'
      );
    });

    it('should show unknown yarn2 error', () => {
      const YARN2_ERROR_SAMPLE = dedent`
        ➤ YN0000: ┌ Resolution step
        ➤ YN0000: └ Completed in 2s 369ms
        ➤ YN0000: Failed with errors in 2s 372ms
        ➤ YN0032: fsevents@npm:2.3.2: Implicit dependencies on node-gyp are discouraged
        ➤ YN0061: @npmcli/move-file@npm:2.0.1 is deprecated: This functionality has been moved to @npmcli/fs
      `;

      expect(yarn2Proxy.parseErrorFromLogs(YARN2_ERROR_SAMPLE)).toEqual(`YARN2 error`);
    });
  });
});
