export class ObjectURL {
    constructor(option) {
        if (ElementJS.context.platform) {
            this.objectURL = ElementJS.context.platform.createObjectURL(option);
        }
    }
}