import { Module      } from './index';
import { Element     } from './index';
import { Namespace   } from './index';
import { UIContext   } from './index';
import { UIElement   } from './index';
import { UIComponent } from './index';
import { Application } from './index';

export class ElementAPI extends Application {
    constructor() {
        super();
        this.elementName = 'ElementAPI';
        this.context = new UIContext();
        this.moduleMap = new Map();
        this.fileHandlerMap = new Map();

        /**
         * ['file path']:{content:}
         */
        this.downloadMap = new Map();
        /**
         * ['document file path'] : {node tree}
         */
        this.documentMap = new Map();
        
        this.namespaceMap = new Map();
        this.namespaceMap.set('default', new Namespace());
    
        this.themeMap = new Map();
        this.colorMap = new Map();
        this.gradientMap = new Map();
        this.imageMap = new Map();
        this.spriteMap = new Map();
        this.statusMap = new Map();
        this.styleMap = new Map();
        this.layoutMap = new Map();
        
        this.componentMap = new Map();
        this.namespaceMap.forEach((val, key) => {

        });
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
    
    appendComponent(component) {
        if (component && component.name) {
            this.componentMap.set(component.name(), component);
        }
    }
    removeComponent(component) { }

    /**
     * option : { path:url | string,promoter:object,handler:object|function}
     */
    loadFile(option) {
        if (this.context.platform) {
            this.context.platform.loadFile(option);
        }
    }

    /**
     * option : {path:'',content:data,promoter:object|function,handler:object|function }
     */
    handleFile(option) {
        switch (option.type) {
            case 'text/xml': {
                this.loadDocument({ type: "xml", content: option.content, path: option.path });
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
                console.log(this.loadDocument({ type: "json", content: option.content, namespace: option.namespace }));
            } break;
            case 'audio/mpeg': {
                this.downloadMap.set(option.path, option.content);
            } break;
            case 'image/png': {
                this.downloadMap.set(option.path, option.content);
            } break;
            case 'image/jpeg': {
                this.downloadMap.set(option.path, option.content);
            } break;
            case 'application/javascript': {
                this.downloadMap.set(option.path, option.content);
            } break;
            default: break;
        }
    }

    /**
     * option : {type:xml | json,content:}
     */
    loadDocument(option) {
        if (option.type == 'xml') {
            if (this.context.platform) {
                let document = this.context.platform.loadXML(option);
                if (document) {
                    this.documentMap.set(option.path, document);
                    console.log('new document created .');
                    console.log(this.documentMap);
                }
            } else throw new Error('platform not ready');
        }
        else if (option.type == 'json') { return JSON.parse(option.content); }
    }
    /**
     * option : {document:DOCTree,path:'',instruction:'ui|ms|'}
     */
    handleDocument(option) {
        if (option && option.document) {
            switch (option.document.instruction) {
                case 'uiml': { } break;
                case 'mnml': { } break;
                default: { } break;
            }
        }
    }

    /**
     * 
     * option : {}
     */
    buildUI(option) {
        /**
         * switch option type : path | document
         * option : {"type"}
         */
    }
}

export * from './index.js';
export * as default from './index.js';

if (!globalThis.ElementJS) {
    globalThis.ElementJS = new ElementAPI();
    
    ElementJS.Module      = Module;
    ElementJS.Element     = Element;
    ElementJS.UIElement   = UIElement;
    ElementJS.UIComponent = UIComponent;
    ElementJS.UIContext   = UIContext;
}
