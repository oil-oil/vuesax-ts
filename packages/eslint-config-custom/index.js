module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".vue"],
    ecmaFeatures: {
      "jsx": true
    }
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["vue", "@typescript-eslint", "import", "prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
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
    "import/extensions": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off"
  },
};
