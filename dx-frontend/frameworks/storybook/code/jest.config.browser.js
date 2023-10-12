const path = require('path');
const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [path.resolve('./jest.init.browser.ts')],
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['raf/polyfill'],
};
