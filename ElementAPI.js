import { Element   } from './core/Element' ;
import { UIElement } from './ui/UIElement' ;
import { UILayout  } from './ui/UILayout';
import { UIStyle   } from './ui/UIStyle';
import { UIStatus  } from './ui/UIStatus';

class DOMEventHandler {
    constructor(s) {
        this.onclick = s.onclick;
        this.onmousemove = s.onmousemove;
    }

    listen(id) {
        var e = document.getElementById(id);
        e.onclick = this.onclick;
        e.onmousemove = this.onmousemove;
    }
}

window.onload = function () {
    var e = new Element();
    var a = new UIElement();
    var handler = new DOMEventHandler(
        {
        onclick: function buttonClicked(event) {
            document.getElementById("sometext").innerHTML = "button clicked. event:" + JSON.stringify(event);
            console.log(event);
        },
        onmousemove: function buttonMouseMoved(event, x, y) {
            console.log(event);
            console.log("x: " + event.x + " y; " + event.y);
        }
    });
    handler.listen('buttonA');

    console.log(window);
}

//export * from '';
//export * as default from '';

export class ElementAPI {
/**
 * 组件注册
 */
    
}
