export class Context {
    constructor() {
    }

    global() { }

    /**
     * dom/svg/canvas/websockets/webrtc/etc
     */
    apiEnabled() { }
    ws() { }
    xhr() { }
    /**
     * file/image/etc
     */
    download(url) { }
}