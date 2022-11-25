const PlatformTemplate = {
    WebAPI: {
        WebAudio: '',
        WebSocket:'host'
    },
    FS: {},
    XML: {},
    URL: {},
    HTTP: {},
    HTTPS: {}
}

export class Platform {
    constructor() {

    }

    loadModule(option) { }

    loadXML(option) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    }
}