module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-fragments': ['off'],
    'react/jsx-no-useless-fragment': 'off',
    eqeqeq: [2, 'always'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        png: 'never',
      },
    ],
    'no-console': 'warn',
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-closing-bracket-location': ['off'],
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'react/require-default-props': 'off',
    'no-param-reassign': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: 'client/tscinfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png'],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.png'],
  },
};
