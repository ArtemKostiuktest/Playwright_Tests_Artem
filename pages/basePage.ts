import { Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;
    readonly URL: string;

    constructor(page: Page) {
        this.page = page;
        this.URL = "https://www.fcbarcelona.com/en/";
    }
}