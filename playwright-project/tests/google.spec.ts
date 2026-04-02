// import { test, expect } from '@playwright/test';

// test('Google homepage test', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   await expect(page).toHaveTitle(/Google/);
// });

// import { test, expect } from '@playwright/test';

// test('Google search test', async ({ page }) => {
//   await page.goto('https://www.google.com');

//   // Type in search box
//   await page.fill('textarea[name="q"]', 'Playwright automation');

//   // Press Enter
//   await page.keyboard.press('Enter');

//   // Validate results page
//   await expect(page).toHaveTitle(/Playwright/);
// });

import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.fill('textarea[name="q"]', 'Playwright automation');
  await page.keyboard.press('Enter');

  await expect(page).toHaveTitle(/Playwright/);

  // 📸 Take screenshot
  await page.screenshot({ path: 'screenshot.png' });
});