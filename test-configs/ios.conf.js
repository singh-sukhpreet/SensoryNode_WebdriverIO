const {config} = require('./base.conf')

config.capabilities = [{
    "platformName": "iOS",
    "appium:deviceName": "iPhone 11 Pro",
    // iphone 11 pro udid's 
    "appium:udid": "9953473F-FE95-4451-B112-B4212D240425",
    "appium:automationName": "XCUITest",
    "appium:autoAcceptAlerts": true,
    "appium:autoWebview"    : true,
    // "appium:app": "/Users/sukhpreetsingh/learning/cyntronicsApp/app/SensorNode.app",
    "appium:bundleId": "nz.co.monkeytronics.sensor-node",
}]

exports.config = config