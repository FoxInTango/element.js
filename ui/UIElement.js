import { Element } from "../core/Element";

const ELEMENT_STATUS_NORMAL = '';

const ELEMENT_UI_STATUS_NORMAL = 0b0000000;
const ELEMENT_UI_STATUS_HITED = '';
const ELEMENT_UI_STATUS_MOUSE_HAVOR = '';
const ELEMENT_UI_STATUS_MOUSE_DOWN = '';

export class UIElementAttributes {

}

export class UIElementModel {
    constructor() {
    }
}

export class UIElement extends Element {

    /** interface
     *
     */

    constructor(context) {
        super();
        this.elementName = 'UIElement'
        this.id = null;
        this.components  = new Map();
        this.attachments = new Map();

        this.statusMap = new Map();

        this.eventHandlers = new Array();
    }

    set(options) {

    }

    get(name) {

    }

    set status(option) { return this; }
    get status() { return this.status; }

    set boundingBox(box) { this.boundingBox = box; }
    get boundingBox() { return this.boundingBox; }
}
