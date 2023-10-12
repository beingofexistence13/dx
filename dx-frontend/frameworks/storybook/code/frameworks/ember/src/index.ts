/// <reference types="webpack-env" />

export { storiesOf, configure, forceReRender, raw } from './client/preview';

// optimization: stop HMR propagation in webpack
if (typeof module !== 'undefined') module?.hot?.decline();
