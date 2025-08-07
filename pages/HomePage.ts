import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly ourProductArticle = this.page.locator('article#our_products');

    constructor(page: Page) {
        super(page);
    }

    async navigateTo() {
        await this.page.goto('/');
        await this.loader.waitForLoaderToDisappear();
        await expect(this.ourProductArticle).toBeVisible();
    }
}
