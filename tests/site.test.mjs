import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(new URL('../src/lib/site.ts', import.meta.url), 'utf8');

test('site origin defaults to the canonical domain', () => {
	assert.match(source, /https:\/\/saudtechnology\.com/);
});

test('wordmark and motto stay in English', () => {
	assert.match(source, /SAUD TECHNOLOGY/);
	assert.match(source, /Think Big\. Build Smart\./);
});
