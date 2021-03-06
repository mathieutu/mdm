module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
  ],
  plugins: [
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_|^h$' }],
    'arrow-parens': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'import/named': 'off',
    'no-return-assign': 'off',
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/require-prop-types': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
    'vue/singleline-html-element-content-newline': 'off',
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_' }],
    curly: ['error', 'multi-line', 'consistent'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
      },
    },
  ],
}
