import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from "./basePage";

export class FirstTeamPlayersPage extends BasePage {
    readonly getFilterByPosition: Locator;
    readonly getListPlayers: Locator;

    constructor(page: Page) {
        super(page);
        this.getFilterByPosition = page.locator("//div[@class='section-sub-navigation__scroll-container']");
        this.getListPlayers = page.locator("//div[@class='team-list js-team-list ']");
    }
}