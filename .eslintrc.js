module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  globals: {
    // ignore nightwatch globals
    after: false,
    before: false,
    beforeEach: false,
    describe: false,
    element: false,
    expect: false,
    it: false
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'no-template-curly-in-string': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
