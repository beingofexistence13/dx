/* eslint-disable @typescript-eslint/naming-convention */
import type { StorybookConfig } from '@storybook/types';
import type { SupportedRenderers } from '../project_types';

export interface Parameters {
  renderer: SupportedRenderers;
  /** E2E configuration name */
  name: string;
  /** framework version */
  version: string;
  /** CLI to bootstrap the project */
  generator: string;
  /** Use storybook framework detection */
  autoDetect?: boolean;
  /** Dependencies to add before building Storybook */
  additionalDeps?: string[];
  /** Files to add before installing Storybook */
  additionalFiles?: {
    path: string;
    contents: string;
  }[];
  /** Add typescript dependency and creates a tsconfig.json file */
  typescript?: boolean;
  /** Merge configurations to main.js before running the tests */
  mainOverrides?: Partial<StorybookConfig> & Record<string, any>;
  /** Environment variables to inject while running generator */
  envs?: Record<string, string>;
}

const fromDeps = (...args: string[]): string =>
  [
    'mkdir {{appName}}',
    'cd {{appName}}',
    // Create `yarn.lock` to force Yarn to consider adding deps in this directory
    // and not look for a yarn workspace in parent directory
    'touch yarn.lock',
    'yarn init --yes',
    args.length && `yarn add ${args.join(' ')}`,
  ]
    .filter(Boolean)
    .join(' && ');

// #region  React
export const cra: Parameters = {
  renderer: 'react',
  name: 'cra',
  version: 'latest',
  generator: [
    // Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
    'npx -p create-react-app@{{version}} create-react-app {{appName}}',
    'cd {{appName}}',
    'echo "FAST_REFRESH=true" > .env',
    'echo "SKIP_PREFLIGHT_CHECK=true" > .env',
  ].join(' && '),
  envs: { npm_config_user_agent: 'npm' },
};

export const cra_typescript: Parameters = {
  renderer: 'react',
  name: 'cra_typescript',
  version: 'latest',
  generator: [
    // Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
    'npx -p create-react-app@{{version}} create-react-app {{appName}} --template typescript',
  ].join(' && '),
  envs: { npm_config_user_agent: 'npm' },
};

export const react: Parameters = {
  renderer: 'react',
  name: 'react',
  version: 'latest',
  generator: fromDeps('react', 'react-dom', '@babel/preset-react'),
  additionalDeps: ['prop-types'],
  additionalFiles: [{ path: '.babelrc', contents: '{ "presets": ["@babel/preset-react"] }' }],
};

export const react_legacy_root_api: Parameters = {
  renderer: 'react',
  name: 'react_legacy_root_api',
  version: 'latest',
  generator: fromDeps('react', 'react-dom'),
  additionalDeps: ['prop-types', '@babel/preset-react'],
  additionalFiles: [{ path: '.babelrc', contents: '{ "presets": ["@babel/preset-react"] }' }],
  mainOverrides: {
    reactOptions: {
      legacyRootApi: true,
    },
  },
};

export const react_typescript: Parameters = {
  renderer: 'react',
  name: 'react_typescript',
  version: 'latest',
  generator: fromDeps('react', 'react-dom'),
  typescript: true,
  additionalDeps: ['@babel/preset-react', '@babel/preset-typescript'],
  additionalFiles: [
    {
      path: '.babelrc',
      contents: '{ "presets": ["@babel/preset-react", "@babel/preset-typescript"] }',
    },
  ],
};

export const nextjs: Parameters = {
  renderer: 'react',
  name: 'nextjs',
  version: 'latest',
  generator: [
    // Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
    'npm_config_user_agent=npm npx -p create-next-app@{{version}} create-next-app {{appName}}',
    'cd {{appName}}',
  ].join(' && '),
};

export const nextjs_typescript: Parameters = {
  renderer: 'react',
  name: 'nextjs_typescript',
  version: 'latest',
  generator: [
    // Force npm otherwise we have a mess between Yarn 1, Yarn 2 and NPM
    'npm_config_user_agent=npm npx -p create-next-app@{{version}} create-next-app {{appName}} --typescript',
    'cd {{appName}}',
  ].join(' && '),
};

// export const vite_react: Parameters = {
//   renderer: 'react',
//   name: 'vite_react',
//   version: 'latest',
//   generator: 'npx -p create-vite@{{version}} create-vite {{appName}} --template react-ts',
// };

export const react_in_yarn_workspace: Parameters = {
  renderer: 'react',
  name: 'react_in_yarn_workspace',
  version: 'latest',
  generator: [
    'mkdir {{appName}}',
    'cd {{appName}}',
    'echo "{ \\"name\\": \\"workspace-root\\", \\"private\\": true, \\"workspaces\\": [] }" > package.json',
    'touch yarn.lock',
    `yarn add react react-dom`,
  ].join(' && '),
};

// #endregion

// #region Angular
const baseAngular: Parameters = {
  renderer: 'angular',
  name: 'angular',
  version: 'latest',
  generator: `npx -p @angular/cli@{{version}} ng new {{appName}} --routing=true --minimal=true --style=scss --skip-install=true --strict`,
};

export const angular12: Parameters = {
  ...baseAngular,
  name: 'angular12',
  version: 'v12-lts',
};

export const angular130: Parameters = {
  ...baseAngular,
  name: 'angular130',
  version: '13.0.x',
};

export const angular13: Parameters = {
  ...baseAngular,
  name: 'angular13',
  version: '13.1.x',
};

export const angular: Parameters = baseAngular;
// #endregion

// #region  web components
export const web_components: Parameters = {
  renderer: 'web-components',
  name: 'web_components',
  version: '2',
  generator: fromDeps('lit-element'),
};

export const web_components_typescript: Parameters = {
  ...web_components,
  name: 'web_components_typescript',
  typescript: true,
  additionalDeps: ['@babel/preset-typescript'],
  additionalFiles: [
    {
      path: '.babelrc',
      contents: '{ "presets": ["@babel/preset-typescript"] }',
    },
  ],
};

export const web_components_lit2: Parameters = {
  ...web_components,
  version: 'next',
  name: 'web_components_lit2',
  generator: fromDeps('lit'),
  typescript: true,
  additionalDeps: ['@babel/preset-typescript'],
  additionalFiles: [
    {
      path: '.babelrc',
      contents: '{ "presets": ["@babel/preset-typescript"] }',
    },
  ],
};

// #endregion

// #region  vue

export const vue: Parameters = {
  renderer: 'vue',
  name: 'vue',
  version: 'latest',
  generator: [
    // vue2 with webpack5
    `npx -p @vue/cli vue create {{appName}} --default --packageManager=yarn --force --merge --preset="Default (Vue 2)"`,
  ].join(' && '),
};

export const vue3: Parameters = {
  renderer: 'vue3',
  name: 'vue3',
  version: 'next',
  // Vue CLI v4 utilizes webpack 4, and the 5-alpha uses webpack 5 so we force ^4 here
  generator: [
    // Force npm otherwise we have a mess between Yarn 1 and Yarn 2
    `npx -p @vue/cli@^4 vue create {{appName}} --preset=__default_vue_3__ --packageManager=npm --no-git --force`,
  ].join(' && '),
};

// #endregion

export const html: Parameters = {
  renderer: 'html',
  name: 'html',
  version: 'latest',
  generator: fromDeps(),
  autoDetect: false,
};

export const preact: Parameters = {
  renderer: 'preact',
  name: 'preact',
  version: 'latest',
  generator:
    'npx preact-cli@{{version}} create preactjs-templates/default {{appName}} --install=false --git=false',
};

export const preact_vite: Parameters = {
  renderer: 'preact',
  name: 'preact',
  version: 'latest',
  generator: 'yarn create vite@{{version}} {{appName}} --template preact',
};

export const sfcVue: Parameters = {
  renderer: 'vue',
  name: 'sfcVue',
  version: 'latest',
  //
  generator: fromDeps('vue@2.6', 'vue-loader@15.9', 'vue-template-compiler@2.6', 'webpack'),
};

export const svelte: Parameters = {
  renderer: 'svelte',
  name: 'svelte',
  version: 'latest',
  generator: 'npx giget github:sveltejs/template#master {{appName}}',
};

export const svelteKit: Parameters = {
  renderer: 'svelte',
  name: 'svelteKit',
  version: 'latest',
  generator:
    'yarn create svelte-with-args --name={{appName}} --directory=. --template=skeleton --types=null --no-prettier --no-eslint --no-playwright',
};
