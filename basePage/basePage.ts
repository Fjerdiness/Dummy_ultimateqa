import { Page } from '@playwright/test'


export abstract class BasePage {
    protected readonly page: Page


    public get url() {
        return process.env.baseUrl ? process.env.baseUrl : 'https://courses.ultimateqa.com'
    }

    public abstract get pageName(): string
    public abstract get titleText(): string

    constructor(page: Page) {
        this.page = page
    }

    public async goto() {
        await this.page.goto(this.url)
    }
}