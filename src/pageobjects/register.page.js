/**
 * sub page containing specific selectors and methods for a specific page
 */
import allureReporter from '@wdio/allure-reporter';
import Utils from '../utilities//common.utils.js';

class Register {
    /**
     * define selectors using getter methods
    */

    get registerTab() { return $("//ion-segment-button[@value='register']"); }

    // get registerBtn() { return $("//ion-button"); }
    get registerBtn() {
        const selectorAndroid = '//android.view.View[5]/android.widget.Button'
        const selectorIOS = '(//XCUIElementTypeButton[@name="Register"])[2]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        $(selector).waitForDisplayed({ timeout: 3000 });
        return $(selector)
    }
    
    get getRegisterLogo() { return $("//img[@alt='key']"); }

    get inputUsername() { return $("//input[@name='preferred_username']"); }

    get inputRegisterEmail() { return $("//input[@name='email']"); }

    get inputPassword() { return $("//input[@name='password']"); }

    get inputConfirmPassword() { return $("//input[@name='passwordConfirm']"); }

    // get confirmationString() { return $('//*[@text="We\'ve emailed you a confirmation link."]'); }
    get confirmationString() {
        const selectorAndroid = '//*[@text="We\'ve emailed you a confirmation link."]'
        const selectorIOS = '//XCUIElementTypeStaticText[@name="We\'ve emailed you a confirmation link."]'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        $(selector).waitForDisplayed({ timeout: 3000 });
        return $(selector)
    }

    async userRegisteration(randomUsername,randomEmail,password) {
        await this.registerTab.click()
        allureReporter.addStep('Enter User Details')
        await this.inputConfirmPassword.setValue(password);
        await this.inputUsername.setValue(randomUsername);
        await this.inputRegisterEmail.setValue(randomEmail);
        await this.inputPassword.setValue(password);
        // await driver.hideKeyboard();
        // switching to Native Mode
        Utils.switchContext(0)
        await this.registerBtn.click();
        
        await this.confirmationString.waitForDisplayed();
        let confirmString = await this.confirmationString.getText()
        console.log("str: "+ confirmString)
        await chaiExpect(confirmString).to.be.equal("We've emailed you a confirmation link.")
        // expect(await this.confirmationString.getText()).toHaveTextContaining("We've emailed you a confirmation link.")
        // switching to Web Mode
        browser.takeScreenshot();
        Utils.switchContext(1)
    }
}

export default new Register()
