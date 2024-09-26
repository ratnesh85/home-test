const basePage = require("../../../utils/basePage");

class LoginPage extends basePage {
    link_loginPage = "//a[@href='/login']";
    input_username = "//input[@id='username']";
    input_password = "//input[@id='password']";
    button_signin = "//button[@id='signin-button']";
    label_error = "//h2[@id='message']"
    

    async clickOnLoginPage() {
        await this.click(this.link_loginPage);
    }

    async enterUsername(username) {
        await this.enterValue(this.input_username, username);
    }

    async enterPassword(password) {
        await this.enterValue(this.input_password, password);
    }

    async clickOnSignIn() {
        await this.click(this.button_signin);
    }

    async getErrorMessage() {
        return await this.getInnerText(this.label_error);
    }


}

module.exports = LoginPage;