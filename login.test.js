import { test, expect } from '@playwright/test';

test('Verify user can login with valid credentials', async ({ page }) => {
    const companyUsername = 'Atkgi';
    const companyPassword = '1234';
    const userUsername = process.env.USER_LOGIN_USERNAME ?? 'admin';
    const userPassword = process.env.USER_LOGIN_PASSWORD ?? 'admin';

    // Step 1: Open application
    await page.goto('https://www.alfadock-pack.com/', { waitUntil: 'domcontentloaded' });

    // Step 2: Company login
    const username = page.locator('#username');
    await username.waitFor({ state: 'visible' });
    await username.fill(companyUsername);

    const password = page.locator('#password');
    await password.waitFor({ state: 'visible' });
    await password.fill(companyPassword);

    await page.getByRole('button', { name: 'ログイン' }).click();
    await expect(page).toHaveURL('https://www.alfadock-pack.com/userlogin.html', { timeout: 15000 });

    // Step 3: User login
    const userLoginUsername = page.getByRole('textbox', { name: 'ユーザー名' });
    const userLoginPassword = page.getByRole('textbox', { name: 'パスワード' });
    await userLoginUsername.waitFor({ state: 'visible' });
    await userLoginUsername.fill(userUsername);
    await userLoginPassword.fill(userPassword);
    await page.getByRole('button', { name: 'ログイン' }).click();

    // Step 4: Verify home page
    await expect(page).toHaveURL('https://www.alfadock-pack.com/ver10/#/home', { timeout: 15000 });
});