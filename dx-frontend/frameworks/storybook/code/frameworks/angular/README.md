# Storybook for Angular

- [Storybook for Angular](#storybook-for-angular)
  - [Getting Started](#getting-started)
  - [Setup Storybook for your Angular projects](#setup-storybook-for-your-angular-projects)
  - [Run Storybook](#run-storybook)
  - [Setup Compodoc](#setup-compodoc)
    - [Automatic setup](#automatic-setup)
    - [Manual setup](#manual-setup)
  - [moduleMetadata decorator](#modulemetadata-decorator)
  - [applicationConfig decorator](#applicationconfig-decorator)
  - [FAQ](#faq)
    - [How do I migrate to an Angular Storybook builder?](#how-do-i-migrate-to-an-angular-storybook-builder)
      - [Do you have only one Angular project in your workspace?](#do-you-have-only-one-angular-project-in-your-workspace)
        - [Adjust your `package.json`](#adjust-your-packagejson)
      - [I have multiple projects in my Angular workspace](#i-have-multiple-projects-in-my-angular-workspace)

Storybook for Angular is a UI development environment for your Angular components.
With it, you can visualize different states of your UI components and develop them interactively.

![Storybook Screenshot](https://github.com/storybookjs/storybook/blob/main/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started

```sh
cd my-angular-app
npx storybook@latest init
```

## Setup Storybook for your Angular projects

Storybook supports Angular multi-project workspace. You can setup Storybook for each project in the workspace. When running `npx storybook@latest init` you will be asked for which project Storybook should be set up. Essentially, during initialization, the `.storybook` folder will be created and the `angular.json` will be edited to add the Storybook configuration for the selected project. The configuration looks approximately like this:

```json
// angular.json
{
  ...
  "projects": {
    ...
    "your-project": {
      ...
      "architect": {
        ...
        "storybook": {
          "builder": "@storybook/angular:start-storybook",
          "options": {
            // the path to the storybook config directory
            "configDir": ".storybook",
            // the build target of your project
            "browserTarget": "your-project:build",
            // the port you want to start Storybook on
            "port": 6006
            // further options are available and can be found in
            // https://github.com/storybookjs/storybook/tree/next/code/frameworks/angular/src/builders/start-storybook/schema.json
          }
        },
        "build-storybook": {
          "builder": "@storybook/angular:build-storybook",
          "options": {
            "configDir": ".storybook",
            "browserTarget": "your-project:build",
            "outputDir": "dist/storybook/your-project"
            // further options are available and can be found in
            // https://github.com/storybookjs/storybook/tree/next/code/frameworks/angular/src/builders/build-storybook/schema.json
          }
        }
      }
    }
  }
}
```

## Run Storybook

To run Storybook for a particular project, please run:

```sh
ng run <your-project>:storybook
```

To build Storybook, run:

```sh
ng run <your-project>:build-storybook
```

You will find the output in `dist/storybook/your-project`.

For more information visit: [storybook.js.org](https://storybook.js.org)

## Setup Compodoc

You can include JSDoc comments above components, directives, and other parts of your Angular code to include documentation for those elements. Compodoc uses these comments to generate documentation for your application. In Storybook, it is useful to add explanatory comments above @Inputs and @Outputs, since these are the main elements that Storybook displays in its user interface. The @Inputs and @Outputs are the elements that you can interact with in Storybook, such as controls.

### Automatic setup

When installing Storybook via `sb init`, you will be given the option to set up Compodoc automatically.

### Manual setup

If you have already installed Storybook, you can set up Compodoc manually.

Install the following dependencies:

```sh
npm i -D @compodoc/compodoc
```

Add the following option to your to the Storybook Builder:

```json
{
  ...
  "projects": {
    ...
    "your-project": {
      ...
      "architect": {
        ...
        "storybook": {
          "builder": "@storybook/angular:start-storybook",
          "options": {
            ...
            "compodoc": true,
            "compodocArgs": [
              "-e",
              "json",
              "-d",
              // Where to store the generated documentation. It's usually the root of your Angular project. It's not necessarily the root of your Angular Workspace!
              "."
            ],
          }
        },
        "build-storybook": {
          "builder": "@storybook/angular:build-storybook",
          "options": {
            ...
            "compodoc": true,
            "compodocArgs": [
              "-e",
              "json",
              "-d",
              "."
            ],
          }
        }
      }
    }
  }
}
```

Go to your `.storybook/preview.js` and add the following:

```js
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview: Preview = {
  ...
};

export default preview;
```

## moduleMetadata decorator

If your component has dependencies on other Angular directives and modules, these can be supplied using the moduleMetadata decorator either for all stories or for individual stories.

```js
import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { SomeComponent } from './some.component';

export default {
  component: SomeComponent,
  decorators: [
    // Apply metadata to all stories
    moduleMetadata({
      // import necessary ngModules or standalone components
      imports: [...],
      // declare components that are used in the template
      declarations: [...],
      // List of providers that should be available to the root component and all its children.
      providers: [...],
    }),
  ],
} as Meta;

const Template = (): StoryFn => (args) => ({
  props: args,
});

export const Base = Template();

export const WithCustomProvider = Template();
WithCustomProvider.decorators = [
  // Apply metadata to a specific story
  moduleMetadata({
    imports: [...],
    declarations: [...],
    providers: [...]
  }),
];
```

## applicationConfig decorator

If your component relies on application-wide providers, like the ones defined by BrowserAnimationsModule or any other modules which use the forRoot pattern to provide a ModuleWithProviders, you can use the applicationConfig decorator on the meta default export to provide them to the [bootstrapApplication function](https://angular.io/guide/standalone-components#configuring-dependency-injection), which we use to bootstrap the component in Storybook.

```js

import { StoryObj, Meta, applicationConfig } from '@storybook/angular';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { ChipsModule } from './angular-src/chips.module';

const meta: Meta = {
  component: ChipsGroupComponent,
  decorators: [
    // Apply application config to all stories
    applicationConfig({
      // List of providers and environment providers that should be available to the root component and all its children.
      providers: [
        ...
        // Import application-wide providers from a module
        importProvidersFrom(BrowserAnimationsModule)
        // Or use provide-style functions if available instead, e.g.
        provideAnimations()
      ],
    }),
  ],
};

export default meta;

type Story = StoryObj<typeof ChipsGroupComponent>;

export const WithCustomApplicationProvider: Story = {
  render: () => ({
    // Apply application config to a specific story
    applicationConfig: {
      // The providers will be merged with the ones defined in the applicationConfig decorators providers array of the global meta object
      providers: [...]
    }
  })
}
```

## FAQ

### How do I migrate to an Angular Storybook builder?

The Storybook [Angular builder](https://angular.io/guide/glossary#builder) is a new way to run Storybook in an Angular workspace. It is a drop-in replacement for running `storybook dev` and `storybook build` directly.

You can run `npx storybook@next automigrate` to try let Storybook detect and automatically fix your configuration. Otherwise, you can follow the next steps to manually adjust your configuration.

#### Do you have only one Angular project in your workspace?

In this case go to your `angular.json` and add `storybook` and `build-storybook` entries in `architect` section of your project like shown above.

##### Adjust your `package.json`

Go to your `package.json` and adjust your script section. Usually, it will look like this:

```json
{
  "scripts": {
    "storybook": "start-storybook -p 6006", // or `storybook dev -p 6006`
    "build-storybook": "build-storybook" // or `storybook build`
  }
}
```

Now, you can run Storybook with `ng run <your-project>:storybook` and build it with `ng run <your-project>:build-storybook`. Adjust the scripts in your `package.json` accordingly.

```json
{
  "scripts": {
    "storybook": "ng run <project-name>:storybook", // or `storybook dev -p 6006`
    "build-storybook": "ng run <project-name>:build-storybook" // or `storybook build`
  }
}
```

Also remove the compodoc part in your script section if you have set it up previously.
It is now built-in in `@storybook/angular` and you don't have to call it explicitly:

```json
{
  "scripts": {
    "docs:json": "compodoc -p tsconfig.json -e json -d ./documentation",
    "storybook": "npm run docs:json && start-storybook -p 6006",
    "build-storybook": "npm run docs:json && build-storybook"
  }
}
```

Change it to:

```json
{
  "scripts": {
    "storybook": "ng run <project-name>:storybook",
    "build-storybook": "ng run <project-name>:build-storybook"
  }
}
```

#### I have multiple projects in my Angular workspace

In this case you have to adjust your `angular.json` and `package.json` as described above for each project in which you want to use Storybook. Please note, that each project should have a dedicated `.storybook` folder, which should be placed in the root of the project.

You can run `npx sb init` sequentially for each project to setup Storybook for each of them to automatically create the `.storybook` folder and create the necessary configuration in your `angular.json`.

You can then use [Storybook composition](https://storybook.js.org/docs/angular/sharing/storybook-composition) to composite multiple Storybooks into one.

---

Storybook also comes with a lot of [addons](https://storybook.js.org/addons) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/docs/angular/sharing/publish-storybook) of your Storybook and deploy it anywhere you want.
