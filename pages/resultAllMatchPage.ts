import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ResultAllMatch extends BasePage {
    readonly getAllInfoAboutPreviousMatch: Locator

    constructor(page: Page) {
        super(page);
        this.getAllInfoAboutPreviousMatch = page.locator("//div[@class='results-hero__content']")
    }

}