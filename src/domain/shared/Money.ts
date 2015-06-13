import Currency from './Currency';

export default class Money{
    private _amount: number;
    private _currency: Currency;
    constructor(amount: any, currency?: Currency){
        if(amount instanceof Money){
            currency = amount.currency;
            amount = amount.amount;
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
    add(term: Money){
        if(term.currency.isEqual(this.currency)){
            return new Money(this.amount + term.amount, this.currency);
        }
    }
    subtract(subtrahend: Money){
        if(subtrahend.currency.isEqual(this.currency)){
            return new Money(this.amount - subtrahend.amount, this.currency);
        }
    }
}
