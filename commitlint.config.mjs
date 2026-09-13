// @ts-check
// https://commitlint.js.org/reference/configuration.html

import { RuleConfigSeverity } from '@commitlint/types';

/** @type {import('@commitlint/types').UserConfig} */
const config = {
	extends: ['@commitlint/config-conventional'],
	ignores: [
		(commit) => commit.includes('Potential fix for pull request finding'),
		(commit) => commit.includes('Co-authored-by: Copilot Autofix powered by AI'),
		(commit) => commit.startsWith('Version Packages'),
	],
	rules: {
		'type-enum': [
			RuleConfigSeverity.Error,
			'always',
			['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'ci', 'revert', 'release'],
		],
		'subject-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
		'subject-empty': [RuleConfigSeverity.Error, 'never'],
		'type-empty': [RuleConfigSeverity.Error, 'never'],
	},
};

export default config;
