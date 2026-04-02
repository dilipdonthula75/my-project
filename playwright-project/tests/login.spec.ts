import { test, expect } from '@playwright/test';

test('Login test - valid user', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Enter username
  await page.fill('#username', 'student');

  // Enter password
  await page.fill('#password', 'Password123');

  // Click login
  await page.click('#submit');

  // Validate success
  await expect(page).toHaveURL(/logged-in-successfully/);
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
  await page.screenshot({ path: 'login-success.png' });
});
