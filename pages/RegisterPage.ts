import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/register.htm');
  }

  async fillRegistrationForm(info: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;
    confirm: string;
  }) {
    await this.page.locator('[name="customer.firstName"]').fill(info.firstName);
    await this.page.locator('[name="customer.lastName"]').fill(info.lastName);
    await this.page.locator('[name="customer.address.street"]').fill(info.address);
    await this.page.locator('[name="customer.address.city"]').fill(info.city);
    await this.page.locator('[name="customer.address.state"]').fill(info.state);
    await this.page.locator('[name="customer.address.zipCode"]').fill(info.zipCode);
    await this.page.locator('[name="customer.phoneNumber"]').fill(info.phone);
    await this.page.locator('[name="customer.ssn"]').fill(info.ssn);
    await this.page.locator('[name="customer.username"]').fill(info.username);
    await this.page.locator('[name="customer.password"]').fill(info.password);
    await this.page.locator('[name="repeatedPassword"]').fill(info.confirm);
  }

  async submitForm() {
    await this.page.locator('input[value="Register"]').click();
  }

  async verifyRegistrationSuccess() {
    await this.page.waitForSelector('text=Your account was created successfully');
  }
}
