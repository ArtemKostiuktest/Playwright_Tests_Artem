import { test, expect } from '@playwright/test';
import { HomePageBatcelona } from '../pages/barcelonaHomePage';
import { SearchResult } from '../pages/searchResultPage';
import { TicketsFootball } from '../pages/TicketsFootballPage';
import { ResultAllMatch } from '../pages/ResultAllMatchPage';
import { FirstTeamPlayers } from '../pages/firstTeamPlayersPage';
import { Login } from '../pages/loginPage';
import { Kisds } from '../pages/kidsPage';
import { History } from '../pages/historyPage';

test('check logo, login and registration', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await expect(homepageBarcelona.getFCBarcaLogo).toBeVisible;
  await expect(homepageBarcelona.getLoginBtn).toBeVisible;
  await expect(homepageBarcelona.getRegisterBtn).toBeVisible;
  await expect(homepageBarcelona.getRightInformLogo).toBeVisible;
});

test('search fild', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let searchResult = new SearchResult(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.getSearchIcon.click
  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.SearchNews("Pedri");

  await expect(searchResult.getResultListNews).toBeVisible;
  await expect(searchResult.getFelterNewsButtons).toBeVisible;
});

test('check enable premium membership', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getCulersDropDown.click();
  await homepageBarcelona.getPremiumFromCulersDropDown.click();

  await expect(homepageBarcelona.getCulersFreePlan).toBeVisible;
  await expect(homepageBarcelona.getPremiumPlan).toBeVisible;
});

test('check enable information about next match', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let ticketsFootball = new TicketsFootball(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getTicketsAndMuseumDropDowm.click();
  await homepageBarcelona.getMenFootballDropDown.click();

  await expect(ticketsFootball.getTimeUntilNextMatch).toBeVisible;
  await expect(ticketsFootball.getDateMatch).toBeVisible;
});

test('check information about previous match', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let resultAllMatch = new ResultAllMatch(page)

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getFirstTeamDropDown.click();
  await homepageBarcelona.getResultsFromFirstTeamDropDown.click();

  await expect(resultAllMatch.getAllInfoAboutPreviousMatch).toBeVisible;
});

test('check information about players', async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let firstTeamPlayers = new FirstTeamPlayers(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getFirstTeamDropDown.click();
  await homepageBarcelona.getPlayersFromFirstTeamDropDown.click();

  await expect(firstTeamPlayers.getFilterByPosition).toBeVisible;
  await expect(firstTeamPlayers.getListPlayers).toBeVisible;
});

test("check content in login page", async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let loginPage = new Login(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd(); //Вимикаю рекламне вікно
  await homepageBarcelona.getLoginBtn.click()

  await expect(loginPage.getEmailInput).toBeVisible;
  await expect(loginPage.getContinueBtn).toBeVisible;
  await expect(loginPage.getLoginByGoogle).toBeVisible;
  await expect(loginPage.getLoginByFacebook).toBeVisible;
  await expect(loginPage.getLoginByApple).toBeVisible;
})

test("check content in kids page", async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let kidsPage = new Kisds(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd(); //Вимикаю рекламне вікно
  await homepageBarcelona.getClubDropDown.click();
  await homepageBarcelona.getKidsFromClubDropDown.click();

  await expect(kidsPage.getTitle).toBeVisible;
  await expect(kidsPage.getAllContent).toBeVisible;
})

test("check content in history page", async ({ page }) => {
  let homepageBarcelona = new HomePageBatcelona(page);
  let historyPage = new History(page);

  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd(); //Вимикаю рекламне вікно
  await homepageBarcelona.getClubDropDown.click();
  await homepageBarcelona.getHistoryFromClubDropDown.click();

  await expect(historyPage.getTitle).toBeVisible;
  await expect(historyPage.getNavListOfHistory).toBeVisible;
  await expect(historyPage.getAllHistoricalArticls).toBeVisible;
})