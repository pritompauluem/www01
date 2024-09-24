export default [
  {
    files: ["todo.js"],
    languageOptions: {
      ecmaVersion: 12,
    },
    rules: {
      quotes: ["error", "single"],
      semi: ["error", "never"],
    },
    env: {
      node: true,
      commonjs: true,
      es2021: true,
      jest: true,
    },
    extends: ["eslint:recommended"],
  },
];
