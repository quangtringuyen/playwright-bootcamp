import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class Text extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async getText() {
        return await this.locator.textContent();
    }
}
