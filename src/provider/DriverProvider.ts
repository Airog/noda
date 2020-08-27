import { Builder, WebDriver } from 'selenium-webdriver'
import 'selenium-webdriver/chrome'
import 'selenium-webdriver/firefox'
import { IDriverConfig } from '../config/IDriverConfig';

export class DriverProvider{

  conf!: IDriverConfig
  public configDriver(conf: IDriverConfig) {
    this.conf = conf
  }

    public getDriver(): WebDriver {
        return new Builder()
        .forBrowser(this.conf.driverName)
        .build()
      }
}