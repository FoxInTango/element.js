class Platform {
    constructor() {
        ElementJS.context.platform = this;
        document.createElement();
    }

    echo() {
        console.log("---------------- PlatformWeb ----------------");
    }
}

new Platform();