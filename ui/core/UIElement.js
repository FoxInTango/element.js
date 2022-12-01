import { Element,ElementAttributes} from '../../core/Element';

export class UIElementAttributes extends ElementAttributes {
    constructor() {
        super(0);
        this.hidden = false;
        this.visiable = true;
        this.zIndex = 0;
    }
}
export class UIElement extends Element {
    constructor() {
        super('super');
        if (arguments.length != 0 && arguments[0] === 'super') { console.log('UIElement.js::super call.'); return; }
        else this.attributes = new UIElementAttributes();
    }
}