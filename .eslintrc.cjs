module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        semi: true,
        arrowParens: 'always',
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
    indent: ['warn', 2],
    eqeqeq: 'error'
  },
  overrides: [
    {
      files: ["*.hbs"],
      processor: "hbs/processor"
    }
  ]
};
