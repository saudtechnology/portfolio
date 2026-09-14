import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import json from '@eslint/json';
import yml from 'eslint-plugin-yml';
import sonarjs from 'eslint-plugin-sonarjs';

// https://eslint.org/docs/latest/use/configure/configuration-files
// https://nextjs.org/docs/app/api-reference/config/eslint
export default defineConfig([
	...nextVitals,
	...nextTs,
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'node_modules/**',
		'hint-report/**',
		'playwright-report/**',
		'coverage/**',
		'pnpm-lock.yaml',
	]),
	{
		files: ['**/*.json'],
		ignores: ['package-lock.json'],
		plugins: { json },
		language: 'json/json',
		...json.configs.recommended,
	},
	...yml.configs['flat/recommended'],
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		plugins: { sonarjs },
		rules: {
			...sonarjs.configs.recommended.rules,
		},
	},
	eslintConfigPrettier,
]);
