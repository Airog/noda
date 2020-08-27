import { DriverProvider } from './../provider/DriverProvider'
import { By, Key, WebDriver } from 'selenium-webdriver'
import { IDriverConfig } from '../config/IDriverConfig';

/** Looks like it's not possible to use chane pattern in Nodejs because of async/await,
 * all methods should be atomic and should not return "this"
 * or you will have method call chane with a lot of awaits, somethind like:
 * await (await...(await...(await...
 * */
export class BaseTest {
    constructor() { }

    driver!: WebDriver
    dp!: DriverProvider

    public init(conf: IDriverConfig) {
        this.dp = new DriverProvider()
        this.dp.configDriver(conf) // some config here
    }

    public startProcess() {
        this.driver = this.dp.getDriver()
    }

    public async goToPage(url: string) {
        // open page
        await this.driver.navigate().to(url)
        await this.driver.findElement(By.name('q')).sendKeys('putin', Key.RETURN)
    }

    public async finishIt() {
        console.log('test done, close the browser')
        await this.driver.close()
    }
}