# Storybook for Vue 3 and Vite

Storybook for Vue 3 is a UI development environment for your Vue 3 components.
With it, you can visualize different states of your UI components and develop them interactively.

![Storybook Screenshot](https://github.com/storybookjs/storybook/blob/main/media/storybook-intro.gif)

Storybook runs outside of your app.
So you can develop UI components in isolation without worrying about app specific dependencies and requirements.

## Getting Started

```sh
cd my-vue3-app
npx storybook@latest init
```

For more information visit: [storybook.js.org](https://storybook.js.org)

---

Storybook also comes with a lot of [addons](https://storybook.js.org/addons) and a great API to customize as you wish.
You can also build a [static version](https://storybook.js.org/docs/vue/sharing/publish-storybook) of your Storybook and deploy it anywhere you want.

## Extending the Vue application

Storybook creates a [Vue 3 application](https://v3.vuejs.org/api/application-api.html#application-api) for your component preview.
When using global custom components (`app.component`), directives (`app.directive`), extensions (`app.use`), or other application methods, you will need to configure those in the `./storybook/preview.js` file.

Therefore, Storybook provides you with a `setup` function exported from this package, which receives as a callback your Storybook instance, which you can interact with and add your custom configuration.

```js
// .storybook/preview.js

import { setup } from '@storybook/vue3';

setup((app) => {
  app.use(MyPlugin);
  app.component('my-component', MyComponent);
  app.mixin({
    /* My mixin */
  });
});
```
