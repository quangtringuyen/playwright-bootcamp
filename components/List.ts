import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class List extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async getItems() {
        const locators = await this.locator.locator('li').all();
        return locators.map((item) => new BaseElement(item));
    }

    async getCount() {
        return await this.locator.locator('li').count();
    }
}
