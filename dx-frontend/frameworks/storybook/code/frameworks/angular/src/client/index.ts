/// <reference types="webpack-env" />

import './globals';

// eslint-disable-next-line import/export
export * from './public-api';
// eslint-disable-next-line import/export
export * from './public-types';

export type { StoryFnAngularReturnType as IStory } from './types';

export { moduleMetadata, componentWrapperDecorator, applicationConfig } from './decorators';
export { argsToTemplate } from './argsToTemplate';

// optimization: stop HMR propagation in webpack
if (typeof module !== 'undefined') module?.hot?.decline();
