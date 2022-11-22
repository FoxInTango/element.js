export class Module {
    constructor(path) {
        import(path).then((module) => {
            this.interface = module.ModuleInterface();
            let name = this.interface.name;

            ElementJS.moduleMap.set(name,this.interface);
            console.log('ElementJS Module Map:');
            console.log(ElementJS.moduleMap);
        });
    }
}