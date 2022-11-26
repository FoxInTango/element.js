const ViewStructType_VIEW = 'view';
class ViewStruct {
    /**
     * option : type string | structObj { type:string ,attrubutes:{} }
     */
    constructor(option) {
        this.type = 'view | slot | range | theme | image';
        this.children = new Array();
    }
}
export class View {
    constructor() {
        this.struct = new ViewStruct() | 'url';
    }

    get struct() { }
    get handler() {
        return (event) => {
            consle.log(e.source.name);
        }
    }
}

ElementJS.appendComponent(new View());