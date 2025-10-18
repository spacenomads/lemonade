import js from "@eslint/js";
import globals from "globals";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";
import stylistic from '@stylistic/eslint-plugin';

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: {
			js,
			'@stylistic': stylistic,
		},
		extends: ["js/recommended"],
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'@stylistic/semi': 'error'
		}
	},
	{
		files: ["**/*.json"],
		plugins: { json },
		language: "json/json",
		extends: ["json/recommended"]
	},
	{
		files: ["**/*.md"],
		plugins: { markdown },
		language: "markdown/commonmark",
		extends: ["markdown/recommended"],
		rules: {
			"markdown/no-html": ["warn",{allowed: ["strong", "span"]}],
			"markdown/no-missing-label-refs": "off"
		}
	}
]);
