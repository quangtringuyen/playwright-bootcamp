import { Locator } from '@playwright/test';

export class BaseElement {
    readonly locator: Locator;

    constructor(locator: Locator) {
        this.locator = locator;
    }
}
