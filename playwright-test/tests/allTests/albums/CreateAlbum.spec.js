import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage';
import { AlbumPage } from '../../pages/albumsPage';
import authData from '../../data/auth';
import path from 'path';

test('Create Album', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.openMenu();
  await loginPage.clickLogin();
  const username = authData.login.credentials.username;
  const password = authData.login.credentials.password;
  await loginPage.login(username, password);
  await expect(page.getByRole('heading', { name: 'Marty' })).toBeVisible();

  const albumPage = new AlbumPage(page);
  await albumPage.createAlbum('test', 'description');
  const imagePath = path.join(__dirname, '../../assets/image.jpg');
  await albumPage.addPhotoToAlbum(imagePath, 'description');
  await albumPage.selectAlbum('test');
});