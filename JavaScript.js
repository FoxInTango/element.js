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