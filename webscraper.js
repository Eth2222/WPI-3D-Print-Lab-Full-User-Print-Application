const { Builder, By, Key, util } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
let driver;
const { BeforeAll, AfterAll, setWorldConstructor } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');

function build_driver() {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('chrome')
        .build();
    setWorldConstructor(World.bind(undefined, driver));
}


function World(driver) {
    this.driver = driver;
}

async function login(driver) {
    /*let driver = new Builder().forBrowser("chrome").build();*/
    var keys = require("C:/Users/eth22/Documents/GitHub/Selenium_JS_webscraping/keys.json")
    try {
        await driver.get("https://cloud.3dprinteros.com/printing/");
        await driver.findElement(webdriver.By.xpath('//*[@id="signinUsername"]')).sendKeys(keys.username)
        await driver.findElement(webdriver.By.xpath('//*[@id="signinPassword"]')).sendKeys(keys.password)
        await driver.findElement(webdriver.By.xpath('//*[@id="signIn"]/form/div[4]/input')).sendKeys(Key.ENTER)
        await driver.get("https://cloud.3dprinteros.com/printing/");
    } finally {
        return driver;
    }

    /*await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="host_id_25197"]/div[3]'))) */
}

function remove_objects(driver) {
    driver.findElement(webdriver.By.xpath('//*[text()[contains(.,"anavarroaguayo@wpi.edu")]]'))
    driver.quit
}

function sleep(millisecondsToWait) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + millisecondsToWait) {
        /* do nothing; this will exit once it reaches the time limit */
        /* if you want you could do something and exit */
    }
}

function main() {

    driver = build_driver;
    /*driver = login(driver);*/
    sleep(1000);
    remove_objects(driver);
}

main();