import { Element } from "./core/UIElement";
import { UIElement } from "./ui/UIElement";

function buttonClicked(event) {
    document.getElementById("sometext").innerHTML = "button clicked. event:" + JSON.stringify(event);
    console.log(event);
}

function buttonMouseMoved(event, x, y) {
    console.log(event);
    console.log("x: " + event.x + " y; " + event.y);
}

window.onload = function () {
    document.getElementById("buttonA").onclick = buttonClicked;
    document.getElementById("buttonA").onmousemove = buttonMouseMoved;

    var e = new Element();
    var a = new UIElement();

    console.log(window);
}
