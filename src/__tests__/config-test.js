jest.dontMock('../config.js');
jest.dontMock('../../app/config/client');
jest.dontMock('../../app/config/client/parameters.json');

describe("Testing configuration", function(){
    it("contains debug field", function(){
        var config = require("../config.js");
        expect(config.debug).toBeDefined();
    });
});
