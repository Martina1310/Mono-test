import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { SearchPage } from '../../pages/searchPage';
import authData from '../../data/auth';

test('Valid Search Functionality', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.openMenu();
  await loginPage.clickLogin();
  const username = authData.login.credentials.username;
  const password = authData.login.credentials.password;
  await loginPage.login(username, password);
  await expect(page.getByRole('heading', { name: 'Marty' })).toBeVisible();

  await loginPage.openMenu();

  const searchPage = new SearchPage(page);
  await searchPage.clickSearch();
  await searchPage.fillSearch('cat');
  await searchPage.pressEnter();
  await page.waitForLoadState("networkidle");
  await searchPage.clickSearchResultHeading('cat');
});