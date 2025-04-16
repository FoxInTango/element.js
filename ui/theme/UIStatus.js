export class UIStatus{
    /**
     * 1,通用status - 所有视图都可能具备的状态
     * 2,专有status - 某类视图或组件自定义的状态
     */
    constructor(name, layout, style) {
        this.elementName = 'UIStatus';

        this.styleMap = null;
    }
}