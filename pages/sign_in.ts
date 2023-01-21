import { expect, Page } from '@playwright/test';
import { HomePageSelector } from '../utils/enum/home';
import { BasePage } from '../basePage/basePage';

export class SignInPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    public override get url() {
        return super.url + '/users/sign_in';
    }
    public get mainUrl() {
        return super.url
    }
    public get pageName() {
        return 'Sign In';
    }
    public get title() {
        return this.page.locator(HomePageSelector.TitleSelector);
    }
    public get titleText() {
        return 'Welcome Back!'
    }

    public override async goto() {
        await this.page.goto(this.url);
    }
}