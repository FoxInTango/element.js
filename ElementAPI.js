import { Element } from './core/Element';
import { ElementTreeWalker } from './core/ElementTreeWalker';
import { UIContext } from './ui/ui';

import { worker_progress } from './modules/worker';

const ELEMENT_UI_TAG = 'ElementUI';

export class ElementAPI extends Element {
    constructor() {
        super();
        this.elementName = 'ElementAPI';
        this.context = new UIContext();

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
         *  按需分配
         */
        this.namespaceMap = new Map();
        this.themeMap = new Map();
        
        this.colorMap = new Map();
        this.gradientMap = new Map();
        this.imageMap = new Map();
        this.spriteMap = new Map();

        this.statusMap = new Map();
        this.styleMap = new Map();
        this.layoutMap = new Map();
        
        this.componentMap = new Map();
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
    boot(option) {
        this.worker = new Worker(
            URL.createObjectURL(new Blob([`(${worker_progress.toString()})()`]))
        );
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

globalThis.ElementJS = new ElementAPI();

export * from './index.js';
export * as default from './index.js';

