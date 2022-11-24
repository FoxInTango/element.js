export class Module {
    constructor(option) {
        console.log("module/Module.js : " + option.option + 'Loading.');
        import(option.option).then((module) => {
            this.module = module;
            this.modulePath = option.option;
            option.handler.handleModule(this);
        });
    }
}