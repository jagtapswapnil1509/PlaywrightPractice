import {test,expect} from '@playwright/test'


test("Verify valid username and password login test",async ({page})=>{

  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('performance_glitch_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('tta_secret');
  await page.locator('[data-test="password"]').press('Enter');
  await page.waitForTimeout(5000);
  await expect(page.locator('[data-test="primary-header"] span')).toContainText('TTACart');

  
  
});