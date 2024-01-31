import { test, expect } from '@playwright/test';

test('check logo, login and registration', async ({ page }) => {
  await page.goto("https://www.fcbarcelona.com/en/");
  await page.click("//button[@onclick='acceptAll()']");

  await expect(page.locator("//div[@class='main-mobile-navigation__mobile-logo']")).toBeVisible;
  await expect(page.locator("//div[@class='top-slim-nav__user-actions']//button[@class='user-options__button js-login']")).toBeVisible;
  await expect(page.locator("//div[@class='top-slim-nav__user-actions']//div[@class='user-options__button-container user-options__button-container--register']")).toBeVisible;
  await expect(page.locator("//div[@class='fcbsites__icon-container']")).toBeVisible;
});

test('search fild', async ({ page }) => {
  await page.goto("https://www.fcbarcelona.com/en/")
  await page.click("//button[@onclick='acceptAll()']");

  await page.click("//div[@class='middle-navigation__item middle-navigation__item--search js-search-icon']");
  await page.locator("//input[@class='search-bar__input']").fill('Pedri');
  await page.click("//div[@id='close_DFP_btn']"); //Вимикаю рекламне вікно
  await page.click("//div[@class='search-bar__cta js-search-bar-cta']");

  await expect(page.locator("//li[@class='search-page__tab js-tab-container search-page__tab--show']")).toBeVisible;
  await expect(page.locator("//nav[@class='section-navigation js-section-nav js-nav-container u-hide-tablet']")).toBeVisible;
});

test('check enable premium membership', async ({ page }) => {
  await page.goto("https://www.fcbarcelona.com/en/")
  await page.click("//button[@onclick='acceptAll()']")

  await page.click("//div[@id='close_DFP_btn']"); //Вимикаю рекламне вікно
  await page.click("//div[@class='middle-navigation__item middle-navigation__item--dropdown video-full   js-middle-navigation-menu-item js-middle-navigation-dropdown-button']");
  await page.click("//div[@class='middle-navigation__item middle-navigation__item--dropdown video-full   js-middle-navigation-menu-item js-middle-navigation-dropdown-button']//a[@data-analytics-event='premium']");
  
  await expect(page.locator("//div[@class='bac-sec__cols bac-sec__cols--2 bac-sec__cols--stretch']//div[@class='bac-sec__product culers-product']")).toBeVisible;
  await expect(page.locator("//div[@class='bac-sec__cols bac-sec__cols--2 bac-sec__cols--stretch']//div[@class='bac-sec__product premium-product']")).toBeVisible;
});