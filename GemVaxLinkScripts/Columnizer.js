const columnRuleValues = [
    'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'initial', 'inherit'
];

const columnWidthValues = [
    'auto', 'initial', 'inherit'
];

const columnRuleWidthValues = [
    'medium', 'thin', 'thick', 'initial', 'inherit'
];

export class Columnizer {
    constructor(element) {
        // private fields
        this._element = element;

        if (this._element.hasAttribute('style') === false) {
            this._element.setAttributeNode(document.createAttribute('style'));
        }
    }

    /**
    * 열 넓이를 설정합니다.
    * @param {any} value
    */
    set columnWidth(value) {
        if (typeof value !== 'string' && typeof value !== 'number')
            throw new TypeError(`type error: ${value}`);

        if (typeof value === 'string') {
            if (!columnWidthValues.includes(value))
                throw new Error(`argument error: ${value}`);

            this._element.style.columnWidth = `${value}`;
        }
        else {
            this._element.style.columnWidth = `${value}px`;
        }
    }

    set columnRuleStyle(value) {
        if (typeof value !== 'string')
            throw new TypeError(`type error: ${value}`);

        if (!columnRuleValues.includes(value))
            throw new Error(`argument error: ${value}`);

        this._element.style.columnRuleStyle = `${value}`;
    }

    set columnRuleWidth(value) {
        if (typeof value !== 'string' && typeof value !== 'number')
            throw new TypeError(`type error: ${value}`);

        if (typeof value === 'string') {
            if (!columnRuleWidthValues.includes(value)) 
                throw new Error(`argument error: ${value}`);

            this._element.style.columnRuleWidth = `${value}`;            
        }
        else {
            this._element.style.columnRuleWidth = `${value}px`;
        }
    }

    set columnRuleColor(value) {
        if (typeof value !== 'string')
            throw new TypeError(`type error: ${value}`);

        this._element.style.columnRuleColor = `${value};`;
    }

    set columnFill(value) {
        if (typeof value === 'string') {
            this._element.style.columnFill = `${value};`;
        }
    }

    set columnGap(value) {
        if (typeof value === 'string') {
            this._element.style.columnGap = `${value};`;
        }
        else {
            this._element.style.columnGap = `${value}px`;
        }
    }
}