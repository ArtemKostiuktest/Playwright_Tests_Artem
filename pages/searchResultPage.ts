import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class SearchResultPage extends BasePage {
    readonly getResultListNews: Locator;
    readonly getFelterNewsButtons: Locator;

    constructor(page: Page) {
        super(page);
        this.getResultListNews = page.locator("//li[@class='search-page__tab js-tab-container search-page__tab--show']")
        this.getFelterNewsButtons = page.locator("//nav[@class='section-navigation js-section-nav js-nav-container u-hide-tablet']")
    }
}