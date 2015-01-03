require("babel-polyfill");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);
global.expect = chai.expect;
global.sinon = sinon;
global.document = {
    "addEventListener": function(){},
    "getElementById": function(){}
};
global.window = {};
