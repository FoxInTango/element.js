import { Element } from './core/Element';
import { ElementTreeWalker } from './core/ElementTreeWalker';
import { UIContext } from './ui/UIContext';
import { UIElement } from './ui/UIElement';
import { UIView } from './ui/UIView';
import { UIComponent } from './ui/UIComponent';
import { UILayout } from './ui/UILayout';
import { UIColor } from './ui/UIColor';
import { UIStyle   } from './ui/UIStyle';
import { UIStatus } from './ui/UIStatus';

const ELEMENT_UI_TAG = 'ElementUI';

class DOMEventHandler {
    constructor(s) {
        this.onclick     = s.onclick;
        this.onmousemove = s.onmousemove;
        this.onmouseup = s.onmouseup;

        this.on_componentEvent = s.on_componentEvent;
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
        } else {
            console.log('no element with id: ' + id);
        }
    }
}

/** windows.URL 
 * https://blog.csdn.net/weixin_51157081/article/details/124848203
 */

export class ElementAPI extends Element {
    constructor() {
        super();
        this.elementName = 'ElementAPI';
        this.componentMap = new Map();
        this.componentMap.set('EL:SOMETHING', "SOMETHING");
    }

    set components(options) {

    }

    get components() {
        return ELEMENT_API_COMPONENT_MAP;
    }
    /**
     * 环境注册
     */
    appendContext() { }
    removeContext() { }
    /**
     * 组件注册
     */
    
    appendComponent(component) { }
    removeComponent(component) { }
    /**
     *  初始化
     */
    boot() {
        var e = new Element();
        var a = new UIElement();

        var handler = new DOMEventHandler(
            {
                onclick: function buttonClicked(event) {
                    document.getElementById("sometext").innerHTML = "button clicked. event:" + event.srcElement.id//JSON.stringify(event);
                    console.log(event);
                },
                onmousemove: function buttonMouseMoved(event) {
                    console.log(event);
                }
            });

        handler.listen('buttonA');
        handler.listen('buttonC');
        var color = new UIColor(100, 200, 100, 255);
        this.loadUI();
    }

    handleElement(node, index, parent) {
        /** 过滤无效节点
         */
        if (node.nodeName === '#text' || node.nodeName == '#comment') { return; }
        //console.log(node.nodeName);
        /** 处理组件
         */
        if (this.componentMap.has(node.nodeName)) {
            console.log("COMPONENT EXIST : " + this.componentMap.get(node.nodeName));
            if (parent) {
                console.log('    with parent : ' + parent.nodeName);
            }
        } else {
            console.log('类型: ' + node.nodeName + '    ' + node.nodeType + '    id: ' + node.id + '    width : ' + node.getAttribute("width") + '    anyThing: ' + node.getAttribute("anyThing"));
            if (parent) {
                console.log('    with parent : ' + parent.nodeName);
            }
        }
    }

    loadUI() {
        var frames = document.querySelectorAll(ELEMENT_UI_TAG);
        var walker = new ElementTreeWalker(this);
        if (frames) {
            for (var i = 0; i < frames.length; i++) {
                walker.walk(frames[i], null, null);
            }
        }
    }
}

export * from './index.js';
export * as default from './index.js';