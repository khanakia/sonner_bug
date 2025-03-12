/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  ignorePatterns: ['public/', '**/generated/*.ts'],
  plugins: [
    'unused-imports',
    'simple-import-sort',
    '@typescript-eslint',
    'prettier',
    'autofix', // autofix @typescript-eslint/no-unused-vars https://www.npmjs.com/package/eslint-plugin-autofix
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    // disable <img> warning
    '@next/next/no-img-element': 'off',

    // disable warning  React Hook useMemo has missing dependencies: 'getPageInfo', 'handleTableChange', 'onLoadMore', 'query', and 'setQuery'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
    'react-hooks/exhaustive-deps': 'off',

    // unused imports - https://typescript-eslint.io/rules/no-unused-vars/
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off', // alllow any
    'unused-imports/no-unused-imports': 'error', // remove unused imports automatically using --fix

    '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-unused-vars': [
    //   // 'unused-imports/no-unused-vars': [
    //   'warn',
    //   {
    //     vars: 'all',
    //     varsIgnorePattern: '^_',
    //     args: 'after-used',
    //     argsIgnorePattern: '^_',
    //   },
    // ],

    // --fix auto sort all the imports
    'simple-import-sort/imports': 'error',

    // '@typescript-eslint/quotes': [
    //   'error',
    //   'single',
    //   {
    //     allowTemplateLiterals: true,
    //   },
    // ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@/features/ui/components/*', '!@/features/ui/components'],
          },
        ],
      },
    ],
    // 'autofix/no-unused-vars': 'error', // it fixed props but did not add comma so broke the files
  },
}
