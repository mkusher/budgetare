var webdriver = require("selenium-webdriver");

var browser = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();

exports.World = function World(callback){
    this.browser = browser;
    this.by = webdriver.By;
    callback()
};

exports.quit = function(){
    browser.quit();
};
