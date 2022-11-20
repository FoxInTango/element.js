import { Context } from '../core/Context';

class UIImageAttributes {
    constructor() {
        this.url = null;
        this.status = null;
    }
}
export class UIImage {
    constructor() {
        this.attributes = new UIImageAttributes();
    }

    get URL() { return this.attributes.url; }
    set URL(url) {

        globalThis.ElementAPI.loadImage(url, function (status) {
            if (status == 'ready') { this.attributes.url = url; this.attributes.status = 'ready'; }
            else { this.attributes.url = null; this.attributes.status = 'bad'; }
            
        });
        
    }
}