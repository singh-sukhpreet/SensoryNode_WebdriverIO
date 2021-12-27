/**
 * This is the helper class which contains common operations to execute on different pages
 */
 import allureReporter from '@wdio/allure-reporter';

class CommonUtilities {
    
    get btnAllow() {
        const selectorAndroid = '//*[@text="ALLOW"] | //*[@text="Allow"]'
        const selectorIOS = '~Allow'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    get btnContinue() {
        const selectorAndroid = '//*[@text="Continue"]'
        const selectorIOS = '~Continue'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    async click_btnAllow() {
        await this.btnAllow.waitForDisplayed({ timeout: 2000 });
        await this.btnAllow.click();
    }

    async click_btnContinue() {
        await this.btnContinue.waitForDisplayed({ timeout: 2000 });
        await this.btnContinue.click();
    }

    async customAllureReporter(id=null, severity=null, issue=null) {
        if(id!=null){
            allureReporter.addTestId(id);
        }
        if(severity!=null){
            allureReporter.addSeverity(severity);
        }
        if(issue!=null){
            allureReporter.addIssue(issue);
        }
    }

    async switchContext(contextId) {
        // Two Contexts are present -  NATIVE_APP,WEBVIEW_nz.co.monkwytronics.sensornode
        // index 0 = NATIVE_APP
        // // index 1 = WEBVIEW_nz.co.monkwytronics.sensornode
        let contexts = await driver.getContexts();
        console.log("All Contexts are: "+ contexts);
        await browser.pause(1000)
        await driver.switchContext(contexts[contextId]);
    }

    randomCharactersGenerator() {
        const characters ='abcdefghijklmnopqrstuvwxyz';
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < 3; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
}
export default new CommonUtilities();