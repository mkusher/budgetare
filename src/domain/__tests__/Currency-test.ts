/// <reference path="../../../typings/mocha/mocha.d.ts" />
/// <reference path="../../__types__/expect.d.ts" />
import Currency from '../Currency';

describe("Currency", () => {
    it("has default currency USD", () => {
        var c = new Currency;
        expect(c.name).to.equal("USD");
    });
    it("takes name as first argument", () => {
        var c = new Currency("EUR");
        expect(c.name).to.equal("EUR");
    });
    describe("isEqual()", () => {
        it("returns true for the same currency object", () => {
            let c = new Currency;
            expect(c.isEqual(c)).to.be.true;
        });
        it("returns true for currencies with the same name", () => {
            let c = new Currency("EUR"),
                c2 = new Currency("EUR");
            expect(c.isEqual(c2)).to.be.true;
        });
        it("returns false for different currencies names", () => {
            let c1 = new Currency("GBP"),
                c2 = new Currency("EUR");
            expect(c1.isEqual(c2)).to.be.false;
        })
    })
});
