import { expect } from '@playwright/test';
import { BaseElement } from '../components/BaseElement';

// Custom expect function to extend Playwright's expect
// usage: await expectElement(element).toBeVisible();

export function expectElement(element: BaseElement) {
    return {
        toBeVisible: async () => {
            await expect(element.locator).toBeVisible();
        },
        toHaveText: async (text: string) => {
            await expect(element.locator).toHaveText(text);
        },
        toHaveAttribute: async (name: string, value: string) => {
            await expect(element.locator).toHaveAttribute(name, value);
        },
        toHaveCount: async (count: number) => {
            await expect(element.locator).toHaveCount(count);
        },
    };
}
