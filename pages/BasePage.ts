import { Page } from '@playwright/test';
import { Loader } from '../components/Loader';
export class BasePage {
    readonly page: Page;
    readonly loader: Loader;

    constructor(page: Page) {
        this.page = page;
        this.loader = new Loader(page);
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async getPageTitle() {
        return await this.page.title();
    }
}
