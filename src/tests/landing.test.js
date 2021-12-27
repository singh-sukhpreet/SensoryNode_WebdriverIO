import LoginPage from  '../pageobjects/login.page.js';
import Dashboard from '../pageobjects/dashboard.page.js';
import {VALID_CREDS, GOOGLE_CREDS} from '../resources/test_data.js'
import Register from '../pageobjects/register.page.js';
import Utils from '../utilities/common.utils.js';


let email, password,randomUsername,randomEmail;
describe(`Landing Page Test cases on ${browser.capabilities.deviceName}` , async () => {
  
    before(() => {
      // Initializing username and password 
       email = VALID_CREDS.email;
       password = VALID_CREDS.password;
       let chargenerator = Utils.randomCharactersGenerator();
       randomEmail = 'test' + chargenerator.trim() + '@gmail.com';
       randomUsername = 'test' + chargenerator.trim()
    })

    it('As a user, I can login with correct credentials', async () => {
      Utils.customAllureReporter('001','blocker', 'issue-01');
      await LoginPage.login(email,password);
      await Dashboard.verify_akeneseText();
    });
    
    it('As a user, I can logout from the application', async () => {
      Utils.customAllureReporter('002','blocker', 'issue-02');
      await Dashboard.logout();
      await expect(LoginPage.getLogo).toBeDisplayed({ message: 'Logo is not displayed on login page!', wait: 1000});
    });

    it('As a customer, I can SingUp using google account', async () => {
      Utils.customAllureReporter('003','blocker', 'issue-03');
      await Register.userRegisteration(randomUsername,randomEmail,password);
    });

})