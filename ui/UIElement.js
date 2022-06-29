import { Element } from "../core/Element";

export class UIElement extends Element {

    /** interface
     *
     */

    constructor() {
        super();
        this.subelements   = new Map();
        this.eventHandlers = null;
    }

    setAttribute(target, options) {

    }

    getAttribute(name) {

    }
}
