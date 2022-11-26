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

const ELEMENT_HOST_WEB = 'web';
const ELEMENT_HOST_NODE = 'node';

export class Platform {
    constructor(option) {
        /**
         * 
         */
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

    loadXML(option) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    }

    echo() {
        console.log("---------------- Platform ----------------");
    }

    loopupRenderTarget() { }
    createRenderTarget() { }
}