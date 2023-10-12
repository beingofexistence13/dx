const path = require('path');
const baseConfig = require('./jest.config.base');

module.exports = {
  ...baseConfig,
  setupFilesAfterEnv: [path.resolve('./jest.init.base.ts')],
};
