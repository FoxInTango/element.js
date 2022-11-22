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