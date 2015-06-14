import Currency from './Currency';
import NotSameCurrencyError from './NotSameCurrencyError';

export default class Money{
    private _amount: number;
    private _currency: Currency;
    constructor();
    constructor(amount: Money);
    constructor(amount: number);
    constructor(amount: number, currency: Currency);
    constructor(amount?: any, currency?: Currency){
        if(amount instanceof Money){
            currency = amount.currency;
            amount = amount.amount;
        }
        if(!amount){
            amount = 0;
        }
        if(!currency){
            currency = new Currency;
        }
        this._amount = amount;
        this._currency = currency;
    }
    get amount(){
        return this._amount;
    }
    get currency(){
        return this._currency;
    }
    add(term: Money): Money{
        if(!term.currency.isEqual(this.currency)){
            throw new NotSameCurrencyError;
        }
        return new Money(this.amount + term.amount, this.currency);
    }
    subtract(subtrahend: Money): Money{
        if(!subtrahend.currency.isEqual(this.currency)){
            throw new NotSameCurrencyError;
        }
        return new Money(this.amount - subtrahend.amount, this.currency);
    }
}
