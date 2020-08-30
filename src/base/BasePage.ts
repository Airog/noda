import { WebDriver, By, until } from 'selenium-webdriver';
export abstract class BasePage {

    private url!: string
    private driver: WebDriver

    constructor(driver: WebDriver) {
        this.driver = driver
    }

    protected setUrl(url: string) {
        this.url = url;
    }

    public async navigate(): Promise<void> {
        await this.driver.navigate().to(this.url)
    }

    protected async $(cssSelector: string) {
        return await this.driver.wait(until.elementLocated(By.css(cssSelector)))
    }

    protected async $$(cssSelector: string) {
        let selector = By.css(cssSelector)
        await this.driver.wait(until.elementLocated(selector))
        return await this.driver.findElements(selector)
    }
}