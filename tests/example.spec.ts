import { test, expect } from '@playwright/test';

test('check logo', async ({ page }) => {
  await page.goto('https://uakino.club/');

  await expect(page.locator("//a[@class='logo-box']")).toBeVisible; 
});