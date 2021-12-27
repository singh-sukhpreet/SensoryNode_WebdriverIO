/**
 * This page containing specific selectors and methods for a Login page
 */

 import Utils from '../utilities//common.utils.js';
 import allureReporter from '@wdio/allure-reporter';

class LoginPage {
    /**
     * define selectors using getter methods
     */
    // get getLogo() { return $('//android.view.View[3]/android.widget.Image'); }
     get getLogo() { return $("//img[@alt='newKey']"); }

    get inputEmail() { return $("//input[@name='email']"); }
    //  get inputUsername() {
    //     const selectorAndroid = '//android.view.View[1]/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText'
    //     const selectorIOS = '~UserCredentialField'
    //     const selector = driver.isAndroid ? selectorAndroid : selectorIOS
    //     return $(selector)
    // }
    get confirmationString() { return $("//ion-card-content"); }

    get inputPassword() { return $("//input[@name='password']"); }
    // get inputPassword() {
    //     const selectorAndroid = '//android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.EditText'
    //     const selectorIOS = '~PasswordField'
    //     const selector = driver.isAndroid ? selectorAndroid : selectorIOS
    //     return $(selector)
    // }
    
    // get btnSignIn() { return $("//ion-button[@type='submit'] | //ion-button[text()='Sign In'] | //*[contains(@type,'submit')] | //form//ion-button"); }
    get btnSignIn() {
        const selectorAndroid = '//android.view.View[6]/android.view.View[2]/android.widget.Button'
        const selectorIOS = 'ion-button.button-block'
        const selector = driver.isAndroid ? selectorAndroid : selectorIOS
        $(selector).waitForDisplayed({ timeout: 3000 });
        return $(selector)
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async login (username, password) {
        allureReporter.addStep('Wait until the logo on landing page is visisble')
        await this.getLogo.waitForDisplayed();
        allureReporter.addStep(`Input Username as ${username}`)
        await this.inputEmail.waitForDisplayed()
        await this.inputEmail.setValue(username);
        allureReporter.addStep('Input Password')
        await this.inputPassword.setValue(password);
        // switching to Native View
        if(driver.isAndroid){
            await Utils.switchContext(0);
        }
        
        await browser.takeScreenshot();
        allureReporter.addStep('Click Log In Button')
        await this.btnSignIn.click();
        // switching to Web View
        if(driver.isAndroid){
            await Utils.switchContext(1);
        }
    }
}

export default new LoginPage();
