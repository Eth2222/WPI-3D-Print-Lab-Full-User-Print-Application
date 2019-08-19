const { Builder, By, Key, util } = require("selenium-webdriver");
var webdriver = require('selenium-webdriver');
/*const { BeforeAll, AfterAll, setWorldConstructor } = require('cucumber');
const seleniumWebdriver = require('selenium-webdriver');
/*
function build_driver() {
    driver = new seleniumWebdriver.Builder()

    setWorldConstructor(World.bind(undefined, driver));
}
*/

var driver = new webdriver.Builder().
withCapabilities(webdriver.Capabilities.chrome()).
build();

function login(driver) {
    /*let driver = new Builder().forBrowser("chrome").build();*/
    var keys = require("C:/Users/eth22/Documents/GitHub/Selenium_JS_webscraping/keys.json")
    try {
        driver.get("https://cloud.3dprinteros.com/printing/");
        driver.findElement(webdriver.By.xpath('//*[@id="signinUsername"]')).sendKeys(keys.username);
        driver.findElement(webdriver.By.xpath('//*[@id="signinPassword"]')).sendKeys(keys.password);
        driver.findElement(webdriver.By.xpath('//*[@id="signIn"]/form/div[4]/input')).sendKeys(Key.ENTER);
        driver.get("https://cloud.3dprinteros.com/printing/");
    } finally {
        return driver;
    }

    /*await driver.wait(webdriver.until.elementLocated(webdriver.By.xpath('//*[@id="host_id_25197"]/div[3]'))) */
}



function sleep(millisecondsToWait) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + millisecondsToWait) {
        /* do nothing; this will exit once it reaches the time limit */
        /* if you want you could do something and exit */
    }
}

function remove_objects(driver) {
    try {
        driver.wait(function() {
            return driver.executeScript('return document.readyState').then(function(readyState) {
                return readyState === 'complete';
            });
        });
        driver.findElement(webdriver.By.xpath('//*[text()[contains(.,"anavarroaguayo@wpi.edu")]]'));
    } finally {
        driver.quit
    }
}


login(driver);
sleep(1000);
remove_objects(driver);