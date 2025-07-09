import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login: Successful login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  await loginPage.login('john_doe123', 'Password123');
  await loginPage.verifyLoginSuccess();
});
