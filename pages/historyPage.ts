import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HistoryPage extends BasePage {
    readonly getTitle: Locator;
    readonly getNavListOfHistory: Locator;
    readonly getAllHistoricalArticls: Locator;

    constructor(page: Page) {
        super(page);
        this.getTitle = page.locator("//div[@class='static-hero__content']")
        this.getNavListOfHistory = page.locator("//div[@class='section-nav-container']")
        this.getAllHistoricalArticls = page.locator("//div[@class='section-nav-container']")
    }
}