import { Module } from './core/Module';
import { Element } from './core/Element';

import { UIContext } from './ui/ui';
import { UIElement } from './ui/ui';
import { UIComponent } from './ui/ui';

import { Namespace } from './core/Namespace';

export class ElementAPI extends Element {
    constructor() {
        super();
        this.elementName = 'ElementAPI';
        this.context = new UIContext();
        this.moduleMap = new Map();

        /**
         * ['file path']:{content:}
         */
        this.downloadMap = new Map();
        /**
         * ['document file path'] : {node tree}
         */
        this.documentMap = new Map();

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
     *  初始化
     *  option :{
     *      platform:{ host : web|node|...,api:vm | ...}
     *      index:index.xml
     *      modules:['','','']
     *  }
     */
    boot(option) {
        this.context.boot(option);
        if (option.platform == 'web') {
            this.loadUI();
        }
    }
    /**
     * option:{name:'',namespace:namespaceObj}
     */
    appendNamespace(option) {
        if (option.namespace) {
            
        }
    }

    lookupNamespace(name) { return this.namespaceMap.get(name); }

    /**
     * option:{namespace:'',name:'',theme:themObj}
     */
    appendTheme(option) { }
    lookupTheme(name) { }
    /**
     * 组件注册
     */
    
    appendComponent(component) { }
    removeComponent(component) { }
    
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

    //
    loadUI(option) {
        /**
         * switch option type : path | document
         */
    }

    /**
     * option : { path:url | string,handler}
     */
    loadFile(option) {
        if (this.context.platform) {
            this.context.platform.loadFile(option);
        }
    }

    /**
     * option : {content:data,path}
     * 
     * responseXML | 
     */
    handleFile(option) {
        switch (option.type) {
            case 'text/xml': {
                console.log('XHR XML Loaded : ');
                console.log(option.path);
                console.log(option.type);
                console.log(option.content);
            } break;
            case 'application/xml': {
                console.log('XHR XML Loaded : ');
                console.log(option.path);
                console.log(option.type);
                console.log(option.content);
            } break;
            case 'text/json': {
                const obj = JSON.parse(option.content);
                console.log('XHR JSON Loaded');
                console.log(option.path);
                console.log(option.type);
                console.log(option.content);
            } break;
            case 'application/json': {
                const obj = JSON.parse(option.content);
                console.log('XHR JSON Loaded');
                console.log(option.path);
                console.log(option.type);
                console.log(option.content);
            } break;
            case 'audio/mpeg': {
                console.log('XHR AUDIO Loaded');
                console.log(option.path);
                console.log(option.type);
            } break;
            case 'image/png': {
                console.log('XHR IMAGE Loaded');
                console.log(option.path);
                console.log(option.type);
            } break;
            case 'image/jpeg': {
                console.log('XHR IMAGE Loaded');
                console.log(option.path);
                console.log(option.type);
            } break;
            case 'application/javascript': {
                console.log('XHR SCRIPT Loaded');
                console.log(option.path);
                console.log(option.type);
            } break;
            default: break;
        }
    }
}

ElementAPI.Element = Element;
ElementAPI.UIElement = UIElement;
ElementAPI.UIComponent = UIComponent;
ElementAPI.UIContext = UIContext;
ElementAPI.Module = Module;

export * from './index.js';
export * as default from './index.js';

globalThis.ElementJS = new ElementAPI();
ElementJS.Module = Module;

