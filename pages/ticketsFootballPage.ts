import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class TicketsFootballPage extends BasePage {
    readonly getTimeUntilNextMatch: Locator;
    readonly getDateMatch: Locator;

    constructor(page: Page) {
        super(page);
        this.getTimeUntilNextMatch = page.locator("//div[@class='countdown ']")
        this.getDateMatch = page.locator("//div[@class='fixture-hero__date']")
    }
}