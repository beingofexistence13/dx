*What:*
We want to step our TS game in the monorepo and enable strict typescript in all packages!

*Why:*
Having TS track for you if a variable might be null or not, enables us to code with much more confidence, 
and also gives us quick in editor feedback, when you make assumptions that are not actually true! 

*How:*
We would like to change as little as possible of the actual runtime behavior in this migration.
However, we also don't want to simply silence the compiler everywhere with `!`, `as` or `ts-ignore` to get this migration in.
As a rule of thumb, if the logic is easy enough, prefer improving the code (e.g. add a null check) over silencing the compiler.
If the change needed to do the right thing, is too risky, and not in your expertise, it is okay to silence the compiler.
It is not ideal, but we still gain the benefit that new code written will have extra typesafety.

Feel free to contribute too any of packages in the list below!

- [ ] @storybook/addon-backgrounds
- [ ] @storybook/addon-docs
- [ ] @storybook/addon-highlight
- [ ] @storybook/addon-interactions
- [ ] @storybook/addon-jest
- [ ] @storybook/addon-mdx-gfm
- [ ] @storybook/addon-measure
- [ ] @storybook/addon-outline
- [ ] @storybook/addon-storyshots
- [ ] @storybook/addon-storyshots-puppeteer
- [ ] @storybook/addon-storysource
- [ ] @storybook/addon-viewport
- [ ] @storybook/addons
- [ ] @storybook/angular
- [ ] @storybook/api
- [ ] @storybook/blocks
- [ ] @storybook/channel-postmessage
- [ ] @storybook/channel-websocket
- [ ] @storybook/channels
- [ ] @storybook/cli
- [ ] @storybook/client-api
- [ ] @storybook/codemod
- [ ] @storybook/components
- [ ] @storybook/core-client
- [ ] @storybook/core-events
- [ ] @storybook/core-server
- [ ] @storybook/csf-tools
- [ ] @storybook/docs-tools
- [ ] @storybook/external-docs
- [ ] @storybook/html-vite
- [ ] @storybook/instrumenter
- [ ] @storybook/manager
- [ ] @storybook/manager-api
- [ ] @storybook/postinstall
- [ ] @storybook/preact-vite
- [ ] @storybook/preset-create-react-app
- [ ] @storybook/preset-vue-webpack
- [ ] @storybook/preset-vue3-webpack
- [ ] @storybook/react-vite
- [ ] @storybook/router
- [ ] @storybook/scripts
- [ ] @storybook/server
- [ ] @storybook/source-loader
- [ ] @storybook/svelte-vite
- [ ] @storybook/sveltekit
- [ ] @storybook/theming
- [ ] @storybook/types
- [ ] @storybook/vue3-vite
- [ ] @storybook/vue3-webpack5
- [ ] @storybook/web-components
- [ ] @storybook/web-components-vite
