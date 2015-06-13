export default class Currency {
    private _name: string;
    construct(name: string){
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
    isEqual(other: Currency): boolean{
        return other.name === this.name;
    }
};
