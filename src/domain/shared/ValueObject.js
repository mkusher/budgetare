import _ from "lodash"

let privateContainer = new WeakMap;

/**
 * Immutable data structure for working with simple Value Objects
 *
 * @constructor
 */
export default class ValueObject{
    constructor(value){
        let valueProp = Symbol();
        if(value instanceof ValueObject){
            privateContainer.set(valueProp, value.get())
        }
        else {
            privateContainer.set(valueProp, _.cloneDeep(value));
        }
        this.valueProp = valueProp;
    }
    get(){
        return _.cloneDeep(privateContainer.get(this.valueProp));
    }
}
