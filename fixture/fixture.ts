
import { test as baseTest, chromium, BrowserContext, type Page } from '@playwright/test';
import { HomePageBatcelonaPage } from "../pages/barcelonaHomePage";
import { SearchResultPage } from '../pages/searchResultPage';
import { TicketsFootballPage } from '../pages/TicketsFootballPage';
import { ResultAllMatchPage } from '../pages/ResultAllMatchPage';
import { FirstTeamPlayersPage } from '../pages/firstTeamPlayersPage';
import { LoginPage } from '../pages/loginPage';
import { KisdsPage } from '../pages/kidsPage';
import { HistoryPage } from '../pages/historyPage';

type TestType = {
    homepageBarcelona: HomePageBatcelonaPage;
    searchResult: SearchResultPage;
    ticketsFootball: TicketsFootballPage;
    resultAllMatch: ResultAllMatchPage;
    firstTeamPlayers: FirstTeamPlayersPage;
    loginPage: LoginPage;
    kidsPage: KisdsPage;
    historyPage: HistoryPage;
    browserContext: BrowserContext;
    page: Page;
}


export const test = baseTest.extend<TestType>({
    page: async ({ }, use, testInfo) => {
        let browser = await chromium.launch({headless:true})
        let context = await browser.newContext();
        let page = await context.newPage();
        await use(page)
    },
    homepageBarcelona: async ({ page }, use, testInfo) => {
        let homepageBarcelona = new HomePageBatcelonaPage(page);
        await use(homepageBarcelona)
    },
    searchResult: async ({ page }, use, testInfo) => {
        let searchResult = new SearchResultPage(page);
        await use(searchResult)
    },
    ticketsFootball: async ({ page }, use, testInfo) => {
        let ticketsFootball = new TicketsFootballPage(page);
        await use(ticketsFootball)
    },
    resultAllMatch: async ({ page }, use, testInfo) => {
        let resultAllMatch = new ResultAllMatchPage(page);
        await use(resultAllMatch)
    },
    firstTeamPlayers: async ({ page }, use, testInfo) => {
        let firstTeamPlayers = new FirstTeamPlayersPage(page);
        await use(firstTeamPlayers)
    },
    loginPage: async ({ page }, use, testInfo) => {
        let loginPage = new LoginPage(page);
        await use(loginPage)
    },
    kidsPage: async ({ page }, use, testInfo) => {
        let kidsPage = new KisdsPage(page);
        await use(kidsPage)
    },
    historyPage: async ({ page }, use, testInfo) => {
        let historyPage = new HistoryPage(page);
        await use(historyPage)
    }
})

export { expect } from '@playwright/test';