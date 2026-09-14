import { expect, test } from '@playwright/test';
import { SITE_LANGUAGE, SITE_MOTTO, SITE_NAME } from '../src/lib/site/identity.ts';

test('home exposes brand, heading and canonical language', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(new RegExp(SITE_NAME));
	await expect(page.getByRole('heading', { level: 1 })).toHaveText(SITE_MOTTO);
	await expect(page.locator('html')).toHaveAttribute('lang', SITE_LANGUAGE);
});

test.describe('Portuguese segment', () => {
	test.use({ locale: 'pt-BR' });

	test('uses pt-BR when the browser locale is Portuguese', async ({ page }) => {
		await page.goto('/pt-BR/');
		await expect(page).toHaveURL(/\/pt-BR\/?$/);
		await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
		await expect(page.getByRole('heading', { level: 1 })).toHaveText(SITE_MOTTO);
	});
});
