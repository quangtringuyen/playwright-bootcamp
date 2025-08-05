import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { expectElement } from '../utils/Expect';

test('search functionality', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const searchText = 'mouse';

    await homePage.navigateTo();

    await homePage.searchFor(searchText);

    await expectElement(searchPage.resultLabel).toBeVisible();
    await expectElement(searchPage.resultLabel).toHaveText(`Search result: "${searchText}"`);
    await expectElement(searchPage.productList).toBeVisible();
    await expectElement(searchPage.productList).toHaveCount(6);
});
