## 7.5.0-alpha.6

- Angular: Introduce argsToTemplate for property and event Bindings - [#24434](https://github.com/storybookjs/storybook/pull/24434), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Controls: Fix select / multiselect when value contains multiple spaces - [#22334](https://github.com/storybookjs/storybook/pull/22334), thanks [@oxcened](https://github.com/oxcened)!
- Next.js: Support rename font import - [#24406](https://github.com/storybookjs/storybook/pull/24406), thanks [@yoshi2no](https://github.com/yoshi2no)!
- UI: Update ScrollArea with radix - [#24413](https://github.com/storybookjs/storybook/pull/24413), thanks [@cdedreuille](https://github.com/cdedreuille)!
- Web-components: Add Lit3 support - [#24437](https://github.com/storybookjs/storybook/pull/24437), thanks [@shilman](https://github.com/shilman)!

## 7.5.0-alpha.5

- Angular: Add CLI options (debugWebpack, webpackStatsJson, and more) - [#24388](https://github.com/storybookjs/storybook/pull/24388), thanks [@yannbf](https://github.com/yannbf)!
- Angular: Fix Angular 15 support and add zone.js v0.14.x support - [#24367](https://github.com/storybookjs/storybook/pull/24367), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Core: Add class name to Storybook error name - [#24371](https://github.com/storybookjs/storybook/pull/24371), thanks [@yannbf](https://github.com/yannbf)!
- ManagerAPI: Fix bug with story redirection when URL has partial storyId - [#24345](https://github.com/storybookjs/storybook/pull/24345), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Fix Image Context re-use via singleton - [#24146](https://github.com/storybookjs/storybook/pull/24146), thanks [@martinnabhan](https://github.com/martinnabhan)!
- NextJS: Fix default next image loader when src has params - [#24187](https://github.com/storybookjs/storybook/pull/24187), thanks [@json-betsec](https://github.com/json-betsec)!
- React: Upgrade `react-docgen` to 6.0.x and improve argTypes - [#23825](https://github.com/storybookjs/storybook/pull/23825), thanks [@shilman](https://github.com/shilman)!
- Webpack: Display errors on build - [#24377](https://github.com/storybookjs/storybook/pull/24377), thanks [@yannbf](https://github.com/yannbf)!

## 7.5.0-alpha.4

- CLI: Fix Nextjs project detection - [#24346](https://github.com/storybookjs/storybook/pull/24346), thanks [@yannbf](https://github.com/yannbf)!
- Core: Deprecate `storyStoreV6` (including `storiesOf`) and `storyIndexers` - [#23938](https://github.com/storybookjs/storybook/pull/23938), thanks [@JReinhold](https://github.com/JReinhold)!
- Core: Fix Promise cycle bug in useSharedState - [#24268](https://github.com/storybookjs/storybook/pull/24268), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Fix missing favicon during dev - [#24356](https://github.com/storybookjs/storybook/pull/24356), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Change babel plugins from `proposal-...` to `transform-...` - [#24290](https://github.com/storybookjs/storybook/pull/24290), thanks [@roottool](https://github.com/roottool)!
- Nextjs: Improve support for Windows-style paths - [#23695](https://github.com/storybookjs/storybook/pull/23695), thanks [@T99](https://github.com/T99)!
- UI: Fix infinite hook call causing browsers to freeze - [#24291](https://github.com/storybookjs/storybook/pull/24291), thanks [@yannbf](https://github.com/yannbf)!
- UI: Improve contrast ratio between focus / hover - [#24205](https://github.com/storybookjs/storybook/pull/24205), thanks [@chocoscoding](https://github.com/chocoscoding)!
- Vite: Move mdx-plugin from @storybook/builder-vite to @storybook/addon-docs - [#24166](https://github.com/storybookjs/storybook/pull/24166), thanks [@bryanjtc](https://github.com/bryanjtc)!

## 7.5.0-alpha.3

- Build: Filter some manager errors - [#24217](https://github.com/storybookjs/storybook/pull/24217), thanks [@yannbf](https://github.com/yannbf)!
- Build: Migrate @storybook/addon-backgrounds to strict-ts - [#22178](https://github.com/storybookjs/storybook/pull/22178), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Build: Upgrade chromatic bin package - [#24133](https://github.com/storybookjs/storybook/pull/24133), thanks [@ndelangen](https://github.com/ndelangen)!
- CLI: Change `/Date$/` to `/Dates$/i` - [#24195](https://github.com/storybookjs/storybook/pull/24195), thanks [@arup1221](https://github.com/arup1221)!
- CLI: Fix `sb add` adding duplicative entries - [#24229](https://github.com/storybookjs/storybook/pull/24229), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Throw an error when critical presets fail to load - [#24176](https://github.com/storybookjs/storybook/pull/24176), thanks [@yannbf](https://github.com/yannbf)!
- Core: Unify error when builder is missing - [#24177](https://github.com/storybookjs/storybook/pull/24177), thanks [@yannbf](https://github.com/yannbf)!
- Core: Upgrade `esbuild-register` to `3.5.0` - [#24175](https://github.com/storybookjs/storybook/pull/24175), thanks [@anneau](https://github.com/anneau)!
- Dependencies: Upgrade `file-system-cache` - [#24232](https://github.com/storybookjs/storybook/pull/24232), thanks [@seriouz](https://github.com/seriouz)!
- Indexer: Rename `index` to `createIndex` - [#24075](https://github.com/storybookjs/storybook/pull/24075), thanks [@JReinhold](https://github.com/JReinhold)!
- Maintenance: Regen lockfiles - [#24152](https://github.com/storybookjs/storybook/pull/24152), thanks [@ndelangen](https://github.com/ndelangen)!
- Manager: Fix useAddonState when using a setter function - [#24237](https://github.com/storybookjs/storybook/pull/24237), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Add compatibility with nextjs `13.5` - [#24239](https://github.com/storybookjs/storybook/pull/24239), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Aliases `react` and `react-dom` like `next.js` does - [#23671](https://github.com/storybookjs/storybook/pull/23671), thanks [@sookmax](https://github.com/sookmax)!
- Nextjs: Improve Google Fonts failure error messages and documentation - [#23891](https://github.com/storybookjs/storybook/pull/23891), thanks [@nsheaps](https://github.com/nsheaps)!
- Nextjs: Migrate from config to previewAnnotations - [#24178](https://github.com/storybookjs/storybook/pull/24178), thanks [@yannbf](https://github.com/yannbf)!
- Theming: Add `barHoverColor` - [#20169](https://github.com/storybookjs/storybook/pull/20169), thanks [@julien-deramond](https://github.com/julien-deramond)!
- Types: Allow `null` in value of `experimental_updateStatus` to clear status - [#24206](https://github.com/storybookjs/storybook/pull/24206), thanks [@ndelangen](https://github.com/ndelangen)!
- Types: Don't distribute generic type of Meta and Story - [#24110](https://github.com/storybookjs/storybook/pull/24110), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- UI: Expand sidebar for selected story when using composition - [#23781](https://github.com/storybookjs/storybook/pull/23781), thanks [@joaonunomota](https://github.com/joaonunomota)!
- UI: Fix SVG override fill when path has a fill attribute - [#24156](https://github.com/storybookjs/storybook/pull/24156), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Fix TreeNode alignment when using a different font - [#22221](https://github.com/storybookjs/storybook/pull/22221), thanks [@bdriguesdev](https://github.com/bdriguesdev)!
- UI: Fix custom theme hover-color inconsistency - [#22262](https://github.com/storybookjs/storybook/pull/22262), thanks [@yoshi2no](https://github.com/yoshi2no)!
- UI: Fix keydown shortcut within shadow tree - [#24179](https://github.com/storybookjs/storybook/pull/24179), thanks [@stropitek](https://github.com/stropitek)!
- UI: Improve look and feel of status UI in sidebar - [#24099](https://github.com/storybookjs/storybook/pull/24099), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.5.0-alpha.2

- Angular: Categorize legacy build options error - [#24014](https://github.com/storybookjs/storybook/pull/24014), thanks [@yannbf](https://github.com/yannbf)!
- Builder-Webpack5: Categorize builder error - [#24031](https://github.com/storybookjs/storybook/pull/24031), thanks [@yannbf](https://github.com/yannbf)!
- CI: Inform the user how to dedupe and strip color from info command - [#24087](https://github.com/storybookjs/storybook/pull/24087), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- CLI: Fix packageManager handling in `sb add` - [#24079](https://github.com/storybookjs/storybook/pull/24079), thanks [@Integrayshaun](https://github.com/Integrayshaun)!
- CLI: Improve sanitization logic in crash reports - [#24028](https://github.com/storybookjs/storybook/pull/24028), thanks [@yannbf](https://github.com/yannbf)!
- Maintenance: Add more context to explanation in core-events errors - [#24063](https://github.com/storybookjs/storybook/pull/24063), thanks [@yannbf](https://github.com/yannbf)!
- Monorepo: Fix `svelte-vite` detection - [#24085](https://github.com/storybookjs/storybook/pull/24085), thanks [@legnaleurc](https://github.com/legnaleurc)!
- NextJS: Fix Image Context reuse (ensure singleton by externalizing it) - [#23881](https://github.com/storybookjs/storybook/pull/23881), thanks [@martinnabhan](https://github.com/martinnabhan)!
- Source-loader: Fix property key validation - [#24068](https://github.com/storybookjs/storybook/pull/24068), thanks [@MrZillaGold](https://github.com/MrZillaGold)!
- Svelte: Fix generated properties on Svelte event handler - [#24020](https://github.com/storybookjs/storybook/pull/24020), thanks [@j3rem1e](https://github.com/j3rem1e)!
- Telemetry: Add platform info to telemetry event - [#24081](https://github.com/storybookjs/storybook/pull/24081), thanks [@yannbf](https://github.com/yannbf)!
- UI: Fix target id in searchfield label - [#23464](https://github.com/storybookjs/storybook/pull/23464), thanks [@plumpNation](https://github.com/plumpNation)!
- Vue3: Remove console.log in sourceDecorator - [#24062](https://github.com/storybookjs/storybook/pull/24062), thanks [@oruman](https://github.com/oruman)!

## 7.5.0-alpha.1

- Core: Add CJS entrypoints to errors in core events - [#24038](https://github.com/storybookjs/storybook/pull/24038), thanks [@yannbf](https://github.com/yannbf)!

## 7.5.0-alpha.0

- Addon API: Improve the updateStatus API - [#24007](https://github.com/storybookjs/storybook/pull/24007), thanks [@ndelangen](https://github.com/ndelangen)!
- CLI: Add more information to `storybook info` command - [#24003](https://github.com/storybookjs/storybook/pull/24003), thanks [@JReinhold](https://github.com/JReinhold)!
- CLI: Add uncaughtException handler - [#24018](https://github.com/storybookjs/storybook/pull/24018), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Remove random commas in storybook upgrade logs - [#22333](https://github.com/storybookjs/storybook/pull/22333), thanks [@joaonunomota](https://github.com/joaonunomota)!
- Doc Blocks: Add `title` to `Meta` prop types - [#23370](https://github.com/storybookjs/storybook/pull/23370), thanks [@iqbalcodes6602](https://github.com/iqbalcodes6602)!
- Docs: Fix TOC import - [#24047](https://github.com/storybookjs/storybook/pull/24047), thanks [@shilman](https://github.com/shilman)!
- Docs: Fix table of contents scroll behavior - [#23986](https://github.com/storybookjs/storybook/pull/23986), thanks [@almoghaimo](https://github.com/almoghaimo)!
- Telemetry: Filter addon options to protect sensitive info - [#24000](https://github.com/storybookjs/storybook/pull/24000), thanks [@shilman](https://github.com/shilman)!
- Types: Remove `@types/react` dep from `@storybook/types` - [#24042](https://github.com/storybookjs/storybook/pull/24042), thanks [@JReinhold](https://github.com/JReinhold)!

## 7.4.0-alpha.2

- Addon-docs: Resolve `mdx-react-shim` & `@storybook/global` correctly - [#23941](https://github.com/storybookjs/storybook/pull/23941), thanks [@ndelangen](https://github.com/ndelangen)!
- Addons: Fix key is not a prop warning - [#23935](https://github.com/storybookjs/storybook/pull/23935), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- CLI: Pass package manager to postinstall - [#23913](https://github.com/storybookjs/storybook/pull/23913), thanks [@Integrayshaun](https://github.com/Integrayshaun)!
- CLI: Provide guidance for users who try to initialize Storybook on an empty dir - [#23874](https://github.com/storybookjs/storybook/pull/23874), thanks [@yannbf](https://github.com/yannbf)!
- Logger: Fix double error messages/stack - [#23919](https://github.com/storybookjs/storybook/pull/23919), thanks [@ndelangen](https://github.com/ndelangen)!
- Maintenance: Categorize server errors - [#23912](https://github.com/storybookjs/storybook/pull/23912), thanks [@yannbf](https://github.com/yannbf)!
- Maintenance: Remove need for `react` as peerDependency - [#23897](https://github.com/storybookjs/storybook/pull/23897), thanks [@ndelangen](https://github.com/ndelangen)!
- Maintenance: Remove sourcemaps generation - [#23936](https://github.com/storybookjs/storybook/pull/23936), thanks [@ndelangen](https://github.com/ndelangen)!
- Preset: Add common preset overrides mechanism - [#23915](https://github.com/storybookjs/storybook/pull/23915), thanks [@yannbf](https://github.com/yannbf)!
- UI: Add an experimental API for adding sidebar bottom toolbar - [#23778](https://github.com/storybookjs/storybook/pull/23778), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Add an experimental API for adding sidebar top toolbar - [#23811](https://github.com/storybookjs/storybook/pull/23811), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.4.0-alpha.1

- Build: Migrate @storybook/scripts to strict-ts - [#23818](https://github.com/storybookjs/storybook/pull/23818), thanks [@stilt0n](https://github.com/stilt0n)!
- CLI: Exclude addon-styling from upgrade - [#23841](https://github.com/storybookjs/storybook/pull/23841), thanks [@Integrayshaun](https://github.com/Integrayshaun)!
- Core: Add error categorization framework - [#23653](https://github.com/storybookjs/storybook/pull/23653), thanks [@yannbf](https://github.com/yannbf)!
- Core: Fix error thrown if `docs.defaultName` is unset - [#23893](https://github.com/storybookjs/storybook/pull/23893), thanks [@stilt0n](https://github.com/stilt0n)!
- Core: Fix race-condition relating to `addons.setConfig` - [#23802](https://github.com/storybookjs/storybook/pull/23802), thanks [@ndelangen](https://github.com/ndelangen)!
- Maintenance: Move filtering of sidebar into the state - [#23911](https://github.com/storybookjs/storybook/pull/23911), thanks [@ndelangen](https://github.com/ndelangen)!
- Maintenance: Revert "WebpackBuilder: Remove need for `react` as peerDependency" - [#23882](https://github.com/storybookjs/storybook/pull/23882), thanks [@vanessayuenn](https://github.com/vanessayuenn)!
- Manager API: Fix `api.getAddonState`default value - [#23804](https://github.com/storybookjs/storybook/pull/23804), thanks [@sookmax](https://github.com/sookmax)!
- Publish: Don't distribute src files or unnecessary template files - [#23853](https://github.com/storybookjs/storybook/pull/23853), thanks [@shilman](https://github.com/shilman)!
- UI: Add an experimental API for adding sidebar filter functions at runtime - [#23722](https://github.com/storybookjs/storybook/pull/23722), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Removal of experimental components - [#23907](https://github.com/storybookjs/storybook/pull/23907), thanks [@ndelangen](https://github.com/ndelangen)!
- Vue3: Add support for  Global Apps install - [#23772](https://github.com/storybookjs/storybook/pull/23772), thanks [@chakAs3](https://github.com/chakAs3)!
- Vue3: Use slot value directly if it's a string in source decorator - [#23784](https://github.com/storybookjs/storybook/pull/23784), thanks [@nasvillanueva](https://github.com/nasvillanueva)!

## 7.4.0-alpha.0

- Index: Fix `*.story.*` CSF indexing - [#23852](https://github.com/storybookjs/storybook/pull/23852), thanks [@shilman](https://github.com/shilman)!

## 7.3.0-alpha.0

- Addons: Deprecate key in addon render function as it is not available anymore - [#23792](https://github.com/storybookjs/storybook/pull/23792), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Build: Support Chrome 100, Safari 15 and Firefox 91 - [#23800](https://github.com/storybookjs/storybook/pull/23800), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- CLI: Update postinstall to look for addon script - [#23791](https://github.com/storybookjs/storybook/pull/23791), thanks [@Integrayshaun](https://github.com/Integrayshaun)!
- UI: Update IconButton and add new Toolbar component - [#23795](https://github.com/storybookjs/storybook/pull/23795), thanks [@cdedreuille](https://github.com/cdedreuille)!
- UI: Upgrade Addon Design - [#23806](https://github.com/storybookjs/storybook/pull/23806), thanks [@cdedreuille](https://github.com/cdedreuille)!
- Vue3: Don't assign values to all slots (rollback to v7.0.27) - [#23697](https://github.com/storybookjs/storybook/pull/23697), thanks [@kasperpeulen](https://github.com/kasperpeulen)!

## 7.2.2-alpha.1

- CSF-Tools: Remove prettier from printConfig - [#23766](https://github.com/storybookjs/storybook/pull/23766), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- UI: Improve Link component - [#23767](https://github.com/storybookjs/storybook/pull/23767), thanks [@cdedreuille](https://github.com/cdedreuille)!
- UI: Improve new `Button` component - [#23765](https://github.com/storybookjs/storybook/pull/23765), thanks [@cdedreuille](https://github.com/cdedreuille)!
- UI: Update Button types to allow for no children on iconOnly buttons - [#23735](https://github.com/storybookjs/storybook/pull/23735), thanks [@cdedreuille](https://github.com/cdedreuille)!
- UI: Upgrade Icon component - [#23680](https://github.com/storybookjs/storybook/pull/23680), thanks [@cdedreuille](https://github.com/cdedreuille)!
- WebpackBuilder: Remove need for `react` as peerDependency - [#23496](https://github.com/storybookjs/storybook/pull/23496), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.2.2-alpha.0

- Indexer: Introduce new experimental `indexer` API - #23691, thanks [@JReinhold](https://github.com/jreinhold)!
- Addon-docs, Core, Server: Use new `indexer` API - #23660, thanks [@JReinhold](https://github.com/jreinhold)!
- Server: Add support for tags - #23660, thanks [@JReinhold](https://github.com/jreinhold)!
- Core-server: Improve internal types - #23632, thanks [@JReinhold](https://github.com/jreinhold)!

## 7.2.0-rc.0

- Addon: Create @storybook/addon-themes - [#23524](https://github.com/storybookjs/storybook/pull/23524), thanks [@Integrayshaun](https://github.com/Integrayshaun)!
- Angular: Fix initialization of Storybook in Angular 16.1 - [#23598](https://github.com/storybookjs/storybook/pull/23598), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- CLI: Gracefully shutdown and cleanup execa child processes - [#23538](https://github.com/storybookjs/storybook/pull/23538), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Dependencies: Downgrade `jest-mock` - [#23597](https://github.com/storybookjs/storybook/pull/23597), thanks [@ndelangen](https://github.com/ndelangen)!
- Dependencies: Upgrade simple-update-notifier - [#23396](https://github.com/storybookjs/storybook/pull/23396), thanks [@dartess](https://github.com/dartess)!
- Storyshots: fix broken storyshots with angular - [#23555](https://github.com/storybookjs/storybook/pull/23555), thanks [@mattlewis92](https://github.com/mattlewis92)!
- TypeScript: Added `expanded` to `CoreCommon_StorybookRefs` to fix typescript errors - [#23488](https://github.com/storybookjs/storybook/pull/23488), thanks [@DotwoodMedia](https://github.com/DotwoodMedia)!
- TypeScript: Downgrade to the last version of type-fest that doesn't need typescript 5.0 - [#23574](https://github.com/storybookjs/storybook/pull/23574), thanks [@ndelangen](https://github.com/ndelangen)!
- Vue2: Source Decorator reactivity - [#23149](https://github.com/storybookjs/storybook/pull/23149), thanks [@chakAs3](https://github.com/chakAs3)!

## 7.2.0-alpha.0

- Angular: Make enableProdMode optional - [#23489](https://github.com/storybookjs/storybook/pull/23489), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Router: Support RegExp in Route component - [#23292](https://github.com/storybookjs/storybook/pull/23292), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Improve tabs component, more type correct, allow for FC as title - [#23288](https://github.com/storybookjs/storybook/pull/23288), thanks [@ndelangen](https://github.com/ndelangen)!
- Addons: Improve code quality by using title as FC & sharing state via useAddonState - [#23298](https://github.com/storybookjs/storybook/pull/23298), thanks [@ndelangen](https://github.com/ndelangen)!
- InteractionsAddon: Improve code quality by using title as FC & sharing state via useAddonState - [#23291](https://github.com/storybookjs/storybook/pull/23291), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Add storyStatus to sidebar UI - [#23342](https://github.com/storybookjs/storybook/pull/23342), thanks [@ndelangen](https://github.com/ndelangen)!
- Addon API: Add experimental page addon type - [#23307](https://github.com/storybookjs/storybook/pull/23307), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: refactor Canvas component so we can improve types for PREVIEW addons and TAB addons - [#23311](https://github.com/storybookjs/storybook/pull/23311), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Improve Button layout and props - [#23356](https://github.com/storybookjs/storybook/pull/23356), thanks [@cdedreuille](https://github.com/cdedreuille)!
- Dependencies: Remove references to api and the 2 deprecated channel packages - [#23384](https://github.com/storybookjs/storybook/pull/23384), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Show the story status in the search results - [#23441](https://github.com/storybookjs/storybook/pull/23441), thanks [@ndelangen](https://github.com/ndelangen)!
- UI: Create new form elements in the new Core UI (Input, TextArea, Select) - [#23469](https://github.com/storybookjs/storybook/pull/23469), thanks [@cdedreuille](https://github.com/cdedreuille)!
- CLI: Improve support of mono repositories - [#23458](https://github.com/storybookjs/storybook/pull/23458), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.1.0-rc.2

- CLI: Exit when user does not select a storybook project type - [#23201](https://github.com/storybookjs/storybook/pull/23201), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Fix Javascript language detection - [#23426](https://github.com/storybookjs/storybook/pull/23426), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Core: Fix onboarding detection in what's new module - [#23424](https://github.com/storybookjs/storybook/pull/23424), thanks [@yannbf](https://github.com/yannbf)!
- Dependencies: Bump `@sveltejs/vite-plugin-svelte` - [#23233](https://github.com/storybookjs/storybook/pull/23233), thanks [@JReinhold](https://github.com/JReinhold)!
- Telemetry: Add globals usage to project.json - [#23431](https://github.com/storybookjs/storybook/pull/23431), thanks [@shilman](https://github.com/shilman)!

## 7.1.0-rc.1

- Angular: Enable prod mode when Storybook is built - [#23404](https://github.com/storybookjs/storybook/pull/23404), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Angular: Fix esm issue in combination with rxjs v6 - [#23405](https://github.com/storybookjs/storybook/pull/23405), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- CLI: Fix chevron icon on Configure.mdx page - [#23397](https://github.com/storybookjs/storybook/pull/23397), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Settings: Fix dark mode for what's new page - [#23398](https://github.com/storybookjs/storybook/pull/23398), thanks [@kasperpeulen](https://github.com/kasperpeulen)!

## 7.1.0-rc.0

Promote beta to rc without any changes. 🎉

## 7.1.0-beta.3

- CLI: Update Configure.mdx - [#23340](https://github.com/storybookjs/storybook/pull/23340), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- React: Move `typescript` from devDependencies to peerDependencies - [#23179](https://github.com/storybookjs/storybook/pull/23179), thanks [@chakAs3](https://github.com/chakAs3)!
- Settings: Add disable whatsnew UI - [#23381](https://github.com/storybookjs/storybook/pull/23381), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Settings: New about page design - [#23357](https://github.com/storybookjs/storybook/pull/23357), thanks [@kasperpeulen](https://github.com/kasperpeulen)!
- Svelte-Webpack: Support Svelte v4 - [#23336](https://github.com/storybookjs/storybook/pull/23336), thanks [@JReinhold](https://github.com/JReinhold)!
- UI: Remove css zoom - [#21303](https://github.com/storybookjs/storybook/pull/21303), thanks [@Luk-z](https://github.com/Luk-z)!

## 7.1.0-beta.2

- Next.js: Fix for @nx/react/plugin/storybook with stories containing SVGs - [#23210](https://github.com/storybookjs/storybook/pull/23210), thanks [@daves28](https://github.com/daves28)!
- Yarn: Downgrade yarnpkg packages and support virtual files properly - [#23354](https://github.com/storybookjs/storybook/pull/23354), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.1.0-beta.1

- Addon-docs: Add opt-in table of contents - [#23142](https://github.com/storybookjs/storybook/pull/23142), thanks [@shilman](https://github.com/shilman)!
- SyntaxHighlighter: Expose registerLanguage - [#23166](https://github.com/storybookjs/storybook/pull/23166), thanks [@ndelangen](https://github.com/ndelangen)!
- Yarn: Fix pnp package resolution on Windows - [#23274](https://github.com/storybookjs/storybook/pull/23274), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Yarn: Pin version of @yarnpkg packages to support Node 16 - [#23330](https://github.com/storybookjs/storybook/pull/23330), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.1.0-beta.0

- Settings: Add what's new page, remove release notes - [#23202](https://github.com/storybookjs/storybook/pull/23202), thanks [@kasperpeulen](https://github.com/kasperpeulen)!

## 7.1.0-alpha.44

- Next.js: Fix next/image usage in latest Next.js release - [#23296](https://github.com/storybookjs/storybook/pull/23296), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.1.0-alpha.43

- Addons: Remove deprecated addPanel use and misc improvements - [#23284](https://github.com/storybookjs/storybook/pull/23284), thanks [@ndelangen](https://github.com/ndelangen)!
- CSF-tools: Allow type checking in story title - [#22791](https://github.com/storybookjs/storybook/pull/22791), thanks [@honzahruby](https://github.com/honzahruby)!

## 7.1.0-alpha.42

- CLI: Fix pnp paths logic in storybook metadata - [#23259](https://github.com/storybookjs/storybook/pull/23259), thanks [@yannbf](https://github.com/yannbf)!

## 7.1.0-alpha.41

- Controls: Fix UI to add array items - [#22993](https://github.com/storybookjs/storybook/pull/22993), thanks [@sookmax](https://github.com/sookmax)!
- Next.js: Support disableStaticImages setting - [#23167](https://github.com/storybookjs/storybook/pull/23167), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!

## 7.1.0-alpha.40

- CLI: Parse pnp paths in storybook metadata - [#23199](https://github.com/storybookjs/storybook/pull/23199), thanks [@yannbf](https://github.com/yannbf)!
- Dependencies: Pin `file-system-cache` to 2.3.0 - [#23221](https://github.com/storybookjs/storybook/pull/23221), thanks [@JReinhold](https://github.com/JReinhold)!
- PNPM: Hide ModuleNotFound error in pnpm pnp mode - [#23195](https://github.com/storybookjs/storybook/pull/23195), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- Svelte: Support v4 - [#22905](https://github.com/storybookjs/storybook/pull/22905), thanks [@JReinhold](https://github.com/JReinhold)!

## 7.1.0-alpha.39

- CLI: Add new Configure page to templates - [#23171](https://github.com/storybookjs/storybook/pull/23171), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Fix storybook package manager command in init - [#23169](https://github.com/storybookjs/storybook/pull/23169), thanks [@yannbf](https://github.com/yannbf)!
- React: Add addon-onboarding as part of init - [#22972](https://github.com/storybookjs/storybook/pull/22972), thanks [@yannbf](https://github.com/yannbf)!

## 7.1.0-alpha.38

- CLI: Fix installing user's project before init - [#23145](https://github.com/storybookjs/storybook/pull/23145), thanks [@ndelangen](https://github.com/ndelangen)!
- CLI: Fix storybook dev after storybook init via subprocess - [#23144](https://github.com/storybookjs/storybook/pull/23144), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Suppress dev-server info table when `--quiet` is true - [#23133](https://github.com/storybookjs/storybook/pull/23133), thanks [@syabro](https://github.com/syabro)!
- Core: Allow `.mjs` extension for CSF stories - [#23125](https://github.com/storybookjs/storybook/pull/23125), thanks [@idesigncode](https://github.com/idesigncode)!
- Core: Fix compat by disabling name mangling in `esbuild` require - [#22486](https://github.com/storybookjs/storybook/pull/22486), thanks [@youngboy](https://github.com/youngboy)!
- Docs: Fix scroll location on docs navigation - [#22714](https://github.com/storybookjs/storybook/pull/22714), thanks [@gitstart-storybook](https://github.com/gitstart-storybook)!
- Interactions: Fix deeply nested nodes in the panel debugger - [#23108](https://github.com/storybookjs/storybook/pull/23108), thanks [@yannbf](https://github.com/yannbf)!

## 7.1.0-alpha.37

- Ecosystem: Prebundle node-logger and make it CJS only - [#23109](https://github.com/storybookjs/storybook/pull/23109), thanks [@ndelangen](https://github.com/ndelangen)!
- NextJS: Fix `useParams` support - [#22946](https://github.com/storybookjs/storybook/pull/22946), thanks [@gitstart-storybook](https://github.com/gitstart-storybook)!
- NextJS: Fix fonts not loading with 3+ words in name - [#23121](https://github.com/storybookjs/storybook/pull/23121), thanks [@ygkn](https://github.com/ygkn)!
- Webpack: Fix channel format for loading status - [#23139](https://github.com/storybookjs/storybook/pull/23139), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.1.0-alpha.36

- CLI: Fix "Invalid version null" issues by improved version detection - [#22642](https://github.com/storybookjs/storybook/pull/22642), thanks [@valentinpalkovic](https://github.com/valentinpalkovic)!
- CLI: Prebundle boxen to resolve a ESM/CJS incompatibility - [#23080](https://github.com/storybookjs/storybook/pull/23080), thanks [@ndelangen](https://github.com/ndelangen)!
- Telemetry: Count onboarding stories - [#23092](https://github.com/storybookjs/storybook/pull/23092), thanks [@shilman](https://github.com/shilman)!

## 7.1.0-alpha.35

- CLI: Skip builder selection for react native - [#23042](https://github.com/storybookjs/storybook/pull/23042), thanks [@dannyhw](https://github.com/dannyhw)!
- Core: Fix core-common to use node-fetch - [#23077](https://github.com/storybookjs/storybook/pull/23077), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.1.0-alpha.34

- Angular: Fix ivy preset - [#23070](https://github.com/storybookjs/storybook/pull/23070), thanks [@ndelangen](https://github.com/ndelangen)!
- CLI: Change Button stories layout for React starter templates - [#22951](https://github.com/storybookjs/storybook/pull/22951), thanks [@yannbf](https://github.com/yannbf)!

## 7.1.0-alpha.33

- Bug: Fix for angular 16.1 compatibility - [#23064](https://github.com/storybookjs/storybook/pull/23064), thanks [@ndelangen](https://github.com/ndelangen)!
- Builder-vite: Fix lib/channels dependency - [#23049](https://github.com/storybookjs/storybook/pull/23049), thanks [@ndelangen](https://github.com/ndelangen)!
- CLI: Improve steps in storybook init - [#22502](https://github.com/storybookjs/storybook/pull/22502), thanks [@yannbf](https://github.com/yannbf)!
- CLI: Run `storybook dev` as part of `storybook init` - [#22928](https://github.com/storybookjs/storybook/pull/22928), thanks [@yannbf](https://github.com/yannbf)!
- Core: Merge channels into a single package - [#23032](https://github.com/storybookjs/storybook/pull/23032), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Unify cache location configurability - [#22079](https://github.com/storybookjs/storybook/pull/22079), thanks [@kubijo](https://github.com/kubijo)!

## 7.1.0-alpha.32

- Build: Remove `babel-core` & upgrade `esbuild` - [#23017](https://github.com/storybookjs/storybook/pull/23017), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Disable esbuild on files imported from `node_modules` - [#23018](https://github.com/storybookjs/storybook/pull/23018), thanks [@tmeasday](https://github.com/tmeasday)!
- Core: Integrate serverChannel into channel - [#22940](https://github.com/storybookjs/storybook/pull/22940), thanks [@ndelangen](https://github.com/ndelangen)!
- React: Lazy import `react-docgen-typescript-plugin` - [#23019](https://github.com/storybookjs/storybook/pull/23019), thanks [@tmeasday](https://github.com/tmeasday)!

## 7.1.0-alpha.31

- Dependencies: Set vue-component-type-helpers to latest - [#23015](https://github.com/storybookjs/storybook/pull/23015), thanks [@ndelangen](https://github.com/ndelangen)!
- Dependencies: Upgrade `nanoid`, prebundle it, upgrade `remark`, cleanup some `.md` files for warnings - [#23005](https://github.com/storybookjs/storybook/pull/23005), thanks [@ndelangen](https://github.com/ndelangen)!
- Dependencies: Use `latest` version of `vue-tsc` & sync versions of `angular` - [#23011](https://github.com/storybookjs/storybook/pull/23011), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.1.0-alpha.30

- Web-components: Fix custom-elements order of property application - [#19183](https://github.com/storybookjs/storybook/pull/19183), thanks [@sonntag-philipp](https://github.com/sonntag-philipp)!
- Dependencies: Remove `shelljs` use - [#22995](https://github.com/storybookjs/storybook/pull/22995), thanks [@ndelangen](https://github.com/ndelangen)!
- Dependencies: Upgrade Jest related packages - [#22979](https://github.com/storybookjs/storybook/pull/22979), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Fix `builder-manager` adding multiple dashes to relative path - [#22974](https://github.com/storybookjs/storybook/pull/22974), thanks [@MarioCadenas](https://github.com/MarioCadenas)!
- Core: Add JSDoc comments to `preview-api` APIs - [#22975](https://github.com/storybookjs/storybook/pull/22975), thanks [@ndelangen](https://github.com/ndelangen)!
- Vue3: Fix source decorator to generate correct story code - [#22518](https://github.com/storybookjs/storybook/pull/22518), thanks [@chakAs3](https://github.com/chakAs3)!
- Core: Add JSDoc comments to `manager-api` APIs - [#22968](https://github.com/storybookjs/storybook/pull/22968), thanks [@ndelangen](https://github.com/ndelangen)!
- Core: Improve `of={...}` DocBlock error in story index - [#22782](https://github.com/storybookjs/storybook/pull/22782), thanks [@shilman](https://github.com/shilman)!
- UI: Simplify `overlayscrollbars` component - [#22963](https://github.com/storybookjs/storybook/pull/22963), thanks [@ndelangen](https://github.com/ndelangen)!
- Angular: Add `--open`/`--no-open` flag to `dev` command - [#22964](https://github.com/storybookjs/storybook/pull/22964), thanks [@yannbf](https://github.com/yannbf)!
- Angular: Silence compodoc when running storybook with --quiet - [#22957](https://github.com/storybookjs/storybook/pull/22957), thanks [@yannbf](https://github.com/yannbf)!
- React: Fix decorators to conditionally render children - [#22336](https://github.com/storybookjs/storybook/pull/22336), thanks [@redbugz](https://github.com/redbugz)!
- Addon-measure: Migrate to strict TS - [#22402](https://github.com/storybookjs/storybook/pull/22402), thanks [@efrenaragon96](https://github.com/efrenaragon96)!
- Feature: Add experimental status API - [#22890](https://github.com/storybookjs/storybook/pull/22890), thanks [@ndelangen](https://github.com/ndelangen)!

## 7.1.0-alpha.29 (June 6, 2023)

#### Bug Fixes

- CLI: Fix upgrade notification message [#22933](https://github.com/storybooks/storybook/pull/22933)
- Core: Fix indexing errors by excluding node_modules stories [#22873](https://github.com/storybooks/storybook/pull/22873)

## 7.1.0-alpha.28 (June 6, 2023)

#### Bug Fixes

- Docs: E2E tests for Source block update fix [#22835](https://github.com/storybooks/storybook/pull/22835)
- Docs: Fix Source block snippet updates [#22807](https://github.com/storybooks/storybook/pull/22807)

## 7.1.0-alpha.27 (June 4, 2023)

#### Features

- Webpack: Add option to minify using swc [#22843](https://github.com/storybooks/storybook/pull/22843)

#### Bug Fixes

- Server: Fix .stories.yml support [#22906](https://github.com/storybooks/storybook/pull/22906)
- Storysource: Fix StyledSyntaxHighlighter to wrap long lines [#22541](https://github.com/storybooks/storybook/pull/22541)

#### Maintenance

- TS: Migrate @storybook/web-components to strict TS [#22399](https://github.com/storybooks/storybook/pull/22399)
- TS: Migrate @storybook/addon-storyshots-puppeteer to strict TS [#22407](https://github.com/storybooks/storybook/pull/22407)
- TS: Migrate @storybook/addon-jest to strict TS [#22389](https://github.com/storybooks/storybook/pull/22389)
- TS: Migrate @storybook/addon-mdx-gfm to strict TS [#22659](https://github.com/storybooks/storybook/pull/22659)
- TS: Migrate @storybook/addon-storyshots to strict TS [#22487](https://github.com/storybooks/storybook/pull/22487)

#### Build

- Error on YN0060 - INCOMPATIBLE_PEER_DEPENDENCY [#22398](https://github.com/storybooks/storybook/pull/22398)
- Build: upgrade yarn [#22855](https://github.com/storybooks/storybook/pull/22855)
- Add CODEOWNERS [#22869](https://github.com/storybooks/storybook/pull/22869)

## 7.1.0-alpha.26 (May 31, 2023)

#### Bug Fixes

- Addons: Fix `Addon_BaseAnnotations` type [#22771](https://github.com/storybooks/storybook/pull/22771)
- Viewport: Fix viewport menu [#22829](https://github.com/storybooks/storybook/pull/22829)

#### Maintenance

- NextJS: Fix types [#22836](https://github.com/storybooks/storybook/pull/22836)
- React: Update babel dependencies to fix sandbox creation [#22824](https://github.com/storybooks/storybook/pull/22824)

#### Build

- Build: sort package json files [#22847](https://github.com/storybooks/storybook/pull/22847)
- Build: cleanup the test-storybooks [#22846](https://github.com/storybooks/storybook/pull/22846)
- Build: fix the theme output during development [#22841](https://github.com/storybooks/storybook/pull/22841)
- Build: move deprecated packages [#22753](https://github.com/storybooks/storybook/pull/22753)
- Build: move builders [#22751](https://github.com/storybooks/storybook/pull/22751)

## 7.1.0-alpha.25 (May 26, 2023)

#### Bug Fixes

- Vue3: Fix TS 5.0 compat with vue-component-type-helpers [#22814](https://github.com/storybooks/storybook/pull/22814)

#### Build

- Build: Fix the local storybook [#22805](https://github.com/storybooks/storybook/pull/22805)
- Build: Add more checks to ci:daily workflow [#22815](https://github.com/storybooks/storybook/pull/22815)
- Build: Revert conditional decorator story and downgrade Typescript version [#22812](https://github.com/storybooks/storybook/pull/22812)

## 7.1.0-alpha.24 (May 26, 2023)

#### Bug Fixes

- Vue3: Fix reactive args updates in decorators [#22717](https://github.com/storybooks/storybook/pull/22717)

#### Build

- Build: Update Nx to latest version [#22694](https://github.com/storybooks/storybook/pull/22694)

## 7.1.0-alpha.23 (May 24, 2023)

#### Bug Fixes

- Core: Fix `managerHead` preset in `main.ts` [#22701](https://github.com/storybooks/storybook/pull/22701)

## 7.1.0-alpha.22 (May 24, 2023)

#### Bug Fixes

- Vite: Fix pnpm support by replacing @storybook/global with `window` [#22709](https://github.com/storybooks/storybook/pull/22709)

## 7.1.0-alpha.21 (May 23, 2023)

#### Features

- Webpack: Add option to use swc instead of babel [#22075](https://github.com/storybooks/storybook/pull/22075)

#### Bug Fixes

- UI: Fix `.mp3` support for builder-manager [#22699](https://github.com/storybooks/storybook/pull/22699)
- CLI: Fix support for BROWSER env var [#21473](https://github.com/storybooks/storybook/pull/21473)
- Vite: Fix missing @storybook/global dependency [#22700](https://github.com/storybooks/storybook/pull/22700)
- Next.js: Fix compatibility with Next 13.4.3 [#22697](https://github.com/storybooks/storybook/pull/22697)
- CLI: Fix error parsing on NPM proxy [#22690](https://github.com/storybooks/storybook/pull/22690)
- Core: Only connect to serverChannel in development mode [#22575](https://github.com/storybooks/storybook/pull/22575)
- CLI: Improve error handling when dealing with angular.json files [#22663](https://github.com/storybooks/storybook/pull/22663)
- CLI: Skip prompting for eslint plugin with --yes flag [#22651](https://github.com/storybooks/storybook/pull/22651)
- CLI: Fix upgrade to not upgrade nx packages [#22419](https://github.com/storybooks/storybook/pull/22419)
- CLI: Only handle CTRL + C on init event [#22687](https://github.com/storybooks/storybook/pull/22687)
- Angular: Remove console.log [#22671](https://github.com/storybooks/storybook/pull/22671)

## 7.1.0-alpha.20 (May 20, 2023)

#### Bug Fixes

- CLI: Account for windows paths when copying templates [#22644](https://github.com/storybooks/storybook/pull/22644)
- CLI: Fix pnpm init command [#22635](https://github.com/storybooks/storybook/pull/22635)
- UI: Add legacy font formats [#22576](https://github.com/storybooks/storybook/pull/22576)
- Webpack: Remove the alias for `global` [#22393](https://github.com/storybooks/storybook/pull/22393)

#### Maintenance

- CLI: Reduce installation noise and improve error handling [#22554](https://github.com/storybooks/storybook/pull/22554)
- Actions: Fix type of withActions [#22455](https://github.com/storybooks/storybook/pull/22455)

#### Build

- Build: add discord notification when generating sandboxes fails [#22638](https://github.com/storybooks/storybook/pull/22638)
- Build: set correct ref on sandboxes Github action [#22625](https://github.com/storybooks/storybook/pull/22625)
- Build: Fix sandbox generation scripts [#22620](https://github.com/storybooks/storybook/pull/22620)

## 7.1.0-alpha.19 (May 16, 2023)

#### Bug Fixes

- Normalize paths exposed to vite-builder's `storybook-stories.js` file [#22327](https://github.com/storybooks/storybook/pull/22327)

## 7.1.0-alpha.18 (May 15, 2023)

#### Bug Fixes

- CLI: Fix `getFrameworkPackage` logic [#22559](https://github.com/storybooks/storybook/pull/22559)
- CLI: Remove automigrate reference from init command [#22561](https://github.com/storybooks/storybook/pull/22561)

#### Maintenance

- CLI: Detach automigrate command from storybook init [#22523](https://github.com/storybooks/storybook/pull/22523)

## 7.1.0-alpha.17 (May 12, 2023)

#### Bug Fixes

- CLI: Fix storybook upgrade precheckfailure object [#22517](https://github.com/storybooks/storybook/pull/22517)
- CLI: Throw errors instead of rejecting promises [#22515](https://github.com/storybooks/storybook/pull/22515)
- CSF: Expose story id in composeStories [#22471](https://github.com/storybooks/storybook/pull/22471)
- CLI: Remove unsupported frameworks/renderers and improve builder detection [#22492](https://github.com/storybooks/storybook/pull/22492)

## 7.1.0-alpha.16 (May 11, 2023)

#### Bug Fixes

- Web-components: Fix source decorator to handle document fragments [#22513](https://github.com/storybooks/storybook/pull/22513)
- Angular: Adjust child process I/O for compodoc command [#22441](https://github.com/storybooks/storybook/pull/22441)
- Core: Fix windows path error in StoryStore v6 [#22512](https://github.com/storybooks/storybook/pull/22512)

#### Maintenance

- CLI: Prompt to force initialization when storybook is detected [#22392](https://github.com/storybooks/storybook/pull/22392)
- UI: Fix css inconsistency in Button and Icon components [#22497](https://github.com/storybooks/storybook/pull/22497)

#### Build

- Sandboxes: Pin @vitejs/plugin-react to avoid conflict [#22501](https://github.com/storybooks/storybook/pull/22501)

## 7.1.0-alpha.15 (May 11, 2023)

#### Bug Fixes

- CLI: Do not show a migration summary on sb init [#22109](https://github.com/storybooks/storybook/pull/22109)
- Toolbars: Fix title behavior in UI [#22496](https://github.com/storybooks/storybook/pull/22496)
- UI: Show current search shortcut in search box sidebar [#21619](https://github.com/storybooks/storybook/pull/21619)
- Measure: Deactivate when switching to Docs mode [#21602](https://github.com/storybooks/storybook/pull/21602)
- Outline: Fix additional outline border in docs mode [#21773](https://github.com/storybooks/storybook/pull/21773)

## 7.1.0-alpha.14 (May 9, 2023)

#### Bug Fixes

- CLI: Scope styles in sample components from the CLI templates [#22162](https://github.com/storybooks/storybook/pull/22162)
- CLI: Fix copyTemplate failures on `init` [#22375](https://github.com/storybooks/storybook/pull/22375)
- CLI: Fix server init [#22443](https://github.com/storybooks/storybook/pull/22443)
- Server: Add json indexer [#22460](https://github.com/storybooks/storybook/pull/22460)
- React: Use correct default annotations for composeStories [#22308](https://github.com/storybooks/storybook/pull/22308)
- UI: Fix opacity of list-item color [#22074](https://github.com/storybooks/storybook/pull/22074)

#### Maintenance

- CLI: Refactor package manager methods to be async [#22401](https://github.com/storybooks/storybook/pull/22401)
- Angular: Improve Error message for angular.json not found [#22377](https://github.com/storybooks/storybook/pull/22377)
- TypeScript: Migrate @storybook/instrumenter to strict TS [#22370](https://github.com/storybooks/storybook/pull/22370)
- TypeScript: Migrate @storybook/core-events to strict TS [#22448](https://github.com/storybooks/storybook/pull/22448)
- TypeScript: Migrate @storybook/core-client to strict TS [#22447](https://github.com/storybooks/storybook/pull/22447)
- TypeScript: Migrate @storybook/react-vite and @storybook/preact-vite to strict TS [#22428](https://github.com/storybooks/storybook/pull/22428)
- TypeScript: Migrate @storybook/svelte-vite to strict TS [#22411](https://github.com/storybooks/storybook/pull/22411)
- TypeScript: Migrate @storybook/types to strict TS [#22397](https://github.com/storybooks/storybook/pull/22397)
- TypeScript: Migrate @storybook/addon-storysource to strict TS [#22367](https://github.com/storybooks/storybook/pull/22367)
- TypeScript: Migrate @storybook/client-api to strict TS [#22421](https://github.com/storybooks/storybook/pull/22421)
- TypeScript: Migrate @storybook/sveltekit to strict TS [#22412](https://github.com/storybooks/storybook/pull/22412)
- TypeScript: Migrate @storybook/source-loader to strict TS [#22420](https://github.com/storybooks/storybook/pull/22420)

## 7.1.0-alpha.13 (May 5, 2023)

#### Bug Fixes

- Core: Fix virtual modules excluded for babel-loader [#22331](https://github.com/storybooks/storybook/pull/22331)

#### Maintenance

- Angular: Allow TypeScript 4.0.0 and 5.0.0 [#22391](https://github.com/storybooks/storybook/pull/22391)
- Angular: Enable Angular Unit tests [#22355](https://github.com/storybooks/storybook/pull/22355)
- TypeScript: Migrate @storybook/theming to strict TS [#22376](https://github.com/storybooks/storybook/pull/22376)
- TypeScript: Migrate @storybook/channel-websocket to strict TS [#22364](https://github.com/storybooks/storybook/pull/22364)
- TypeScript: Migrate @storybook/addon-outline to strict TS [#22369](https://github.com/storybooks/storybook/pull/22369)
- TypeScript: Migrate @storybook/addon-viewbook to strict ts [#22339](https://github.com/storybooks/storybook/pull/22339)
- TypeScript: Migrate @storybook/channels to strict TS [#22365](https://github.com/storybooks/storybook/pull/22365)

#### Build

- Add Angular Prerelease sandbox [#22379](https://github.com/storybooks/storybook/pull/22379)

## 7.1.0-alpha.12 (May 3, 2023)

#### Bug Fixes

- Migrate: skip the automigration for gf markdown when user isn't using mdx [#22186](https://github.com/storybooks/storybook/pull/22186)
- UI: Addon panel does not update after disabling/enabling an addon [#22258](https://github.com/storybooks/storybook/pull/22258)
- Typescript: Fix bad typings caused by tsup bug [#22261](https://github.com/storybooks/storybook/pull/22261)
- Core: Fix source snippets for stories with mapped args [#22135](https://github.com/storybooks/storybook/pull/22135)

#### Maintenance

- Telemetry: Persist sessionId across runs [#22325](https://github.com/storybooks/storybook/pull/22325)
- Packaging: Move `types` condition to the front in all `package.json.exports` maps [#22321](https://github.com/storybooks/storybook/pull/22321)
- Packaging: Don't generate ESM dist for preset files [#22330](https://github.com/storybooks/storybook/pull/22330)
- Typescript: Migrate `@storybook/csf-tools` to strict TS [#22312](https://github.com/storybooks/storybook/pull/22312)
- Typescript: Migrate @storybook/postinstall and @storybook/router to strict TS [#22200](https://github.com/storybooks/storybook/pull/22200)
- Maintenance: Fix urls for all packages in package.json [#22101](https://github.com/storybooks/storybook/pull/22101)
- Docs: Improve component typings [#22050](https://github.com/storybooks/storybook/pull/22050)

#### Build

- Build: Comment out flaky test [#22310](https://github.com/storybooks/storybook/pull/22310)
- Build: Migrate `@storybook/web-components-vite` to strict TS [#22309](https://github.com/storybooks/storybook/pull/22309)
- Build: Migrate `@storybook/html-vite` to strict TS [#22293](https://github.com/storybooks/storybook/pull/22293)
- Build: Migrate @storybook/preset-vue-webpack to strict TS [#22320](https://github.com/storybooks/storybook/pull/22320)
- Build: Use `next` branch for sandbox and repro commands [#22238](https://github.com/storybooks/storybook/pull/22238)

## 7.1.0-alpha.11 (April 28, 2023)

#### Features

- Feature: Add support for Angular 16 [#22096](https://github.com/storybooks/storybook/pull/22096)

#### Bug Fixes

- Vue3: Rollback v7 breaking change and keep reactive v6-compatible API [#22229](https://github.com/storybooks/storybook/pull/22229)

#### Maintenance

- Core: Add tests for mapping behaviour in #22169 [#22301](https://github.com/storybooks/storybook/pull/22301)

#### Dependency Upgrades

- Update glob to v10.0.0 [#22171](https://github.com/storybooks/storybook/pull/22171)

## 7.1.0-alpha.10 (April 28, 2023)

#### Bug Fixes

- Vue3: Fix compiler error when there is double tag [#22286](https://github.com/storybooks/storybook/pull/22286)
- Args: Fix multiple mapped args return array of labels [#22169](https://github.com/storybooks/storybook/pull/22169)
- Angular: Fix storyshots by removing deprecated import [#22134](https://github.com/storybooks/storybook/pull/22134)
- Ember: Fix wrong path [#22203](https://github.com/storybooks/storybook/pull/22203)
- CLI: Add web-components webpack5 to missing-babelrc automigration [#22202](https://github.com/storybooks/storybook/pull/22202)
- Docs: Fix inline story style [#21870](https://github.com/storybooks/storybook/pull/21870)

#### Build

- Fix vue-cli/default-js sandbox [#22259](https://github.com/storybooks/storybook/pull/22259)
- Core: Fix `DOCS_RENDERED` test [#22255](https://github.com/storybooks/storybook/pull/22255)
- Add regex to ignore outdated Browserslist in Jest initialization base file [#22260](https://github.com/storybooks/storybook/pull/22260)

## 7.1.0-alpha.9 (April 26, 2023)

#### Features

- NextJS: Allow disabling next/image lazy loading [#21909](https://github.com/storybooks/storybook/pull/21909)
- Core: Allow Flow syntax in stories [#21859](https://github.com/storybooks/storybook/pull/21859)

#### Bug Fixes

- Vue3: Support multiple setup functions [#22170](https://github.com/storybooks/storybook/pull/22170)
- UI: Fix shift + 7 shortcut to focus search field [#22073](https://github.com/storybooks/storybook/pull/22073)
- UI: Fix controls missing when navigating from story [#21967](https://github.com/storybooks/storybook/pull/21967)

#### Maintenance

- Core: Rename manager UI mjs to js [#22247](https://github.com/storybooks/storybook/pull/22247)
- Remove dead code [#22019](https://github.com/storybooks/storybook/pull/22019)
- Vue3: Move TS stories into a separate folder [#22235](https://github.com/storybooks/storybook/pull/22235)

#### Build

- Build: Migrate @storybook/addon-docs to strict-ts [#22180](https://github.com/storybooks/storybook/pull/22180)
- Build: Migrate @storybook/highlight to strict TS [#22181](https://github.com/storybooks/storybook/pull/22181)
- Build: Enable strict TS by default [#22143](https://github.com/storybooks/storybook/pull/22143)

## 7.1.0-alpha.8 (April 24, 2023)

#### Features

- Core: Support custom hosts using window.location server channel URL [#22055](https://github.com/storybooks/storybook/pull/22055)

#### Bug Fixes

- Addon-actions: Fix ESM by upgrading from uuid-browser to uuid [#22037](https://github.com/storybooks/storybook/pull/22037)
- Addon-actions: Fix decorator type [#22175](https://github.com/storybooks/storybook/pull/22175)
- NextJS: Fix tsconfig resolution [#22160](https://github.com/storybooks/storybook/pull/22160)
- Core: Pass parameters in `SET_INDEX` for docs entries [#22154](https://github.com/storybooks/storybook/pull/22154)

#### Maintenance

- CSF: Improve error message for bad default export [#22190](https://github.com/storybooks/storybook/pull/22190)
- CLI: Add addon query-params to list of SB7 incompatible addons [#22095](https://github.com/storybooks/storybook/pull/22095)

#### Build

- Build: Fix sandbox publish script [#22206](https://github.com/storybooks/storybook/pull/22206)
- Build: Fix lit sandboxes [#22201](https://github.com/storybooks/storybook/pull/22201)
- Vite sandboxes: use stable Vite 4.3 [#22183](https://github.com/storybooks/storybook/pull/22183)

## 7.1.0-alpha.7 (April 19, 2023)

#### Bug Fixes

- Vue3: Fix reactive decorators [#21954](https://github.com/storybooks/storybook/pull/21954)

#### Build

- Build: Improve sandboxes commit message [#22136](https://github.com/storybooks/storybook/pull/22136)

## 7.1.0-alpha.6 (April 18, 2023)

#### Bug Fixes

- Core: Restore Docs `useParameter` using `DOCS_PREPARED` [#22118](https://github.com/storybooks/storybook/pull/22118)
- Core: Add new tags to distinguish docs attachment [#22120](https://github.com/storybooks/storybook/pull/22120)
- Core: Fix `module` guard in non-webpack environments [#22085](https://github.com/storybooks/storybook/pull/22085)

#### Build

- Build: Skip docs pages e2e tests for ssv6 examples [#22141](https://github.com/storybooks/storybook/pull/22141)
- Build: Upgrade Playwright to 1.32.3 [#22087](https://github.com/storybooks/storybook/pull/22087)

#### Dependency Upgrades

- Remove unused babel dependencies [#21984](https://github.com/storybooks/storybook/pull/21984)

## 7.1.0-alpha.5 (April 17, 2023)

#### Maintenance

- CLI: Mark qwik as using addon-interactions [#22000](https://github.com/storybooks/storybook/pull/22000)

#### Build

- Revert "Build: Update dangerfile temporarily to check for patch label" [#22108](https://github.com/storybooks/storybook/pull/22108)

## 7.1.0-alpha.4 (April 15, 2023)

#### Bug Fixes

- Docs: Fix source snippets when parameters.docs.source.type = 'code' [#22048](https://github.com/storybooks/storybook/pull/22048)
- CLI: Mention how to setup a monorepo manually in babelrc automigration [#22052](https://github.com/storybooks/storybook/pull/22052)

## 7.1.0-alpha.3 (April 13, 2023)

#### Bug Fixes

- UI: Fix upgrade command in about page [#22056](https://github.com/storybooks/storybook/pull/22056)
- CLI: Fix sandbox command [#21977](https://github.com/storybooks/storybook/pull/21977)

## 7.1.0-alpha.2 (April 12, 2023)

#### Features

- UI: Add remount story shortcut [#21401](https://github.com/storybooks/storybook/pull/21401)

#### Bug Fixes

- CLI: Catch errors thrown on sanity check of SB installs [#22039](https://github.com/storybooks/storybook/pull/22039)

#### Maintenance

- Addon-docs: Remove mdx1-csf as optional peer dep [#22038](https://github.com/storybooks/storybook/pull/22038)
- Telemetry: Add CLI version to context [#21999](https://github.com/storybooks/storybook/pull/21999)

#### Build

- Build: Use vite@beta on sandboxes [#22030](https://github.com/storybooks/storybook/pull/22030)
- Fix e2e tests failing in Firefox [#22022](https://github.com/storybooks/storybook/pull/22022)
- Vite: Use vite 4.3 beta in sandboxes [#21986](https://github.com/storybooks/storybook/pull/21986)

## 7.1.0-alpha.1 (April 11, 2023)

#### Bug Fixes

- React: Fix default export docgen for React.FC and forwardRef [#22024](https://github.com/storybooks/storybook/pull/22024)
- Viewport: Remove transitions when switching viewports [#21963](https://github.com/storybooks/storybook/pull/21963)
- CLI: Fix JsPackageManager typo [#22006](https://github.com/storybooks/storybook/pull/22006)
- Viewport: Fix the `defaultOrientation` config option [#21962](https://github.com/storybooks/storybook/pull/21962)
- UI: Fix story data access for broken About page [#21951](https://github.com/storybooks/storybook/pull/21951)

#### Maintenance

- CLI: Update template code references to 7.0 [#21845](https://github.com/storybooks/storybook/pull/21845)

#### Dependency Upgrades

- React-vite: Fix perf regression by pinning vite-plugin-react-docgen-ts [#22013](https://github.com/storybooks/storybook/pull/22013)
- Use future version of satellite repo dependencies [#22026](https://github.com/storybooks/storybook/pull/22026)

## 7.1.0-alpha.0 (April 5, 2023)

#### Bug Fixes

- Angular: Fix components disappearing on docs page on property change [#21944](https://github.com/storybooks/storybook/pull/21944)
- React: Don't show decorators in JSX snippets [#21907](https://github.com/storybooks/storybook/pull/21907)
- Docs: Include decorators by default in source decorators [#21902](https://github.com/storybooks/storybook/pull/21902)
- CLI: Fix npm list command [#21947](https://github.com/storybooks/storybook/pull/21947)
- Core: Revert Emotion `:first-child` (etc) workarounds [#21213](https://github.com/storybooks/storybook/pull/21213)
- Addon-actions: Fix non-included type file [#21922](https://github.com/storybooks/storybook/pull/21922)
- Addon GFM: Fix node-logger dependency [#21938](https://github.com/storybooks/storybook/pull/21938)

#### Build

- Build: Update trigger circle ci workflow to include main [#21888](https://github.com/storybooks/storybook/pull/21888)
- Build: Update dangerfile temporarily to check for patch label [#21945](https://github.com/storybooks/storybook/pull/21945)
- Build: Re-enable Vue2 Vite sandbox [#21940](https://github.com/storybooks/storybook/pull/21940)
- Build: Fix release badge on repros [#21923](https://github.com/storybooks/storybook/pull/21923)
- Build: fix the workflows to generate sandboxes [#21912](https://github.com/storybooks/storybook/pull/21912)
- Build: bump the node version in CI [#21917](https://github.com/storybooks/storybook/pull/21917)
- Build: no `pnp.cjs` in the root, regen lockfiles [#21908](https://github.com/storybooks/storybook/pull/21908)
- Build: remove pnp sandbox template [#21913](https://github.com/storybooks/storybook/pull/21913)
- Build: make the CI config ready for 7.0 release [#21808](https://github.com/storybooks/storybook/pull/21808)

#### Dependency Upgrades

- Update `@emotion/cache` version [#21941](https://github.com/storybooks/storybook/pull/21941)
