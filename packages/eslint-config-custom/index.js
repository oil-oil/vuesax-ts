module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".vue"],
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
    "prettier",
  ],
  plugins: ["vue", "@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
