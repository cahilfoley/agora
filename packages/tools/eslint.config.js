module.exports = {
  extends: ['plugin:prettier/recommended'],
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    codeFrame: false,
    ecmaVersion: 2018
  },
  rules: {
    'valid-jsdoc': 2,
    'no-unused-vars': 2
  }
}
