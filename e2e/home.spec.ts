import { expect, test } from '@playwright/test';
import { SITE_IDENTITY } from '../src/lib/site/identity.ts';
import LOCALE_BASE_CONFIG from '../src/lib/i18n/locales.ts';

test('home exposes brand, heading and canonical language', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(new RegExp(SITE_IDENTITY.global.SITE.NAME));
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(SITE_IDENTITY['en-US'].SITE.MOTTO);
	await expect(page.locator('html')).toHaveAttribute('lang', LOCALE_BASE_CONFIG.LANGUAGE);
});

test.describe('Portuguese segment', () => {
	test.use({ locale: 'pt-BR' });

	test('uses pt-BR when the browser LocaleType is Portuguese', async ({ page }) => {
		await page.goto('/pt-BR/');
		await expect(page).toHaveURL(/\/pt-BR\/?$/);
		await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
		await expect(page.getByRole('heading', { level: 1 })).toHaveText(SITE_IDENTITY['pt-BR'].SITE.MOTTO);
	});
});
