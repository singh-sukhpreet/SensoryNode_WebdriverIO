/**
 * sub page containing specific selectors and methods for a specific page
 */

import allureReporter from '@wdio/allure-reporter';
import Utils from '../utilities/common.utils.js';

class Dashboard {
   
    // selectors related to dashboard page
    
    // get getAkeneseText() { return $("//*[contains(text(),'Ake')]"); }
    get getAkeneseText() {
        const selectorAndroid = "//*[@text='Akenese 2']"
        const selectorIOS = "//*[contains(text(),'Akenese')]"
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }

    // get getHamburgerMenu() { return $("//ion-buttons[@slot='start']"); } //ion-buttons[@slot='start']//ion-icon[@slot='icon-only']
    // get getHamburgerMenu() { return $("//ion-buttons[@slot='start']//ion-icon[@slot='icon-only']"); } 
    get getHamburgerMenu() {
        const selectorAndroid = "//android.view.View[1]/android.view.View/android.widget.Button"
        const selectorIOS = '//XCUIElementTypeButton[@name="menu"]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        return $(selector)
    }
    
    get getLogOutBtn() { return $("//*[text()='Logout']"); }
    // get getLogOutBtn() {
    //     const selectorAndroid = "//*[@text='Logout']"
    //     const selectorIOS = '~Tab Bar'
    //     const selector = driver.isAndroid ? selectorAndroid : selectorIOS
    //     return $(selector)
    // }

    get getSignOutBtn() { return $("//*[text()=' Sign Out ']"); }
    // operations related to dashboard page
    
    async verify_akeneseText() {
        allureReporter.addStep('Verifying Akanese Text is visible after login')
        // switching to Native View
        if(driver.isAndroid){
            await Utils.switchContext(0);
        }
        await this.getAkeneseText.waitForDisplayed({ timeout: 20000 });
        browser.takeScreenshot();
        await expect(this.getAkeneseText).toBeDisplayed({ message: 'Login is not successful!', wait: 1000})
        // switching to Web View
        if(driver.isAndroid){
            await Utils.switchContext(1);
        }
    }
    
    async logout() {
        allureReporter.addStep('clicking on Hamburger Menu')
        
            await Utils.switchContext(0);
        
        await this.getHamburgerMenu.waitForDisplayed()
        await this.getHamburgerMenu.click();
        // await browser.pause(8000)
        
            await Utils.switchContext(1);
        
        allureReporter.addStep('clicking on Sign Out Button')
        await this.getLogOutBtn.waitForDisplayed({ timeout: 2000 })
        await this.getLogOutBtn.click()
        allureReporter.addStep('clicking on confirm Sign Out Button')
        await this.getSignOutBtn.waitForDisplayed()
        await this.getSignOutBtn.click()
    }
}

export default new Dashboard();