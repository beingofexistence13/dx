'use strict';
let babel = require('babel-core');

module.exports = () => {
  return {
    files: [
      'src/*.js',
      'src/lib/*.js',
      '!src/**/*.test.js'
    ],

    tests: [
      'src/**/*.test.js'
    ],

    preprocessors: {
      '**/*.js': [
        file => babel.transform(file.content, {sourceMaps: true})
      ]
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha@2.1.0'
  };
};
