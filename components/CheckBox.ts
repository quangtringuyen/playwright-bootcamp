import { Locator } from '@playwright/test';
import { BaseElement } from './BaseElement';

export class CheckBox extends BaseElement {
    constructor(locator: Locator) {
        super(locator);
    }

    async check() {
        await this.locator.check();
    }
}
