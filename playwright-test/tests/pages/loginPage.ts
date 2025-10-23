import { Page, Locator } from '@playwright/test';
import authData from '../data/auth';

export class LoginPage {
  private readonly loginTextLocator: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(private page: Page) {
    this.loginTextLocator = this.page.getByText('Login');
    this.usernameInput = this.page.getByRole('textbox', { name: 'Enter your email or username' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Login' });
  }

  
  async navigate() {
    await this.page.goto(authData.login.baseURL);
  }

  async openMenu() {
    await this.page.getByRole('link', { name: 'Menu' }).first().click();
    await this.page.getByText('Menu').click();
  }

  async clickLogin() {
    await this.loginTextLocator.click();
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async submit() {
    await this.loginButton.click();
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.submit();
  }

  
}