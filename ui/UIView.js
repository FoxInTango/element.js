import { UIElement } from "./UIElement";

{
    frame: {
        x, y, w, h
    }
}

/**
 * UIView ������ͼ
 */
class UIView extends UIElement {
    constructor(options) {
        super();
        this.viewRoot = this;

    }
}