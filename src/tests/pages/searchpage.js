const basePage = require("../../../utils/basePage");

class SearchPage extends basePage {
    input_search = "//input[@name='searchWord']";
    button_search = "//button[@type='submit']";
    label_searchResult = "//p[@id='result']";
    label_searching = "//p[contains(text(),'searching')]";
    

    async clickSearchButton() {
        await this.click(this.button_search);
    }

    async enterSearchText(text) {
        await this.enterValue(this.input_search, text);
    }

    async getSearchResult() {
        await this.waitUntilHidden(this.label_searching);
        return await this.getInnerText(this.label_searchResult);
    }


}

module.exports = SearchPage;