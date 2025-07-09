import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  }

  async login(username: string, password: string) {
    await this.page.locator('[name="username"]').fill(username);
    await this.page.locator('[name="password"]').fill(password);
    await this.page.locator('input[value="Log In"]').click();
  }

  async verifyLoginSuccess() {
    await this.page.waitForSelector('text=Accounts Overview');
  }
}
