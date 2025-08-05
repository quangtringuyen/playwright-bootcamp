import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Button } from '../components/Button';
import { TextInput } from '../components/TextInput';
import { expectElement } from '../utils/Expect';

export class HomePage extends BasePage {
    readonly searchButton = new Button(this.page.getByTitle('SEARCH'));
    readonly searchInput = new TextInput(this.page.locator('div#search input#autoComplete'));

    constructor(page: Page) {
        super(page);
    }

    async navigateTo() {
        await this.page.goto('/');
    }

    async searchFor(text: string) {
        await this.searchButton.click();
        expectElement(this.searchInput).toBeVisible();
        await this.searchInput.type(text);
        await this.searchButton.click();
    }
}
