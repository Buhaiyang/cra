module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: 'react-app',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true
    }
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2
  }
}
