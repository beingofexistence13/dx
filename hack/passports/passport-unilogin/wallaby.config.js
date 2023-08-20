module.exports = (wallaby) => {
  return {
    files: [
      'src/*.js',
      'src/lib/*.js',
      '!src/**/*.test.js'
    ],

    tests: [
      'src/**/*.test.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['es2015']
      })
    },

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'mocha@2.1.0'
  };
};
