import { expect, Page } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class Loader extends BaseComponent {
    readonly locator = this.page.locator('.loader').first();

    constructor(page: Page) {
        super(page);
    }

    async waitForLoaderToDisappear() {
        await expect(this.locator).toBeHidden();
    }
}
