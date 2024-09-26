const basePage = require("../../../utils/basePage");
const { faker } = require('@faker-js/faker');

class FormPage extends basePage {
    list_prices = "//p/span[@class='price' and not(@style)]";
    label_total = "//p/span[@class='price' and (@style)]/b";
    input_fullName = "//input[@id='fname']";
    input_email = "//input[@id='email']";   
    input_address = "//input[@id='adr']";
    input_city = "//input[@id='city']";
    input_state = "//input[@id='state']";
    input_zip = "//input[@id='zip']";
    input_cardName = "//input[@id='cname']";
    input_cardNUmber = "//input[@id='ccnum']";
    select_expMonth = "//select[@id='expmonth']";
    input_expYear = "//input[@id='expyear']";
    input_cvv = "//input[@id='cvv']";
    checkbox_sameAddress = "//input[@name='sameadr']";
    button_checkout = "//button[contains(text(),'Continue to checkout')]";
    label_orderIdNo = "//p[@data-id='ordernumber']";
    

    async getCartPrices() {
        return await this.getTextsInList(this.list_prices);
    }
    
    async getCartTotal() {
        return await this.getInnerText(this.label_total);
    }

    async enterFullName(name) {
        await this.enterValue(this.input_fullName, name);
    }

    async enterEmail(email) {
        await this.enterValue(this.input_email, email);
    }

    async enterAddress(address) {
        await this.enterValue(this.input_address, address);
    }

    async enterCity(city) {
        await this.enterValue(this.input_city, city);
    }

    async enterState(state) {
        await this.enterValue(this.input_state, state);
    }

    async enterZip(zip) {
        await this.enterValue(this.input_zip, zip);
    }

    async enterCardName(cardname) {
        await this.enterValue(this.input_cardName, cardname);
    }

    async enterCardNumber(cardnum) {
        await this.enterValue(this.input_cardNUmber, cardnum);
    }

    async selectExpMonth(month) {
        await this.selectByVisibleText(this.select_expMonth, month);
    }

    async enterExpYear(year) {
        await this.enterValue(this.input_expYear, year);
    } 

    async enterCVV(cvv) {
        await this.enterValue(this.input_cvv, cvv);
    }

    async checkSameAddress() {
        await this.click(this.checkbox_sameAddress);
    }

    async clickCheckoutButton() {
        await this.click(this.button_checkout);
    }

    async getSameaddCheckboxStatus() {
        return await this.getAttribute(this.checkbox_sameAddress,'checked');
    }

    async getOrderIdNo() {
        return (await this.getInnerText(this.label_orderIdNo)).replace("Order number: ", "");
    }

    async acceptAlert(){
        await this.alertAccept(this.button_checkout);
    }

        
}

module.exports = FormPage;