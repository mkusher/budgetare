describe("index test", function(){
    it("runs application", function(){
        var App = require("../app.js");
        var spy = sinon.spy(App.prototype, "run");
        var app = require("../index.js");
        expect(spy).to.have.been.calledWith();
    });
});
