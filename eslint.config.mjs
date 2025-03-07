import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs}"]}, // Removed "jsx" if not needed
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
