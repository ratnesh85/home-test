const { Given, When, Then } = require("@cucumber/cucumber");
const SearchPage = require("../pages/searchpage");
const {expect} = require("@playwright/test")

let searchpage = new SearchPage();


When("Enter a valid search term {string}", async function (searchtext) {
  await searchpage.enterSearchText(searchtext);
});

When("Click on Search button", async function () {
  await searchpage.clickSearchButton();
});

Then("Verify search results are displayed and it contains {string}", async function (result) {
  expect(await searchpage.getSearchResult()).toContain(result);
});