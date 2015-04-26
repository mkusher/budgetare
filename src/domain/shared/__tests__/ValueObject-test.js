
describe("ValueObject", function(){
    var ValueObject = require("../ValueObject.js");
    //it("creates private field for value", function(){
        //var value = "testValue";
        //var vo = new ValueObject(value);
        //expect(Object.getOwnPropertyNames(vo).length).to.equal(0);
    //});
    it("saves passed value", function(){
        var value = "someTestValue";
        var vo = new ValueObject(value);
        expect(vo.get()).to.equal(value);
    });
    it("saves variable by value", function(){
        var value = {
            test: "string"
        };
        var vo = new ValueObject(value);
        expect(vo.get()).not.to.equal(value);
    });
    it("don't mutates on passed value change", function(){
        var value = {
            "test": "string"
        };
        var vo = new ValueObject(value);
        value.test = "not same string";
        expect(vo.get()).not.to.equal(value);
    })
    it("is immutable", function(){
        var value = {
            test: "string"
        };
        var vo = new ValueObject(value);
        vo.get().test = "not same string";
        expect(vo.get()).to.deep.equal(value);
    });
    it("has private non-static property for value", function(){
        var value1 = "some test string 1",
            value2 = "some test string 2";
        var vo1 = new ValueObject(value1),
            vo2 = new ValueObject(value2);
        expect(vo1.get()).not.to.deep.equal(vo2.get());
    });
    it("creates copy when ValueObject is passed as value", function(){
        var vo1 = new ValueObject("myTest1"),
            vo2 = new ValueObject(vo1);
        expect(vo2.get()).to.deep.equal(vo1.get());
    });
})
