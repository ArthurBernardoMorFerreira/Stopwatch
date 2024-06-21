module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 0,
    'no-const-assign': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'import/no-mutable-exports': 0,
    'no-import-assign': 0,
    'prefer-const': 0,
    'import/newline-after-import': 0,
  },
};
