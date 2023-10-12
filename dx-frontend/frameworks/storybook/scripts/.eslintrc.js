module.exports = {
  root: true,
  extends: ['@storybook/eslint-config-storybook', 'plugin:storybook/recommended'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/ban-ts-comment': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { disallowTypeAnnotations: false }],
    'jest/no-standalone-expect': [
      'error',
      { additionalTestBlockFunctions: ['it.skipWindows', 'it.onWindows'] },
    ],
    'no-use-before-define': 'off',
    'jest/expect-expect': [
      'warn',
      {
        assertFunctionNames: ['expect', 'expectTypeOf'],
      },
    ],
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],
  },
  overrides: [
    {
      files: ['*.mjs'],
      rules: {
        'import/extensions': ['error', 'always'],
      },
    },
    {
      files: ['*.stories.*'],
      rules: {
        // allow expect in stories
        'jest/no-standalone-expect': ['off'],
      },
    },
    {
      files: [
        '*.js',
        '*.jsx',
        '*.json',
        '*.html',
        '**/.storybook/*.ts',
        '**/.storybook/*.tsx',
        'setup-jest.ts',
      ],
      parserOptions: {
        project: null,
      },
      rules: {
        // '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/return-await': 'off',
      },
    },
  ],
};
