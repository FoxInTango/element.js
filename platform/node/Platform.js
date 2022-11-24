const vm = require('vm');

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
        this.script = new vm.Script('console.log("vm.VM Script");');
    }

    echo() {
        console.log("---------------- PlatformNode ----------------");
        //this.script.runInThisContext();
        this.script.runInNewContext();
        //console.log(ElementJS);
    }

    createHTTPServer(option) { console.log("---------------- PlatformNode  createHTTPServer ----------------"); }
    createSSEServer(option) { console.log("---------------- PlatformNode  createSSEServer ----------------"); }
    createWSServer(option) { console.log("---------------- PlatformNode  createWSServer ----------------"); }
}

new Platform();
