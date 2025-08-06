import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { NavBar } from '../components/NavBar';

test('search functionality', async ({ page }) => {
    const homePage = new HomePage(page);
    const searchPage = new SearchPage(page);
    const navBar = new NavBar(page);
    const searchText = 'mouse';

    await homePage.navigateTo();

    await navBar.searchFor(searchText);
    await expect(searchPage.resultLabel).toBeAttached();
    await navBar.closeSearch();

    await expect(searchPage.resultLabel).toBeVisible();
    await expect(searchPage.resultLabel).toHaveText(`Search result: "${searchText}"`);
    await expect(searchPage.productList).toBeVisible();
    expect(await searchPage.productItem.count()).toEqual(6);
});
