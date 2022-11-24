/**
 * 动态模块加载 由于WEBPACK编译机制,只能单独提供单独未编译加载器
 */
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