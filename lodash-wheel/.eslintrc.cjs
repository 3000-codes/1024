module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended',"standard-with-typescript", 'plugin:@typescript-eslint/recommended',"prettier"],
  plugins: ["@typescript-eslint"],
  overrides: [],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "@typescript-eslint/triple-slash-reference": "warn",
  },
};
