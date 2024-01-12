import { Platform } from '../platform/Platform';
export class Application {
    constructor() {
        this.target = null;
    }
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/globalThis
    global() { return globalThis; }

    boot(option) {
        this.platform = new Platform(option);
    }

    elementWithID(id) { return null; }

    appendElement() { }
    removeElement() { }
    updateElement() { }

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

    /**
     * return: XML DOC
     */
    loadXML() { }
    /**
     * return: JSON OBJ
     */
    loadJSON() { }

    /**
     * timeout,callback
     */
    loadImage() { }
}