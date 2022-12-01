/**
 * www/app/views/view.js
 */
const ViewStructType_VIEW = 'view';
class ViewStruct {
    /**
     * option : type string | structObj { type:string ,attrubutes:{} }
     */
    constructor(option) {
        this.type = 'view | slot | range | theme | image';
        this.children = new Array();
        //ElementJS.appendComponent(new View());
    }
}
export class View {
    constructor() {
        this.namespace = '';
        this.name = '';
        this.struct = new ViewStruct() | 'url';
    }

    get struct() { }
    get handler() {
        return (event) => {
            /**
             * document event
             * ui event
             */
            consle.log(e.source.name);
        }
    }
}

ElementJS.appendComponent(new View());