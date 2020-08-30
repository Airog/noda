import { WebDriver, WebElement } from 'selenium-webdriver';
import { BasePage } from '../base/BasePage';

export class TheInternet extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.setUrl('http://the-internet.herokuapp.com/')
    }

    public async clickOnABTestingLink() {
        (await this.$('li:nth-child(1) > a')).click()
    }

    public async getHeaderText() {
        let header = await this.$('h1')
        return await header.getText()
    }
}