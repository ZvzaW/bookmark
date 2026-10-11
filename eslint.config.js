const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const prettier = require("eslint-config-prettier");

module.exports = [
  { ignores: ["dist"] },
  { settings: { react: { version: "detect" } } },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  { files: ["*.config.js"], languageOptions: { globals: globals.node } },
  js.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat["jsx-runtime"],
  reactHooks.configs.flat.recommended,
  prettier,
];
