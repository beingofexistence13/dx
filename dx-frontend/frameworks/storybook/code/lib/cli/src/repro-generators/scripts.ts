import path from 'path';
import { readJSON, writeJSON, outputFile, remove } from 'fs-extra';
import chalk from 'chalk';
import { command } from 'execa';
import type spawn from 'cross-spawn';
import { spawn as spawnAsync } from 'cross-spawn';
import { cra, cra_typescript } from './configs';
import storybookVersions from '../versions';

const logger = console;

export interface Parameters {
  /** E2E configuration name */
  name: string;
  /** framework version */
  version: string;
  /** CLI to bootstrap the project */
  generator: string;
  /** Use storybook framework detection */
  autoDetect?: boolean;
  /** Pre-build hook */
  preBuildCommand?: string;
  /** When cli complains when folder already exists */
  ensureDir?: boolean;
  /** Dependencies to add before building Storybook */
  additionalDeps?: string[];
  /** Files to add before installing Storybook */
  additionalFiles?: {
    path: string;
    contents: string;
  }[];
  /** Add typescript dependency and creates a tsconfig.json file */
  typescript?: boolean;
  /** Environment variables to inject while running generator */
  envs?: Record<string, string>;
}

interface Configuration {
  e2e: boolean;
  pnp: boolean;
  local: boolean;
  registry?: string;
}

type ExecOptions = globalThis.Parameters<typeof spawn>[2];

export interface Options extends Parameters {
  appName: string;
  creationPath: string;
  cwd?: string;
  e2e: boolean;
  pnp: boolean;
}

export const exec = async (
  // eslint-disable-next-line @typescript-eslint/no-shadow
  command: string,
  options: ExecOptions = {},
  {
    startMessage,
    errorMessage,
    dryRun,
  }: { startMessage?: string; errorMessage?: string; dryRun?: boolean } = {}
) => {
  if (startMessage) logger.info(startMessage);

  if (dryRun) {
    logger.info(`\n> ${command}\n`);
    return undefined;
  }

  logger.debug(command);
  return new Promise((resolve, reject) => {
    const child = spawnAsync(command, {
      ...options,
      shell: true,
      stdio: 'pipe',
    });

    child.stderr.pipe(process.stdout);
    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
      if (code === 0) {
        resolve(undefined);
      } else {
        logger.error(chalk.red(`An error occurred while executing: \`${command}\``));
        logger.info(errorMessage);
        reject(new Error(`command exited with code: ${code}: `));
      }
    });
  });
};

const addPackageResolutions = async ({ cwd }: Options) => {
  logger.info(`🔢 Adding package resolutions:`);
  const packageJsonPath = path.join(cwd, 'package.json');
  const packageJson = await readJSON(packageJsonPath);
  packageJson.resolutions = storybookVersions;
  await writeJSON(packageJsonPath, packageJson, { spaces: 2 });
};

const addLocalPackageResolutions = async ({ cwd }: Options) => {
  logger.info(`🔢 Adding package resolutions:`);
  const packageJsonPath = path.join(cwd, 'package.json');
  const packageJson = await readJSON(packageJsonPath);
  const workspaceDir = path.join(__dirname, '..', '..', '..', '..', '..');
  const { stdout } = await command('yarn workspaces list --json', {
    cwd: workspaceDir,
    cleanup: true,
  });

  const workspaces = JSON.parse(`[${stdout.split('\n').join(',')}]`);

  packageJson.resolutions = Object.keys(storybookVersions).reduce((acc, key) => {
    return {
      ...acc,
      [key]: path.join(workspaceDir, workspaces.find((item: any) => item.name === key).location),
    };
  }, {});
  await writeJSON(packageJsonPath, packageJson, { spaces: 2 });
};

const installYarn2 = async ({ cwd, pnp, name }: Options) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const command = [
    `yarn set version berry`,
    `yarn config set enableGlobalCache true`,
    `yarn config set checksumBehavior ignore`,
    `yarn config set nodeLinker ${pnp ? 'pnp' : 'node-modules'}`,
  ];

  // FIXME: Some dependencies used by CRA aren't listed in its package.json
  // Next line is a hack to remove as soon as CRA will have added these missing deps
  // for details see https://github.com/facebook/create-react-app/pull/11751
  if ([cra.name, cra_typescript.name].includes(name)) {
    command.push(
      `yarn config set packageExtensions --json '{ "babel-preset-react-app@10.0.x": { "dependencies": { "@babel/plugin-proposal-private-property-in-object": "^7.16.0" } } }'`
    );
  }

  await exec(
    command.join(' && '),
    { cwd },
    { startMessage: `🧶 Installing Yarn 2`, errorMessage: `🚨 Installing Yarn 2 failed` }
  );
};

const configureYarn2ForE2E = async ({ cwd }: Options) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const command = [
    // ⚠️ Need to set registry because Yarn 2 is not using the conf of Yarn 1 (URL is hardcoded in CircleCI config.yml)
    `yarn config set npmRegistryServer http://localhost:6001/`,
    // Some required magic to be able to fetch deps from local registry
    `yarn config set unsafeHttpWhitelist --json '["localhost"]'`,
    // Disable fallback mode to make sure everything is required correctly
    `yarn config set pnpFallbackMode none`,
    // We need to be able to update lockfile when bootstrapping the examples
    `yarn config set enableImmutableInstalls false`,
    // Discard all YN0013 - FETCH_NOT_CACHED messages
    `yarn config set logFilters --json '[ { "code": "YN0013", "level": "discard" } ]'`,
  ].join(' && ');

  await exec(
    command,
    { cwd },
    { startMessage: `🎛 Configuring Yarn 2`, errorMessage: `🚨 Configuring Yarn 2 failed` }
  );
};

const generate = async ({ cwd, name, appName, version, generator, envs }: Options) => {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const command = generator.replace(/{{appName}}/g, appName).replace(/{{version}}/g, version);

  await exec(
    command,
    { cwd, env: { ...process.env, ...envs } },
    {
      startMessage: `🏗 Bootstrapping ${name} project (this might take a few minutes)`,
      errorMessage: `🚨 Bootstrapping ${name} failed`,
    }
  );
};

const addAdditionalFiles = async ({ additionalFiles, cwd }: Options) => {
  logger.info(`⤵️ Adding required files`);

  await Promise.all(
    additionalFiles.map(async (file) => {
      await outputFile(path.resolve(cwd, file.path), file.contents, { encoding: 'utf-8' });
    })
  );
};

const initStorybook = async ({ cwd, autoDetect = true, name, e2e, pnp }: Options) => {
  const flags = ['--yes'];

  if (!autoDetect) {
    flags.push(`--type ${name}`);
  }
  if (e2e) {
    flags.push('--linkable');
  }
  if (pnp) {
    flags.push('--use-pnp');
  }

  // This is bundled into a single javascript file.
  const sbCLICommand = `node ${__filename}`;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const command = `${sbCLICommand} init ${flags.join(' ')}`;

  await exec(
    command,
    { cwd },
    {
      startMessage: `🎨 Initializing Storybook with @storybook/cli`,
      errorMessage: `🚨 Storybook initialization failed`,
    }
  );
};

const addRequiredDeps = async ({ cwd, additionalDeps }: Options) => {
  // Remove any lockfile generated without Yarn 2
  await Promise.all([
    remove(path.join(cwd, 'package-lock.json')),
    remove(path.join(cwd, 'yarn.lock')),
  ]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const command =
    additionalDeps && additionalDeps.length > 0
      ? `yarn add -D ${additionalDeps.join(' ')}`
      : `yarn install`;

  await exec(
    command,
    { cwd },
    {
      startMessage: `🌍 Adding needed deps & installing all deps`,
      errorMessage: `🚨 Dependencies installation failed`,
    }
  );
};

const addTypescript = async ({ cwd }: Options) => {
  logger.info(`👮 Adding typescript and tsconfig.json`);
  try {
    await exec(`yarn add -D typescript@latest`, { cwd });
    const tsConfig = {
      compilerOptions: {
        baseUrl: '.',
        esModuleInterop: true,
        jsx: 'preserve',
        skipLibCheck: true,
        strict: true,
      },
      include: ['src/*'],
    };
    const tsConfigJsonPath = path.resolve(cwd, 'tsconfig.json');
    await writeJSON(tsConfigJsonPath, tsConfig, { encoding: 'utf8', spaces: 2 });
  } catch (e) {
    logger.error(`🚨 Creating tsconfig.json failed`);
    throw e;
  }
};

const doTask = async (
  task: (options: Options) => Promise<void>,
  options: Options,
  condition = true
) => {
  if (condition) {
    await task(options);
    logger.log();
  }
};

const registryUrlNPM = (url: string) => {
  const args = ['config', 'set', 'registry', url];
  return exec(`npm ${args.join(' ')}`, { cwd: path.join(process.cwd(), '..') });
};

const registryUrlYarn = (url: string) => {
  const args = ['config', 'set', 'npmRegistryServer', url];
  return exec(`yarn ${args.join(' ')}`, { cwd: path.join(__dirname, '..') });
};

export const createAndInit = async (
  cwd: string,
  { name, version, ...rest }: Parameters,
  { e2e, pnp, local, registry }: Configuration
) => {
  const options: Options = {
    name,
    version,
    appName: path.basename(cwd),
    creationPath: path.join(cwd, '..'),
    cwd,
    e2e,
    pnp,
    ...rest,
  };

  logger.log();
  logger.info(`🏃 Starting for ${name} ${version}`);
  logger.log();

  await doTask(generate, { ...options, cwd: options.creationPath });
  await doTask(addAdditionalFiles, { ...options, cwd }, !!options.additionalFiles);
  if (e2e) {
    await doTask(addPackageResolutions, options);
  }
  if (local) {
    await doTask(addLocalPackageResolutions, options);
  }
  await doTask(installYarn2, options);
  if (e2e) {
    await doTask(configureYarn2ForE2E, options, e2e);
  }
  await doTask(addTypescript, options, !!options.typescript);
  await doTask(addRequiredDeps, options);
  if (registry) {
    await registryUrlNPM(registry);
    await registryUrlYarn(registry);
  }
  await doTask(initStorybook, options);
};
