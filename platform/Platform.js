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
            console.log('Message received from worker script');
            console.log(e);
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
     * load asset file
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

    loadXML(option) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
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
                    if (option.handler) { option.handler.handleFile({ type: contentType, content: xhr.response, path: option.path }); }
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
}