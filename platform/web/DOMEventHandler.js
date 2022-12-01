class DOMEventHandler {
    /**
     * https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
     * 
     * MouseEvent 
     * PointerEvent
     * KeyboardEvent
     * ContentEvent
     * LifeCircleEvent
     */
    constructor(s) {
        this.onclick = s.onclick;
        this.onmousemove = s.onmousemove;
        this.onmouseup = s.onmouseup;

        this.on_componentEvent = s.on_componentEvent;
    }

    listen(id) {
        var e = document.getElementById(id);

        if (e) {
            if (this.onclick) {
                e.addEventListener('click', this.onclick);
            } else {
                console.log('this.onclick undefined.');
            }
            if (this.onmousemove) {
                e.addEventListener('mousemove', this.onmousemove);
            } else {
                console.log('this.onmousemove undefined.');
            }

            if (this.onmouseup) {
                e.addEventListener('mouseup', this.onmouseup);
            }
            else {
                console.log('this.onmouseup undefined.');
            }
        } else {
            console.log('no element with id: ' + id);
        }
    }
}