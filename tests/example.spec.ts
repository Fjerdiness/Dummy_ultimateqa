import { test, expect } from '@playwright/test';
import { HomePageSelector } from './enum/home';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator(HomePageSelector.titleSelector)).toHaveText(HomePageSelector.titleText);
  await expect(page.locator(HomePageSelector.subTitleSelector)).toHaveText(HomePageSelector.subTitleText)
});