import { JsonReader } from '../provider/JsonReader';
import { TheInternet } from '../pages/TheInternet';
import { BaseTest } from '../base/BaseTest';
import assert from "assert";
let page: TheInternet
let base: BaseTest

describe('run browser and look something on google', () => {
    before('before run...', async () => {
        base = new BaseTest()
        base.init(new JsonReader().getBrowserConfigObject())
        page = new TheInternet(base.getDriver())
        page.navigate()
    })

    it('test started. Open google and look...', async () => {
        assert.equal(page.getHeaderText(), 'Welcome to the-internet')
        page.clickOnABTestingLink()
    })

    after('close browser and finish testing...', async () => {
        await base.finishIt()
    })
})