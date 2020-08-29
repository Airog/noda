import { BasePage } from '../base/BasePage';
import { WebDriver } from 'selenium-webdriver';

export class ABTesting extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
        this.setUrl('http://the-internet.herokuapp.com/abtest')
    }

    public async getHeaderText() {
        let header = await this.$('h3')
        let headerText = await header.getText()
        return headerText
    }
}