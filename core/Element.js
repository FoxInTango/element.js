function walk_element(node, callback, parent) {
    //callback(node, 0, null);
    /**
    node.childNodes.forEach(
        function (subnode, index, subnodes) {
            callback(subnode, index, node);
            walk_element(subnode, callback, parent);
        }
    );
    */

    for (var i = 0; i < node.childNodes.length; i++) {
        var subnode = node.childNodes[i];
        callback(subnode, i, node);

        walk_element(subnode, callback, node);
    }
}

/** callback(current node, current index,current parent) */
export class ElementTreeWalker {
    constructor(handler) {
        this.handler = handler;
        this.name = 'ElementTreeWalker';
    }

    walk(node, handler) {
        let h = handler ? handler : this.handler;
        for (var i = 0; i < node.childNodes.length; i++) {
            var subnode = node.childNodes[i];
            h.handleElement(subnode, i, node);
            this.walk(subnode, h);
        }
    }
};


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
        if (arguments.length != 0 && arguments[0] === 'super') { console.log('Element.js::super call.'); return; }
        else this.attributes = new ElementAttributes();

        this.application = null;//
    }
    /**
     * option : attribute name or attribute object 
     *          attribute - "name@[namespace]"
     */
    setAttribute(option) {

    }

    getAttribute(option) { }

    set elementName(name) {
        if (this.attributes) this.attributes.elementName = name;
    }

    get elementName() { return this.attributes ? this.attributes.name : null; }
}
