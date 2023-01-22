import { expect, Page } from '@playwright/test'
import { HomePageSelector } from '../utils/enum/home'
import { BasePage } from '../basePage/basePage'

export class SignUpPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    public override get url() {
        return super.url + '/users/sign_up'
    }
    public get mainUrl() {
        return super.url
    }
    public get pageName() {
        return 'Sign Up'
    }
    public get title() {
        return this.page.locator(HomePageSelector.TitleSelector)
    }
    public get titleText() {
        return 'Create a new account - Ultimate QA'
    }

    public override async goto() {
        await this.page.goto(this.url)
    }
}