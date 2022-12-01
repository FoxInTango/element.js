class HTTPServer {
    constructor() { }
}
class SSEServer {
    constructor() { }
}
class WSServer {
    constructor() { }
}

class Platform {
    constructor() {
        ElementJS.context.platform = this;
        if (ElementJS.bootOption) {
            if (ElementJS.bootOption.vm) {
                this.script = new ElementJS.bootOption.vm.Script('console.log("vm.VM Script");');
            } else console.log('VM API Not Found.');
        } else {
            console.log('Boot Option Not Found.');
        }
    }

    echo() {
        console.log("---------------- PlatformNode ----------------");
        this.script.runInThisContext();
        //this.script.runInNewContext();
        //console.log(ElementJS);
    }

    loadModule(option) { }

    loadXML(option) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    }

    createHTTPServer(option) { console.log("---------------- PlatformNode  createHTTPServer ----------------"); }
    createSSEServer(option) { console.log("---------------- PlatformNode  createSSEServer ----------------"); }
    createWSServer(option) { console.log("---------------- PlatformNode  createWSServer ----------------"); }
}

new Platform();
