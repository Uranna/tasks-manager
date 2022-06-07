module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-const-assign": 2,
    "for-direction": 2,
    "arrow-body-style": [1, "as-needed"],
    eqeqeq: [1, "always"],
    "no-redeclare": 2,
    "prefer-const": [
      1,
      {
        destructuring: "all",
      },
    ],
    // "no-unused-vars": 1,

    indent: ["error", 2],
    // "linebreak-style": [
    //   "error",
    //   "unix"
    // ],
    // "quotes": [
    //   "error",
    //   "double"
    // ],
    // "semi": [
    //   "error",
    //   "always"
    // ]
  },
};
