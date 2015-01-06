jest.dontMock('../index.js');

describe("index test", function(){
    it("logs a 'hello world' message to console", function(){
        var index = require("../index.js");
        var console = require("console");

        index();
        expect(console.log).toBeCalledWith("hello world!");
    });
});
