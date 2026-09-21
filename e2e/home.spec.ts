import { test, expect } from '@playwright/test';
import SITE_IDENTITY from '../src/lib/site/identity';
import LOCALE_BASE_CONFIG from '../src/lib/i18n/locales';

/**
 * Hero H1 is the personal name (portfolio product decision).
 * Site motto lives in <title> / metadata, not in the H1.
 */
test('home exposes brand, heading and canonical language', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle(new RegExp(SITE_IDENTITY.global.SITE.NAME));
	await expect(page).toHaveTitle(new RegExp(SITE_IDENTITY['en-US'].SITE.MOTTO));

	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Thiago Saud');
	await expect(page.locator('html')).toHaveAttribute('lang', LOCALE_BASE_CONFIG.LANGUAGE);
});

test.describe('Portuguese segment', () => {
	test.use({ locale: 'pt-BR' });

	test('uses pt-BR when the browser LocaleType is Portuguese', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveURL(/\/pt-BR\/?$/);
		await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
		await expect(page).toHaveTitle(new RegExp(SITE_IDENTITY['pt-BR'].SITE.MOTTO));
		await expect(page.getByRole('heading', { level: 1 })).toHaveText('Thiago Saud');
	});
});
