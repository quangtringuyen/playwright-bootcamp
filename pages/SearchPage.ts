import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
    readonly resultLabel = this.page.locator('h3#searchResultLabel');
    readonly productList = this.page.locator('div.categoryRight ul');
    readonly productItem = this.productList.locator('li');

    constructor(page: Page) {
        super(page);
    }

    async navigateTo() {
        await this.page.goto('/#/search/');
    }
}
