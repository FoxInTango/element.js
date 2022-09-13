import { Element } from "../core/Element";

const ELEMENT_STATUS_NORMAL = '';

const ELEMENT_UI_STATUS_NORMAL = 0b0000000;
const ELEMENT_UI_STATUS_HITED = '';
const ELEMENT_UI_STATUS_MOUSE_HAVOR = '';
const ELEMENT_UI_STATUS_MOUSE_DOWN = '';

export class UIElementAttributes {

}

export class UIElement extends Element {

    /** interface
     *
     */

    constructor() {
        super();
        this.expectedAttributes = new UIElementAttributes();
        this.name = 'ELEMENT'
        this.components  = new Map();
        this.attachments = new Map();
        this.subelements = new Array();

        this.statusMap = new Map();

        this.style  = null;
        this.status = null;
        this.layout = null;

        this.eventHandlers = new Array();

        this._boundingBox = null;
        this._clipRegion = null;
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
