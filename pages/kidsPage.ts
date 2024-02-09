import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class KisdsPage extends BasePage {
    readonly getTitle: Locator;
    readonly getAllContent: Locator;

    constructor(page: Page) {
        super(page);
        this.getTitle = page.locator("//img[@alt='BARÇA KIDS' and @class='tit-hero-mob']")
        this.getAllContent = page.locator("//div[@class='u-main-gradient']//div[@class='col-12']")
    }
}