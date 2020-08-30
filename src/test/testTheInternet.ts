import { JsonReader } from '../provider/JsonReader';
import { TheInternet } from '../pages/TheInternet';
import { BaseTest } from '../base/BaseTest';
import assert from "assert";
import { ABTesting } from '../pages/ABTesting';

let pageInternet: TheInternet
let pageABtesting: ABTesting
let base: BaseTest

describe('run browser and look something on google', function () {
    before('before run...', async () => {
        base = new BaseTest()
        base.init(new JsonReader().getBrowserConfigObject())
        pageInternet = new TheInternet(base.getDriver())
        pageABtesting = new ABTesting(base.getDriver())

    })

    it('TS#1 - Open TheInternet page and check heading...', async () => {
        await pageInternet.navigate()
        let header = await pageInternet.getHeaderText()
        assert.equal(header, 'Welcome to the-internet')
    })

    it('TS#2 - Go to A/B Testing page and check heading...', async () => {
        await pageInternet.navigate()
        await pageInternet.clickOnABTestingLink()
        let header = await pageABtesting.getHeaderText()
        assert.equal(header, 'A/B Test Control')
    })

    after('close browser and finish testing...', async () => {
        await base.finishIt()
    })
})