import { UIElement } from "./UIElement";

/**
{
    frame:{
        x, y, w, h
    },
    layout : {
    },
    backgroud:{
    },
    status :[
        normal : {}
    ]
}
*/
/**
 * UIView ������ͼ
 *   frame
 *   border
 *   backgroud
 *   margin
 *   layout
 *   status
 *   
 */
export class UIView extends UIElement {
    constructor(options) {
        super();
        this.master = this;
        this.elementName = 'UIView';
        

    }
}