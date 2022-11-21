import { UIElement, UIElementAttributes } from './UIElement';

/**
 * 
 */
export class UITextAttributes extends UIElementAttributes {
    constructor() {
        this.ranges = new Array();
    }
}
export class UIText extends UIElement {
    constructor() {
        super('super');
        if (arguments.length != 0 && arguments[0] === 'super') { console.log('Element.js::super call.'); return; }
        else this.attributes = new UITextAttributes();
    }
}