import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintConfigPrettier from 'eslint-config-prettier';
import json from '@eslint/json';
import yml from 'eslint-plugin-yml';
import sonarjs from 'eslint-plugin-sonarjs';

/**
 * Enterprise-Grade Global ESLint Linter Engine Configuration.
 * Fully compliant with ESLint Flat Config schemas, Next.js core frameworks, and React 19 rulesets.
 */
export default defineConfig([
	// 1. Core Framework Configurations: Inject recommended Next.js and baseline Core Web Vitals checks
	...nextVitals,

	// 2. TypeScript Rulesets: Provide initial compiler mappings for TS types evaluations
	...nextTs,

	// 3. Systemic Global Ignores Matrix: Completely isolates third-party bundles, build out directories, and locks
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

	// 4. Structured JSON Ecosystem Parsing Configuration
	{
		files: ['**/*.json'],
		ignores: ['package-lock.json'],
		plugins: { json },
		language: 'json/json',
		...json.configs.recommended,
	},

	// 5. YAML Metadata Files Parsing Configuration
	...yml.configs['flat/recommended'],

	// 6. Scripts Code Quality Validation Boundary (JS, MJS, CJS, TS, TSX)
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		plugins: { sonarjs },
		rules: {
			// Injects strict security and code smell analytics from SonarJS engine profiles
			...sonarjs.configs.recommended.rules,

			// Forces the VS Code editor client to flag dead imports and unused variables as warnings
			'no-unused-vars': 'off', // Disables standard legacy core rule to prevent duplications conflicts
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^[A-Z_]', // Ignores variables structured in strict uppercase nomenclature matching your tokens
					args: 'after-used',
					argsIgnorePattern: '^_', // Ignores specific parameters prefixed with an underscore
					ignoreRestSiblings: true,
				},
			],
		},
	},

	// 7. Prettier Rules Alignment Linker: Enforces code layout styling parameters, overriding conflicting linter rules
	eslintConfigPrettier,
]);
