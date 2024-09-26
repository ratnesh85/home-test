const fsExtra = require('fs-extra');
const path = require('path');
const { promisify } = require('util');   
const mkdirAsync = promisify(fsExtra.mkdir);

class BasePage {

    async navigateToURL(url) {
        await global.page.goto(url);
    }

    async getURL() {
        return await global.page.url();
    }

    async click(locator) {
        await global.page.click(locator);
    }

    async goBack() {
        await global.page.goBack();
    }

    async reloadPage() {
        await global.page.reload();
    }

    async clearTextField(locator) {
        await global.page.click(locator);
        await global.page.keyboard.press("Control+A");
        await global.page.keyboard.press("Backspace");
    }

    async pressKey(keyName) {
        await global.page.keyboard.press(keyName);
    }

    async enterValue(locator, value) {
        await global.page.fill(locator, value);
    }

    async waitForURL(url) {
        await global.page.waitForURL(url);
    }

    async isVisible(locator) {
        return await global.page.isVisible(locator);
    }

    async type(locator, val) {
        await global.page.type(locator, val);
    }

    async waitForLoad() {
        await global.page.waitForLoadState();
    }

    async sleep(timeOut) {
        await global.page.waitForTimeout(timeOut);
    }

    async waitForSelector(locator, timeOut) {
        await global.page.waitForSelector(locator, { timeout: timeOut });
    }

    async waitUntilVisible(locator, timeOut) {
        await global.page.waitForSelector(locator, { timeout: timeOut, state: 'visible' });
    }

    async waitUntilHidden(locator, timeOut) {
        await global.page.waitForSelector(locator, { timeout: timeOut, state: 'hidden' });
    }

    async getInnerText(locator) {
        return await global.page.textContent(locator);
    }

    async getAttribute(locator, attribute) {
        return await global.page.getAttribute(locator, attribute);
    }

    async getAttributeInList(locator, attribute) {
        try {
            const content = [];
            const elements = await global.page.$$(locator); // Find all elements matching the locator
    
            for (const element of elements) {
                const attrValue = await element.getAttribute(attribute); // Get the attribute value
                content.push(attrValue);
            }
            return content; // Return array of attribute values
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async getTextsInList(locator) {
        try {
            const content = [];
            const elements = await global.page.$$(locator);

            for (const element of elements) {
                const text = await element.innerText();
                content.push(text);
            }
            return content;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async selectValueFromDropDown(dropDownOption, valueToBeSelected) {
        await global.page.selectOption(dropDownOption, { label: valueToBeSelected });
    }

    async selectByVisibleText(locator, valueToBeSelected) {
        await global.page.selectOption(locator, { label: valueToBeSelected });
    }

    async scrollToBottom() {
        await global.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async hover(locator) {
        await global.page.hover(locator);
    }

    async downoladFile(locator) {
        await mkdirAsync("downloadedFiles", { recursive: true }) //creating directory 
        const download = await Promise.all([
            global.page.waitForEvent("download"),
            global.page.click(locator)
        ])

        const filename = download[0].suggestedFilename();
        const filePath = path.join("./downloadedFiles", filename);
        await download[0].saveAs(filePath);
        console.log("downloaded file: " + filename);

        return filePath;

    }

    async isEnabled(locator){
        await global.page.isEnabled(locator);
    }

    async alertAccept(locator){       
        global.page.on('dialog', async dialog => {
            console.log(dialog.message()); // Logs the confirm message
            await dialog.accept(); // Accepts the confirm (equivalent to clicking "OK")
            // or
            // await dialog.dismiss(); // Dismisses the confirm (equivalent to clicking "Cancel")
        });
        
        await this.click(locator); 
    }

}

module.exports = BasePage;