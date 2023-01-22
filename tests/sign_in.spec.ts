import { test, expect, Page } from '@playwright/test'
import { HomePage } from '../pages/home'
import { HomePageSelector } from '../utils/enum/home'
import { CollectionsPage } from '../pages/collections'
import { SignInPage } from '../pages/sign_in'
import { SignInPageSelectors } from '../utils/enum/sign_in'
import { SignUpPage } from '../pages/sign_up'

let sign_up: SignUpPage
let page: Page
let home: HomePage
let collections: CollectionsPage
let sign_in: SignInPage

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    home = new HomePage(page)
    collections = new CollectionsPage(page)
    sign_in = new SignInPage(page)
    sign_up = new SignUpPage(page)
})

test.beforeEach(async () => {
    await sign_in.goto()
    await expect(page).toHaveTitle(sign_in.titleText)
})

test.describe('sign_in page tests', async () => {
    test('logo click', async () => {
        await page.locator(HomePageSelector.Logo).click()
        await expect(page).toHaveURL(collections.url)
    })
    test('sign in click', async () => {
        await page.locator(HomePageSelector.SignInBtn).click()
        await expect(page).toHaveURL(sign_in.url)
    })
    test('create new account click', async () => {
        await page.locator(SignInPageSelectors.CreateNewBtn).click()
        await expect(page).toHaveURL(sign_up.url)
    })

})