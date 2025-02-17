const prettier = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');

/** @type {import("eslint").Linter.FlatConfig[]} */
module.exports = [
  prettier,
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      prettier: prettierPlugin
    },
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module'
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: true,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 80,
          jsxSingleQuote: true
        }
      ],
      'no-console': 'warn',
      eqeqeq: 'warn'
    }
  }
];
