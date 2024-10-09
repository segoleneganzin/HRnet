import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    ignores: ['dist/', 'coverage/', '**/__tests__'], // Ignore files in these folders
  },
  {
    files: ['src/**/*.{js,mjs,cjs,jsx}'],
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect', // Use 'detect' to automatically detect the version of React
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ...react.configs.flat.recommended,
    rules: {
      ...react.configs.flat.recommended.rules,
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ...react.configs.flat['jsx-runtime'],
  },
];
