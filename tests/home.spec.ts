import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pages/home';
import { HomePageSelector } from '../utils/enum/home';
import { CollectionsPage } from '../pages/collections';

let page: Page
let home: HomePage
let collections: CollectionsPage

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    home = new HomePage(page)
    collections = new CollectionsPage(page)
})

test.beforeEach(async () => {
    await home.goto();
    // await expect(home.title).toHaveText(home.titleText)
})

test.describe('Home page tests', () => {
    test('click logo', async () => {
        await page.locator(HomePageSelector.Logo).click()
        await expect(page).toHaveURL(collections.url)
    })


})


