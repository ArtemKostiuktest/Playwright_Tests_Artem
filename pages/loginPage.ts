import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    readonly getLoginByGoogle: Locator;
    readonly getLoginByFacebook: Locator;
    readonly getLoginByApple: Locator;
    readonly getContinueBtn: Locator;
    readonly getEmailInput: Locator;

    constructor(page: Page) {
        super(page);
        this.getLoginByGoogle = page.locator("//span[contains(text(),'Google')]")
        this.getLoginByApple = page.locator("//span[contains(text(),'Apple')]")
        this.getLoginByFacebook = page.locator("//span[contains(text(),'Facebook')]")
        this.getContinueBtn = page.locator("//div[@class='button__group']")
        this.getEmailInput = page.locator("//input[@type='text']")
    }
}