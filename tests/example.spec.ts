import { expect, test } from '../fixture/fixture';

test('check logo, login and registration', async ({ homepageBarcelona }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await expect(homepageBarcelona.getFCBarcaLogo).toBeVisible;
  await expect(homepageBarcelona.getLoginBtn).toBeVisible;
  await expect(homepageBarcelona.getRegisterBtn).toBeVisible;
  await expect(homepageBarcelona.getRightInformLogo).toBeVisible;
});

test('search fild', async ({ homepageBarcelona, searchResult }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.getSearchIcon.click
  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.SearchNews("Pedri");

  await expect(searchResult.getResultListNews).toBeVisible;
  await expect(searchResult.getFelterNewsButtons).toBeVisible;
});

test('check enable premium membership', async ({ homepageBarcelona }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getCulersDropDown.click();
  await homepageBarcelona.getPremiumFromCulersDropDown.click();

  await expect(homepageBarcelona.getCulersFreePlan).toBeVisible;
  await expect(homepageBarcelona.getPremiumPlan).toBeVisible;
});

test('check enable information about next match', async ({ homepageBarcelona, ticketsFootball }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getTicketsAndMuseumDropDowm.click();
  await homepageBarcelona.getMenFootballDropDown.click();

  await expect(ticketsFootball.getTimeUntilNextMatch).toBeVisible;
  await expect(ticketsFootball.getDateMatch).toBeVisible;
});

test('check information about previous match', async ({ homepageBarcelona, resultAllMatch }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getFirstTeamDropDown.click();
  await homepageBarcelona.getResultsFromFirstTeamDropDown.click();

  await expect(resultAllMatch.getAllInfoAboutPreviousMatch).toBeVisible;
});

test('check information about players', async ({ homepageBarcelona, firstTeamPlayers }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd() //Вимикаю рекламне вікно
  await homepageBarcelona.getFirstTeamDropDown.click();
  await homepageBarcelona.getPlayersFromFirstTeamDropDown.click();

  await expect(firstTeamPlayers.getFilterByPosition).toBeVisible;
  await expect(firstTeamPlayers.getListPlayers).toBeVisible;
});

test("check content in login page", async ({ homepageBarcelona, loginPage }) => {
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

test("check content in kids page", async ({ homepageBarcelona, kidsPage }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd(); //Вимикаю рекламне вікно
  await homepageBarcelona.getClubDropDown.click();
  await homepageBarcelona.getKidsFromClubDropDown.click();

  await expect(kidsPage.getTitle).toBeVisible;
  await expect(kidsPage.getAllContent).toBeVisible;
})

test("check content in history page", async ({ homepageBarcelona, historyPage }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await homepageBarcelona.closePopupAd(); //Вимикаю рекламне вікно
  await homepageBarcelona.getClubDropDown.click();
  await homepageBarcelona.getHistoryFromClubDropDown.click();

  await expect(historyPage.getTitle).toBeVisible;
  await expect(historyPage.getNavListOfHistory).toBeVisible;
  await expect(historyPage.getAllHistoricalArticls).toBeVisible;
})

test("check social media buttons", async ({ homepageBarcelona }) => {
  await homepageBarcelona.goToFCB();
  await homepageBarcelona.clickToCookies();

  await expect(homepageBarcelona.getLinkToFacebook).toBeVisible;
  await expect(homepageBarcelona.getLinkToTwitter).toBeVisible;
  await expect(homepageBarcelona.getLinkToYouTube).toBeVisible;
  await expect(homepageBarcelona.getLinkToInstagram).toBeVisible;
  await expect(homepageBarcelona.getLinkToTikTok).toBeVisible;
  await expect(homepageBarcelona.getLinkToSpotify).toBeVisible;
})