import { Context } from '../../core/Context';

var line = {
    name: "line",
    style: ""
}

var path = {}

var rect = {}
export class UIContext extends Context {
    constructor() {
        super();
        this.elements = new Array();
        this.elementMap = new Map();
    }

    boot(option) {
        super.boot(option);
    }
    appendElement(e) {
        
    }

    insertElement(e,index){

    }

    removeElement(e) {

    }

    /**
     * 绘制元素并添加事件响应
     */
    render(e) {
        switch (e.name) {

        }
    }

    /** drawing
     * 
     */
    clear() { }
    clearRect() { }
    setClip() { }
    setLineStyle() { }
    drawLine()  { }
    drawPath()  { }
    drawText()  { }
    drawImage() { }

    fill() { }

    stroke() { }

    /** event
     * 
     */


}