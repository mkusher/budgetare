
describe("Money", function(){
    var Money = require("../Money.js");
    it("takes amount as first argument", function(){
        var m = new Money(10);
        expect(m.amount).to.equal(10);
    });
    it("takes currency as second argument", function(){
        var m = new Money(0, "EUR");
        expect(m.currency).to.equal("EUR");
    });
    it("has default value of amount equals 0", function(){
        var m = new Money();
        expect(m.amount).to.equal(0);
    });
    it("has default value of currency equals USD", function(){
        var m = new Money();
        expect(m.currency).to.equal("USD");
    });
    describe("add()", function(){
        it("works for same currency", function(){
            var m1 = new Money(20),
                m2 = new Money(40);
            expect(m1.add(m2).amount).to.equal(60);
        });
        it("returns new object", function(){
            var m1 = new Money(),
                m2 = new Money();
            expect(m1.add(m2)).not.to.equal(m1);
            expect(m1.add(m2)).not.to.equal(m2);
        });
    });
    describe("subtract()", function(){
        it("works for same currency", function(){
            var m1 = new Money(40),
                m2 = new Money(20);
            expect(m1.subtract(m2).amount).to.equal(20);
        });
        it("returns new object", function(){
            var m1 = new Money(),
                m2 = new Money();
            expect(m1.subtract(m2)).not.to.equal(m1);
            expect(m1.subtract(m2)).not.to.equal(m2);
        });
    });
    describe("convertTo()", function(){
        it("converts by strategy", function(){
            var m1 = new Money(5);
            var doublerStrategy = function(){
                return 2;
            };
            expect(m1.convertTo("TEST", doublerStrategy).amount)
                .to.equal(doublerStrategy() * m1.amount);
        });
    });
});
