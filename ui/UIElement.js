import { Element } from "../core/Element";

const ELEMENT_STATUS_NORMAL = '';
export class UIElement extends Element {

    /** interface
     *
     */

    constructor() {
        super();
        this.components  = new Map();
        this.attachments = new Map();
        this.subelements = new Array();

        this.style = null;
        this.status = null;

        this.eventHandlers = null;
    }

    setAttribute(target, options) {

    }

    getAttribute(name) {

    }
}
