import '@testing-library/jest-dom';

// setup file
import registerRequireContextHook from '@storybook/babel-plugin-require-context-hook/register';

registerRequireContextHook();

jest.mock('util-deprecate', () => (fn: any) => fn);

// mock console.info calls for cleaner test execution
global.console.info = jest.fn().mockImplementation(() => {});
global.console.debug = jest.fn().mockImplementation(() => {});

// mock local storage calls
const localStorageMock = {
  getItem: jest.fn().mockName('getItem'),
  setItem: jest.fn().mockName('setItem'),
  clear: jest.fn().mockName('clear'),
};

Object.defineProperty(global, 'localStorage', { value: localStorageMock, writable: true });

/* Fail tests on PropType warnings
 This allows us to throw an error in tests environments when there are prop-type warnings.
 This should keep the tests free of warnings going forward.
 */

const ignoreList = [
  (error: any) => error.message.includes('":nth-child" is potentially unsafe'),
  (error: any) => error.message.includes('":first-child" is potentially unsafe'),
  (error: any) => error.message.match(/Browserslist: .* is outdated. Please run:/),
  (error: any) => error.message.includes('Failed prop type') && error.stack.includes('storyshots'),
  (error: any) =>
    error.message.includes('react-async-component-lifecycle-hooks') &&
    error.stack.includes('addons/knobs/src/components/__tests__/Options.js'),
  // Storyshots blows up if your project includes a (non stories.) mdx file.
  (error: any) => error.message.match(/Unexpected error while loading .*(?<!stories)\.mdx/),
];

const throwMessage = (type: any, message: any) => {
  const error = new Error(`${type}${message}`);
  if (!ignoreList.reduce((acc, item) => acc || item(error), false)) {
    throw error;
  }
};
const throwWarning = (message: any) => throwMessage('warn: ', message);
const throwError = (message: any) => throwMessage('error: ', message);

global.console.error = throwError;
global.console.warn = throwWarning;
