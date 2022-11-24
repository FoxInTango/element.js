window.element_map = new Map();

import { UIElement } from "./ui/UIElement";

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
