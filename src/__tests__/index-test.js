jest.dontMock('../index.js');

describe("index test", function(){
    it("creates application object", function(){
        var app = require("../index.js"),
            App = require("../app.js");
        expect(App).toBeCalled();
    });
    it("runs application", function(){
        var app = require("../index.js"),
            App = require("../app.js");
        expect(app.run).toBeCalled();
    });
});
