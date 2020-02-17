module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native'
  ],
  'rules': {
    'import/named': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-use-before-define': 'warn',
    'react/destructuring-assignment': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-await-in-loop': 'off',
    'global-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'linebreak-style': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/jsx-filename-extension': 'off',
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'react/no-danger': 'off',
    'no-mixed-operators': 'off',
    'object-curly-newline': 'off',
    'no-console': ['warn', { 'allow' : ['warn', 'error'] }],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'never'
    }]
  }
};
