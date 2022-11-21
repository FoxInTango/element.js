export class Element {

/** interface
 *  
 */

    constructor() {
        this.master = this;
        this.id = null;
        this.namespace = 'element'
        this.elementName = 'element';
        this.subelements = new Array();
    }
    /**
     * option : attribute name or attribute object 
     *          attribute - "name@[namespace]"
     */
    setAttribute(option) {

    }
}
