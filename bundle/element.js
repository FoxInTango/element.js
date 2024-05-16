(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // index.js
  var element_exports = {};
  __export(element_exports, {
    Application: () => Application,
    Element: () => Element,
    ElementAttributes: () => ElementAttributes,
    ElementTreeWalker: () => ElementTreeWalker,
    Event: () => Event,
    Module: () => Module,
    Namespace: () => Namespace,
    Task: () => Task,
    UIColor: () => UIColor,
    UIComponent: () => UIComponent,
    UIContext: () => UIContext,
    UIElement: () => UIElement,
    UIElementAttributes: () => UIElementAttributes,
    UIEvent: () => UIEvent,
    UIFrame: () => UIFrame,
    UIImage: () => UIImage,
    UIImageGrid: () => UIImageGrid,
    UIImageGridItem: () => UIImageGridItem,
    UILayout: () => UILayout,
    UILine: () => UILine,
    UIStatus: () => UIStatus,
    UIStyle: () => UIStyle,
    UIText: () => UIText,
    UITextAttributes: () => UITextAttributes,
    UITextFormat: () => UITextFormat,
    UITextRange: () => UITextRange,
    UITextRangeAttributes: () => UITextRangeAttributes,
    UITheme: () => UITheme,
    UIView: () => UIView
  });

  // core/Namespace.js
  var Namespace = class {
    constructor() {
      this.componentMap = /* @__PURE__ */ new Map();
      this.themeMap = /* @__PURE__ */ new Map();
      this.statusMap = /* @__PURE__ */ new Map();
      this.styleMap = /* @__PURE__ */ new Map();
      this.frameMap = /* @__PURE__ */ new Map();
      this.layoutMap = /* @__PURE__ */ new Map();
      this.backgroundMap = /* @__PURE__ */ new Map();
      this.colorMap = /* @__PURE__ */ new Map();
      this.gradientMap = /* @__PURE__ */ new Map();
      this.imageMap = /* @__PURE__ */ new Map();
      this.spriteMap = /* @__PURE__ */ new Map();
    }
  };

  // core/Module.js
  var Module = class {
    constructor(path) {
      if (ElementJS.context.platform)
        ElementJS.context.platform.loadModule(path);
    }
  };

  // core/Event.js
  var Event = class {
    constructor() {
    }
  };

  // core/Element.js
  var ElementTreeWalker = class {
    constructor(handler) {
      this.handler = handler;
      this.name = "ElementTreeWalker";
    }
    walk(node, handler) {
      let h = handler ? handler : this.handler;
      for (var i = 0; i < node.childNodes.length; i++) {
        var subnode = node.childNodes[i];
        h.handleElement(subnode, i, node);
        this.walk(subnode, h);
      }
    }
  };
  var ElementAttributes = class {
    constructor() {
      this.master = this;
      this.id = null;
      this.elementName = "element";
      this.subelements = new Array();
    }
  };
  var Element = class {
    constructor() {
      if (arguments.length != 0 && arguments[0] === "super") {
        console.log("Element.js::super call.");
        return;
      } else
        this.attributes = new ElementAttributes();
      this.application = null;
    }
    setAttribute(option) {
    }
    getAttribute(option) {
    }
    set elementName(name) {
      if (this.attributes)
        this.attributes.elementName = name;
    }
    get elementName() {
      return this.attributes ? this.attributes.name : null;
    }
  };

  // platform/Platform.js
  var ELEMENT_HOST_WEB = "web";
  var ELEMENT_HOST_NODE = "node";
  var Platform = class {
    constructor(option) {
      this.renderTargetMap = /* @__PURE__ */ new Map();
      this.host = option.host;
      this.vm = option.vm;
      this.WebWorker = option.WebWorker;
      this.loadWorker();
    }
    loadWorker() {
      if (this.host == ELEMENT_HOST_WEB) {
        this.worker = new Worker("./worker.js");
      } else if (this.host == ELEMENT_HOST_NODE && this.WebWorker) {
        this.worker = new this.WebWorker("./worker.js");
      }
      this.worker.onmessage = function(e) {
      };
    }
    loadModule(option) {
      if (!option.modulePath)
        return false;
      if (this.host == ELEMENT_HOST_WEB) {
        let script = document.createElement("script");
        script.onerror = () => {
        };
        script.onload = () => {
        };
        script.src = option.modulePath;
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild(script);
      } else if (this.host == ELEMENT_HOST_NODE) {
      }
    }
    loadImage(option) {
    }
    loadAudio(option) {
    }
    loadFile(option) {
      switch (option.method) {
        case "xhr":
          {
            this.sendXHR(option);
          }
          break;
        case "fetch":
          {
            this.fetch(option);
          }
          break;
        default: {
          this.sendXHR(option);
        }
      }
    }
    saveFile(option) {
    }
    loadXML(option) {
      let parser = null;
      if (this.host == ELEMENT_HOST_WEB) {
        parser = new DOMParser();
      } else if (this.host == ELEMENT_HOST_NODE) {
        parser = new this.XML.DOMParser();
      }
      if (!parser)
        return false;
      let xml = parser.parseFromString(option.content, "text/xml");
      if (xml) {
        let document2 = { path: option.path, subelements: new Array(), attributes: new Array() };
        this.handleXMLElement(xml, document2, null);
        return document2;
      }
    }
    handleXMLElement(node, element, namespace) {
      let new_element = { elementName: node.nodeName, subelements: new Array(), attributes: new Array() };
      let new_namespace = namespace;
      element.subelements.push(new_element);
      switch (node.nodeName) {
        case "include":
          {
            let path = node.getAttribute("src");
            if (path && path.length) {
              this.loadFile({ path, handler: ElementJS, namespace: new_namespace });
            }
          }
          break;
        case "require":
          {
            let path = node.getAttribute("src");
            if (path && path.length) {
              this.loadFile({ path, handler: ElementJS, namespace: new_namespace });
            }
          }
          break;
        case "import":
          {
          }
          break;
        case "export":
          {
          }
          break;
        case "range":
          {
          }
          break;
        case "group":
          {
          }
          break;
        case "namespace":
          {
            if (node.getAttribute("name") && node.getAttribute("name").length) {
              new_namespace = node.getAttribute("name");
            }
          }
          break;
        case "color":
          {
          }
          break;
        case "r":
          {
          }
          break;
        case "g":
          {
          }
          break;
        case "b":
          {
          }
          break;
        case "a":
          {
          }
          break;
        case "image":
          {
          }
          break;
        case "sprite":
          {
          }
          break;
        case "background":
          {
          }
          break;
        case "theme":
          {
          }
          break;
        case "frame":
          {
          }
          break;
        case "x":
          {
          }
          break;
        case "y":
          {
          }
          break;
        case "width":
          {
          }
          break;
        case "height":
          {
          }
          break;
        case "layout":
          {
          }
          break;
        case "slot":
          {
          }
          break;
        case "view":
          {
          }
          break;
        case "canvas":
          {
          }
          break;
        case "component":
          {
          }
          break;
        case "extends":
          {
          }
          break;
        case "page":
          {
          }
          break;
        case "segment":
          {
          }
          break;
        case "string":
          {
          }
          break;
        case "text":
          {
          }
          break;
        default:
          {
          }
          break;
      }
      console.log("Platform.js::handleXMLElement -- NodeName : " + node.nodeName + " NodeType: " + node.nodeType + " NodeContent: " + node.nodeValue + "NodeAttributes : ");
      console.log(node.attributes);
      for (let i = 0; i < node.childNodes.length; i++) {
        this.handleXMLElement(node.childNodes[i], new_element, new_namespace);
      }
    }
    saveXML() {
    }
    loadJSON() {
    }
    saveJSON() {
    }
    echo() {
      console.log("---------------- Platform ----------------");
    }
    sendXHR(option) {
      if (this.host == ELEMENT_HOST_WEB) {
        const xhr = new XMLHttpRequest();
        xhr.onload = () => {
          if (xhr.status == 200 && xhr.response != null) {
            let contentType = xhr.getResponseHeader("Content-Type");
            if (option.handler) {
              option.handler.handleFile({ type: contentType, content: xhr.response, path: option.path, namespace: option.namespace });
            }
          }
        };
        xhr.open("GET", option.path);
        xhr.send();
      } else if (this.host == ELEMENT_HOST_NODE) {
      }
    }
    fetch(option) {
    }
    loopupRenderTarget() {
    }
    createRenderTarget() {
    }
    removeRenderTarget() {
    }
    updateRenderTarget() {
    }
    createObjectURL() {
    }
    removeObjectURL() {
    }
  };

  // core/Application.js
  var Application = class extends Element {
    constructor() {
      this.target = null;
    }
    global() {
      return globalThis;
    }
    boot(option) {
      this.platform = new Platform(option);
    }
    elementWithID(id) {
      return null;
    }
    appendElement() {
    }
    removeElement() {
    }
    updateElement() {
    }
    apiEnabled() {
    }
    loadFile() {
    }
    saveFile() {
    }
    exploreFS() {
    }
    sendMessage(message, target) {
    }
    dealMessage(message) {
    }
    ws() {
    }
    xhr() {
    }
    download(url) {
    }
    console() {
      return globalThis.console;
    }
    loadXML() {
    }
    loadJSON() {
    }
    loadImage() {
    }
  };

  // core/Task.js
  var Task = class {
    constructor(progress, callback) {
    }
  };

  // core/Component.js
  var Component = class {
    constructor() {
      this.name = "Component";
      this.EventHandler = null;
    }
  };

  // ui/component/UIComponent.js
  var UIComponent = class extends Component {
    constructor() {
      this.name = "UIComponent";
      this.UITree = null;
      this.EventHandler = null;
    }
  };

  // ui/core/UIContext.js
  var UIContext = class {
    constructor() {
      this.elements = new Array();
      this.elementMap = /* @__PURE__ */ new Map();
    }
    appendElement(e) {
    }
    insertElement(e, index) {
    }
    removeElement(e) {
    }
    render(e) {
      switch (e.name) {
      }
    }
    clear() {
    }
    clearRect() {
    }
    setClip() {
    }
    setLineStyle() {
    }
    drawLine() {
    }
    drawPath() {
    }
    drawText() {
    }
    drawImage() {
    }
    fill() {
    }
    stroke() {
    }
  };

  // ui/core/UIElement.js
  var UIElementAttributes = class extends ElementAttributes {
    constructor() {
      super(0);
      this.hidden = false;
      this.visiable = true;
      this.zIndex = 0;
    }
  };
  var UIElement = class extends Element {
    constructor() {
      super("super");
      if (arguments.length != 0 && arguments[0] === "super") {
        console.log("UIElement.js::super call.");
        return;
      } else
        this.attributes = new UIElementAttributes();
    }
  };

  // ui/core/UIEvent.js
  var UIEvent = class extends Event {
    constructor() {
      super();
    }
  };

  // ui/core/UIText.js
  var UITextFormat = class {
    constructor() {
    }
  };
  var UITextAttributes = class extends UIElementAttributes {
    constructor() {
      this.ranges = new Array();
    }
  };
  var UIText = class extends UIElement {
    constructor() {
      super("super");
      if (arguments.length != 0 && arguments[0] === "super") {
        console.log("UIText.js::super call.");
        return;
      } else
        this.attributes = new UITextAttributes();
    }
  };

  // ui/core/UIRange.js
  var UITextRangeAttributes = class extends UIElementAttributes {
    constructor() {
      super();
    }
  };
  var UITextRange = class extends UIElement {
    constructor() {
      super("super");
      if (arguments.length != 0 && arguments[0] === "super") {
        console.log("UITextRange.js::super call.");
        return;
      } else
        this.attributes = new UITextRangeAttributes();
    }
  };

  // ui/core/UILine.js
  var UILine = class extends UIElement {
    constructor() {
      super();
    }
  };

  // ui/core/UIView.js
  var UIView = class extends UIElement {
    constructor(options) {
      super();
      this.master = null;
      this.elementName = "UIView";
    }
  };

  // ui/theme/layout/UIFrame.js
  var UIFrame = class {
    constructor(x, y, width, height) {
      switch (arguments.length) {
        case 1:
          {
          }
          break;
        case 4:
          {
            this._x = x;
            this._y = y;
            this._w = width;
            this._h = height;
          }
          break;
        default:
          return null;
      }
    }
  };

  // ui/theme/layout/UILayout.js
  var UILayout = class {
    constructor() {
      this.frame = null;
    }
  };

  // ui/theme/style/UIColor.js
  var UIColor = class {
    constructor(r, g, b, a) {
      this._r = r;
      this._g = g;
      this._b = b;
      this._a = a;
    }
    set r(r) {
      this._r = r;
    }
    set g(g) {
      this._g = g;
    }
    set b(b) {
      this._b = b;
    }
    set a(a) {
      this._a = a;
    }
    get r() {
      return this._r;
    }
    get g() {
      return this._g;
    }
    get b() {
      return this._b;
    }
    get a() {
      return this._a;
    }
  };

  // ui/theme/style/UIImage.js
  var UIImageAttributes = class {
    constructor() {
      this.url = null;
      this.status = null;
    }
  };
  var UIImage = class {
    constructor() {
      this.attributes = new UIImageAttributes();
    }
    get URL() {
      return this.attributes.url;
    }
    set URL(url) {
      globalThis.ElementAPI.context.loadImage(url, function(status) {
        if (status == "ready") {
          this.attributes.url = url;
          this.attributes.status = "ready";
        } else {
          this.attributes.url = null;
          this.attributes.status = "bad";
        }
      });
    }
  };

  // ui/theme/style/UIImageGrid.js
  var UIImageGridItem = class {
    constructor() {
    }
  };
  var UIImageGrid = class {
    constructor() {
    }
  };

  // ui/theme/style/UIStyle.js
  var UIStyle = class {
    constructor() {
      this.border = null;
      this.background = null;
    }
  };

  // ui/theme/UIStatus.js
  var UIStatus = class {
    constructor(name, layout, style) {
      this.elementName = "UIStatus";
      this.styleMap = null;
    }
  };

  // ui/theme/UITheme.js
  var UITheme = class {
    constructor() {
      this.statusMap = /* @__PURE__ */ new Map();
      this.styleMap = /* @__PURE__ */ new Map();
      this.frameMap = /* @__PURE__ */ new Map();
      this.layoutMap = /* @__PURE__ */ new Map();
      this.backgroundMap = /* @__PURE__ */ new Map();
      this.colorMap = /* @__PURE__ */ new Map();
      this.gradientMap = /* @__PURE__ */ new Map();
      this.imageMap = /* @__PURE__ */ new Map();
      this.spriteMap = /* @__PURE__ */ new Map();
    }
  };

  // ElementAPI.js
  var ElementAPI = class extends Application {
    constructor() {
      super();
      this.elementName = "ElementAPI";
      this.context = new UIContext();
      this.moduleMap = /* @__PURE__ */ new Map();
      this.fileHandlerMap = /* @__PURE__ */ new Map();
      this.downloadMap = /* @__PURE__ */ new Map();
      this.documentMap = /* @__PURE__ */ new Map();
      this.namespaceMap = /* @__PURE__ */ new Map();
      this.namespaceMap.set("default", new Namespace());
      this.themeMap = /* @__PURE__ */ new Map();
      this.colorMap = /* @__PURE__ */ new Map();
      this.gradientMap = /* @__PURE__ */ new Map();
      this.imageMap = /* @__PURE__ */ new Map();
      this.spriteMap = /* @__PURE__ */ new Map();
      this.statusMap = /* @__PURE__ */ new Map();
      this.styleMap = /* @__PURE__ */ new Map();
      this.layoutMap = /* @__PURE__ */ new Map();
      this.componentMap = /* @__PURE__ */ new Map();
      this.namespaceMap.forEach((val, key) => {
      });
    }
    boot(option) {
      this.context.boot(option);
      if (option.platform == "web") {
      }
    }
    appendNamespace(option) {
      if (option.namespace) {
      }
    }
    lookupNamespace(name) {
      return this.namespaceMap.get(name);
    }
    appendTheme(option) {
    }
    lookupTheme(name) {
    }
    appendComponent(component) {
      if (component && component.name) {
        this.componentMap.set(component.name(), component);
      }
    }
    removeComponent(component) {
    }
    loadFile(option) {
      if (this.context.platform) {
        this.context.platform.loadFile(option);
      }
    }
    handleFile(option) {
      switch (option.type) {
        case "text/xml":
          {
            this.loadDocument({ type: "xml", content: option.content, path: option.path });
          }
          break;
        case "application/xml":
          {
            console.log("XHR XML Loaded : ");
            console.log(option.path);
            console.log(option.type);
            console.log(option.content);
          }
          break;
        case "text/json":
          {
            const obj = JSON.parse(option.content);
            console.log("XHR JSON Loaded");
            console.log(option.path);
            console.log(option.type);
            console.log(option.content);
          }
          break;
        case "application/json":
          {
            console.log(this.loadDocument({ type: "json", content: option.content, namespace: option.namespace }));
          }
          break;
        case "audio/mpeg":
          {
            this.downloadMap.set(option.path, option.content);
          }
          break;
        case "image/png":
          {
            this.downloadMap.set(option.path, option.content);
          }
          break;
        case "image/jpeg":
          {
            this.downloadMap.set(option.path, option.content);
          }
          break;
        case "application/javascript":
          {
            this.downloadMap.set(option.path, option.content);
          }
          break;
        default:
          break;
      }
    }
    loadDocument(option) {
      if (option.type == "xml") {
        if (this.context.platform) {
          let document2 = this.context.platform.loadXML(option);
          if (document2) {
            this.documentMap.set(option.path, document2);
            console.log("new document created .");
            console.log(this.documentMap);
          }
        } else
          throw new Error("platform not ready");
      } else if (option.type == "json") {
        return JSON.parse(option.content);
      }
    }
    handleDocument(option) {
      if (option && option.document) {
        switch (option.document.instruction) {
          case "uiml":
            {
            }
            break;
          case "mnml":
            {
            }
            break;
          default:
            {
            }
            break;
        }
      }
    }
    buildUI(option) {
    }
  };
  if (!globalThis.ElementJS) {
    globalThis.ElementJS = new ElementAPI();
    ElementJS.Module = Module;
    ElementJS.Element = Element;
    ElementJS.UIElement = UIElement;
    ElementJS.UIComponent = UIComponent;
    ElementJS.UIContext = UIContext;
  }
})();
