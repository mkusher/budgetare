var support = require("../support/world.js");

module.exports = function (){
    this.World = support.World;
    this.registerHandler('AfterFeatures', function (event, callback) {
        support.quit();
        callback();
    });
};
