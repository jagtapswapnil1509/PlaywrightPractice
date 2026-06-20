import {test,expect} from '@playwright/test'

//page - inbuilt fixture is automatically given to you
// which are functions you can directly use in playwrig

test("Verify that title will be TTA cart",async ({page})=>{

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await expect(page).toHaveTitle("TTACart - Login");

});