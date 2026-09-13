import { expect, test } from '@playwright/test';

test('home exposes brand, heading and canonical language', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/SAUD TECHNOLOGY/);
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Think Big. Build Smart.');
	await expect(page.locator('html')).toHaveAttribute('lang', 'pt-BR');
});
