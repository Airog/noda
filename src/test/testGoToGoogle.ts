import { BaseTest } from './../base/BaseTest';
import { JsonReader } from './../provider/JsonReader';

export async function testOfTests() {
    let test = new BaseTest()
    test.init(new JsonReader().getBrowserConfigObject())
    test.startProcess()
    await test.goToPage('http://www.google.com')
    console.log('almost done')
    await test.finishIt() //this could be in after method or after method could just check if anything done correctly
}