export class ElementAttributes {
    constructor() {
        this.master = this;
        this.id = null;
        this.elementName = 'element';
        this.subelements = new Array();
    }
}
export class Element {

/** interface
 *  
 */

    constructor() {
        this.attributes = new ElementAttributes();
    }
    /**
     * option : attribute name or attribute object 
     *          attribute - "name@[namespace]"
     */
    setAttribute(option) {

    }
}
