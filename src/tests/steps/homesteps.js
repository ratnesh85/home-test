const { Given, When, Then } = require("@cucumber/cucumber");
const HomePage = require("../pages/homepage");
const { expect } = require("@playwright/test");

let homePage = new HomePage();

When("Click on Form tab", async function () {
  await homePage.clickOnForm();
});

When("Click on Grid tab", async function () {
  await homePage.clickOnGrid();
});

When("Click on Search tab", async function () {
  await homePage.clickOnSearch();
});