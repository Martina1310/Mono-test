import { Page, Locator } from '@playwright/test';

export class PhotoPage {
  private readonly displayPhotosImage: Locator;
  private readonly closePhotoButton: Locator;

  constructor(private page: Page) {
    this.displayPhotosImage = this.page.getByRole('img', { name: 'Display photos' });
    this.closePhotoButton = this.page.getByRole('button', { name: 'Close photo' });
  }

  async clickDisplayPhotos() {
    await this.displayPhotosImage.click();
  }

  async clickThumbnailOverlay(index: number) {
    await this.page.locator(`div:nth-child(${index}) > .thumbnail > .thumbnail--overlay`).click({ force: true });
  }

  async scrollDown() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async closePhoto() {
    await this.closePhotoButton.click();
  }
}