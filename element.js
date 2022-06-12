window.element_map = new Map();

// 宿主 提供公共元素获取

class UIElement
{
    constructor()
    {
        this.subelements = new Map();
        this.event_listeners = null;
    }

    setAttribute(target,options) {

    }

    getAttribute(name) {

    }
}

class UIView extends UIElement{

}

class element_event
{
    constructor() {
        this.x = null;
        this.y = null;
    }
}

class element_event_handler
{
    constructor() {
        this.mouse_moved = function (e, x, y) { }
        this.mouse_down = function (e, x, y) { }(e, x, y);
        this.mouse_up = function (e, x, y) { }(e, x, y);

        this.touch_began = function (e, x, y) { }(e, x, y);
        this.touch_moved = function (e, x, y) { }(e, x, y);
        this.touch_ended = function (e, x, y) { }(e, x, y);

        text_changed = function (e, x, y) { }(e, x, y);
    }
}

class UIElementEventListener extends element_event_handler
{
    constructor() {
        this.mouseMoved = function (e, x, y) { }
    }
}

class dom_element
{
    constructor()
    {
        this.eventHandler = new event_handler();
        this.subelements = Array();
        alert("this dom element is ready");
    }
}

class event_handler
{
    constructor()
    {
        this.subelements = Array();
        alert("i'm the handler");
    }

    event()
    {
         alert("i'm the event");
    }
}

function $(e)
{
    if(e == "http")
    {
        var xhr;

        if(window.XMLHttpRequest)
        {
            xhr = new XMLHttpRequest();
        }
        else
        {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        var url = arguments[1];

        if(url && xhr)
        {
            xhr.open("GET",url,true);
            xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
            xhr.onreadystatechange = function()
            {
                console.log(xhr.responseText);
            }

            xhr.send();
        }
        else
        {
            return xhr;
        }
    }

    var element = {
                      element : null,
                      get : function() { return this.element; },
                      set : function(e)
                      {
                          this.element = e;
                      }
                  }
    var name = {
                   name : "",
                   get : function() { return this.name; },
                   set : function(n)
                   {
                       this.name = n;
                   }
               }
    var attributes = {
                         attributes : null,
                         get : function() { return this.attributes; },
                         set : function(a)
                         {
                             this.attributes = a;
                         }
                     }

    //选择命令解析
    var t = e.charAt(0);

    switch(t)
    {
        case '#':
        {
            this.element = document.getElementById(e);
        }break;
        case '.':
        {
            alert("class selector.");
        }break;
        case '-':
        {}break;
        case '-':
        {}break;
        default:break;
    }

    this.appendSubelement = function($e)
    {

    }

    this.insertSubelement = function($e)
    {

    }

    this.removeSubelement = function($e)
    {

    }

    this.appendStyle = function()
    {
    }
        
    this.removeStyle = function()
    {
        alert("removeCSS");
    }
        
    return this;
}
    
function initlize_event_handler()
{
    window.onresize = function (width,height)
    {
        alert("window resized.");
    }
    window.onload = function ()
    {
        alert("window loaded.");
    }
    document.ready = function ()
    {
        alert("document ready.");
    }
}


function screen(w,h)
{
    this.width  = w;
    this.height = h;

    return this;
}

var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;

var s = new screen(w,h);

var c = JSON.stringify(s);

for (var i = 0; i < document.styleSheets.length; i++)
{
    var styleSheet = document.styleSheets[i];

    console.log(styleSheet);
}
//boot阶段两项任务:
//1,进行重定向
//2,检测客户端环境
$('http','https://cws.saosaokan.xin/index.php');
//initlize_event_handler();

var el = document.getElementById("a");

el.eventHandler = new event_handler();
