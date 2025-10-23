import { test } from '@playwright/test';
import { PhotoPage } from '../../pages/photoPage';

test('Photo Display From Home Page', async ({ page }) => {
  const photoPage = new PhotoPage(page);
  await page.goto('https://demo.baasic.com/angular/starterkit-photo-gallery/main');

  await photoPage.clickDisplayPhotos();
  await photoPage.scrollDown();
  await photoPage.clickThumbnailOverlay(2);
  await page.waitForLoadState("networkidle");
  await photoPage.closePhoto();
});