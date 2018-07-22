module.exports = {
  root: true,

  env: {
    es6: true,
    node: true,
    jest: true
  },

  parserOptions: {
    ecmaVersion: 2018
  },

  extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],

  plugins: ["prettier"]
};
