import { expect, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class NavBar extends BaseComponent {
    readonly locator = this.page.getByRole('navigation');
    readonly searchButton = this.page.getByTitle('SEARCH');
    readonly searchInput = this.page.locator('div#search input#autoComplete');
    readonly closeSearchButton = this.page.locator('.autoCompleteCover div');

    constructor(page: Page) {
        super(page);
    }

    async searchFor(text: string) {
        await this.searchButton.click();
        await expect(this.searchInput).toBeVisible();
        await this.searchInput.fill(text);
        await this.searchInput.press('Enter');
    }

    async closeSearch() {
        await this.closeSearchButton.click();
    }
}
