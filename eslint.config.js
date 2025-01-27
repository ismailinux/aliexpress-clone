import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ...pluginVue.configs["flat/essential"],
    rules: {
      // Disable the multi-word component names rule
      "vue/multi-word-component-names": "off",
    },
  },  
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
];