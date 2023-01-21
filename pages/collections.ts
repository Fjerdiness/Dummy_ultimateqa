import { expect, Page } from '@playwright/test';
import { CollectionsPageSelector } from '../utils/enum/collections';
import { BasePage } from '../basePage/basePage';

export class CollectionsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    public override get url() {
        return super.url + '/collections';
    }
    // public get mainUrl() {
    //     return super.url
    // }
    public get pageName() {
        return 'Collections';
    }
    public get title() {
        return this.page.locator(CollectionsPageSelector.TitleSelector);
    }
    public get titleText() {
        return 'Products'
    }
    public override async goto() {
        await this.page.goto(this.url);
    }
}