const { Builder, By, Key, util } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
async function example(username, password) {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://cloud.3dprinteros.com");
    await driver.findElement(webdriver.By.xpath('//*[@id="signinUsername"]')).sendKeys(username)
    driver.findElement(webdriver.By.xpath('//*[@id="signinPassword"]')).sendKeys(password)
    await driver.findElement(webdriver.By.xpath('//*[@id="signIn"]/form/div[4]/input')).sendKeys(Key.ENTER)
    await driver.quit()
}

function setup() {
    var keys = require("C:/Users/eth22/Documents/GitHub/Selenium_JS_webscraping/keys.json")
    example(keys.username, keys.password)
}

setup();