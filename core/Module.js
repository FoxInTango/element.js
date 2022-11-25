export class Module {
    constructor(path) {
        if (ElementJS.context.platform) ElementJS.context.platform.loadModule(path);
    }
}