import { expect, Page } from '@playwright/test'
import { HomePageSelector } from '../utils/enum/home'
import { BasePage } from '../basePage/basePage'

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    public override get url() {
        return super.url
    }
    public get mainUrl() {
        return super.url
    }
    public get pageName() {
        return 'Home'
    }
    public get title() {
        return this.page.locator(HomePageSelector.TitleSelector)
    }
    public get titleText() {
        return 'Ultimate QA'
    }
    public get subTitleText() {
        return 'Worldclass Automation Training'
    }
    public async goto() {
        await this.page.goto('')
    }
}