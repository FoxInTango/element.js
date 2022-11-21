import { Element,ElementAttributes} from '../../core/Element';

export class UIElementAttributes extends ElementAttributes {
    constructor() {
        super();
        this.zIndex = 0;
    }
}
export class UIElement extends Element {
    constructor() {
        super();
        this.attributes = new UIElementAttributes();
    }
}