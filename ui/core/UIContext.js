var line = {
    name: "line",
    style: ""
}

var path = {}

var rect = {}
export class UIContext {
    constructor() {
        
        this.elements = new Array();
        this.elementMap = new Map();
    }

    appendElement(e) {
        
    }

    insertElement(e,index){

    }

    removeElement(e) {

    }

    /**
     * ����Ԫ�ز�����¼���Ӧ
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