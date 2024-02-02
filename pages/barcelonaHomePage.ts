import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class HomePageBatcelona extends BasePage {
    readonly getStartedLink: Locator;
    readonly getFCBarcaLogo: Locator;
    readonly getLoginBtn: Locator;
    readonly getRegisterBtn: Locator;
    readonly getRightInformLogo: Locator;
    readonly getSearchIcon: Locator;
    readonly getCulersDropDown: Locator;
    readonly getPremiumFromCulersDropDown: Locator;
    readonly getCulersFreePlan: Locator;
    readonly getPremiumPlan: Locator;
    readonly getTicketsAndMuseumDropDowm: Locator;
    readonly getMenFootballDropDown: Locator;
    readonly getFirstTeamDropDown: Locator;
    readonly getResultsFromFirstTeamDropDown: Locator;
    readonly getPlayersFromFirstTeamDropDown: Locator;
    readonly getClubDropDown: Locator;
    readonly getKidsFromClubDropDown: Locator;
    readonly getHistoryFromClubDropDown: Locator;

    constructor(page: Page) {
        super(page);
        this.getFCBarcaLogo = page.locator("//div[@class='navigation__logo-container']");
        this.getLoginBtn = page.locator("//div[@id='nav']//button[@class='user-options__button js-login']");
        this.getRegisterBtn = page.locator("//div[@class='top-slim-nav__user-actions']//div[contains(@class,'button-container--register')]");
        this.getRightInformLogo = page.locator("//div[@class='fcbsites__icon-container']");
        this.getSearchIcon = page.locator("//div[@class='middle-navigation__item middle-navigation__item--search js-search-icon']");
        this.getCulersDropDown = page.locator("//div[contains(@class,'middle-navigation__item--dropdown video')]");
        this.getPremiumFromCulersDropDown = page.locator("//div[contains(@class,'middle-navigation__item--dropdown video')]//a[@data-analytics-event='premium']");
        this.getCulersFreePlan = page.locator("//div[contains(@class,'bac-sec__cols')]//div[contains(@class,'culers-product')]");
        this.getPremiumPlan = page.locator("//div[contains(@class,'bac-sec__cols')]//div[contains(@class,'premium-product')]");
        this.getTicketsAndMuseumDropDowm = page.locator("//div[@data-menu-origin-type='Tickets & Museum']");
        this.getMenFootballDropDown = page.locator("//div[@data-menu-origin-type='Tickets & Museum']//a[@data-analytics-event='futbol masculí']");
        this.getFirstTeamDropDown = page.locator("//div[@data-menu-origin-type='First Team']");
        this.getClubDropDown = page.locator("//div[@data-menu-origin-type='Club']");
        this.getKidsFromClubDropDown = page.locator("//div[@data-menu-origin-type='Club']//a[@data-analytics-event='kids']");
        this.getHistoryFromClubDropDown = page.locator("//div[@data-menu-origin-type='Club']//a[@data-analytics-event='història']");
        this.getResultsFromFirstTeamDropDown = page.locator("//div[@data-menu-origin-type='First Team']//a[@data-analytics-event='resultats']");
        this.getPlayersFromFirstTeamDropDown = page.locator("//div[@data-menu-origin-type='First Team']//a[@data-analytics-event='jugadors']");
    }

    async goToFCB() {
        await this.page.goto(this.URL);
    }

    async clickToCookies() {
        await this.page.locator("//button[@onclick='acceptAll()']").click();
    }

    async SearchNews(text) {
        await this.page.locator("//input[@class='search-bar__input']").fill(text);
        await this.page.waitForTimeout(100);
        await this.page.locator("//input[@class='search-bar__input']").press(`Enter`);
    }

    async closePopupAd() {
        await this.page.waitForTimeout(2000);
        await this.page.locator("//div[@id='close_DFP_btn']").click()
    }
}