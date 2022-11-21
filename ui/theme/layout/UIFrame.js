export class UIFrame {
    constructor(x, y, width, height) {
        /** 
         *  ���ݲ�����Ŀ�жϴ���ֵ����
         */

        switch (arguments.length) {
            /**
             * frame struct
             */
            case 1: { } break;
            /**
             * x,y,w,h
             */
            case 4: {
                this._x = x;
                this._y = y;
                this._w = width;
                this._h = height;
            } break;
            default: return null;
        }
        
    }
}