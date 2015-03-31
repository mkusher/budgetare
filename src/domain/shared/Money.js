import ValueObject from "./ValueObject.js"

let privateContainer = new WeakMap;

function set(object, field, value){
    privateContainer.get(object)[field] = value;
}
function get(object, field){
    return privateContainer.get(object)[field];
}

export default class Money{
    constructor(amount=0, currency="USD"){
        if(amount instanceof Money){
            currency = amount.currency;
            amount = amount.amount;
        }
        privateContainer.set(this, {});
        set(this, "amount", amount);
        set(this, "currency", currency);
    }
    get amount(){
        return get(this, "amount");
    }
    get currency(){
        return get(this, "currency");
    }
    add(term){
        if(term.currency === this.currency){
            return new Money(this.amount + term.amount, this.currency);
        }
    }
    subtract(subtrahend){
        if(subtrahend.currency === this.currency){
            return new Money(this.amount - subtrahend.amount, this.currency);
        }
    }
    convertTo(currency, strategy){
        return new Money(this.amount * strategy(this.currency, currency), currency);
    }
}
