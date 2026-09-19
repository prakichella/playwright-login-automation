import { test, expect } from '@playwright/test';

test('Verify user can login with valid credentials', async ({ page }) => {

    // Step 1: Open application
    await page.goto('https://www.alfadock-pack.com/');

    // Step 2: Enter username
    await page.fill('#username', 'Atkgi');

    // Step 3: Enter password
    await page.fill('#password', '1234');

    // Step 4: Click Login
    await page.click('#login');

    // Step 5: Verify homepage
    await expect(page).toHaveURL('https://www.alfadock-pack.com/dashboard');
});