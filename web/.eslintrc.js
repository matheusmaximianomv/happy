module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js', '.tsx', '.ts'] },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'warn',
      { extensions: ['jsx', '.js', '.tsx', '.ts'] },
    ],
    'no-use-before-define': 'off',
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],
    camelcase: ['error', { allow: ['opening_hours', 'open_on_weekends'] }],
  },
};
