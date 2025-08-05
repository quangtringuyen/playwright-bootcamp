import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Button extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async click() {
        await this.locator.click();
    }

    async getText() {
        return await this.locator.textContent();
    }
}
