import { test, expect, Page } from '@playwright/test'
import { HomePage } from '../pages/home'
import { HomePageSelector } from '../utils/enum/home'
import { CollectionsPage } from '../pages/collections'
import { SignInPage } from '../pages/sign_in'
import { ColorEnum } from '../utils/enum/color'

let page: Page
let home: HomePage
let collections: CollectionsPage
let sign_in: SignInPage

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    home = new HomePage(page)
    collections = new CollectionsPage(page)
    sign_in = new SignInPage(page)
})

test.beforeEach(async () => {
    await home.goto()
    await expect(page).toHaveTitle(home.titleText)
})

test.describe('Home page tests', () => {
    test('click logo', async () => {
        await page.locator(HomePageSelector.Logo).click()
        await expect(page).toHaveURL(collections.url)
    })
    test('click first course', async () => {
        const elem = await page.locator(HomePageSelector.CourseItem).first()
        const href = await elem.getAttribute('href')
        await elem.hover()
        await expect(elem).toHaveCSS('color', ColorEnum.LightBlack)
        await elem.click()
        await expect(page).toHaveURL(home.mainUrl + href)
    })

    test('click last course', async () => {
        const elem = await page.locator(HomePageSelector.CourseItem).last()
        const href = await elem.getAttribute('href')
        await elem.hover()
        await expect(elem).toHaveCSS('color', ColorEnum.LightBlack)
        await elem.click()
        await expect(page).toHaveURL(home.mainUrl + href)
    })
    test('click more courses button', async () => {
        const elem = await page.locator(HomePageSelector.ViewMoreCourseBtn)
        await elem.hover()
        await expect(elem).toHaveCSS('background-color', ColorEnum.DarkGreen)
        await elem.click()
        await expect(page).toHaveURL(collections.url)
    })
    test('click sign in button', async () => {
        const elem = await page.locator(HomePageSelector.SignInBtn)
        await elem.hover()
        await expect(elem).toHaveCSS('color', ColorEnum.LightBlack)
        await elem.click()
        await expect(page).toHaveURL(sign_in.url)
    })


})


