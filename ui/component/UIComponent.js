import { Component } from "../../core/Component";

export class UIComponent extends Component {
    constructor() {
        this.name = 'UIComponent';
        this.UITree = null;
        this.EventHandler = null;
    }
}