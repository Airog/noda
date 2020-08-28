import { WebDriver, By } from 'selenium-webdriver';
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
        await this.driver.navigate().to(this.url);
    }

    protected async $(cssSelector: string){
        return await this.driver.findElement(By.className(cssSelector))
    }

    protected async $$(cssSelector: string){
        return await this.driver.findElements(By.className(cssSelector))
    }
}