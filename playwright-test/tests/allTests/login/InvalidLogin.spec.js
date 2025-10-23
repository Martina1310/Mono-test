import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import authData from '../../data/auth';

test('Test Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.openMenu();
  await loginPage.clickLogin();

  const username = authData.invalidLogin.credentials.username;
  const password = authData.invalidLogin.credentials.password;

  await loginPage.login(username, password);

  await expect(page.getByText('Invalid email, username or')).toBeVisible();
});
