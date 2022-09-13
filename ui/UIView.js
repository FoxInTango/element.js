import { UIElement } from "./UIElement";

{
    frame: {
        x, y, w, h
    }
}

/**
 * UIView »ù´¡ÊÓÍ¼
 */
class UIView extends UIElement {
    constructor(options) {
        super();
        this.viewRoot = this;

    }
}