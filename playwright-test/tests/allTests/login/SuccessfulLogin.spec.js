import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import authData from '../../data/auth';

test('Test Successful Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.openMenu();
  await loginPage.clickLogin();

  const username = authData.login.credentials.username;
  const password = authData.login.credentials.password;

  await loginPage.login(username, password);

  await expect(page.getByRole('heading', { name: 'Marty' })).toBeVisible();
});
