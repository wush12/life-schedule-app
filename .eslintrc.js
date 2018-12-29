// https://eslint.org/docs/user-guide/configuring
// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
// 'plugin:vue/essential',
// https://github.com/standard/standard/blob/master/docs/RULES-en.md
// 'eslint:recommended',
// 'plugin:vue/essential'
// 'plugin:vue/strongly-recommended',
// 'plugin:vue/recommended',
// 'standard',
var eslintExtends = process.env.npm_config_eslint_mode === 'manual'
  ? ['eslint:recommended','plugin:vue/essential']
  : ['eslint:recommended']

var eslintPlugins = process.env.npm_config_eslint_mode === 'manual'
  ? ['vue']
  : ['html', 'vue']

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      modules: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  globals: {
    wx: true
  },
  extends: eslintExtends,
  // required to lint *.vue files
  plugins: eslintPlugins,
  // add your custom rules here
  rules: {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-mixed-operators': 'off',
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-console': 'off',
    // allow async-await
    'generator-star-spacing': 'off',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': 'off',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'globals': {
      'wx': true
    },
    'prefer-promise-reject-errors': [
      'warn', {
        // 'allowEmptyReject': process.env.NODE_ENV !== 'production',
        'allowEmptyReject': true
      }
    ],
    "vue/no-parsing-error": [2, {
      "abrupt-closing-of-empty-comment": true,
      "absence-of-digits-in-numeric-character-reference": true,
      "cdata-in-html-content": true,
      "character-reference-outside-unicode-range": true,
      "control-character-in-input-stream": true,
      "control-character-reference": true,
      "eof-before-tag-name": true,
      "eof-in-cdata": true,
      "eof-in-comment": true,
      "eof-in-tag": true,
      "incorrectly-closed-comment": true,
      "incorrectly-opened-comment": true,
      "invalid-first-character-of-tag-name": true,
      "missing-attribute-value": true,
      "missing-end-tag-name": true,
      "missing-semicolon-after-character-reference": true,
      "missing-whitespace-between-attributes": true,
      "nested-comment": true,
      "noncharacter-character-reference": true,
      "noncharacter-in-input-stream": true,
      "null-character-reference": true,
      "surrogate-character-reference": true,
      "surrogate-in-input-stream": true,
      "unexpected-character-in-attribute-name": true,
      "unexpected-character-in-unquoted-attribute-value": true,
      "unexpected-equals-sign-before-attribute-name": true,
      "unexpected-null-character": true,
      "unexpected-question-mark-instead-of-tag-name": true,
      "unexpected-solidus-in-tag": true,
      "unknown-named-character-reference": true,
      "end-tag-with-attributes": true,
      "duplicate-attribute": true,
      "end-tag-with-trailing-solidus": true,
      "non-void-html-element-start-tag-with-trailing-solidus": false,
      "x-invalid-end-tag": true,
      "x-invalid-namespace": true
    }],
    "vue/no-reserved-keys": 'off'
  }
}
