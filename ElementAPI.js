import { Element } from './core/Element';
import { ElementTreeWalker } from './core/ElementTreeWalker';

import { UIContext } from './ui/ui';
import { UIElement } from './ui/ui';
import { UIComponent } from './ui/ui';

import { UITheme } from './ui/ui';

import { worker_progress } from './modules/worker';
import { Namespace } from './core/Namespace';
import { Module } from './core/Module';

export class ElementAPI extends Element {
    constructor() {
        super();
        this.elementName = 'ElementAPI';
        this.context = new UIContext();
        this.moduleMap = new Map();

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
        this.namespaceMap.set('default', new Namespace());
        //this.namespaceMap['default'] = new Namespace();
        console.log('ElementJS default namespace.');
        console.log(this.namespaceMap.get('default'));

        this.namespaceMap.forEach((val, key) => {
            console.log('namespace ' + key);
            console.log(val);
        });

        /**
        this.themeMap = new Map();
        
        this.colorMap = new Map();
        this.gradientMap = new Map();
        this.imageMap = new Map();
        this.spriteMap = new Map();

        this.statusMap = new Map();
        this.styleMap = new Map();
        this.layoutMap = new Map();
        
        this.componentMap = new Map();
        */
    }
    /**
     * option:{name:'',namespace:namespaceObj}
     */
    setNamespace(option) {
        if (option.namespace) {
            
        }
    }
    getNamespace(name) { return this.namespaceMap.get(name); }

    /**
     * option:{namespace:'',name:'',theme:themObj}
     */
    setTheme(option) { }
    getTheme(name) { }
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
        this.bootWorker();
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

    bootWorker() {
        this.worker = new Worker(
            URL.createObjectURL(new Blob([`(${worker_progress.toString()})()`]))
        );
    }

    loadUI() {
        
    }

    loadModules(path) { }
}

ElementAPI.Element = Element;
ElementAPI.UIElement = UIElement;
ElementAPI.UIComponent = UIComponent;
ElementAPI.UIContext = UIContext;

export * from './index.js';
export * as default from './index.js';

globalThis.ElementJS = new ElementAPI();

