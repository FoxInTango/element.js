const vm = require('vm');
class PlatformContext {
    constructor() {
        ElementJS.context.platform = this;
        var script = new vm.Script();
    }

    echo() {
        console.log("---------------- PlatformNode ----------------");
    }
}

new PlatformContext();
