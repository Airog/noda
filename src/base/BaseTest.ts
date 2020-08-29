import { DriverProvider } from './../provider/DriverProvider'
import { By, Key, WebDriver } from 'selenium-webdriver'
import { IDriverConfig } from '../config/IDriverConfig';

export class BaseTest {
    constructor() { }

    driver!: WebDriver
    dp!: DriverProvider

    public init(conf: IDriverConfig) {
        this.dp = new DriverProvider()
        this.dp.configDriver(conf) // some config here
        this.driver = this.dp.getDriver()
    }

    public getDriver() {
        return this.driver
    }

    public async finishIt() {
        await this.driver.close()
    }
}