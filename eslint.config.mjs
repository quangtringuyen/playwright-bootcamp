import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["**/playwright.config.ts"]), {
    extends: compat.extends(
        "standard-with-typescript",
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        ecmaVersion: 13,
        sourceType: "script",

        parserOptions: {
            project: ["./src/tsconfig.json"],
        },
    },

    rules: {
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": "warn",
        "prefer-const": "off",
        "no-case-declarations": "off",
        "no-var": "warn",
    },
}]);