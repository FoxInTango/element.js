import { UILayout } from './UILayout';
import { UIStyle } from './UIStyle';

export class UIStatus {
    constructor(name, layout, style) {
        this.name = name;
        this.style = style;
        this.layout = layout;
    }
}