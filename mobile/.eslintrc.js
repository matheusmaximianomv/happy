module.exports = {
  env: {
    es2021: true,
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
  globals: {
    FormData: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '@env'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.ts', '.js', 'jsx'] },
    ],
    'import/extensions': [
      'warn',
      { extensions: ['jsx', '.js', '.tsx', '.ts'] },
    ],
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react/style-prop-object': 'off',
    'no-alert': 'off',
    camelcase: [
      'error',
      {
        allow: [
          'Nunito_600SemiBold',
          'Nunito_700Bold',
          'Nunito_800ExtraBold',
          'opening_hours',
          'open_on_weekends',
        ],
      },
    ],
  },
};
