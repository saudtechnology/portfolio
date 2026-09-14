import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { SITE_EMAIL, SITE_MOTTO, SITE_NAME, SITE_URL, SITE_WORDMARK } from '../src/lib/site/identity.ts';

const source = readFileSync(new URL('../src/lib/site/identity.ts', import.meta.url), 'utf8');

test('site origin defaults to the canonical domain', () => {
	assert.equal(new URL(SITE_URL).origin, 'https://saudtechnology.com');
	assert.ok(source.includes('https://saudtechnology.com'));
});

test('wordmark and motto stay in English', () => {
	assert.equal(SITE_NAME, 'SAUD TECHNOLOGY');
	assert.equal(SITE_WORDMARK, 'SAUD TECHNOLOGY');
	assert.equal(SITE_MOTTO, 'Think Big. Build Smart.');
	assert.ok(source.includes(SITE_NAME));
	assert.ok(source.includes(SITE_WORDMARK));
	assert.ok(source.includes(SITE_MOTTO));
});

test('contact uses the iCloud custom domain mailbox', () => {
	assert.equal(SITE_EMAIL, 'thiago@saudtechnology.com');
	assert.ok(source.includes(SITE_EMAIL));
});
