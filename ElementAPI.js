import { Element   } from './core/Element' ;
import { UIElement } from './ui/UIElement' ;
import { UILayout  } from './ui/UILayout';
import { UIStyle   } from './ui/UIStyle';
import { UIStatus } from './ui/UIStatus';


const ELEMENT_UI_TAG = 'ElementUI';

class DOMEventHandler {
    constructor(s) {
        this.onclick = s.onclick;
        this.onmousemove = s.onmousemove;
        this.onmouseup = s.onmouseup;
    }

    listen(id) {
        var e = document.getElementById(id);

        if (e) {
            if (this.onclick) {
                e.addEventListener('click', this.onclick);
            } else {
                console.log('this.onclick undefined.');
            }
            if (this.onmousemove) {
                e.addEventListener('mousemove', this.onmousemove);
            } else {
                console.log('this.onmousemove undefined.');
            }

            if (this.onmouseup) {
                e.addEventListener('mouseup', this.onmouseup);
            }
            else {
                console.log('this.onmouseup undefined.');
            }
            //console.log(e.prototype);
        } else {
            console.log('no element with id: ' + id);
        }
    }
}

window.onload = function () {
    var e = new Element();
    var a = new UIElement();
    var handler = new DOMEventHandler(
        {
        onclick: function buttonClicked(event) {
            document.getElementById("sometext").innerHTML = "button clicked. event:" + JSON.stringify(event);
            //console.log(event);
        },
        onmousemove: function buttonMouseMoved(event, x, y) {
            //console.log(event);
            //console.log("x: " + event.x + " y; " + event.y);
        }
        });

    handler.listen('buttonA');
    handler.listen('buttonC');
    //console.log(handler);

    //console.log(window);

    /**
    var element = document.querySelector(ELEMENT_UI_TAG);

    if (element) {
        element.childNodes.forEach(function (n, i, e) {
            if (n.nodeName === '#text') {
                //console.log(n.nodeValue);
            } else {
                console.log('类型: ' + n.nodeName + '    id: ' + n.id + '    width : ' + n.getAttribute("width") + '    anyThing: ' + n.getAttribute("anyThing"));
            }
            
        });
    }
     */

    new ElementAPI().boot();
}

//export * from '';
//export * as default from '';

export class ElementAPI {
    /**
     * 组件注册
     */

    /**
     * 
     */
    boot() {
        var frames = document.querySelectorAll(ELEMENT_UI_TAG);

        if (frames) {
            frames.forEach(function (n, i, f) {
                n.childNodes.forEach(function (node, index, frame) {
                    if (node.nodeName === '#text') {
                        console.log(n.nodeType);
                    } else {
                        console.log('类型: ' + node.nodeType + '    id: ' + node.id + '    width : ' + node.getAttribute("width") + '    anyThing: ' + node.getAttribute("anyThing"));
                    }
                });
            });
        }
    }
}
