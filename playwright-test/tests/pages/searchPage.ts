import { Page, Locator } from '@playwright/test';

export class SearchPage {
  private readonly page: Page;
  private readonly searchTextbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchTextbox = this.page.getByRole('textbox', { name: 'Search...' });
  }

  async clickSearch() {
    await this.searchTextbox.click();
  }

  async fillSearch(value: string) {
    await this.searchTextbox.fill(value);
  }

  async pressEnter() {
    await this.searchTextbox.press('Enter');
  }

  async clickSearchResultHeading(searchTerm: string) {
    await this.page.getByRole('heading', { name: `Search result for: '${searchTerm}'` }).click();
  }
}