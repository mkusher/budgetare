import _ from "lodash"

let privateContainer = new WeakMap;

/**
 * Immutable data structure for working with simple Value Objects
 *
 * @constructor
 */
export default class ValueObject{
    constructor(value){
        if(value instanceof ValueObject){
            privateContainer.set(this, value.get())
        }
        else {
            privateContainer.set(this, _.cloneDeep(value));
        }
    }
    get(){
        return _.cloneDeep(privateContainer.get(this));
    }
}
