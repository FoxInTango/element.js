const PlatformTemplate = {
    WebAPI: {
        WebAudio: '',
        WebSocket: 'host',
        WebWorker: null
    },
    FS: {},
    XML: {},
    URL: {},
    HTTP: {},
    HTTPS: {}
}

export const ELEMENT_HOST_WEB = 'web';
export const ELEMENT_HOST_NODE = 'node';

export const ELEMENT_HTTP_METHOD_GET  = 'GET';
export const ELEMENT_HTTP_METHOD_POST = 'GET';

export class Platform {
    constructor(option) {
        /**
         * 
         */
        this.renderTargetMap = new Map();
        this.host = option.host;
        this.vm = option.vm;
        this.WebWorker = option.WebWorker;
        this.loadWorker();
    }

    loadWorker() {
        if (this.host == ELEMENT_HOST_WEB) {
            this.worker = new Worker('./worker.js');
            //this.worker = new Worker(URL.createObjectURL(new Blob([`(${worker_progress.toString()})()`])));
        } else if (this.host == ELEMENT_HOST_NODE && this.WebWorker) {
            this.worker = new this.WebWorker('./worker.js');
        }

        this.worker.onmessage = function (e) {
            //console.log('Message received from worker script');
            //console.log(e);
        }
    }

    loadModule(option) {
        if (!option.modulePath) return false;

        if (this.host == ELEMENT_HOST_WEB) {
            // https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLScriptElement
            let script = document.createElement("script");
            script.onerror = () => { };
            script.onload = () => { };
            script.src = option.modulePath;
            var head = document.getElementsByTagName("head")[0];
            (head || document.body).appendChild(script);
        } else if (this.host == ELEMENT_HOST_NODE) {
            /*
             * 1,download 
             * 2,
             */
        }
    }

    loadImage(option) { }
    loadAudio(option) { }

    /**
     * option : {path:'',handler:'',namespace:''}
     */
    loadFile(option) {
        /**
         * method : XHR | Fetch API
         */
        switch (option.method) {
            case 'xhr': {
                this.sendXHR(option);
            } break;
            case 'fetch': {
                this.fetch(option);
            } break;
            // default:xhr
            default: {
                this.sendXHR(option);
            }
        }
    }

    saveFile(option) { }
    /** document relative 
     *                                             
     *  ElementJS.LoadFile -- Platform.LoadFile -- ElementJS.HandleFile --  ElementJS.LoadDOC
     *                          |                                                |
     *                          |                                                |
     *                          |                                           Platform.LoadXML
     *                          |                                                |
     *                          |                                                |
     *                          -----------------------------------------------include
     *                              
     *                                
     *                                
     */
    loadXML(option) {
        let parser = null;
        if (this.host == ELEMENT_HOST_WEB) {
            parser = new DOMParser()
        } else if (this.host == ELEMENT_HOST_NODE) {
            parser = new this.XML.DOMParser()
        }

        if (!parser) return false;
        let xml = parser.parseFromString(option.content, "text/xml");
        if (xml) {
            let document = { path: option.path, subelements: new Array(), attributes: new Array() };
            this.handleXMLElement(xml, document, null);
            return document;
        }
    }

    /**
     * node      : xml node to be dealed 
     * element   : parent of element will be created
     * document  : current document
     */
    handleXMLElement(node,element,namespace) {
        /**
         * deal with this node
         * Object.defineProperty()
         */
        let new_element = { elementName: node.nodeName, subelements: new Array(), attributes: new Array() };
        let new_namespace = namespace;
        element.subelements.push(new_element);
        switch (node.nodeName) {
            /**
             * download & target : 
             * UIML.js
             */
            case 'include': {
                let path = node.getAttribute("src");
                if (path && path.length) {
                    this.loadFile({ path: path, handler: ElementJS, namespace: new_namespace });
                }
            } break;
            case 'require': {
                let path = node.getAttribute("src");
                if (path && path.length) {
                    this.loadFile({ path: path, handler: ElementJS, namespace: new_namespace });
                }
            } break;
            case 'import': { } break;
            case 'export': { } break;
            case 'range': { } break;
            case 'group': { } break;
            case 'namespace': {
                if (node.getAttribute('name') && node.getAttribute('name').length) {
                    new_namespace = node.getAttribute('name');
                }
            } break;
            case 'color': { } break;
            case 'r': { } break;
            case 'g': { } break;
            case 'b': { } break;
            case 'a': { } break;
            case 'image': { } break;
            case 'sprite': { } break;
            case 'background': { } break;
            case 'theme': { } break;
            case 'frame': { } break;
            case 'x': { } break;
            case 'y': { } break;
            case 'width': { } break;
            case 'height': { } break;
            case 'layout': { } break;
            case 'slot': { } break;
            case 'view': { } break;
            case 'canvas': { } break;
            case 'component': { } break;
            case 'extends': { } break;
            case 'page': { } break;
            case 'segment': { } break;
            case 'string': { } break;
            case 'text': { } break;
            case 'segment': { } break;
            default: {
                // ElementJS.componentMap
            } break;
        }
        console.log("Platform.js::handleXMLElement -- NodeName : " + node.nodeName + " NodeType: " + node.nodeType + " NodeContent: " + node.nodeValue + "NodeAttributes : ");
        console.log(node.attributes);
        
        for (let i = 0; i < node.childNodes.length; i++) {
            this.handleXMLElement(node.childNodes[i], new_element, new_namespace);
        }
    }

    saveXML() { }


    loadJSON() { }
    saveJSON() { }
    echo() {
        console.log("---------------- Platform ----------------");
    }

    /** https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
     * 
     * MIMETYPE.js
     */
    sendXHR(option) {
        if (this.host == ELEMENT_HOST_WEB) {
            const xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status == 200 && xhr.response != null) {
                    let contentType = xhr.getResponseHeader("Content-Type");
                    if (option.handler) { option.handler.handleFile({ type: contentType, content: xhr.response, path: option.path, namespace: option.namespace }); }
                }
            }
            xhr.open("GET", option.path);
            xhr.send();
        }
        else if (this.host == ELEMENT_HOST_NODE) {
            
        }
    }

    fetch(option) { }

    loopupRenderTarget() {
    }
    createRenderTarget() { }
    removeRenderTarget() { }
    updateRenderTarget() { }

    /**
     * https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL
     * https://www.cnblogs.com/tianma3798/p/13582402.html
     * objectURL = URL.createObjectURL(blob || file);
     * URL.revokeObjectURL
     */
    createObjectURL() { }
    removeObjectURL() { }
}