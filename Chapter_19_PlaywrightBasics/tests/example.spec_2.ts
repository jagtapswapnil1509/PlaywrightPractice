import { test, expect } from '@playwright/test';

test('verify page title', async ({ page }) => {
  // TODO: Navigate to https://playwright.dev
  // TODO: Verify the page title contains "Playwright"
  page.goto("https://playwright.dev");
  expect(page).toHaveTitle("Playwright");

});