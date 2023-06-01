import { test, expect, type Page } from "@playwright/test";
import { IdealStepsVehicleData } from "../elements/idealsteps_vehicleData.spec";
import { IdealStepsInsurantData } from "../elements/idealsteps_insurantData.spec";
import { IdealStepsProductData } from "../elements/idealsteps_productData.spec";
import { IdealStepsPriceOption } from "../elements/idealsteps_priceOption.spec";
import { IdealStepsSendQuote } from "../elements/idealsteps_sendQuote.spec";

test("Persistence", async ({ page }) => {
  await page.goto("http://sampleapp.tricentis.com/101/");
  // Click nav_truck
  await page.locator("div.main-navigation ul > li > a#nav_truck").click();

  const vehicle = new IdealStepsVehicleData(page);
  await vehicle.inputData();
  await vehicle.nextEnterInsurantData();
  await expect(vehicle.counter).toContainText("0");

  const insurantData = new IdealStepsInsurantData(page);
  await insurantData.inputData();
  await insurantData.nextEnterProductData();
  await expect(insurantData.counter).toContainText("0");

  const productData = new IdealStepsProductData(page);
  await productData.inputData();
  await productData.nextEnterPriceOption();
  await expect(productData.counter).toContainText("0");

  const priceOption = new IdealStepsPriceOption(page);
  await priceOption.inputData();
  await priceOption.nextEnterSentQuote();
  await expect(priceOption.counter).toContainText("0");

  const sentQuote = new IdealStepsSendQuote(page);
  await sentQuote.inputData();
  await sentQuote.send.click();
  await expect(sentQuote.counter).toContainText("0");
  
  // await page.waitForTimeout(30000);
  await page.waitForSelector('body > div.sweet-alert.showSweetAlert.visible');

  await expect(page.locator('body > div.sweet-alert.showSweetAlert.visible > h2')).toHaveText(/.*success.*/);
});
