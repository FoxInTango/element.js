import { UIElement, UIElementAttributes } from './UIElement';

export class UITextRangeAttributes extends UIElementAttributes {
    constructor() {
        super();
    }
}
export class UITextRange extends UIElement {
    constructor() {
        super('super');
        if (arguments.length != 0 && arguments[0] === 'super') { console.log('Element.js::super call.'); return; }
        else this.attributes = new UITextRangeAttributes();
    }
}