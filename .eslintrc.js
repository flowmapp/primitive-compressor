/* eslint-disable linebreak-style */
module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2, { SwitchCase: 1, offsetTernaryExpressions: true, ignoredNodes: ['TemplateLiteral'] }],
    'max-len': ['error', { code: 120 }],
    'no-console': ['error', { allow: ['info'] }],
  },
}
