import { Element,ElementAttributes} from '../../core/Element';

export class UIElementAttributes extends ElementAttributes {
    constructor() {
        super();
    }
}
export class UIElement extends Element {
    constructor() {
        this.attributes = new ElementAttributes();
    }
}