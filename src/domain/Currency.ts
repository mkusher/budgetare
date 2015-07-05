export default class Currency {
    private _name: string;
    constructor();
    constructor(name: string);
    constructor(name?: string){
        name = name || "USD";
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    isEqual(other: Currency): boolean{
        return other.name === this.name;
    }
};
