
import { test as baseTest, expect, type Locator, chromium, BrowserContext, type Page } from '@playwright/test';
import { HomePageBatcelona } from "../pages/barcelonaHomePage";
import { SearchResult } from '../pages/searchResultPage';
import { TicketsFootball } from '../pages/TicketsFootballPage';
import { ResultAllMatch } from '../pages/ResultAllMatchPage';
import { FirstTeamPlayers } from '../pages/firstTeamPlayersPage';
import { Login } from '../pages/loginPage';
import { Kisds } from '../pages/kidsPage';
import { History } from '../pages/historyPage';


type TestType = {
    homepageBarcelona: HomePageBatcelona;
    searchResult: SearchResult;
    ticketsFootball: TicketsFootball;
    resultAllMatch: ResultAllMatch;
    firstTeamPlayers: FirstTeamPlayers;
    loginPage: Login;
    kidsPage: Kisds;
    historyPage: History;
    browserContext: BrowserContext;
    page: Page;
}


export const test = baseTest.extend<TestType>({
    page: async ({ }, use, testInfo) => {
        let browser = await chromium.launch({ headless: false })
        let context = await browser.newContext();
        let page = await context.newPage();
        await use(page)
    },
    homepageBarcelona: async ({ page }, use, testInfo) => {
        let homepageBarcelona = new HomePageBatcelona(page);
        await use(homepageBarcelona)
    },
    searchResult: async ({ page }, use, testInfo) => {
        let searchResult = new SearchResult(page);
        await use(searchResult)
    },
    ticketsFootball: async ({ page }, use, testInfo) => {
        let ticketsFootball = new TicketsFootball(page);
        await use(ticketsFootball)
    },
    resultAllMatch: async ({ page }, use, testInfo) => {
        let resultAllMatch = new ResultAllMatch(page);
        await use(resultAllMatch)
    },
    firstTeamPlayers: async ({ page }, use, testInfo) => {
        let firstTeamPlayers = new FirstTeamPlayers(page);
        await use(firstTeamPlayers)
    },
    loginPage: async ({ page }, use, testInfo) => {
        let loginPage = new Login(page);
        await use(loginPage)
    },
    kidsPage: async ({ page }, use, testInfo) => {
        let kidsPage = new Kisds(page);
        await use(kidsPage)
    },
    historyPage: async ({ page }, use, testInfo) => {
        let historyPage = new History(page);
        await use(historyPage)
    }
})

export { expect };
