
describe("Testing configuration", function(){
    it("contains debug field", function(){
        var config = require("../config.js");
        expect(config).to.have.property("debug");
    });
});
