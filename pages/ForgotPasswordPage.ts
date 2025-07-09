import { Page } from '@playwright/test';

export class ForgotPasswordPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://parabank.parasoft.com/parabank/lookup.htm');
  }

  async fillAccountInfo(info: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    ssn: string;
  }) {
    await this.page.locator('[name="firstName"]').fill(info.firstName);
    await this.page.locator('[name="lastName"]').fill(info.lastName);
    await this.page.locator('[name="address.street"]').fill(info.address);
    await this.page.locator('[name="address.city"]').fill(info.city);
    await this.page.locator('[name="address.state"]').fill(info.state);
    await this.page.locator('[name="address.zipCode"]').fill(info.zipCode);
    await this.page.locator('[name="ssn"]').fill(info.ssn);
  }

  async submitForm() {
    await this.page.locator('input[value="Find My Login Info"]').click();
  }

  async verifySuccessMessage() {
    await this.page.waitForSelector('text=Customer Lookup');
  }
}