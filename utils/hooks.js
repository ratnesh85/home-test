const { Before, After, setDefaultTimeout, BeforeAll, AfterAll, BeforeStep, AfterStep, Status } = require("@cucumber/cucumber");
const { chromium, firefox, webkit } = require("playwright");
const dotenv = require('dotenv');
dotenv.config();
setDefaultTimeout(1000 * 60 * 2);

BeforeAll(async function () {

  switch (process.env.browser) {
    case "chrome":
    case "gc":
      global.browser = await chromium.launch({
        headless: false,
        channel: "chrome",
        args: ["--start-maximized"],
      });
      break;
    case "firefox":
    case "ff":
      global.browser = await firefox.launch({
        headless: false,
        args: ["--start-maximized"],
      });
      break;
    case "edge":
    case "msedge":
      global.browser = await chromium.launch({
        headless: false,
        channel: "msedge",
        args: ["--start-maximized"],
      });
      break;
    case "safari":
    case "webkit":
      global.browser = await webkit.launch({
        headless: false,
        args: ["--start-maximized"],
      });
      break;
    default:
      throw new Error("invalid browser type " + process.env.browser + "is passed!");
  }
});

Before(async function (scenario) {
  global.bCtx = await global.browser.newContext({
    viewport: null,
    javaScriptEnabled: true,
  });
  global.page = await global.bCtx.newPage();

  await global.page.goto(process.env.url);
  await global.page.waitForLoadState();

});


After(async function (scenario) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Months are zero-based, so January is 0
  const day = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const todayDateString =
    year +
    "-" +
    month.toString().padStart(2, "0") +
    "-" +
    day.toString().padStart(2, "0");

  const timeString =
    hours.toString().padStart(2, "0") +
    "-" +
    minutes.toString().padStart(2, "0") +
    "-" +
    seconds.toString().padStart(2, "0");

  let uniqueDate = todayDateString + "_" + timeString;

  if (scenario.result?.status == Status.FAILED) {
    await global.page.screenshot({
      path:
        "./reports/screenshots/failed/" +
        uniqueDate +
        "_" +
        scenario.pickle.name +
        ".png",
    });
  }

  await global.page.close();
  await global.bCtx.close();
});

//browser will be closed after all testings are executed
AfterAll(async function () {
  await global.browser.close();
});





