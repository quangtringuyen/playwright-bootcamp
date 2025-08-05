import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class PageTitle extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async getPageTile() {
        return await this.locator.textContent();
    }
}
