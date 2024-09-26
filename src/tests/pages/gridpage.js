const basePage = require("../../../utils/basePage");

class GridPage extends basePage {
    list_titles = "//label[@data-test-id='card-number']/../h4/b";
    list_prices = "//label[@data-test-id='card-number']/../p";
    list_images = "//label[@data-test-id='card-number']/../img";
    list_buttons = "//label[@data-test-id='card-number']/../button";
    grid_item = "(//label[@data-test-id='card-number'])[pos]/../h4/b";
    grid_price = "(//label[@data-test-id='card-number'])[pos]/../p";
    

    async getGridItem(pos) {
        return await this.getInnerText(this.grid_item.replace("pos", pos));
    }

    async getGridPrice(pos) {
        return await this.getInnerText(this.grid_price.replace("pos", pos));
    }

    async getGridTitles() {
        return await this.getTextsInList(this.list_titles);
    }

    async getGridPrices() {
        return await this.getTextsInList(this.list_prices);
    }

    async getGridImages() {
        return await this.getAttributeInList(this.list_images, "src");
    }

    async getGridButtons() {
        return await this.getTextsInList(this.list_buttons);
    }

    
}

module.exports = GridPage;