const basePage = require("../../../utils/basePage");
const fs = require("fs").promises;
const { faker } = require('@faker-js/faker');
class HomePage extends basePage {
    label_welocme = "//h2";
    label_username = "//p";
    tab_form = "//a[@href='/checkout']";
    tab_grid = "//a[@href='/grid']";
    tab_search = "//a[@href='/search']";
    
    async getWelcomeText() {
        await this.waitForSelector(this.label_welocme);
        return await this.getInnerText(this.label_welocme); 
    }

    async getUsername() {
        return await this.getInnerText(this.label_username);
    }

    async clickOnForm() {
        await this.click(this.tab_form);
    }

    async clickOnGrid() {
        await this.click(this.tab_grid);
    }

    async clickOnSearch() {
        await this.click(this.tab_search);
    }
}

module.exports = HomePage;
