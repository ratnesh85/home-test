const { Given, When, Then } = require("@cucumber/cucumber");
const LoginPage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");
const {expect} = require("@playwright/test")

let loginPage = new LoginPage();
let homepage = new HomePage();


When("Click on Signup Login button", async function () {
  await loginPage.clickOnLoginPage();
});

When("Enter a valid email address and password", async function () {
  await loginPage.enterUsername(process.env.userid);
  await loginPage.enterPassword(process.env.password);
});

When("Enter an invalid email address and password", async function () {
  await loginPage.enterUsername("John");
  await loginPage.enterPassword("Doe");
});

When("Enter blank email address and password", async function () {
  await loginPage.enterUsername("");
  await loginPage.enterPassword("");
});

When("Click on SignIn button", async function () {
  await loginPage.clickOnSignIn();
});

Then("Verify that welcome message with username is displayed", async function () {
  expect(await homepage.getWelcomeText()).toBe("Welcome!");
  expect(await homepage.getUsername()).toBe(process.env.userid);
});

Then('Verify that error message {string} is displayed', async function (string) {
  expect(await loginPage.getErrorMessage()).toBe(string);
});

