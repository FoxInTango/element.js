class Platform {
    constructor() {
        ElementJS.context.platform = this;
        //document.createElement();
    }

    echo() {
        console.log("---------------- PlatformWeb ----------------");
    }

    loadXML(option) {
        var parser = new DOMParser();
        return parser.parseFromString(text, "text/xml");
    }
}

new Platform();