import * as global from './Global.js';
export class String {
    constructor(value) {
        if (typeof value !== global.DATA_TYPE_STRING) {
            throw new TypeError(`type error: ${value}`);
        }

        this._value = value;
    }

    static empty() {
        return global.EMPTY_STRING;
    }

    static isEmpty(value) {
        return (typeof value === global.DATA_TYPE_STRING && value === global.EMPTY_STRING) ? true : false;
    }

    get value() {
        return this._value;
    }

    get length() {
        return this._value.length;
    }
}