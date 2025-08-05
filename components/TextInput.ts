import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class TextInput extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async type(text: string) {
        await this.locator.fill(text);
    }

    async getText() {
        return await this.locator.textContent();
    }
}
