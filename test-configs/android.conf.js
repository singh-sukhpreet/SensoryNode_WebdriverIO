const {config} = require('./base.conf')

config.capabilities = [{
    "platformName": "Android",
    "appium:deviceName": "Emulator",
    "appium:automationName": "UiAutomator2",
    "appium:udid": "emulator-5554",
    "appium:autoGrantPermissions":true,
    "appium:autoWebview"    : true,
    "appium:appPackage": "nz.co.monkwytronics.sensornode",
    "appium:appActivity": "nz.co.monkwytronics.sensornode.MainActivity",
    // "appium:chromeOptions": {'androidPackage': 'com.google.android.gms'},
}]

exports.config = config