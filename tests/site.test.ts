import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import SITE_IDENTITY from '../src/lib/site/identity.ts';

const source = readFileSync(new URL('../src/lib/site/identity.ts', import.meta.url), 'utf8');

describe('Site Identity Configuration', () => {
	it('site origin defaults to the canonical domain', () => {
		expect(new URL(SITE_IDENTITY.global.SITE.URL).origin).toBe('https://saudtechnology.com');
		expect(source).toMatch(/NEXT_PUBLIC_SITE_URL \?\? 'https:\/\/saudtechnology\.com'/);
	});

	it('wordmark and motto stay in English', () => {
		expect(SITE_IDENTITY.global.SITE.NAME).toBe('SAUD TECHNOLOGY');
		expect(SITE_IDENTITY.global.SITE.WORDMARK).toBe('SAUD TECHNOLOGY');
		expect(SITE_IDENTITY['en-US'].SITE.MOTTO).toBe('Engineering Intelligence. Architecting the Future.');
	});

	it('contact uses the iCloud custom domain mailbox', () => {
		expect(SITE_IDENTITY.global.AUTHOR.EMAIL).toBe('thiago@saudtechnology.com');
	});
});
