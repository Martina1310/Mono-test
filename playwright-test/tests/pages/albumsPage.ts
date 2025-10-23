import { Page, Locator } from '@playwright/test';
import authData from '../data/auth';

export class AlbumPage {
  private readonly createAlbumButton: Locator;
  private readonly albumNameInput: Locator;
  private readonly albumDescriptionInput: Locator;
  private readonly saveAlbumButton: Locator;
  private readonly photoPlaceholderIcon: Locator;
  private readonly uploadImageButton: Locator;
  private readonly photoDescriptionInput: Locator;
  private readonly uploadButton: Locator;

  constructor(private page: Page) {
    this.createAlbumButton = this.page.getByRole('button', { name: 'Create Album' });
    this.albumNameInput = this.page.getByRole('textbox', { name: 'Album Name' });
    this.albumDescriptionInput = this.page.getByRole('textbox', { name: 'Description' });
    this.saveAlbumButton = this.page.getByRole('button', { name: 'Save album' });
    this.photoPlaceholderIcon = this.page.locator('.placeholder__icon');
    this.uploadImageButton = this.page.getByText('Upload image');
    this.photoDescriptionInput = this.page.getByRole('textbox', { name: 'Description' });
    this.uploadButton = this.page.getByRole('button', { name: 'Upload' });
  }

  async clickCreateAlbum() {
    await this.createAlbumButton.click();
  }

  async fillAlbumName(name: string) {
    await this.albumNameInput.click();
    await this.albumNameInput.fill(name);
  }

  async fillAlbumDescription(description: string) {
    await this.albumDescriptionInput.click();
    await this.albumDescriptionInput.fill(description);
  }

  async saveAlbum() {
    await this.saveAlbumButton.click();
  }

  async createAlbum(name: string, description: string) {
    await this.clickCreateAlbum();
    await this.fillAlbumName(name);
    await this.fillAlbumDescription(description);
    await this.saveAlbum();
  }

  async clickPlaceholderIcon() {
    await this.photoPlaceholderIcon.click();
  }

  async clickUploadImage() {
    await this.uploadImageButton.click();
  }

  async uploadImage(filePath: string) {
    await this.page.locator('input[type="file"]').setInputFiles(filePath);
  }

  async fillPhotoDescription(description: string) {
    await this.photoDescriptionInput.click();
    await this.photoDescriptionInput.fill(description);
  }

  async clickUploadButton() {
    await this.uploadButton.click();
  }

  async addPhotoToAlbum(filePath: string, description: string) {
    await this.clickPlaceholderIcon();
    await this.clickUploadImage();
    await this.uploadImage(filePath);
    await this.fillPhotoDescription(description);
    await this.clickUploadButton();
  }

  async selectAlbum(name: string) {
    await this.page.getByText(name).click();
  }
}