/** @type {import('stylelint').Config} */
const config = {
	extends: ['stylelint-config-standard'],
	ignoreFiles: ['out/**', '.next/**', 'node_modules/**', 'coverage/**', 'playwright-report/**'],
	rules: {
		// Tailwind CSS v4 at-rules — https://tailwindcss.com/docs/functions-and-directives
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'tailwind',
					'apply',
					'layer',
					'config',
					'theme',
					'plugin',
					'source',
					'utility',
					'variant',
					'custom-variant',
					'reference',
				],
			},
		],
		'property-no-vendor-prefix': [
			true,
			{
				ignoreProperties: ['text-size-adjust', 'backdrop-filter'],
			},
		],
		'function-no-unknown': [true, { ignoreFunctions: ['theme'] }],
		'import-notation': 'string',
		'color-hex-length': 'long',
		'color-no-hex': null,
		'declaration-no-important': true,
		'declaration-block-no-redundant-longhand-properties': true,
		'no-empty-source': true,
		'no-invalid-double-slash-comments': true,
		'custom-property-pattern': null,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'keyframes-name-pattern': null,
		'no-descending-specificity': null,
		'at-rule-empty-line-before': null,
		'rule-empty-line-before': null,
	},
};

export default config;
