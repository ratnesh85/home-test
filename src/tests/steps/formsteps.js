const { Given, When, Then } = require("@cucumber/cucumber");
const FormPage = require("../pages/formpage");
const {expect} = require("@playwright/test");
const data = require("../../../data/testdata.json");

let formpage = new FormPage();


Then("Verify that the cart total shown is correct for the item prices added", async function () {
    let total = await formpage.getCartTotal();
    let prices = await formpage.getCartPrices();
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum = sum + parseFloat(prices[i].replace("$", ""));
    }
    expect(sum).toBe(parseFloat(total.replace("$", "")));
});

When("Fill all the details in the form", async function () {
    await formpage.enterFullName(data.fullname);
    await formpage.enterEmail(data.email);
    await formpage.enterAddress(data.address);
    await formpage.enterCity(data.city);
    await formpage.enterState(data.state);
    await formpage.enterZip(data.zip);
    await formpage.enterCardNumber(data.cardnumber);
    await formpage.enterCardName(data.cardname);
    await formpage.enterExpYear(data.expyear);
    await formpage.selectExpMonth(data.expmonth);
    await formpage.enterCVV(data.cvv);
});

When("Click on Continue to checkout button", async function () {
    await formpage.clickCheckoutButton();
});

Then("Verify that if Shipping address same as billing checkbox is not checkmarked then checkmark it", async function () {
    if (await formpage.getSameaddCheckboxStatus() == null) {
        await formpage.checkSameAddress();
    }
});

Then("Verify that if Shipping address same as billing checkbox is checkmarked, then uncheckmark it", async function () {
    if (await formpage.getSameaddCheckboxStatus() == '') {
        await formpage.checkSameAddress();
    }
});

Then("Verify that the order confirmation number is not empty", async function () {
    expect(await formpage.getOrderIdNo()).not.toBe("");
});

Then("Submit the form and verify the alert message is shown and confirm the alert", async function () {
    await formpage.acceptAlert();
});