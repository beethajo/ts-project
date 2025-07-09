import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ForgotPasswordPage } from '../pages/ForgotPasswordPage';

test('End-to-End: Register → Login → Forgot Password', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const forgotPasswordPage = new ForgotPasswordPage(page);

  // 🔹 Step 1: Register a new user
  await registerPage.goto();
  await registerPage.fillRegistrationForm({
    firstName: 'John',
    lastName: 'Doee',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    phone: '1234567890123',
    ssn: '123-45-6789123',
    username: 'john_doe1234567',
    password: 'Password123',
    confirm: 'Password123',
  });
  await registerPage.submitForm();
  await registerPage.verifyRegistrationSuccess();

  await page.locator("//a[normalize-space()='Log Out']").click();

  // 🔹 Step 2: Login with the new user
  await loginPage.goto();
  await loginPage.login('john_doe1234567', 'Password123');
  await loginPage.verifyLoginSuccess();

  // 🔹 Step 3: Forgot Password with the same user details
  await forgotPasswordPage.goto();
  await forgotPasswordPage.fillAccountInfo({
    firstName: 'John',
    lastName: 'Doee',
    address: '123 Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    ssn: '123-45-6789123',
  });
  await forgotPasswordPage.submitForm();
  await forgotPasswordPage.verifySuccessMessage();
});
