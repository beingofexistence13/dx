module.exports = {
  projects: [
    '<rootDir>/addons/*',
    '<rootDir>/frameworks/*',
    '<rootDir>/lib/*',
    '<rootDir>/builders/*',
    '<rootDir>/renderers/*',
    '<rootDir>/ui/!(node_modules)*',
  ],
  collectCoverage: false,
  collectCoverageFrom: ['**/src/**/*.{js,jsx,ts,tsx}', '!**/e2e-tests/**', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov'],
  reporters: ['default', 'jest-junit'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
