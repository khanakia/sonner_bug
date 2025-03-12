import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import stylisticTs from '@stylistic/eslint-plugin-ts';

import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import autofixPlugin from 'eslint-plugin-autofix';

export default tseslint.config(
  { ignores: ['dist', 'public/', '**/generated/*.ts'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],

    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImportsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      // '@typescript-eslint': typescriptEslintPlugin,
      prettier: prettierPlugin,
      autofix: autofixPlugin, // autofix @typescript-eslint/no-unused-vars https://www.npmjs.com/package/eslint-plugin-autofix
      '@stylistic/ts': stylisticTs,
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // CUSOTM RULES
      'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
      // disable warning  React Hook useMemo has missing dependencies: 'getPageInfo', 'handleTableChange', 'onLoadMore', 'query', and 'setQuery'. Either include them or remove the dependency array  react-hooks/exhaustive-deps
      'react-hooks/exhaustive-deps': 'off',

      // unused imports - https://typescript-eslint.io/rules/no-unused-vars/
      // Note: you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off', // alllow any
      'unused-imports/no-unused-imports': 'error', // remove unused imports automatically using --fix
      '@typescript-eslint/no-unused-vars': [
        // 'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // --fix auto sort all the imports
      'simple-import-sort/imports': 'error',

      '@stylistic/ts/quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
    },
  },
);
