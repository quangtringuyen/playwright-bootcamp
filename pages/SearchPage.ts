import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Text } from '../components/Text';
import { List } from '../components/List';

export class SearchPage extends BasePage {
    readonly resultLabel = new Text(this.page.locator('h3#searchResultLabel'));
    readonly productList = new List(this.page.locator('div.categoryRight ul'));

    constructor(page: Page) {
        super(page);
    }

    async navigateTo() {
        await this.page.goto('/#/search/');
    }
}
