import deprecate from 'util-deprecate';

export const useNpmWarning = deprecate(
  () => {},
  `\`--use-npm\` is deprecated and will be removed in Storybook 8.0. 
Please use the \`--package-manager=npm\` option instead.
Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#cli-option---use-npm-deprecated`
);
