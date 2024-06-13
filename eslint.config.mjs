import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
    { languageOptions: { globals: globals.browser } },
    { ignores: ["webpack.config.js", "dist/**/*", "node_modules/**/*"] },
    {
        rules: {
            eqeqeq: "warn",
            "no-unused-vars": "error",
            "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
            "@typescript-eslint/quotes": "error",
            quotes: "error",
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ["**/*.jsx"],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: { jsx: true },
                project: "./tsconfig.json",
            },
        },
    },
    ...fixupConfigRules(pluginReactConfig),
    eslintPluginPrettierRecommended,
];
