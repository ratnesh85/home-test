const { Given, When, Then } = require("@cucumber/cucumber");
const GridPage = require("../pages/gridpage");
const {expect} = require("@playwright/test")

let gridpage = new GridPage();


Then("Verify that in position {int} the product shown is {string}", async function (pos,item) {
     expect(await gridpage.getGridItem(pos)).toBe(item);
});

Then("Verify that in position {int} the price shown is {string}", async function (pos,price) {
     expect(await gridpage.getGridPrice(pos)).toBe(price);
});

Then("Verify that all the items have a non empty title, price, image and a button", async function () {
    let titles = await gridpage.getGridTitles();
    let prices = await gridpage.getGridPrices();
    let images = await gridpage.getGridImages();
    let buttons = await gridpage.getGridButtons();
    for (let i = 0; i < titles.length; i++) {
        expect(titles[i]).not.toBe("");
        expect(prices[i]).not.toBe("");
        expect(images[i]).not.toBe("");
        expect(buttons[i]).not.toBe("");
        
    }
});
