const base = require('@storybook/linter-config/prettier.config');

module.exports = {
  ...base,
  overrides: [
    {
      files: '*.html',
      // We need the Angular parser for this file types
      excludedFiles: '*.component.html',
      options: { parser: 'babel' },
    },
    {
      files: '*.component.html',
      options: { parser: 'angular' },
    },
  ],
  arrowParens: 'always',
};
