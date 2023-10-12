# Storybook for SvelteKit <!-- omit in toc -->

Our goal is to help you use the tools you love together with Storybook. That’s why Storybook has zero-config support for SvelteKit with the `@storybook/sveltekit` package.

Check out our [Frameworks API](https://storybook.js.org/blog/framework-api/) announcement for what this all means for you and our continued efforts to make Storybook a seamless integration for any project.

## Table of Contents <!-- omit in toc -->

- [Supported features](#supported-features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [In a project without Storybook](#in-a-project-without-storybook)
  - [In a project with Storybook](#in-a-project-with-storybook)
    - [Automatic migration](#automatic-migration)
    - [Manual migration](#manual-migration)
- [Troubleshooting](#troubleshooting)
  - [Error: `ERR! SyntaxError: Identifier '__esbuild_register_import_meta_url__' has already been declared` when starting Storybook](#error-err-syntaxerror-identifier-__esbuild_register_import_meta_url__-has-already-been-declared-when-starting-storybook)
  - [Error: `Cannot read properties of undefined (reading 'disable_scroll_handling')` in preview](#error-cannot-read-properties-of-undefined-reading-disable_scroll_handling-in-preview)
- [Acknowledgements](#acknowledgements)

## Supported features

All Svelte language features are supported out of the box, as Storybook uses the Svelte compiler underneath.
However SvelteKit has some [Kit-specific modules](https://kit.svelte.dev/docs/modules) that currently aren't supported. It's on our roadmap to support most of them soon:

| **Module**                                                                         | **Status**             | **Note**                                                                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [`$app/environment`](https://kit.svelte.dev/docs/modules#$app-environment)         | ✅ Supported           | `version` is always empty in Storybook.                                                                                             |
| [`$app/forms`](https://kit.svelte.dev/docs/modules#$app-forms)                     | ⏳ Future              | Will use mocks. Tracked in [#20999](https://github.com/storybookjs/storybook/issues/20999)                                          |
| [`$app/navigation`](https://kit.svelte.dev/docs/modules#$app-navigation)           | ⏳ Future              | Will use mocks. Tracked in [#20999](https://github.com/storybookjs/storybook/issues/20999)                                          |
| [`$app/paths`](https://kit.svelte.dev/docs/modules#$app-paths)                     | ✅ Supported           | Requires SvelteKit 1.4.0 or newer                                                                                                   |
| [`$app/stores`](https://kit.svelte.dev/docs/modules#$app-stores)                   | ✅ Supported           | Mocks planned, so you can set different store values per story.                                                                     |
| [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private) | ⛔ Not supported       | They are meant to only be available server-side, and Storybook renders all components on the client.                                |
| [`$env/dynamic/public`](https://kit.svelte.dev/docs/modules#$env-dynamic-public)   | 🚧 Partially supported | Only supported in development mode. Storybook is built as a static app with no server-side API so cannot dynamically serve content. |
| [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private)   | ⛔ Not supported       | They are meant to only be available server-side, and Storybook renders all components on the client.                                |
| [`$env/static/public`](https://kit.svelte.dev/docs/modules#$env-static-public)     | ✅ Supported           |                                                                                                                                     |
| [`$lib`](https://kit.svelte.dev/docs/modules#$lib)                                 | ✅ Supported           |                                                                                                                                     |
| [`$service-worker`](https://kit.svelte.dev/docs/modules#$service-worker)           | ⛔ Not supported       | They are only meant to be used in service workers                                                                                   |
| [`@sveltejs/kit/*`](https://kit.svelte.dev/docs/modules#sveltejs-kit)              | ✅ Supported           |                                                                                                                                     |

This is just the beginning. We're close to adding basic support for many of the SvelteKit features. Longer term we're planning on making it an even better experience to [build](https://storybook.js.org/docs/svelte/writing-stories/introduction), [test](https://storybook.js.org/docs/svelte/writing-tests/introduction) and [document](https://storybook.js.org/docs/svelte/writing-docs/introduction) all the SvelteKit goodies like [pages](https://kit.svelte.dev/docs/routing), [forms](https://kit.svelte.dev/docs/form-actions) and [layouts](https://kit.svelte.dev/docs/routing#layout) in Storybook, while still integrating with all the addons and workflows you know and love.

## Requirements

- [SvelteKit](https://kit.svelte.dev/) >= 1.0.0 (not including beta versions)
- [Storybook](https://storybook.js.org/) >= 7.x

## Getting Started

### In a project without Storybook

Run the following command in your SvelteKit project's root directory, and follow the prompts:

```bash
npx storybook@latest init
```

[More on getting started with Storybook](https://storybook.js.org/docs/svelte/get-started/install)

### In a project with Storybook

This framework is designed to work with Storybook 7. If you’re not already using v7, upgrade with this command:

```bash
npx storybook@latest upgrade --prerelease
```

#### Automatic migration

When running the `upgrade` command above you should get a prompt asking you to migrate to `@storybook/sveltekit`, which should handle everything for you. In some cases it can't migrate for you, eg. if your existing Storybook setup is based on Webpack. In such cases, refer to the manual migration below.

Storybook 7.0 automatically loads your Vite config, and by extension your Svelte config. If you had a `svelteOptions` property in `.storybook/main.js` the automigration will have removed it, as it is no longer supported.

#### Manual migration

Install the framework:

```bash
yarn add -D @storybook/sveltekit
```

Update your `main.js` to change the framework property:

```js
// .storybook/main.js
export default {
  ...
  framework: '@storybook/sveltekit',
};
```

Storybook 7.0 automatically loads your Vite config, and by extension your Svelte config. If you have a `svelteOptions` property in `.storybook/main.js` you need to remove that. See [Troubleshooting](#error-about-__esbuild_register_import_meta_url__-when-starting-storybook) below.

Remove any redundant dependencies, if you have them:

```bash
yarn remove @storybook/svelte-vite
yarn remove @storybook/svelte-webpack5
yarn remove storybook-builder-vite
yarn remove @storybook/builder-vite
```

## Troubleshooting

### Error: `ERR! SyntaxError: Identifier '__esbuild_register_import_meta_url__' has already been declared` when starting Storybook

> When starting Storybook after upgrading to v7.0, it breaks with the following error:
>
> ```
> ERR! SyntaxError: Identifier '__esbuild_register_import_meta_url__' has already been declared
> ```

You'll get this error when manually upgrading from 6.5 to 7.0. You need to remove the `svelteOptions` property in `.storybook/main.js`, as that is not supported by Storybook 7.0 + SvelteKit. The property is also not necessary anymore because the Vite and Svelte configurations are loaded automatically in Storybook 7.0.

### Error: `Cannot read properties of undefined (reading 'disable_scroll_handling')` in preview

> Some stories don't load, instead they show the following error in the preview:
>
> ```
> Cannot read properties of undefined (reading 'disable_scroll_handling')
> ```

You'll experience this if anything in your story is importing from `$app/forms` or `$app/navigation`, which is currently not supported. To get around this, separate your component into a shallow parent component that imports what's needed and passes it to a child component via props. This way you can write stories for your child component and mock any of the necessary modules by passing props in.

## Acknowledgements

Integrating with SvelteKit would not have been possible if it weren't for the fantastic efforts by the Svelte core team - especially [Ben McCann](https://twitter.com/benjaminmccann) - to make integrations with the wider ecosystem possible.
