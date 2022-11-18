export class Element {

/** interface
 *  
 */

    constructor() {
        this.master = this;
        this.elementName = 'element';
        this.subelements = new Array();

        /** Asset Map
         *  UIColor
         *  UIGradient
         *  UIImage
         *  UIImageSlice
         *  UIStyle
         *  UILayout
         *  UIStatus
         *  UITheme
         *  
         *  UIComponents
         *  
         *  ∞¥–Ë∑÷≈‰
         */
        this.assetMap = null;// new Map();
        this.colorMap = null;//new Map();
        this.imageMap = null;//new Map();
        this.gradientMap = null;//new Map();
        this.imageSliceMap = null;//new Map();
        this.styleMap = null;//new Map();
        this.layoutMap = null;//new Map();
        this.statusMap = null;//new Map();
        this.themeMap = null;//new Map();

        this.namespaceMap = null;
    }
    /**
     * option : attribute name or attribute object 
     *          attribute - "name@[namespace]"
     */
    setAttribute(option) {

    }
}
