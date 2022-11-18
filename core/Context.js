import { CanvasContext } from '../contexts/canvas/CanvasContext';
import { DOMContext } from '../contexts/dom/DOMContext';
import { DOMEventHandler } from '../contexts/dom/DOMEventHandler';

export class Context {
    constructor() {
        this.target = null;
    }
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
    global() { return globalThis; }

    elementWithID(id) { return null; }

    appendElement() { }
    removeElement() { }

    /**
     * dom/svg/canvas/websockets/webrtc/etc
     */
    apiEnabled() { }

    /**
     * FileSystem | Local Storage | IndexedDB | Cookie
     */
    loadFile() { }
    saveFile() { }

    exploreFS() { }

    /**
     * message : 
     * target :http;//domain.com | ws://domain.com | ip://xxx.xxx.xxx.xxx
     */
    sendMessage(message, target) { }
    dealMessage(message) { }
    ws() { }
    xhr() { }
    /**
     * file/image/etc
     */
    download(url) { }

    console() { return globalThis.console; }
}