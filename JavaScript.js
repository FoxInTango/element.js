/** 语言特性测试
 */

console.log('Runtime Global : ');
console.log(global);

if (global.window) {
    console.log("window");
} else {
    console.log("browser window undefined");
}

var runtimeGlobal = null;

try {
    //runtimeGlobal = window;

} catch (e) { }

//console.log(JSON.stringify(global));
var parser = new DOMParser();
let text = "<bookstore>"
text = text + "<book>";
text = text + "<title>Harry Potter</title>";
text = text + "<author>J K. Rowling</author>";
text = text + "<year>2005</year>";
text = text + "</book>";
text = text + "</bookstore>";

let xmlDoc = parser.parseFromString(text, "text/xml");

console.log(xmlDoc);
class Base {
    constructor() {
        this.name = 'base';
    }

    echo() {
        console.log('BASE Class Name is : ' + this.name);
    }
};

class Child extends Base {
    constructor() {
        super();
        this.name = 'child';
    }

    echo() {
        //console.log('Class Name is : ' + this.name);
        //console.log('    with super name : ' + super.name);

        super.echo();
    }
};

class Other {
    constructor() {
        this.name = 'other';
    }

    echo() {
        var b = new Base();
        var c = new Child();
        //b.echo();
        c.echo();
    }
}
//b.echo();
//c.echo();
//new Other().echo()

/**
 * 函数参数数目 - arguments 
 */

function argument_number(a, b, c) {
    return arguments.length;
}

/**
 * return null
 */

class NULL {
    constructor() {
        return null;
    }
}

function argument_number(a, b, c) {
    return arguments.length;
}

console.log("argument_number: " + argument_number(1, 2, 3, 4));

class NULL {
    constructor() {
        return null;
    }
}

var n = new NULL();

if (n == null) { console.log("return null OK"); } else { console.log("return null bad -- " + JSON.stringify(n)); } 

let circle = document.getElementById('circle');
console.log(circle.getBoundingClientRect());


var e = new Element();
var a = new UIElement();

var handler = new DOMEventHandler(
    {
        onclick: function buttonClicked(event) {
            document.getElementById("sometext").innerHTML = "button clicked. event:" + event.srcElement.id//JSON.stringify(event);
            console.log(event);
        },
        onmousemove: function buttonMouseMoved(event) {
            console.log(event);
        }
    });

handler.listen('buttonA');
handler.listen('buttonC');
var color = new UIColor(100, 200, 100, 255);

// `` ES6 反引号

// CSS 盒子模型 https://www.cnblogs.com/Renyi-Fan/p/12260327.html

// JavaScript BASE64

var frames = document.querySelectorAll(ELEMENT_UI_TAG);
var walker = new ElementTreeWalker(this);
if (frames) {
    for (var i = 0; i < frames.length; i++) {
        walker.walk(frames[i], null, null);
    }
}

//<div id='flowDIV'>𝄁&#119187\uED61</div>

if (typeof (window) == 'undefined') { console.log("window undefined."); } else {
    window.onload = function () {
        ElementJS.boot();
        notationAPI.boot();
        console.log(ElementJS);
        //window.task();
        console.log(window);
        //ElementJS.loadModules('');
        load_modules('./');

        let e = new ElementJS.Element();
        console.log('new ElementJS.Element()');
        console.log(e);

        let u = new ElementJS.UIElement();
        console.log('new ElementJS.UIElement()');
        console.log(u);
        let uc = new ElementJS.UIComponent();
        console.log('new ElementJS.UIComponent()');
        console.log(uc);

    }
}

if (typeof (window) == 'undefined') { console.log("window undefined."); } else { }
//var global = global || window;//https://github.com/bevacqua/dragula/issues/602
globalThis.anyThing = new Map();
globalThis.anyThing.set("key", "value");
//console.log(globalThis);

let e = new ElementJS.Element();
console.log('new ElementJS.Element()');
console.log(e);

let u = new ElementJS.UIElement();
console.log('new ElementJS.UIElement()');
console.log(u);
let uc = new ElementJS.UIComponent();
console.log('new ElementJS.UIComponent()');
console.log(uc);

// 平台判断 http://t.zoukankan.com/develon-p-13607146.html

/**
 * NODE.VM https://www.cnblogs.com/tianshifu/p/6379773.html#:~:text=vm.Script%20%E6%98%AF%E4%B8%80%E4%B8%AA%E7%B1%BB%EF%BC%8C%E7%94%A8%E4%BA%8E%E5%88%9B%E5%BB%BA%E4%BB%A3%E7%A0%81%E5%AE%9E%E4%BE%8B%EF%BC%8C%E5%90%8E%E9%9D%A2%E5%8F%AF%E4%BB%A5%E5%A4%9A%E6%AC%A1%E8%BF%90%E8%A1%8C%E3%80%82%20vm.createContext%20%28sandbox%29%20%E7%94%A8%E4%BA%8E%20%22contextify%22%20%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%EF%BC%8C%E6%A0%B9%E6%8D%AE%20ECMAScript,context%20%E3%80%82%20%E8%BF%99%E9%87%8C%E7%9A%84%20%22contextify%22%EF%BC%8C%E5%B0%B1%E6%98%AF%E6%8A%8A%E4%BC%A0%E8%BF%9B%E5%8E%BB%E7%9A%84%E5%AF%B9%E8%B1%A1%E4%B8%8E%20V8%20%E7%9A%84%E4%B8%80%E4%B8%AA%E6%96%B0%E7%9A%84%20context%20%E8%BF%9B%E8%A1%8C%E5%85%B3%E8%81%94%E3%80%82
 */

window.element_map = new Map();

import { UIElement } from "./ui/UIElement";

function $(e) {
    if (e == "http") {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }
        else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var url = arguments[1];

        if (url && xhr) {
            xhr.open("GET", url, true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.onreadystatechange = function () {
                console.log(xhr.responseText);
            }

            xhr.send();
        }
        else {
            return xhr;
        }
    }

    var element = {
        element: null,
        get: function () { return this.element; },
        set: function (e) {
            this.element = e;
        }
    }
    var name = {
        name: "",
        get: function () { return this.name; },
        set: function (n) {
            this.name = n;
        }
    }
    var attributes = {
        attributes: null,
        get: function () { return this.attributes; },
        set: function (a) {
            this.attributes = a;
        }
    }

    //选择命令解析
    var t = e.charAt(0);

    switch (t) {
        case '#':
            {
                this.element = document.getElementById(e);
            } break;
        case '.':
            {
                alert("class selector.");
            } break;
        case '-':
            { } break;
        case '-':
            { } break;
        default: break;
    }

    this.appendSubelement = function ($e) {

    }

    this.insertSubelement = function ($e) {

    }

    this.removeSubelement = function ($e) {

    }

    this.appendStyle = function () {
    }

    this.removeStyle = function () {
        alert("removeCSS");
    }

    return this;
}

function initlize_event_handler() {
    window.onresize = function (width, height) {
        alert("window resized.");
    }
    window.onload = function () {
        alert("window loaded.");
    }
    document.ready = function () {
        alert("document ready.");
    }
}


function screen(w, h) {
    this.width = w;
    this.height = h;

    return this;
}

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

var s = new screen(w, h);

var c = JSON.stringify(s);

for (var i = 0; i < document.styleSheets.length; i++) {
    var styleSheet = document.styleSheets[i];

    console.log(styleSheet);
}
//boot阶段两项任务:
//1,进行重定向
//2,检测客户端环境
// $('http','https://cws.saosaokan.xin/index.php');
//initlize_event_handler();

var el = document.getElementById("a");

//el.eventHandler = new event_handler();


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

    var a = new UIElement();

    console.log(window);
}


// JavaScript instanceof typeof Object.prototype.toString.call() https://blog.csdn.net/qq_46658751/article/details/123687605