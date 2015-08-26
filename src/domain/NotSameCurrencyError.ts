export default class NotSameCurrencyError implements Error{
    name: string;
    message: string;
    constructor(message?: string){
        this.name = "NotSameCurrencyError";
        this.message = message;
    }
};
