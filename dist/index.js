/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/basic/object-state.js":
/*!***********************************!*\
  !*** ./src/basic/object-state.js ***!
  \***********************************/
/*! exports provided: ObjectState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectState\", function() { return ObjectState; });\n/* harmony import */ var _rxarray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxarray */ \"./src/basic/rxarray.js\");\n\r\n\r\nclass ObjectState{\r\n  constructor(){\r\n    this.envetHandlers = {}\r\n  }\r\n\r\n  watch(attribute, callbackFunction){\r\n    if(!this.envetHandlers[attribute]){\r\n      this.envetHandlers[attribute] = new _rxarray__WEBPACK_IMPORTED_MODULE_0__[\"RXArray\"]\r\n    }\r\n    if(!this.envetHandlers[attribute].contains(callbackFunction)){\r\n      this.envetHandlers[attribute].push(callbackFunction)\r\n    }\r\n  }\r\n\r\n  cancelWatch(attribute, callbackFunction){\r\n    console.assert(this.envetHandlers[attribute], 'EditorState: did not register this event handler')\r\n    this.envetHandlers[attribute].remove(callbackFunction)\r\n  }\r\n\r\n  distributeEvent(attribute){\r\n    this.distributeEventWithoutGlobal(attribute)\r\n    this.distributeEventWithoutGlobal('changed')//全局事件\r\n  }\r\n\r\n  distributeEventWithoutGlobal(attribute){\r\n    let handlers = this.envetHandlers[attribute];\r\n    if(handlers){\r\n      handlers.forEach((handler)=>{\r\n        handler(this)\r\n      })\r\n    }\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/basic/object-state.js?");

/***/ }),

/***/ "./src/basic/rxarray.js":
/*!******************************!*\
  !*** ./src/basic/rxarray.js ***!
  \******************************/
/*! exports provided: RXArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXArray\", function() { return RXArray; });\nclass RXArray extends Array{\r\n  first(){\r\n    if(this.length > 0){\r\n      return this[0]\r\n    }\r\n  }\r\n\r\n  last(){\r\n    if(this.length > 0){\r\n      return this[this.length - 1]\r\n    }\r\n  }\r\n\r\n  before(refence){\r\n    for(var i = 0; i < this.length; i++){\r\n      if(this[i] === refence && i > 0){\r\n        return this[i - 1];\r\n      }\r\n    }\r\n  }\r\n\r\n  after(refence){\r\n    for(var i = 0; i < this.length; i++){\r\n      if(this[i] === refence && i < this.length){\r\n        return this[i + 1];\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  inertBefore(child, refence){\r\n    for(var i = 0; i < this.length; i++){\r\n      if(this[i] === refence){\r\n        this.splice(i, 0, child)\r\n        return;\r\n      }\r\n    }\r\n  }\r\n\r\n  inertAfter(child, refence){\r\n    for(var i = 0; i < this.length; i++){\r\n      if(this[i] === refence){\r\n        this.splice(i + 1, 0, child)\r\n        return\r\n      }\r\n    }\r\n  }\r\n\r\n  remove(node){\r\n    for (var i = 0; i < this.length; i++) {\r\n      if(this[i] === node){\r\n        this.splice(i, 1)\r\n        break\r\n      }\r\n    }\r\n  }\r\n\r\n  add(node){\r\n    if(!this.contains(node)){\r\n      this.push(node)\r\n    }\r\n  }\r\n\r\n  contains(node){\r\n    for (var i = 0; i < this.length; i++) {\r\n      if(this[i] === node){\r\n        return true\r\n      }\r\n    }\r\n\r\n    return false\r\n  }\r\n\r\n  tongleOnCondition(condition, node){\r\n    if(condition){\r\n      this.add(node)\r\n    }\r\n    else{\r\n      this.remove(node)\r\n    }\r\n  }\r\n\r\n  clear(){\r\n    this.length = 0\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/basic/rxarray.js?");

/***/ }),

/***/ "./src/basic/rxcomponent.js":
/*!**********************************!*\
  !*** ./src/basic/rxcomponent.js ***!
  \**********************************/
/*! exports provided: RXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXComponent\", function() { return RXComponent; });\n/* harmony import */ var _rxarray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rxarray */ \"./src/basic/rxarray.js\");\n\r\n\r\nclass RXComponent{\r\n  constructor(elementName = 'div'){\r\n    this.children = new _rxarray__WEBPACK_IMPORTED_MODULE_0__[\"RXArray\"]\r\n    this.classList = new _rxarray__WEBPACK_IMPORTED_MODULE_0__[\"RXArray\"]\r\n    this.style = {}\r\n    this.attrs = {}\r\n    this.domOns = {}\r\n    this.elementName = elementName\r\n  }\r\n\r\n  on(eventName, callback){\r\n    this[eventName] = callback\r\n    return this\r\n  }\r\n\r\n  off(eventName){\r\n    delete this[eventName]\r\n    return this\r\n  }\r\n\r\n  domOn(name, callback){\r\n    if(this.$dom){\r\n      this.$dom.addEventListener(name, callback)\r\n    }\r\n    this.domOns[name] = callback\r\n    return this\r\n  }\r\n\r\n  domOff(name, callback){\r\n    if(this.$dom){\r\n      this.$dom.removeEventListener(name, callback)\r\n    }\r\n    delete this.domOns[name]\r\n    return this\r\n  }\r\n\r\n  pushChild(child){\r\n    this.children.push(child)\r\n    return this\r\n  }\r\n\r\n  unshiftChild(child){\r\n    this.children.unshift(child)\r\n    return this\r\n  }\r\n\r\n  cssClass(className){\r\n    this.classList.add(className)\r\n    if(this.$dom){\r\n      this.$dom.classList.add(className)\r\n    }\r\n    return this\r\n  }\r\n\r\n  removeCssClass(className){\r\n    if(this.classList.contains(className)){\r\n     this.classList.remove(className)\r\n      if(this.$dom){\r\n        this.$dom.classList.remove(className)\r\n      }\r\n    }\r\n    return this\r\n  }\r\n\r\n  cssStyle(name, value){\r\n    this.style[name] = value\r\n    return this\r\n  }\r\n\r\n  removeCssStyle(name){\r\n    delete this.style[name]\r\n  }\r\n\r\n  domAttr(name, value){\r\n    this.attrs[name] = value\r\n    return this\r\n  }\r\n\r\n  removeDomAttr(name){\r\n    delete this.attrs[name]\r\n    return this\r\n  }\r\n\r\n  tongle(cssClass){\r\n    if(this.classList.contains(cssClass)){\r\n     this.classList.remove(cssClass)\r\n      if(this.$dom){\r\n        this.$dom.classList.remove(cssClass)\r\n      }\r\n    }\r\n    else{\r\n     this.classList.add(cssClass)\r\n      if(this.$dom){\r\n        this.$dom.classList.add(cssClass)\r\n      }\r\n    }\r\n  }\r\n  //setInnerHTML(innerHTML){\r\n  //  this.innerHTML = innerHTML\r\n  //  return this\r\n  //}\r\n\r\n  render(parentElement){\r\n    this.$dom =  document.createElement(this.elementName)\r\n    parentElement.appendChild(this.$dom)\r\n\r\n    if(this.innerHTML){\r\n      this.$dom.innerHTML = this.innerHTML\r\n    }\r\n\r\n    for(var styleName in this.style){\r\n      this.$dom.style[styleName] = this.style[styleName]\r\n    }\r\n\r\n    this.classList.forEach((className)=>{\r\n      this.$dom.classList.add(className)\r\n    })\r\n\r\n    for(var attrName in this.attrs){\r\n      this.$dom[attrName] = this.attrs[attrName]\r\n    }\r\n\r\n    for(var eventName in this.domOns){\r\n      this.$dom.addEventListener(eventName, this.domOns[eventName])\r\n    }\r\n\r\n    this.children.forEach((child)=>{\r\n      child.render(this.$dom)\r\n    })\r\n    return this\r\n  }\r\n\r\n  refresh(){\r\n    if(this.$dom){\r\n      let parentDomElement = this.$dom.parentNode\r\n      this.destory()\r\n      this.render(parentDomElement)\r\n    }\r\n  }\r\n\r\n  setInnerHTML(innerHTML){\r\n    this.innerHTML = innerHTML\r\n    if(this.$dom){\r\n      this.$dom.innerHTML = innerHTML\r\n    }\r\n    return this\r\n  }\r\n\r\n  destory(){\r\n    this.$dom.parentNode.removeChild(this.$dom)\r\n    this.$dom = ''\r\n  }\r\n\r\n  clearChild(){\r\n    this.children = new _rxarray__WEBPACK_IMPORTED_MODULE_0__[\"RXArray\"]()\r\n  }\r\n\r\n  show(){\r\n    this.style.display = 'flex'\r\n    if(this.$dom){\r\n      this.$dom.style.display = 'flex'\r\n    }\r\n    return this\r\n  }\r\n\r\n  hide(){\r\n    this.style.display = 'none'\r\n    if(this.$dom){\r\n      this.$dom.style.display = 'none'\r\n    }\r\n    return this\r\n  }\r\n\r\n  focus(){\r\n    if(this.$dom){\r\n      this.$dom.focus()\r\n    }\r\n    return this\r\n  }\r\n\r\n  clear(){\r\n    if(this.$dom){\r\n      this.$dom.value = \"\"\r\n    }\r\n    return this\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/basic/rxcomponent.js?");

/***/ }),

/***/ "./src/core/canvas-state.js":
/*!**********************************!*\
  !*** ./src/core/canvas-state.js ***!
  \**********************************/
/*! exports provided: CanvasState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanvasState\", function() { return CanvasState; });\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/object-state */ \"./src/basic/object-state.js\");\n\r\n\r\nclass CanvasState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_0__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__screenWidth = 'md'\r\n    this.__preview = false\r\n    this.__showEditMargin = true\r\n    this.__showOutline = true\r\n    this.__showLabel = true\r\n\r\n  }\r\n\r\n  get screenWidth(){\r\n    return this.__screenWidth\r\n  }\r\n\r\n  set screenWidth(screenWidth){\r\n    if(this.__screenWidth == screenWidth){return} \r\n    this.__screenWidth = screenWidth\r\n    this.distributeEvent('screenWidth')\r\n  }\r\n\r\n\r\n  get preview(){\r\n    return this.__preview\r\n  }\r\n\r\n  set preview(preview){\r\n    if(this.__preview == preview){return} \r\n    this.__preview = preview\r\n    this.distributeEvent('preview')\r\n  }\r\n\r\n  get showEditMargin(){\r\n    return this.__showEditMargin\r\n  }\r\n\r\n  set showEditMargin(showEditMargin){\r\n    if(this.__showEditMargin == showEditMargin){return} \r\n    this.__showEditMargin = showEditMargin\r\n    this.distributeEvent('showEditMargin')\r\n  }\r\n\r\n  get showOutline(){\r\n    return this.__showOutline\r\n  }\r\n\r\n  set showOutline(showOutline){\r\n    if(this.__showOutline == showOutline){return} \r\n    this.__showOutline = showOutline\r\n    this.distributeEvent('showOutline')\r\n  }\r\n\r\n  get showLabel(){\r\n    return this.__showLabel\r\n  }\r\n\r\n  set showLabel(showLabel){\r\n    if(this.__showLabel == showLabel){return} \r\n    this.__showLabel = showLabel\r\n    this.distributeEvent('showLabel')\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/core/canvas-state.js?");

/***/ }),

/***/ "./src/core/canvas.js":
/*!****************************!*\
  !*** ./src/core/canvas.js ***!
  \****************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node */ \"./src/core/node.js\");\n\r\n\r\nclass Canvas extends _node__WEBPACK_IMPORTED_MODULE_0__[\"Node\"]{\r\n  constructor(workspace) {\r\n    super()\r\n    this.activeState = this.normalState\r\n    this.focusState = this.normalState\r\n    this.parentViewDomElement = workspace;\r\n    this.acceptedChildren=''\r\n    this.exceptChildren = ['BSCol','BSW100']\r\n    this.heightDropMargin = 0;\r\n    this.widthDropMargin = 0;\r\n    this.padding = '30px';\r\n\r\n    this.stateChanged = (oldState, newState)=>{}\r\n  }\r\n\r\n  getParentViewDomElement(){\r\n    return this.parentViewDomElement\r\n  }\r\n\r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    model.name = 'div'\r\n    model.styles.width = \"100%\"\r\n    model.styles['min-height'] = \"calc(100vh)\"\r\n    model.styles.cursor = 'default'\r\n    model.styles['padding'] = '2px'\r\n    //model.styles['padding-top'] = '25px'\r\n    //model.styles['padding-right'] = '5px'\r\n    model.classList.push('canvas')\r\n    model.toolbar = ''\r\n    model.label = ''\r\n    return model\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/canvas.js?");

/***/ }),

/***/ "./src/core/mini-editbar.js":
/*!**********************************!*\
  !*** ./src/core/mini-editbar.js ***!
  \**********************************/
/*! exports provided: MiniEditbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MiniEditbar\", function() { return MiniEditbar; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/object-state */ \"./src/basic/object-state.js\");\n\r\n\r\n\r\nclass EditorState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_1__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__bold = false\r\n    this.__italic = false\r\n    this.__underline = false\r\n    this.__strikeThrough = false\r\n    this.__isLink = false\r\n  }\r\n\r\n  get bold(){\r\n    return this.__bold\r\n  }\r\n\r\n  set bold(bold){\r\n    if(this.__bold == bold){return} \r\n    this.__bold = bold\r\n    this.distributeEvent('bold')\r\n  }\r\n\r\n  get italic(){\r\n    return this.__italic\r\n  }\r\n\r\n  set italic(italic){\r\n    if(this.__italic == italic){return} \r\n    this.__italic = italic\r\n    this.distributeEvent('italic')\r\n  }\r\n\r\n  get underline(){\r\n    return this.__underline\r\n  }\r\n\r\n  set underline(underline){\r\n    if(this.__underline == underline){return} \r\n    this.__underline = underline\r\n    this.distributeEvent('underline')\r\n  }\r\n  get strikeThrough(){\r\n    return this.__strikeThrough\r\n  }\r\n\r\n  set strikeThrough(strikeThrough){\r\n    if(this.__strikeThrough == strikeThrough){return} \r\n    this.__strikeThrough = strikeThrough\r\n    this.distributeEvent('strikeThrough')\r\n  }\r\n\r\n  get isLink(){\r\n    return this.__isLink\r\n  }\r\n\r\n  set isLink(isLink){\r\n    if(this.__isLink == isLink){return} \r\n    this.__isLink = isLink\r\n    this.distributeEvent('isLink')\r\n  }\r\n\r\n}\r\n\r\nclass BarButton extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(title, callback){\r\n    super()\r\n    this.cssClass('mini-button')\r\n    this.domAttr('title', title)  \r\n    this.domOn('click', callback)\r\n  }  \r\n}\r\n\r\nconst isLink = () => {\r\n  if (window.getSelection().toString !== '') {\r\n    let selection = window.getSelection()\r\n    selection = selection.rangeCount > 0 ? selection.getRangeAt(0) :''\r\n    if (selection) {\r\n      if (selection.startContainer.parentNode.tagName === 'A'\r\n      || selection.endContainer.parentNode.tagName === 'A') {\r\n        return true\r\n      } else { return false }\r\n    } else { return false }\r\n  }\r\n}\r\n\r\nclass MiniEditbar extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('mini-editbar')\r\n    this.hide()\r\n    this.state = new EditorState\r\n\r\n    this.domOn('mousedown', (event)=>{\r\n      event.preventDefault()\r\n    })\r\n  \r\n    let boldBtn = new BarButton('Bold', ()=>{\r\n        document.execCommand('bold', false, null)\r\n        this.updateButtonsState()\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<b>B</b>')\r\n\r\n    this.pushChild(boldBtn)\r\n\r\n    let italicBtn = new BarButton('Italic', ()=>{\r\n        document.execCommand('italic', false, null)\r\n        this.state.italic = !this.state.italic\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<i>I</i>')\r\n    this.pushChild( italicBtn )\r\n\r\n    let underlineBtn = new BarButton('Underline', ()=>{\r\n        document.execCommand('underline', false, null)\r\n        this.updateButtonsState()\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<u>U</u>')\r\n    this.pushChild( underlineBtn )\r\n\r\n    let strikeBtn = new BarButton('Strike', ()=>{\r\n        document.execCommand('strikeThrough', false, null)\r\n        this.updateButtonsState()\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<strike>S</strike>')\r\n    this.pushChild( strikeBtn )\r\n\r\n    let linkBtn = new BarButton('Link', ()=>{\r\n        if(this.state.isLink){\r\n          document.execCommand('unlink', false, null)\r\n        }\r\n        else{\r\n          document.execCommand('createLink', false, '#')\r\n        }\r\n        this.updateButtonsState()\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<div style=\"transform:rotate(45deg)\">⫘</div>')\r\n    this.pushChild( linkBtn )\r\n\r\n    let codeBtn = new BarButton('Switch Code Editor', ()=>{\r\n        this.updateButtonsState()\r\n      })\r\n      .cssClass('icon-button')\r\n      .setInnerHTML('<div\"><></div>')\r\n    this.pushChild( codeBtn )\r\n    /*let btnInsert = new BarButton('Bootstrap Styles', ()=>{\r\n      })\r\n      .cssClass('mini-styles')\r\n      .setInnerHTML('Insert <span>▾</span>')\r\n    this.pushChild( btnInsert )*/\r\n\r\n    document.addEventListener(\"selectionchange\", (event)=>{\r\n      this.updateButtonsState()\r\n    })\r\n\r\n    this.watchOne('bold', boldBtn)\r\n    this.watchOne('italic', italicBtn)\r\n    this.watchOne('underline', underlineBtn)\r\n    this.watchOne('strikeThrough', strikeBtn)\r\n    this.watchOne('isLink', linkBtn)    \r\n  }\r\n\r\n  watchOne(stateName, btn){\r\n    this.state.watch(stateName, ()=>{\r\n      if(this.state[stateName]){\r\n        btn.cssClass('active')\r\n      }\r\n      else{\r\n        btn.removeCssClass('active')\r\n      }\r\n    })\r\n  }\r\n\r\n  show(followElement){\r\n    if(!followElement) return\r\n    this.followElement(followElement)\r\n    this.updateButtonsState()\r\n    return super.show()\r\n  }\r\n\r\n  updateButtonsState(){\r\n    this.state.bold = document.queryCommandState('bold')\r\n    this.state.italic = document.queryCommandState('italic')\r\n    this.state.underline = document.queryCommandState('underline')\r\n    this.state.strikeThrough = document.queryCommandState('strikeThrough')\r\n    this.state.isLink = isLink()\r\n  }\r\n\r\n  followElement(domElement){\r\n    let rect = domElement.getBoundingClientRect()\r\n    let height = 32\r\n    if(this.$dom){\r\n      this.$dom.style.left = (rect.x -1)  + 'px'\r\n      if(rect.y < height){\r\n        this.$dom.style.top = (rect.y + rect.height) + 'px'\r\n      }\r\n      else{\r\n        this.$dom.style.top = (rect.y - height) + 'px'\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/core/mini-editbar.js?");

/***/ }),

/***/ "./src/core/node-label.js":
/*!********************************!*\
  !*** ./src/core/node-label.js ***!
  \********************************/
/*! exports provided: NodeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeLabel\", function() { return NodeLabel; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n\r\n\r\nclass NodeLabel extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('node-label')\r\n    this.domAttr('title', 'Can be draged')\r\n    this.hide()\r\n  }\r\n\r\n  show(label, followElement, offset){\r\n    if(!followElement) return\r\n    super.setInnerHTML(label)\r\n    this.followElement(followElement, offset)\r\n    return super.show()\r\n  }\r\n\r\n  followElement(domElement, offset){\r\n    let rect = domElement.getBoundingClientRect()\r\n    if(this.$dom){\r\n      this.$dom.style.left = rect.x + 'px'\r\n      if(rect.y < 20){\r\n        this.$dom.style.top = (rect.y + rect.height + offset) + 'px'\r\n      }\r\n      else{\r\n        this.$dom.style.top = (rect.y - 15 - offset) + 'px'\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/core/node-label.js?");

/***/ }),

/***/ "./src/core/node-state.js":
/*!********************************!*\
  !*** ./src/core/node-state.js ***!
  \********************************/
/*! exports provided: NodeState, CanDropState, NormalState, DragoverState, ActiveState, FocusState, DisableState, DraggedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeState\", function() { return NodeState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CanDropState\", function() { return CanDropState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NormalState\", function() { return NormalState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DragoverState\", function() { return DragoverState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ActiveState\", function() { return ActiveState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FocusState\", function() { return FocusState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisableState\", function() { return DisableState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DraggedState\", function() { return DraggedState; });\nclass NodeState {\r\n  constructor(node) {\r\n    this.node = node\r\n    this.classList = []\r\n    this.styles = {}\r\n    this.onMousemove = ()=>{/*console.log('mouse move NodeState')*/};\r\n    this.onBegindrag = ()=>{};\r\n    this.onMouseover = (event)=>{};\r\n    this.onMouseout = ()=>{};\r\n    this.onClick = ()=>{rxEditor.clearFocusStates()};\r\n    this.enter = ()=>{}\r\n    this.leave = ()=>{\r\n    }\r\n  }\r\n\r\n  mouseAtBefore(event){\r\n    let margin = this.node.dropMargin \r\n    return event.offsetX <= margin\r\n        ||event.offsetY <= margin\r\n  }\r\n\r\n  mouseAtAfter(event){\r\n    let margin = this.node.dropMargin \r\n    return event.srcElement.clientWidth - event.offsetX <= margin\r\n        ||event.srcElement.clientHeight - event.offsetY <= margin\r\n  }\r\n\r\n  mouseAtLeft(event){\r\n    return event.offsetX <= this.node.widthDropMargin\r\n  }\r\n\r\n  mouseAtRight(event){\r\n    return event.srcElement.clientWidth - event.offsetX <= this.node.widthDropMargin\r\n  }\r\n\r\n  mouseAtTop(event){\r\n    return event.offsetY <= this.node.heightDropMargin\r\n  }\r\n\r\n  mouseAtBottom(event){\r\n    return event.srcElement.clientHeight - event.offsetY <= this.node.heightDropMargin\r\n  }\r\n\r\n  mouseAtDropArea(evetn){\r\n    let margin = this.node.dropMargin \r\n    //console.log(event.offsetX, event.offsetY)\r\n    return event.offsetX > margin\r\n        && event.offsetY > margin\r\n        && event.srcElement.clientWidth - event.offsetX > margin\r\n        && event.srcElement.clientHeight - event.offsetY > margin\r\n  }\r\n\r\n}\r\n\r\nclass CanDropState extends NodeState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.onMousemove = (event)=>{\r\n      this.node.adoptFromToolbox()\r\n      this.doDragover(event)\r\n      rxEditor.followMouse(event)\r\n    }\r\n    this.onClick = (event)=>{\r\n      rxEditor.clearFocusStates()\r\n      this.node.changeToState('focusState')\r\n    }\r\n  }\r\n\r\n  doDragover(event){\r\n      if(rxEditor.draggedNode){\r\n        rxEditor.clearDraggedoverStates()\r\n        if(this.mouseAtLeft(event) || this.mouseAtTop(event)){\r\n          if(this.node.parent && this.node.parent.canAccept(rxEditor.draggedNode)){\r\n            rxEditor.draggedNode.moveBefore(this.node)\r\n            this.node.parent.changeToState('dragoverState')\r\n          }\r\n          return\r\n        }\r\n        if(this.mouseAtRight(event) || this.mouseAtBottom(event)){\r\n          if(this.node.parent && this.node.parent.canAccept(rxEditor.draggedNode)){\r\n            rxEditor.draggedNode.moveAfter(this.node)\r\n            this.node.parent.changeToState('dragoverState')\r\n          }\r\n          return\r\n        }\r\n\r\n        if(this.mouseAtBefore(event)){\r\n          if(this.node.canAccept(rxEditor.draggedNode)){\r\n            rxEditor.draggedNode.moveInTop(this.node)\r\n            this.node.changeToState('dragoverState')\r\n          }\r\n          return\r\n        }\r\n        if(this.mouseAtAfter(event) || this.mouseAtDropArea(event)){\r\n            //console.log('Before accepted')\r\n            if(this.node.canAccept(rxEditor.draggedNode)){\r\n              rxEditor.draggedNode.moveIn(this.node)\r\n              this.node.changeToState('dragoverState')\r\n            }\r\n         \r\n        }\r\n      }\r\n\r\n  }\r\n\r\n}\r\n\r\nclass NormalState extends CanDropState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.onMouseover = (event)=>{\r\n      if(!rxEditor.draggedNode){\r\n        rxEditor.clearActiveStates()\r\n        this.node.changeToState('activeState')\r\n      }\r\n    };\r\n  }\r\n}\r\n\r\nclass DragoverState extends CanDropState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.classList.push('dragover')\r\n    this.onMouseout = ()=>{\r\n      //console.log('mouse out',this.node.constructor.name)\r\n      this.node.changeToState('normalState')\r\n    };\r\n  }\r\n}\r\n\r\nclass ActiveState extends CanDropState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.classList.push('actived')\r\n    this.enter = ()=>{\r\n      rxEditor.activedLabel.show(node.label, node.view.$dom, 1)\r\n    }\r\n    this.leave = ()=>{\r\n      rxEditor.activedLabel.hide()\r\n    }\r\n    this.onMouseout = ()=>{\r\n      //console.log('mouse out')\r\n      this.node.changeToState('normalState')\r\n    };\r\n    this.onMouseover = (event)=>{\r\n      if(!rxEditor.draggedNode){\r\n        rxEditor.clearActiveStates()\r\n        this.node.changeToState('activeState')\r\n      }\r\n    };\r\n  }\r\n}\r\n\r\nclass FocusState extends NodeState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.classList.push('focused')\r\n    this.enter = ()=>{\r\n      let dom = node.view.$dom\r\n      rxEditor.focusedLabel.show(node.label, dom, 2)\r\n      rxEditor.toolbar.show(dom)\r\n      rxEditor.focusedNode = node\r\n    }\r\n    this.leave = ()=>{\r\n      rxEditor.focusedLabel.hide()\r\n      rxEditor.toolbar.hide()\r\n      rxEditor.focusedNode = ''\r\n    }\r\n    this.onClick = (event)=>{\r\n      event.stopPropagation()\r\n    }\r\n\r\n    this.onBegindrag = (event)=>{\r\n      //if(this.node.draggable){\r\n      this.preventDefault\r\n      rxEditor.draggedNode = this.node\r\n      rxEditor.beginFollowMouse(event)\r\n      this.node.changeToState('draggedState')\r\n      //}\r\n    };\r\n  }\r\n}\r\n\r\nclass DisableState extends NodeState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.onMousemove = (event)=>{\r\n      event.preventDefault()\r\n      rxEditor.followMouse(event) \r\n      //console.log('mouse move DisableState')\r\n    };\r\n    this.onMouseout = (event)=>{event.preventDefault()};\r\n  }\r\n}\r\n\r\nclass DraggedState extends DisableState{\r\n  constructor(node) {\r\n    super(node)\r\n    this.classList.push('dragged')\r\n    this.onMousemove = (event)=>{\r\n      if(this.node.parent){\r\n        this.node.parent.changeToState('dragoverState')\r\n      }\r\n      rxEditor.followMouse(event)\r\n      //console.log('mouse move DraggedState')\r\n    };\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/core/node-state.js?");

/***/ }),

/***/ "./src/core/node-toolbar.js":
/*!**********************************!*\
  !*** ./src/core/node-toolbar.js ***!
  \**********************************/
/*! exports provided: NodeToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeToolbar\", function() { return NodeToolbar; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n\r\n\r\nclass ToolbarButton extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(title, iconName, on, callback){\r\n    super()\r\n    this.cssClass('rx-button')\r\n    this.domAttr('title', title)  \r\n    this.innerHTML = `<i class=\"fa ${iconName}\"></i>`\r\n    this.domOn(on, callback)\r\n  }  \r\n}\r\n\r\nclass NodeToolbar extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('node-toolbar')\r\n    this.hide()\r\n\r\n    this.pushChild(new ToolbarButton('Focus Parent', 'fa-arrow-up', 'click' , ()=>{\r\n      if(rxEditor.focusedNode){\r\n        rxEditor.focusedNode.up(event)\r\n      }\r\n    }))\r\n    this.pushChild(new ToolbarButton('Move', 'fa-arrows','mousedown', (event)=>{\r\n        if(rxEditor.focusedNode){\r\n          rxEditor.focusedNode.begindragIcon(event)\r\n        }\r\n      })\r\n      .cssStyle('cursor', 'move')\r\n    )\r\n    this.pushChild(new ToolbarButton('Duplicate', 'fa-copy', 'click', ()=>{\r\n      if(rxEditor.focusedNode){\r\n        rxEditor.focusedNode.duplicate(event)\r\n      }\r\n    }))\r\n    /*this.pushChild(new ToolbarButton('Edit', 'fa-edit', 'click', ()=>{\r\n      if(rxEditor.focusedNode){\r\n        rxEditor.focusedNode.edit(event)\r\n      }\r\n    }))*/\r\n    this.pushChild(new ToolbarButton('Delete', 'fa-trash-o', 'click', ()=>{\r\n      if(rxEditor.focusedNode){\r\n        rxEditor.focusedNode.delete(event)\r\n      }\r\n    }))\r\n  }\r\n\r\n  show(followElement){\r\n    if(!followElement) return\r\n    this.followElement(followElement)\r\n    return super.show()\r\n  }\r\n\r\n  followElement(domElement){\r\n    let rect = domElement.getBoundingClientRect()\r\n    if(this.$dom){\r\n      this.$dom.style.left = (rect.x + rect.width - 99) + 'px'\r\n      if(rect.y < 26){\r\n        this.$dom.style.top = (rect.y + rect.height + 2) + 'px'\r\n      }\r\n      else{\r\n        this.$dom.style.top = (rect.y - 26) + 'px'\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/core/node-toolbar.js?");

/***/ }),

/***/ "./src/core/node-view.js":
/*!*******************************!*\
  !*** ./src/core/node-view.js ***!
  \*******************************/
/*! exports provided: NodeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NodeView\", function() { return NodeView; });\nclass NodeView{\r\n  constructor() {\r\n  }\r\n\r\n  render(model, parentDoment){\r\n    this.parentDoment = parentDoment\r\n    this.putDown(parentDoment)\r\n    \r\n    this.$dom = document.createElement(model.name);\r\n    this.doRender(model, parentDoment, this.$dom)\r\n  }\r\n\r\n  renderMouseFollower(model, parentDoment){\r\n    let domElement = document.createElement(model.name);\r\n    this.doRender(model, parentDoment, domElement)\r\n\r\n    if(this.$dom){\r\n      domElement.style.width = this.$dom.clientWidth + 'px'\r\n    }\r\n\r\n    return domElement\r\n  }\r\n\r\n  refreshState(model){\r\n    if(this.$dom){\r\n      //let y = this.$dom.getBoundingClientRect().y\r\n      this.$dom.classList.remove('actived','focused','dragged', 'dragover')\r\n      this.renderStylesAndClasses(model, this.$dom)\r\n    }\r\n  }\r\n\r\n  refresh(model, parentDoment){\r\n    if(!this.$dom) return;\r\n    this.putDown()\r\n    this.parentDoment = parentDoment\r\n    this.doRefresh(model, parentDoment, this.$dom)\r\n  }\r\n\r\n  doRender(model, parentDoment, domElement){\r\n    domElement.innerHTML = model.innerHTML ? model.innerHTML : ''\r\n    this.renderStylesAndClasses(model, domElement)\r\n    this.bindEvents(domElement, model.on)\r\n    this.showAttributes(model,domElement)\r\n    parentDoment.appendChild(domElement);\r\n  }\r\n\r\n  doRefresh(model, parentDoment, domElement){\r\n    this.renderStylesAndClasses(model, domElement)\r\n    this.bindEvents(domElement, model.on)\r\n    this.showAttributes(model,domElement)\r\n    parentDoment.appendChild(domElement);\r\n  }\r\n\r\n\r\n  renderStylesAndClasses(model, domElement){\r\n    if(domElement){\r\n      if(model.styles){\r\n        for(var styleName in model.styles){\r\n          domElement.style[styleName] = model.styles[styleName]\r\n        }\r\n      }\r\n\r\n      model.classList.forEach((className)=>{\r\n        if(className){\r\n          domElement.classList.add(className)\r\n        }\r\n      })\r\n      \r\n    }\r\n  }\r\n\r\n  showAttributes(model, domElement){\r\n    for(var attributeName in model.attributes){\r\n      domElement[attributeName] = model.attributes[attributeName]\r\n    }\r\n  }\r\n\r\n  bindEvents(element, on){\r\n    for(var eventName in on){\r\n      //element.addEventListener(eventName, on[eventName])\r\n      element[eventName] = on[eventName]\r\n    }\r\n  }\r\n\r\n  putDown(){\r\n    if(this.$dom){\r\n      if(this.parentDoment.contains(this.$dom)){\r\n        this.parentDoment.removeChild(this.$dom);\r\n      }\r\n    }\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/core/node-view.js?");

/***/ }),

/***/ "./src/core/node.js":
/*!**************************!*\
  !*** ./src/core/node.js ***!
  \**************************/
/*! exports provided: Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Node\", function() { return Node; });\n/* harmony import */ var _node_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node-view */ \"./src/core/node-view.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/rxarray */ \"./src/basic/rxarray.js\");\n/* harmony import */ var _node_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node-state */ \"./src/core/node-state.js\");\n\r\n\r\n\r\n\r\n\r\nclass Node{\r\n  constructor() {\r\n    this.seedId()\r\n    this.toolboxInfo = {}\r\n  \tthis.children=new _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__[\"RXArray\"]\r\n  \tthis.view = new _node_view__WEBPACK_IMPORTED_MODULE_0__[\"NodeView\"]()\r\n    this.dropMargin = 30;\r\n    this.mouseFollowerWidth = '200px'\r\n\r\n    //空表示所有都接受，空数组表示都不接受\r\n    this.acceptedChildren=[]\r\n\r\n    //空和空数组都表示所有都不排除\r\n    this.exceptChildren = ''\r\n\r\n    this.editMarginStyle = {\r\n      padding:'30px',\r\n    }\r\n\r\n    this.initStates()\r\n\r\n    this.mouseFollower = {\r\n      offsetX:10,\r\n      offsetY:0\r\n    }\r\n\r\n    this.begindrag = (event)=>{\r\n      event.stopPropagation()\r\n      this.state.onBegindrag(event)\r\n    }\r\n\r\n    this.begindragLabel = (event)=>{\r\n      if(this.view.$dom){\r\n        this.mouseFollower.offsetX = event.offsetX\r\n        this.mouseFollower.offsetY = -18 + event.offsetY\r\n      }\r\n      this.begindrag(event)\r\n    }\r\n\r\n    this.begindragIcon = (event)=>{\r\n      if(this.view.$dom){\r\n        this.mouseFollower.offsetX = this.view.$dom.clientWidth - 96 + event.offsetX\r\n        this.mouseFollower.offsetY = -24 + event.offsetY\r\n      }\r\n      this.begindrag(event)\r\n    }\r\n\r\n    this.mousemove = (event)=>{\r\n      //console.log(event)\r\n      event.stopPropagation()\r\n      this.state.onMousemove(event)\r\n    }\r\n    this.mouseover = (event)=>{\r\n      //console.log(event)\r\n      event.stopPropagation()\r\n      this.state.onMouseover(event)\r\n    }\r\n    this.mouseout = (event)=>{\r\n      //console.log(event)\r\n      event.stopPropagation()\r\n      this.state.onMouseout(event)\r\n    }\r\n\r\n    this.onclick = (event)=>{\r\n      event.stopPropagation()\r\n      this.state.onClick(event)\r\n    }\r\n\r\n    this.duplicate = ()=>{\r\n      this.changeToState('normalState')\r\n      this.inertAfterSelf(this.clone())\r\n      rxEditor.render()\r\n    }\r\n\r\n    this.edit = (event)=>{\r\n      console.log('Edit')\r\n      event.stopPropagation()\r\n    }\r\n\r\n    this.up = (event)=>{\r\n      if(this.parent){\r\n        this.changeToState('normalState')\r\n        this.parent.changeToState('focusState')\r\n        event.stopPropagation()\r\n      }\r\n    }\r\n\r\n    this.delete =()=>{\r\n      if(confirm(\"Are you sure to delete?\")){\r\n        this.removeFromParent()\r\n        //rxEditor.render()\r\n      }\r\n    }\r\n\r\n    this.stateChanged = (oldState, newState)=>{\r\n      oldState.leave()\r\n      newState.enter()\r\n      rxEditor.nodeStateChanged(this, oldState, newState)\r\n    }\r\n\r\n  }\r\n\r\n  seedId(){\r\n    if(!Node.idSeed) Node.idSeed = 1\r\n    Node.idSeed ++\r\n    this.$id = Node.idSeed\r\n  }\r\n\r\n  initStates(){\r\n    this.normalState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"NormalState\"](this)\r\n    this.activeState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"ActiveState\"](this)\r\n    this.focusState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"FocusState\"](this)\r\n    this.dragoverState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"DragoverState\"](this)\r\n    this.draggedState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"DraggedState\"](this)\r\n    this.disableState = new _node_state__WEBPACK_IMPORTED_MODULE_2__[\"DisableState\"](this)\r\n    this.state = this.normalState\r\n  }\r\n\r\n  changeToState(stateName){\r\n    if(this.state === this[stateName]) return\r\n    let oldState = this.state\r\n    this.state = this[stateName]\r\n    this.refreshState()\r\n    this.stateChanged(oldState, this[stateName])\r\n  }\r\n\r\n  render(){\r\n    this.view.render(this.toViewModel(), this.getParentViewDomElement())\r\n    this.children.forEach(function(child){  \r\n      child.render()\r\n    })\r\n\r\n  }\r\n\r\n  refreshState(){\r\n    this.view.refreshState(this.toViewModel())\r\n    this.children.forEach(function(child){  \r\n      child.refreshState()\r\n    })\r\n  }\r\n\r\n  refresh(){\r\n    this.view.refresh(this.toViewModel(),this.getParentViewDomElement())\r\n    this.children.forEach(function(child){  \r\n      child.refresh()\r\n    })\r\n  }\r\n\r\n  createMouseFollower(){\r\n    let followerElement = document.createElement('div')\r\n    followerElement.classList.add('mouse-follow')\r\n    if(!this.parent){\r\n      followerElement.style.width = this.mouseFollowerWidth\r\n    }\r\n    this.renderMouseFollower(followerElement)\r\n\r\n    this.mouseFollower.$dom = followerElement\r\n    return this.mouseFollower\r\n  }\r\n\r\n  renderMouseFollower(parentDomElement){\r\n    let mouseFollower = this.view.renderMouseFollower(this.toViewModel(), parentDomElement)\r\n    this.children.forEach(function(child){  \r\n      child.renderMouseFollower(mouseFollower)\r\n    })\r\n\r\n    return mouseFollower\r\n  }\r\n\r\n  clearDraggedoverStates(){\r\n    if(this.state === this.dragoverState){\r\n      this.changeToState('normalState')\r\n    }\r\n    this.children.forEach(function(child){  \r\n      child.clearDraggedoverStates()\r\n    })\r\n  }\r\n\r\n  clearActiveStates(){\r\n    if(this.state === this.activeState){\r\n      this.changeToState('normalState')\r\n    }\r\n    this.children.forEach(function(child){  \r\n      child.clearActiveStates()\r\n    })\r\n  }\r\n\r\n  clearFocusStates(){\r\n    if(this.state === this.focusState){\r\n      this.changeToState('normalState')\r\n    }\r\n    this.children.forEach(function(child){  \r\n      child.clearFocusStates()\r\n    })\r\n  }\r\n\r\n  adoptFromToolbox(){\r\n    let draggedNode = rxEditor.draggedNode\r\n    if(draggedNode && !draggedNode.parent && this.canAccept(draggedNode)){\r\n      draggedNode.parent = this\r\n      draggedNode.render()\r\n      draggedNode.changeToState('draggedState')\r\n    }\r\n  }\r\n\r\n  getParentViewDomElement(){\r\n    return this.parent.view.$dom\r\n  }\r\n\r\n  createChild(nodeName){\r\n    let child = Node.createNode(this, nodeName)\r\n    this.children.add(child) \r\n    return child\r\n  }\r\n\r\n  firstChild(){\r\n    return this.children.first()\r\n  }\r\n\r\n  removeFromParent(){\r\n    if(this.parent){\r\n      this.view.putDown()\r\n      this.parent.children.remove(this)\r\n    }\r\n  }\r\n\r\n  unshiftChild(child){\r\n    child.parent = this\r\n    this.children.unshift(child) \r\n  }\r\n\r\n  pushChild(child){\r\n    child.parent = this\r\n    this.children.add(child) \r\n  }\r\n\r\n  moveInTop(targetParent){\r\n    if(targetParent.children.first() !== this){\r\n      this.removeFromParent()\r\n      targetParent.unshiftChild(this)\r\n      rxEditor.refresh()\r\n    }\r\n    //else{\r\n    //  console.log('Exist In Top')\r\n    //}\r\n  }\r\n\r\n  moveIn(targetParent){\r\n    if(targetParent.children.last() !== this){\r\n      this.removeFromParent()\r\n      targetParent.pushChild(this)\r\n      rxEditor.refresh()\r\n    }\r\n    //else{\r\n    //  console.log('Exist In')\r\n    //}\r\n  }\r\n\r\n  moveBefore(brother){\r\n    if(brother.children.before() !== this){\r\n      this.removeFromParent()\r\n      this.parent = brother.parent\r\n      brother.parent.children.inertBefore(this, brother);\r\n      rxEditor.refresh()\r\n    }\r\n    //else{\r\n    //  console.log('Exist In Before')\r\n    //}\r\n  }\r\n\r\n  moveAfter(brother){\r\n    if(brother.children.after() !== this){\r\n      this.removeFromParent()\r\n      this.parent = brother.parent\r\n      brother.parent.children.inertAfter(this, brother);\r\n      rxEditor.refresh()\r\n    }\r\n    //else{\r\n    //  console.log('Exist In After')\r\n    //}\r\n  }\r\n\r\n  inertAfterSelf(brother){\r\n    brother.parent = this.parent\r\n    this.parent.children.inertAfter(brother, this);\r\n    this.parent.refresh()\r\n  }\r\n\r\n  clone(){\r\n    let copy = this.make(this.parent)\r\n    this.children.forEach((child)=>{  \r\n      copy.pushChild(child.clone())\r\n    })\r\n    return copy\r\n  }\r\n\r\n  canAccept(child){\r\n    if(this.acceptedChildren  && this.acceptedChildren.length == 0){\r\n      return false\r\n    }\r\n\r\n    if(this.acceptedChildren && !this.containsInAccepted(child)){\r\n      return false\r\n    }\r\n\r\n    if(!this.acceptedChildren && this.containsInExcept(child)){\r\n      return false\r\n    }\r\n    return true\r\n  }\r\n\r\n  containsInAccepted(child){\r\n    let childName = child.className\r\n    for(var i = 0; i < this.acceptedChildren.length; i++){\r\n      if(this.acceptedChildren[i] === childName){\r\n        return true\r\n      }\r\n    }\r\n\r\n    return false\r\n  }\r\n\r\n  containsInExcept(child){\r\n    let childName = child.className\r\n    if(this.exceptChildren){\r\n      for(var i = 0; i < this.exceptChildren.length; i++){\r\n        if(this.exceptChildren[i] === childName){\r\n          return true\r\n        }\r\n      }\r\n    }\r\n\r\n    return false    \r\n  }\r\n\r\n  toViewModel(){\r\n    let classList = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__[\"RXArray\"]\r\n    classList.add('element');\r\n    classList.push.apply(classList, rxEditor.optionClasses)\r\n    //classList.push.apply(classList, this.$meta.baseClass)\r\n    classList.push.apply(classList, this.state.classList)\r\n\r\n    let styles = {}\r\n\r\n    if(rxEditor.state.showEditMargin){\r\n      Object.assign(styles, this.editMarginStyle)\r\n    }\r\n    Object.assign(styles, this.state.styles)\r\n\r\n    return {\r\n      //text:'test',\r\n      styles:styles,\r\n      classList:classList,\r\n      attributes:{},\r\n      on:{\r\n        onmousemove:this.mousemove,\r\n        onmouseover:this.mouseover,\r\n        onmouseout:this.mouseout,\r\n        onclick:this.onclick,\r\n      }\r\n    }\r\n  }\r\n\r\n  nodeChanged(node){\r\n    if(this.$id === node.id){\r\n      this.$meta = node.meta\r\n      return;\r\n    }\r\n\r\n    this.children.forEach((child)=>{\r\n      child.nodeChanged(node)\r\n    })\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/core/node.js?");

/***/ }),

/***/ "./src/core/park-mini-editbar.js":
/*!***************************************!*\
  !*** ./src/core/park-mini-editbar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ((model, node, noEnter = true)=>{\r\n  model.attributes.contentEditable = true\r\n  if(noEnter){\r\n    model.on.onkeydown = (event)=>{\r\n      if (event.keyCode === 13) {\r\n        event.preventDefault()\r\n        return false\r\n      }\r\n    }\r\n  }\r\n  model.on.onfocus = (event)=>{\r\n    rxEditor.miniEditbar.show(node.view.$dom)\r\n  }\r\n\r\n  model.on.onblur = (event)=>{\r\n    node.$meta.innerHTML = node.view.$dom.innerHTML\r\n    rxEditor.miniEditbar.hide()\r\n  }\r\n\r\n  model.on.onpaste = (event)=>{\r\n    let plainText  =  event.clipboardData.getData('text/plain'); \r\n    document.execCommand('insertText', false, plainText);\r\n  }\r\n});\n\n//# sourceURL=webpack:///./src/core/park-mini-editbar.js?");

/***/ }),

/***/ "./src/core/rxeditor-command-proxy.js":
/*!********************************************!*\
  !*** ./src/core/rxeditor-command-proxy.js ***!
  \********************************************/
/*! exports provided: RXEditorCommandProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXEditorCommandProxy\", function() { return RXEditorCommandProxy; });\nclass RXEditorCommandProxy{\r\n  constructor(){\r\n    window.addEventListener(\"message\", (event)=>{\r\n        this.handleMessage(event.data)\r\n    });\r\n\r\n    this.focusNode = (node)=>{\r\n      this.sendMessage({\r\n        name: 'focusNode',\r\n        node:{\r\n          id:node.$id,\r\n          meta:node.$meta,\r\n          schema:node.$schema,\r\n        }\r\n      })\r\n    }\r\n\r\n    this.unFocusNode = (node)=>{\r\n      this.sendMessage({\r\n        name: 'unFocusNode',\r\n        id: node.$id,\r\n      })\r\n    }\r\n  }\r\n\r\n  rxeditorReady(){\r\n    this.sendMessage({\r\n      name: 'rxeditorReady'\r\n    })\r\n  }\r\n\r\n  takeOverDraggingByWorkspace(){\r\n    this.sendMessage({\r\n      name: 'takeOverDraggingByWorkspace'\r\n    })\r\n  }\r\n\r\n\r\n  handleMessage(message){\r\n    //console.log('received:' + message.name + \":\" + message.rxNameId)\r\n    switch (message.name) {\r\n      case 'requestAssemble':\r\n        let toolboxInfo = this.serveForRXEditor.getElementDefine(message.rxNameId)\r\n        this.sendMessage({\r\n          name:'replyAssemble',\r\n          toolboxInfo:toolboxInfo\r\n        })\r\n        break;\r\n      case 'draggingFromToolbox':\r\n        this.serveForRXEditor.dragFromToolbox(message.rxNameId)\r\n        break;\r\n\r\n      case 'endDragFromToolbox':\r\n        this.serveForRXEditor.endDragFromToolbox(message.rxNameId)\r\n        break;\r\n      case 'changeCanvasState':\r\n        this.serveForRXEditor.changeCanvasState(message.state)\r\n        break;\r\n\r\n      case 'nodeChanged':\r\n        this.serveForRXEditor.nodeChanged(message.node)\r\n        break;\r\n    }\r\n  }\r\n\r\n\r\n  sendMessage(message){\r\n    window.parent.postMessage(message, '/');    \r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/rxeditor-command-proxy.js?");

/***/ }),

/***/ "./src/core/rxeditor.js":
/*!******************************!*\
  !*** ./src/core/rxeditor.js ***!
  \******************************/
/*! exports provided: RXEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXEditor\", function() { return RXEditor; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/core/canvas.js\");\n/* harmony import */ var _canvas_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas-state */ \"./src/core/canvas-state.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../basic/rxarray */ \"./src/basic/rxarray.js\");\n/* harmony import */ var _node_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node-label */ \"./src/core/node-label.js\");\n/* harmony import */ var _node_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node-toolbar */ \"./src/core/node-toolbar.js\");\n/* harmony import */ var _mini_editbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mini-editbar */ \"./src/core/mini-editbar.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass RXEditor{\r\n  constructor() {\r\n    this.state = new _canvas_state__WEBPACK_IMPORTED_MODULE_1__[\"CanvasState\"]\r\n    this.optionClasses = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_2__[\"RXArray\"]\r\n    this.optionClasses.add('show-outline')\r\n    //this.optionClasses.add('show-label')\r\n    this.activedLabel = new _node_label__WEBPACK_IMPORTED_MODULE_3__[\"NodeLabel\"]\r\n    this.focusedLabel = new _node_label__WEBPACK_IMPORTED_MODULE_3__[\"NodeLabel\"]\r\n    this.focusedLabel.cssClass('focused')\r\n    this.focusedLabel.domOn('mousedown', (event)=>{\r\n      if(rxEditor.focusedNode){\r\n        rxEditor.focusedNode.begindragLabel(event)\r\n      }\r\n    })\r\n\r\n    this.toolbar = new _node_toolbar__WEBPACK_IMPORTED_MODULE_4__[\"NodeToolbar\"]\r\n    this.miniEditbar = new _mini_editbar__WEBPACK_IMPORTED_MODULE_5__[\"MiniEditbar\"]\r\n  }\r\n\r\n  hangOn(id, commandProxy){\r\n    this.workspace = document.getElementById(id)\r\n    this.activedLabel.render(this.workspace)\r\n    this.focusedLabel.render(this.workspace)\r\n    this.toolbar.render(this.workspace)\r\n    this.miniEditbar.render(this.workspace)\r\n    this.canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__[\"Canvas\"](this.workspace)\r\n    this.canvas.render();\r\n    commandProxy.serveForRXEditor = this\r\n    this.commandProxy = commandProxy\r\n\r\n    this.commandProxy.rxeditorReady()\r\n    document.addEventListener('mouseup', (event)=>{\r\n      this.dropElement()\r\n      console.log('canvas mouse up')\r\n    })\r\n\r\n    this.state.watch('changed', (state)=>{\r\n      this.optionClasses.tongleOnCondition(state.showOutline, 'show-outline')\r\n      this.optionClasses.tongleOnCondition(!state.showLabel, 'hide-label')\r\n      this.render()\r\n    })\r\n  }\r\n\r\n  render(){\r\n    this.canvas.render()\r\n  }\r\n\r\n  refresh(){\r\n    this.canvas.refresh()\r\n  }\r\n\r\n  clearDraggedoverStates(){\r\n    this.canvas.clearDraggedoverStates()\r\n  }\r\n  clearActiveStates(){\r\n    this.canvas.clearActiveStates()\r\n  }\r\n  clearFocusStates(){\r\n    this.canvas.clearFocusStates()\r\n  }\r\n\r\n  dragFromToolbox(rxNameId){\r\n    if(this.draggedNode) return\r\n    let element = this.getElementByRxNameId(rxNameId)\r\n    this.draggedNode = element.make()\r\n    this.beginFollowMouse()\r\n    this.clearFocusStates()\r\n  }\r\n\r\n  getElementDefine(rxNameId){\r\n    let element = this.getElementByRxNameId(rxNameId)\r\n    return element.toolboxInfo\r\n  }\r\n\r\n  getElementByRxNameId(rxNameId){\r\n    let nameArray = rxNameId.split('.')\r\n    let moduleId = nameArray[0]\r\n    let elementId = nameArray[1]\r\n    let element = this[moduleId][elementId]\r\n    console.assert(element, 'Can not find element:' + rxNameId)\r\n    element.toolboxInfo.rxNameId =rxNameId\r\n    return element\r\n  }\r\n\r\n  dropElement(){\r\n    this.endFollowMouse()\r\n    if(this.draggedNode){\r\n      this.clearActiveStates()\r\n      this.draggedNode.changeToState('focusState')\r\n      if(this.draggedNode.parent){\r\n        this.draggedNode.parent.changeToState('normalState')\r\n      }\r\n      this.draggedNode = ''\r\n    }\r\n  }\r\n\r\n  endDragFromToolbox(){\r\n    if(this.draggedNode){\r\n      this.draggedNode.changeToState('normalState')\r\n    }\r\n    this.draggedNode = ''\r\n    this.endFollowMouse()\r\n  }\r\n\r\n  followMouse(event){\r\n    let mouseFollower = this.mouseFollower\r\n    if(mouseFollower){\r\n      mouseFollower.$dom.style.left =  this.followX(event)\r\n      mouseFollower.$dom.style.top = this.followY(event)\r\n      this.commandProxy.takeOverDraggingByWorkspace()\r\n    }\r\n  }\r\n\r\n  followX(event){\r\n    return (event.clientX - this.mouseFollower.offsetX) + 'px'\r\n  }\r\n\r\n  followY(event){\r\n    return (event.clientY - this.mouseFollower.offsetY) + 'px'\r\n  }\r\n\r\n  beginFollowMouse(){\r\n    if(this.draggedNode){\r\n      let mouseFollower = this.draggedNode.createMouseFollower(event)\r\n      this.workspace.appendChild(mouseFollower.$dom)\r\n      this.mouseFollower = mouseFollower\r\n    }\r\n  }\r\n\r\n  endFollowMouse(){\r\n    if(this.mouseFollower && this.workspace.contains(this.mouseFollower.$dom)){\r\n      this.workspace.removeChild(this.mouseFollower.$dom)\r\n    }\r\n\r\n    this.mouseFollower = ''\r\n  }\r\n\r\n  bindToolboxItem(toolboxItemName, elementId){\r\n    let toolboxItem = new ToolboxItem(toolboxItemName)\r\n\r\n    toolboxItem.bindTo(elementId)\r\n  }\r\n\r\n  nodeStateChanged(node, oldState, newState){\r\n    if(newState === node.focusState && node.focusState !== node.normalState){\r\n      this.commandProxy.focusNode(node)\r\n    }\r\n    if(oldState === node.focusState && newState !== node.focusState){\r\n      this.commandProxy.unFocusNode(node)\r\n    }\r\n  }\r\n\r\n  changeCanvasState(state){\r\n    this.state.screenWidth = state.screenWidth\r\n    this.state.preview = state.preview\r\n    this.state.showEditMargin = state.showEditMargin\r\n    this.state.showOutline = state.showOutline\r\n    this.state.showLabel = state.showLabel\r\n  }\r\n\r\n  nodeChanged(node){\r\n    //console.log(node)\r\n    this.canvas.nodeChanged(node)\r\n    this.render()\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/core/rxeditor.js?");

/***/ }),

/***/ "./src/elements/bootstrap/content/bsheading.js":
/*!*****************************************************!*\
  !*** ./src/elements/bootstrap/content/bsheading.js ***!
  \*****************************************************/
/*! exports provided: BSHeading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSHeading\", function() { return BSHeading; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _core_park_mini_editbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/park-mini-editbar */ \"./src/core/park-mini-editbar.js\");\n/* harmony import */ var _schemas_heading_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schemas/heading/tag */ \"./src/elements/schemas/heading/tag.js\");\n/* harmony import */ var _schemas_heading_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/heading/display */ \"./src/elements/schemas/heading/display.js\");\n\r\n\r\n\r\n\r\n//import {addonUtilBorder} from \"../../schemas/utilities/border\"\r\n\r\nclass BSHeading extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupContent'\r\n    this.toolboxInfo.elementId = 'bsHeading'\r\n    this.toolboxInfo.elementName = \"Heading\"\r\n    this.className = 'BSHeading'\r\n\r\n    this.editMarginStyle = {}\r\n\r\n    this.groups.headingOptions = {\r\n      label:'Heading Options'\r\n    }\r\n    this.$meta.tag = 'h2'\r\n    this.$meta.innerHTML = \"Heading\"\r\n    this.label = \"Heading\"\r\n\r\n    Object(_schemas_heading_tag__WEBPACK_IMPORTED_MODULE_2__[\"addonHeadingTag\"])(this)\r\n    Object(_schemas_heading_display__WEBPACK_IMPORTED_MODULE_3__[\"addonHeadingDisplay\"])(this)\r\n  }\r\n\r\n  make(){\r\n    return new BSHeading\r\n  }\r\n  \r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n\r\n    Object(_core_park_mini_editbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(model, this)\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/content/bsheading.js?");

/***/ }),

/***/ "./src/elements/bootstrap/content/bsparagraph.js":
/*!*******************************************************!*\
  !*** ./src/elements/bootstrap/content/bsparagraph.js ***!
  \*******************************************************/
/*! exports provided: BSParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSParagraph\", function() { return BSParagraph; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _core_park_mini_editbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/park-mini-editbar */ \"./src/core/park-mini-editbar.js\");\n/* harmony import */ var _schemas_heading_pseudo_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schemas/heading/pseudo-heading */ \"./src/elements/schemas/heading/pseudo-heading.js\");\n/* harmony import */ var _schemas_heading_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/heading/display */ \"./src/elements/schemas/heading/display.js\");\n\r\n\r\n\r\n\r\n//import {addonUtilBorder} from \"../../schemas/utilities/border\"\r\n\r\nclass BSParagraph extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupContent'\r\n    this.toolboxInfo.elementId = 'bsParagraph'\r\n    this.toolboxInfo.elementName = \"Paragraph\"\r\n    this.className = 'BSParagraph'\r\n\r\n    this.editMarginStyle = {}\r\n\r\n    this.groups.paragraphOptions = {\r\n      label:'Paragraph Options'\r\n    }\r\n    this.$meta.tag = 'p'\r\n    this.$meta.innerHTML = \"Please input paragraph text ...\"\r\n    this.label = \"Paragraph\"\r\n\r\n    Object(_schemas_heading_pseudo_heading__WEBPACK_IMPORTED_MODULE_2__[\"addonHeadingPseudo\"])(this, 'paragraphOptions')\r\n    //addonHeadingDisplay(this)\r\n  }\r\n\r\n  make(){\r\n    return new BSParagraph\r\n  }\r\n  \r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n\r\n    Object(_core_park_mini_editbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(model, this)\r\n\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/content/bsparagraph.js?");

/***/ }),

/***/ "./src/elements/bootstrap/index.js":
/*!*****************************************!*\
  !*** ./src/elements/bootstrap/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _layout_bscontainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/bscontainer */ \"./src/elements/bootstrap/layout/bscontainer.js\");\n/* harmony import */ var _layout_bsrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/bsrow */ \"./src/elements/bootstrap/layout/bsrow.js\");\n/* harmony import */ var _layout_bscol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/bscol */ \"./src/elements/bootstrap/layout/bscol.js\");\n/* harmony import */ var _layout_bsw100__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/bsw100 */ \"./src/elements/bootstrap/layout/bsw100.js\");\n/* harmony import */ var _content_bsheading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/bsheading */ \"./src/elements/bootstrap/content/bsheading.js\");\n/* harmony import */ var _content_bsparagraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/bsparagraph */ \"./src/elements/bootstrap/content/bsparagraph.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tcontainer: new _layout_bscontainer__WEBPACK_IMPORTED_MODULE_0__[\"BSContainer\"],\r\n\trow: new _layout_bsrow__WEBPACK_IMPORTED_MODULE_1__[\"BSRow\"],\r\n\tcolumn: new _layout_bscol__WEBPACK_IMPORTED_MODULE_2__[\"BSCol\"],\r\n\tw100: new _layout_bsw100__WEBPACK_IMPORTED_MODULE_3__[\"BSW100\"],\r\n\theading: new _content_bsheading__WEBPACK_IMPORTED_MODULE_4__[\"BSHeading\"],\r\n\tparagraph : new _content_bsparagraph__WEBPACK_IMPORTED_MODULE_5__[\"BSParagraph\"],\r\n});\n\n//# sourceURL=webpack:///./src/elements/bootstrap/index.js?");

/***/ }),

/***/ "./src/elements/bootstrap/layout/bscol.js":
/*!************************************************!*\
  !*** ./src/elements/bootstrap/layout/bscol.js ***!
  \************************************************/
/*! exports provided: BSCol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSCol\", function() { return BSCol; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _schemas_column_col_width__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schemas/column/col-width */ \"./src/elements/schemas/column/col-width.js\");\n/* harmony import */ var _schemas_column_col_offset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schemas/column/col-offset */ \"./src/elements/schemas/column/col-offset.js\");\n/* harmony import */ var _schemas_column_col_align_self__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/column/col-align-self */ \"./src/elements/schemas/column/col-align-self.js\");\n/* harmony import */ var _schemas_column_col_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../schemas/column/col-order */ \"./src/elements/schemas/column/col-order.js\");\n/* harmony import */ var _schemas_column_margin_auto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../schemas/column/margin-auto */ \"./src/elements/schemas/column/margin-auto.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass BSCol extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupLayout'\r\n    this.toolboxInfo.elementId = 'column'\r\n    this.toolboxInfo.elementName = \"Column\"\r\n    this.className = 'BSCol'\r\n    this.widthDropMargin = 15;\r\n    this.acceptedChildren=['BSRow','BSContainer', 'HTMLDiv', 'BSHeading']\r\n    this.label = \"Column\"\r\n    this.groups.columnOptions = {\r\n      label:'Column Options'\r\n    }\r\n\r\n    Object(_schemas_column_col_width__WEBPACK_IMPORTED_MODULE_1__[\"addonWidth\"])(this)\r\n    Object(_schemas_column_col_offset__WEBPACK_IMPORTED_MODULE_2__[\"addonOffset\"])(this)\r\n    Object(_schemas_column_col_align_self__WEBPACK_IMPORTED_MODULE_3__[\"addonAlignSelf\"])(this)\r\n    Object(_schemas_column_col_order__WEBPACK_IMPORTED_MODULE_4__[\"addonOrder\"])(this)\r\n    Object(_schemas_column_margin_auto__WEBPACK_IMPORTED_MODULE_5__[\"addonUtilMarginAuto\"])(this)\r\n    this.setDefaultWidth()\r\n  }\r\n\r\n  setDefaultWidth(){\r\n    if(window.rxEditor){\r\n      let width = window.rxEditor.state.screenWidth\r\n      if(width == 'xs'){\r\n        this.$meta.colWidth.xs = 'col'\r\n        return\r\n      }\r\n      \r\n      this.$meta.colWidth[width] = 'col-' + width\r\n      return\r\n    }\r\n    this.$meta.colWidth.md = 'col-md'\r\n  }\r\n\r\n  make(){\r\n    return new BSCol\r\n  }\r\n\r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    //model.label.text = \"Column\"\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/layout/bscol.js?");

/***/ }),

/***/ "./src/elements/bootstrap/layout/bscontainer.js":
/*!******************************************************!*\
  !*** ./src/elements/bootstrap/layout/bscontainer.js ***!
  \******************************************************/
/*! exports provided: BSContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSContainer\", function() { return BSContainer; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _schemas_container_fluid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schemas/container/fluid */ \"./src/elements/schemas/container/fluid.js\");\n/* harmony import */ var _schemas_utilities_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schemas/utilities/color */ \"./src/elements/schemas/utilities/color.js\");\n/* harmony import */ var _schemas_utilities_border__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/utilities/border */ \"./src/elements/schemas/utilities/border/index.js\");\n\r\n\r\n\r\n\r\n\r\nclass BSContainer extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupLayout'\r\n    this.toolboxInfo.elementId = 'container'\r\n    this.toolboxInfo.elementName = \"Container\"\r\n    this.className = 'BSContainer'\r\n    this.heightDropMargin = 15;\r\n    this.acceptedChildren=['BSRow','BSContainer', 'HTMLDiv']\r\n    this.label = \"Container\"\r\n\r\n    this.groups.containerOptions = {\r\n      label:'Container Options'\r\n    }\r\n\r\n    Object(_schemas_container_fluid__WEBPACK_IMPORTED_MODULE_1__[\"addonFluid\"])(this)\r\n    Object(_schemas_utilities_color__WEBPACK_IMPORTED_MODULE_2__[\"addonUtilColor\"])(this)\r\n    Object(_schemas_utilities_border__WEBPACK_IMPORTED_MODULE_3__[\"addonUtilBorder\"])(this)\r\n  }\r\n\r\n  make(){\r\n    return new BSContainer\r\n  }\r\n  \r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/layout/bscontainer.js?");

/***/ }),

/***/ "./src/elements/bootstrap/layout/bsrow.js":
/*!************************************************!*\
  !*** ./src/elements/bootstrap/layout/bsrow.js ***!
  \************************************************/
/*! exports provided: BSRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSRow\", function() { return BSRow; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _schemas_row_gutters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../schemas/row/gutters */ \"./src/elements/schemas/row/gutters.js\");\n/* harmony import */ var _schemas_row_justify_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../schemas/row/justify-content */ \"./src/elements/schemas/row/justify-content.js\");\n/* harmony import */ var _schemas_row_align_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../schemas/row/align-items */ \"./src/elements/schemas/row/align-items.js\");\n\r\n\r\n\r\n\r\n\r\nclass BSRow extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor(parent) {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupLayout'\r\n    this.toolboxInfo.elementId = 'row'\r\n    this.toolboxInfo.elementName = \"Row\"\r\n    this.className = 'BSRow'\r\n    this.heightDropMargin = 15;\r\n    this.acceptedChildren=['BSCol','BSW100']\r\n    this.label = \"Row\"\r\n\r\n    this.$meta.baseClass = 'row' \r\n    this.editMarginStyle.margin = \"0\"\r\n\r\n    //this.groups.\r\n\r\n    this.groups.rowOptions = {\r\n      label:'Row Options'\r\n    }\r\n    \r\n    Object(_schemas_row_gutters__WEBPACK_IMPORTED_MODULE_1__[\"addonRowGutters\"])(this)\r\n    Object(_schemas_row_justify_content__WEBPACK_IMPORTED_MODULE_2__[\"addonRowJustifyContent\"])(this)\r\n    Object(_schemas_row_align_items__WEBPACK_IMPORTED_MODULE_3__[\"addonRowAlignItems\"])(this)\r\n  }\r\n \r\n  make(){\r\n    return new BSRow\r\n  }\r\n\r\n  clone(){\r\n    let copy = super.clone()\r\n    copy.$meta.baseClass = this.$meta.baseClass\r\n    return copy\r\n  }\r\n \r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    model.classList.push(this.$meta.baseClass)\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/layout/bsrow.js?");

/***/ }),

/***/ "./src/elements/bootstrap/layout/bsw100.js":
/*!*************************************************!*\
  !*** ./src/elements/bootstrap/layout/bsw100.js ***!
  \*************************************************/
/*! exports provided: BSW100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BSW100\", function() { return BSW100; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../rxelement */ \"./src/elements/rxelement.js\");\n\r\n\r\nclass BSW100 extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupLayout'\r\n    this.toolboxInfo.elementId = 'bsw100'\r\n    this.toolboxInfo.elementName = \"Row Break\"\r\n    this.className = 'BSW100'\r\n    this.label = \"w-100\"\r\n\r\n    this.editMarginStyle.padding = '10px'\r\n    this.widthDropMargin = 15;\r\n    this.acceptedChildren=[]\r\n  }\r\n\r\n  make(){\r\n    return new BSW100\r\n  }\r\n\r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    model.classList.add('w-100')\r\n    //model.classList.push.apply(model.classList, this.$meta.baseClass)\r\n    //model.attributes.contentEditable = false\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/bootstrap/layout/bsw100.js?");

/***/ }),

/***/ "./src/elements/html/htmldiv.js":
/*!**************************************!*\
  !*** ./src/elements/html/htmldiv.js ***!
  \**************************************/
/*! exports provided: HTMLDiv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLDiv\", function() { return HTMLDiv; });\n/* harmony import */ var _rxelement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rxelement */ \"./src/elements/rxelement.js\");\n/* harmony import */ var _schemas_utilities_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../schemas/utilities/color */ \"./src/elements/schemas/utilities/color.js\");\n/* harmony import */ var _schemas_utilities_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schemas/utilities/border */ \"./src/elements/schemas/utilities/border/index.js\");\n/* harmony import */ var _schemas_utilities_padding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../schemas/utilities/padding */ \"./src/elements/schemas/utilities/padding/index.js\");\n/* harmony import */ var _schemas_utilities_margin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../schemas/utilities/margin */ \"./src/elements/schemas/utilities/margin/index.js\");\n/* harmony import */ var _schemas_utilities_clearfix__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../schemas/utilities/clearfix */ \"./src/elements/schemas/utilities/clearfix.js\");\n/* harmony import */ var _schemas_utilities_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../schemas/utilities/display */ \"./src/elements/schemas/utilities/display.js\");\n/* harmony import */ var _schemas_utilities_embed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../schemas/utilities/embed */ \"./src/elements/schemas/utilities/embed/index.js\");\n/* harmony import */ var _schemas_utilities_embed_responsive_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../schemas/utilities/embed/responsive-item */ \"./src/elements/schemas/utilities/embed/responsive-item.js\");\n/* harmony import */ var _schemas_utilities_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../schemas/utilities/flex */ \"./src/elements/schemas/utilities/flex/index.js\");\n/* harmony import */ var _schemas_utilities_float__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../schemas/utilities/float */ \"./src/elements/schemas/utilities/float.js\");\n/* harmony import */ var _schemas_utilities_text_hide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../schemas/utilities/text-hide */ \"./src/elements/schemas/utilities/text-hide.js\");\n/* harmony import */ var _schemas_utilities_overflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../schemas/utilities/overflow */ \"./src/elements/schemas/utilities/overflow.js\");\n/* harmony import */ var _schemas_utilities_position__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../schemas/utilities/position */ \"./src/elements/schemas/utilities/position.js\");\n/* harmony import */ var _schemas_utilities_screen_readers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../schemas/utilities/screen-readers */ \"./src/elements/schemas/utilities/screen-readers.js\");\n/* harmony import */ var _schemas_utilities_shadow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../schemas/utilities/shadow */ \"./src/elements/schemas/utilities/shadow.js\");\n/* harmony import */ var _schemas_utilities_sizing__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../schemas/utilities/sizing */ \"./src/elements/schemas/utilities/sizing/index.js\");\n/* harmony import */ var _schemas_utilities_stretched_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../schemas/utilities/stretched-link */ \"./src/elements/schemas/utilities/stretched-link.js\");\n/* harmony import */ var _schemas_utilities_text__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../schemas/utilities/text */ \"./src/elements/schemas/utilities/text/index.js\");\n/* harmony import */ var _schemas_utilities_vertical_align__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../schemas/utilities/vertical-align */ \"./src/elements/schemas/utilities/vertical-align.js\");\n/* harmony import */ var _schemas_utilities_visibility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../schemas/utilities/visibility */ \"./src/elements/schemas/utilities/visibility.js\");\n\r\n\r\n\r\n\r\n\r\n//import {addonUtilWidth} from \"../schemas/utilities/sizing/width\"\r\n//import {addonUtilHeight} from \"../schemas/utilities/sizing/height\"\r\n//import {addonUtilMarginAuto} from \"../schemas/utilities/margin/margin-auto\"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass HTMLDiv extends _rxelement__WEBPACK_IMPORTED_MODULE_0__[\"RXElement\"]{\r\n  constructor() {\r\n    super()\r\n    this.toolboxInfo.groupId = 'groupHtml'\r\n    this.toolboxInfo.elementId = 'div'\r\n    this.toolboxInfo.elementName = \"DIV\"\r\n    this.className = 'HTMLDiv'\r\n    this.label = \"div\"\r\n    Object(_schemas_utilities_color__WEBPACK_IMPORTED_MODULE_1__[\"addonUtilColor\"])(this)\r\n    Object(_schemas_utilities_border__WEBPACK_IMPORTED_MODULE_2__[\"addonUtilBorder\"])(this)\r\n    //addonUtilWidth(this)\r\n    //addonUtilHeight(this)\r\n    Object(_schemas_utilities_margin__WEBPACK_IMPORTED_MODULE_4__[\"addonUtilMargin\"])(this)\r\n    Object(_schemas_utilities_padding__WEBPACK_IMPORTED_MODULE_3__[\"addonUtilPadding\"])(this)\r\n    //addonUtilMarginAuto(this)\r\n    Object(_schemas_utilities_clearfix__WEBPACK_IMPORTED_MODULE_5__[\"addonUtilClearfix\"])(this)\r\n    Object(_schemas_utilities_display__WEBPACK_IMPORTED_MODULE_6__[\"addonUtilDisplay\"])(this)\r\n    Object(_schemas_utilities_embed__WEBPACK_IMPORTED_MODULE_7__[\"addonUtilEmbed\"])(this)\r\n    Object(_schemas_utilities_embed_responsive_item__WEBPACK_IMPORTED_MODULE_8__[\"addonUtilResponsiveItem\"])(this) //need to move to other tags\r\n    Object(_schemas_utilities_flex__WEBPACK_IMPORTED_MODULE_9__[\"addonUtilFlex\"])(this)\r\n    Object(_schemas_utilities_float__WEBPACK_IMPORTED_MODULE_10__[\"addonUtilFloat\"])(this)\r\n    Object(_schemas_utilities_text_hide__WEBPACK_IMPORTED_MODULE_11__[\"addonUtilTextHide\"])(this)\r\n    Object(_schemas_utilities_overflow__WEBPACK_IMPORTED_MODULE_12__[\"addonUtilOverflow\"])(this)\r\n    Object(_schemas_utilities_position__WEBPACK_IMPORTED_MODULE_13__[\"addonUtilPosition\"])(this)\r\n    Object(_schemas_utilities_screen_readers__WEBPACK_IMPORTED_MODULE_14__[\"addonUtilScreenReaders\"])(this)\r\n    Object(_schemas_utilities_shadow__WEBPACK_IMPORTED_MODULE_15__[\"addonUtilShadow\"])(this)\r\n    Object(_schemas_utilities_sizing__WEBPACK_IMPORTED_MODULE_16__[\"addonUtilSizing\"])(this)\r\n    Object(_schemas_utilities_stretched_link__WEBPACK_IMPORTED_MODULE_17__[\"addonUtilStretchedLink\"])(this) //need to move to a tag\r\n    Object(_schemas_utilities_text__WEBPACK_IMPORTED_MODULE_18__[\"addonUtilText\"])(this)\r\n    Object(_schemas_utilities_vertical_align__WEBPACK_IMPORTED_MODULE_19__[\"addonUtilVerticalAlignment\"])(this)\r\n    Object(_schemas_utilities_visibility__WEBPACK_IMPORTED_MODULE_20__[\"addonUtilVisibility\"])(this)\r\n  }\r\n\r\n  make(){\r\n    return new HTMLDiv\r\n  }\r\n\r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    return model\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/elements/html/htmldiv.js?");

/***/ }),

/***/ "./src/elements/html/index.js":
/*!************************************!*\
  !*** ./src/elements/html/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _htmldiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmldiv */ \"./src/elements/html/htmldiv.js\");\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n\tdiv: new _htmldiv__WEBPACK_IMPORTED_MODULE_0__[\"HTMLDiv\"],\r\n});\n\n//# sourceURL=webpack:///./src/elements/html/index.js?");

/***/ }),

/***/ "./src/elements/rxelement.js":
/*!***********************************!*\
  !*** ./src/elements/rxelement.js ***!
  \***********************************/
/*! exports provided: RXElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXElement\", function() { return RXElement; });\n/* harmony import */ var _core_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/node */ \"./src/core/node.js\");\n\r\n\r\nclass RXElement extends _core_node__WEBPACK_IMPORTED_MODULE_0__[\"Node\"]{\r\n  constructor() {\r\n    super()\r\n\r\n    this.addons = []\r\n\r\n    this.addedFeilds = []\r\n    this.addedFieldGroups = []\r\n    //基础数据，持久化也是这部分数据\r\n    this.$meta = {\r\n      tag:'div',\r\n    }\r\n    \r\n    //Schema 信息，用于构建Option编辑部件\r\n    this.$schema = {\r\n      fields:{}\r\n    } \r\n\r\n    this.$schema.groups = {}\r\n\r\n    this.groups = {\r\n      'utilities':{\r\n        label:'Bootstrap Utilities',\r\n      },\r\n      'decorations':{\r\n        label:'Decorations',\r\n      },\r\n    }\r\n\r\n    this.addToGroup = (groupName)=>{\r\n      this.$schema.groups[groupName] = this.groups[groupName]\r\n    }\r\n\r\n  }\r\n\r\n  clone(){\r\n    let copy = super.clone()\r\n    copy.$meta.tag = this.$meta.tag\r\n    copy.$meta.innerHTML = this.$meta.innerHTML\r\n\r\n    this.addons.forEach((addon)=>{\r\n      addon.copyMeta(this.$meta, copy.$meta)\r\n    })\r\n\r\n    return copy\r\n  }\r\n\r\n  copyMetaTo(from, to){\r\n    for(var name in from){\r\n      to[name] = from[name]\r\n    }\r\n  }\r\n \r\n  toViewModel(){\r\n    let model = super.toViewModel()\r\n    model.name = this.$meta.tag\r\n    model.innerHTML = this.$meta.innerHTML\r\n\r\n    this.addons.forEach((addon)=>{\r\n      addon.toViewModel(model, this.$meta)\r\n    })\r\n    return model\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/elements/rxelement.js?");

/***/ }),

/***/ "./src/elements/schemas/column/col-align-self.js":
/*!*******************************************************!*\
  !*** ./src/elements/schemas/column/col-align-self.js ***!
  \*******************************************************/
/*! exports provided: addonAlignSelf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonAlignSelf\", function() { return addonAlignSelf; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _utilities_flex_align_self__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/flex/align-self */ \"./src/elements/schemas/utilities/flex/align-self.js\");\n\r\n\r\n \r\n\r\nclass ColAlignSelf extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, _utilities_flex_align_self__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'colAlignSelf'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonAlignSelf = (node, groupName)=>{\r\n  let colAlignSelf = new ColAlignSelf\r\n  colAlignSelf.addon(node, groupName)\r\n  return colAlignSelf\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/column/col-align-self.js?");

/***/ }),

/***/ "./src/elements/schemas/column/col-offset.js":
/*!***************************************************!*\
  !*** ./src/elements/schemas/column/col-offset.js ***!
  \***************************************************/
/*! exports provided: addonOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonOffset\", function() { return addonOffset; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\nlet colOffsetSchema = {\r\n  group:'columnOptions',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Offset',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'offset-1':'1',\r\n      'offset-2':'2',\r\n      'offset-3':'3',\r\n      'offset-4':'4',\r\n      'offset-5':'5',\r\n      'offset-6':'6',\r\n      'offset-7':'7',\r\n      'offset-8':'8',\r\n      'offset-9':'9',\r\n      'offset-10':'10',\r\n      'offset-11':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Offset',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'offset-sm-1':'1',\r\n      'offset-sm-2':'2',\r\n      'offset-sm-3':'3',\r\n      'offset-sm-4':'4',\r\n      'offset-sm-5':'5',\r\n      'offset-sm-6':'6',\r\n      'offset-sm-7':'7',\r\n      'offset-sm-8':'8',\r\n      'offset-sm-9':'9',\r\n      'offset-sm-10':'10',\r\n      'offset-sm-11':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Offset',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'offset-md-1':'1',\r\n      'offset-md-2':'2',\r\n      'offset-md-3':'3',\r\n      'offset-md-4':'4',\r\n      'offset-md-5':'5',\r\n      'offset-md-6':'6',\r\n      'offset-md-7':'7',\r\n      'offset-md-8':'8',\r\n      'offset-md-9':'9',\r\n      'offset-md-10':'10',\r\n      'offset-md-11':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Offset',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'offset-lg-1':'1',\r\n      'offset-lg-2':'2',\r\n      'offset-lg-3':'3',\r\n      'offset-lg-4':'4',\r\n      'offset-lg-5':'5',\r\n      'offset-lg-6':'6',\r\n      'offset-lg-7':'7',\r\n      'offset-lg-8':'8',\r\n      'offset-lg-9':'9',\r\n      'offset-lg-10':'10',\r\n      'offset-lg-11':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Offset',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'offset-xl-1':'1',\r\n      'offset-xl-2':'2',\r\n      'offset-xl-3':'3',\r\n      'offset-xl-4':'4',\r\n      'offset-xl-5':'5',\r\n      'offset-xl-6':'6',\r\n      'offset-xl-7':'7',\r\n      'offset-xl-8':'8',\r\n      'offset-xl-9':'9',\r\n      'offset-xl-10':'10',\r\n      'offset-xl-11':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n}//<--offset\r\n\r\nclass ColOffset extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, colOffsetSchema)\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'colOffset'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonOffset = (node, groupName)=>{\r\n  let colOffset = new ColOffset\r\n  colOffset.addon(node, groupName)\r\n  return colOffset\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/column/col-offset.js?");

/***/ }),

/***/ "./src/elements/schemas/column/col-order.js":
/*!**************************************************!*\
  !*** ./src/elements/schemas/column/col-order.js ***!
  \**************************************************/
/*! exports provided: addonOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonOrder\", function() { return addonOrder; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _utilities_flex_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/flex/order */ \"./src/elements/schemas/utilities/flex/order.js\");\n\r\n\r\n \r\n\r\nclass ColOrder extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, _utilities_flex_order__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'colOrder'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonOrder = (node, groupName)=>{\r\n  let colOrder = new ColOrder\r\n  colOrder.addon(node, groupName)\r\n  return colOrder\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/column/col-order.js?");

/***/ }),

/***/ "./src/elements/schemas/column/col-width.js":
/*!**************************************************!*\
  !*** ./src/elements/schemas/column/col-width.js ***!
  \**************************************************/
/*! exports provided: addonWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonWidth\", function() { return addonWidth; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\nlet colWidthSchema = {\r\n  group:'columnOptions',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Width',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'col-1':'1',\r\n      'col-2':'2',\r\n      'col-3':'3',\r\n      'col-4':'4',\r\n      'col-5':'5',\r\n      'col-6':'6',\r\n      'col-7':'7',\r\n      'col-8':'8',\r\n      'col-9':'9',\r\n      'col-10':'10',\r\n      'col-11':'11',\r\n      'col-12':'12',\r\n      'col-auto':'Auto',\r\n      'col':'Col',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Width',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'col-sm-1':'1',\r\n      'col-sm-2':'2',\r\n      'col-sm-3':'3',\r\n      'col-sm-4':'4',\r\n      'col-sm-5':'5',\r\n      'col-sm-6':'6',\r\n      'col-sm-7':'7',\r\n      'col-sm-8':'8',\r\n      'col-sm-9':'9',\r\n      'col-sm-10':'10',\r\n      'col-sm-11':'11',\r\n      'col-sm-12':'12',\r\n      'col-sm-auto':'Auto',\r\n      'col-sm':'Col',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Width',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'col-md-1':'1',\r\n      'col-md-2':'2',\r\n      'col-md-3':'3',\r\n      'col-md-4':'4',\r\n      'col-md-5':'5',\r\n      'col-md-6':'6',\r\n      'col-md-7':'7',\r\n      'col-md-8':'8',\r\n      'col-md-9':'9',\r\n      'col-md-10':'10',\r\n      'col-md-11':'11',\r\n      'col-md-12':'12',\r\n      'col-md-auto':'Auto',\r\n      'col-md':'Col',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Width',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'col-lg-1':'1',\r\n      'col-lg-2':'2',\r\n      'col-lg-3':'3',\r\n      'col-lg-4':'4',\r\n      'col-lg-5':'5',\r\n      'col-lg-6':'6',\r\n      'col-lg-7':'7',\r\n      'col-lg-8':'8',\r\n      'col-lg-9':'9',\r\n      'col-lg-10':'10',\r\n      'col-lg-11':'11',\r\n      'col-lg-12':'12',\r\n      'col-lg-auto':'Auto',\r\n      'col-lg':'Col',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Width',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'col-xl-1':'1',\r\n      'col-xl-2':'2',\r\n      'col-xl-3':'3',\r\n      'col-xl-4':'4',\r\n      'col-xl-5':'5',\r\n      'col-xl-6':'6',\r\n      'col-xl-7':'7',\r\n      'col-xl-8':'8',\r\n      'col-xl-9':'9',\r\n      'col-xl-10':'10',\r\n      'col-xl-11':'11',\r\n      'col-xl-12':'12',\r\n      'col-xl-auto':'Auto',\r\n      'col-xl':'Col',\r\n    },\r\n  },\r\n  //---------------------\r\n}//<--width\r\n\r\nclass ColWidth extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, colWidthSchema)\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'colWidth'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonWidth = (node, groupName)=>{\r\n  let colWidth = new ColWidth\r\n  colWidth.addon(node, groupName)\r\n  return colWidth\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/column/col-width.js?");

/***/ }),

/***/ "./src/elements/schemas/column/margin-auto.js":
/*!****************************************************!*\
  !*** ./src/elements/schemas/column/margin-auto.js ***!
  \****************************************************/
/*! exports provided: addonUtilMarginAuto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilMarginAuto\", function() { return addonUtilMarginAuto; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _utilities_flex_margin_auto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/flex/margin-auto */ \"./src/elements/schemas/utilities/flex/margin-auto.js\");\n\r\n\r\n \r\n\r\nclass UtilMarginAuto extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, _utilities_flex_margin_auto__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    this.schema.group = 'columnOptions'\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'utilMarginAuto'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilMarginAuto = (node, groupName)=>{\r\n  let utilMarginAuto = new UtilMarginAuto\r\n  utilMarginAuto.addon(node, groupName)\r\n  return utilMarginAuto\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/column/margin-auto.js?");

/***/ }),

/***/ "./src/elements/schemas/container/fluid.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/container/fluid.js ***!
  \*************************************************/
/*! exports provided: addonFluid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonFluid\", function() { return addonFluid; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass ContainerFluid extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Fluid',\r\n      widget:'OpSwitch',\r\n      required:true,\r\n      group:'containerOptions',\r\n      onValue:'container-fluid',\r\n      offValue:'container',\r\n      defaultValue:'container',\r\n    }\r\n\r\n    this.metaFragment = 'container' \r\n\r\n    this.fieldName = 'containerFluid'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.containerFluid = from.containerFluid\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonFluid = (node, groupName)=>{\r\n  let containerFluid = new ContainerFluid\r\n  containerFluid.addon(node, groupName)\r\n  return containerFluid\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/container/fluid.js?");

/***/ }),

/***/ "./src/elements/schemas/heading/display.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/heading/display.js ***!
  \*************************************************/
/*! exports provided: addonHeadingDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonHeadingDisplay\", function() { return addonHeadingDisplay; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet headingDisplaySchema = {\r\n  label:'Display',\r\n  group:'headingOptions',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'display-1':'Display 1',\r\n    'display-2':'Display 2',\r\n    'display-3':'Display 3',\r\n    'display-4':'Display 4',\r\n  },\r\n}\r\n\r\nclass HeadingDisplay extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, headingDisplaySchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'headingDisplay'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.headingDisplay = from.headingDisplay\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonHeadingDisplay = (node, groupName)=>{\r\n  let headingDisplay = new HeadingDisplay\r\n  headingDisplay.addon(node, groupName)\r\n  return headingDisplay\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/heading/display.js?");

/***/ }),

/***/ "./src/elements/schemas/heading/pseudo-heading.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/heading/pseudo-heading.js ***!
  \********************************************************/
/*! exports provided: addonHeadingPseudo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonHeadingPseudo\", function() { return addonHeadingPseudo; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet headingPseudoSchema = {\r\n  label:'Pseudo Heading',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'h1':'H1',\r\n    'h2':'H2',\r\n    'h3':'H3',\r\n    'h4':'H4',\r\n    'h5':'H5',\r\n    'h6':'H6',\r\n  },\r\n}\r\n\r\nclass HeadingPseudo extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, headingPseudoSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'headingPseudo'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.headingPseudo = from.headingPseudo\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonHeadingPseudo = (node, groupName)=>{\r\n  let headingPseudo = new HeadingPseudo\r\n  headingPseudo.addon(node, groupName)\r\n  return headingPseudo\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/heading/pseudo-heading.js?");

/***/ }),

/***/ "./src/elements/schemas/heading/tag.js":
/*!*********************************************!*\
  !*** ./src/elements/schemas/heading/tag.js ***!
  \*********************************************/
/*! exports provided: addonHeadingTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonHeadingTag\", function() { return addonHeadingTag; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet headingTagSchema = {\r\n  label:'Heading',\r\n  group:'headingOptions',\r\n  widget:'ButtonGroup',\r\n  defaultValue:'h2',\r\n  buttons:{\r\n    'h1':'H1',\r\n    'h2':'H2',\r\n    'h3':'H3',\r\n    'h4':'H4',\r\n    'h5':'H5',\r\n    'h6':'H6',\r\n  },\r\n}\r\n\r\nclass HeadingTag extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, headingTagSchema)\r\n    this.fieldName = 'tag'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n  }\r\n}\r\n\r\nvar addonHeadingTag = (node, groupName)=>{\r\n  let headingTag = new HeadingTag\r\n  headingTag.addon(node, groupName)\r\n  return headingTag\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/heading/tag.js?");

/***/ }),

/***/ "./src/elements/schemas/option-fragment.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/option-fragment.js ***!
  \*************************************************/
/*! exports provided: OptionFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionFragment\", function() { return OptionFragment; });\nclass OptionFragment{\r\n  constructor(){\r\n  }\r\n\r\n  addon(node, groupName){\r\n    if(groupName){\r\n      this.schema.group = groupName\r\n    }\r\n    this.addToGroup(node, this.schema.group)\r\n    node.addons.push(this)\r\n    if(!node.$meta[this.fieldName]){\r\n      node.$meta[this.fieldName] = this.metaFragment\r\n    }\r\n    node.$schema.fields[this.fieldName] = this.schema\r\n  }\r\n\r\n  addToGroup(node, groupName){\r\n    node.addToGroup(groupName)\r\n  }\r\n\r\n  copyResponsiveGroupMetasTo(from, to){\r\n    for(var fieldName in from){\r\n      this.copyResponsiveMetaTo(from[fieldName], to[fieldName])\r\n    }\r\n  }\r\n\r\n  copyResponsiveMetaTo(from, to){\r\n    for(var name in from){\r\n      to[name] = from[name]\r\n    }\r\n  }\r\n\r\n  responsiveMetaGroupToViewModel(model, meta){\r\n    for(var fieldName in meta){\r\n      this.responsiveMetaFieldToViewModel(model, meta[fieldName])\r\n    }\r\n  }\r\n\r\n  responsiveMetaFieldToViewModel(model, metaFragment){\r\n    for(var name in metaFragment){\r\n      model.classList.add(metaFragment[name])\r\n    }\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/elements/schemas/option-fragment.js?");

/***/ }),

/***/ "./src/elements/schemas/responsive.js":
/*!********************************************!*\
  !*** ./src/elements/schemas/responsive.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({xs:'', sm:'', md:'', lg:'', xl:''});\n\n//# sourceURL=webpack:///./src/elements/schemas/responsive.js?");

/***/ }),

/***/ "./src/elements/schemas/row/align-items.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/row/align-items.js ***!
  \*************************************************/
/*! exports provided: addonRowAlignItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonRowAlignItems\", function() { return addonRowAlignItems; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _utilities_flex_align_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/flex/align-items */ \"./src/elements/schemas/utilities/flex/align-items.js\");\n\r\n\r\n \r\n\r\nclass RowAlignItems extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, _utilities_flex_align_items__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    this.schema.group = 'rowOptions'\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'utilAlignItems'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonRowAlignItems = (node, groupName)=>{\r\n  let rowAlignItems = new RowAlignItems\r\n  rowAlignItems.addon(node, groupName)\r\n  return rowAlignItems\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/row/align-items.js?");

/***/ }),

/***/ "./src/elements/schemas/row/gutters.js":
/*!*********************************************!*\
  !*** ./src/elements/schemas/row/gutters.js ***!
  \*********************************************/
/*! exports provided: addonRowGutters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonRowGutters\", function() { return addonRowGutters; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass RowGutters extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Gutters',\r\n      widget:'OpSwitch',\r\n      required:true,\r\n      group:'rowOptions',\r\n      onValue:'',\r\n      offValue:'no-gutters',\r\n      defaultValue:'',\r\n    }\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'rowGutters'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.rowGutters = from.rowGutters\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonRowGutters = (node, groupName)=>{\r\n  let rowGutters = new RowGutters\r\n  rowGutters.addon(node, groupName)\r\n  return rowGutters\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/row/gutters.js?");

/***/ }),

/***/ "./src/elements/schemas/row/justify-content.js":
/*!*****************************************************!*\
  !*** ./src/elements/schemas/row/justify-content.js ***!
  \*****************************************************/
/*! exports provided: addonRowJustifyContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonRowJustifyContent\", function() { return addonRowJustifyContent; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _utilities_flex_justify_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/flex/justify-content */ \"./src/elements/schemas/utilities/flex/justify-content.js\");\n\r\n\r\n \r\n\r\nclass RowJustifyContent extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, _utilities_flex_justify_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\r\n    this.schema.group = 'rowOptions'\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'rowJustifyContent'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonRowJustifyContent = (node, groupName)=>{\r\n  let rowJustifyContent = new RowJustifyContent\r\n  rowJustifyContent.addon(node, groupName)\r\n  return rowJustifyContent\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/row/justify-content.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/border/add.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/border/add.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Add Border',\r\n  widget:'OpBorderInput',\r\n  defaultValue:[],\r\n  specialClass:'add-border',\r\n  list:{\r\n    all : 'border',\r\n    top : 'border-top',\r\n    right : 'border-right',\r\n    bottom : 'border-bottom',\r\n    left : 'border-left',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/border/add.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/border/color.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/border/color.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Border Color',\r\n  widget:'OpSelect',\r\n  list:{\r\n    'border-primary':'Primary',\r\n    'border-secondary':'Secondary',\r\n    'border-success':'Success',\r\n    'border-danger':'Danger',\r\n    'border-warning':'Warning',\r\n    'border-info':'Info',\r\n    'border-light':'Light',\r\n    'border-dark':'Dark',\r\n    'border-white':'White',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/border/color.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/border/index.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/border/index.js ***!
  \********************************************************/
/*! exports provided: addonUtilBorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilBorder\", function() { return addonUtilBorder; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add */ \"./src/elements/schemas/utilities/border/add.js\");\n/* harmony import */ var _remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remove */ \"./src/elements/schemas/utilities/border/remove.js\");\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ \"./src/elements/schemas/utilities/border/color.js\");\n/* harmony import */ var _radius__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radius */ \"./src/elements/schemas/utilities/border/radius.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nvar utilBorderSchema = {\r\n  group:'utilities',\r\n  label:'Border',\r\n  isRowGroup:true,\r\n  fields:{\r\n    borderColor : _color__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    addBorder : _add__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    removeBorder : _remove__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    borderRadius : _radius__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilBorderMeta = {\r\n  borderColor : '',\r\n  addBorder : [],\r\n  removeBorder : [],\r\n  borderRadius : '',\r\n}\r\n\r\nclass UtilBorder extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilBorderSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilBorderMeta) \r\n\r\n    this.fieldName = 'utilBorder'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to[this.fieldName] = {}\r\n    to[this.fieldName].addBorder = from[this.fieldName].addBorder.concat()\r\n    to[this.fieldName].removeBorder = from[this.fieldName].removeBorder.concat()\r\n    to[this.fieldName].borderColor = from[this.fieldName].borderColor\r\n    to[this.fieldName].borderRadius = from[this.fieldName].borderRadius\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.push.apply(model.classList, metaFragment.addBorder)\r\n    model.classList.push.apply(model.classList, metaFragment.removeBorder)\r\n\r\n    model.classList.add(metaFragment.borderColor)\r\n    model.classList.add(metaFragment.borderRadius)\r\n  }\r\n}\r\n\r\nvar addonUtilBorder = (node, groupName)=>{\r\n  let utilBorder = new UtilBorder\r\n  utilBorder.addon(node, groupName)\r\n  return utilBorder\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/border/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/border/radius.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/border/radius.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Border Radius',\r\n  widget:'OpSelect',\r\n  list:{\r\n    'rounded':'Rounded',\r\n    'rounded-top':'Rounded top',\r\n    'rounded-right':'Rounded right',\r\n    'rounded-bottom':'Rounded bottom',\r\n    'rounded-left':'Rounded left',\r\n    'rounded-circle':'Rounded circle',\r\n    'rounded-pill':'Rounded pill',\r\n    'rounded-0':'Rounded 0',\r\n    'rounded-sm':'Rounded Small',\r\n    'rounded-lg':'Rounded Large',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/border/radius.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/border/remove.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/border/remove.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Remove Border',\r\n  widget:'OpBorderInput',\r\n  defaultValue:[],\r\n  specialClass:'remove-border',\r\n  list:{\r\n    all : 'border-0',\r\n    top : 'border-top-0',\r\n    right : 'border-right-0',\r\n    bottom : 'border-bottom-0',\r\n    left : 'border-left-0',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/border/remove.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/clearfix.js":
/*!****************************************************!*\
  !*** ./src/elements/schemas/utilities/clearfix.js ***!
  \****************************************************/
/*! exports provided: addonUtilClearfix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilClearfix\", function() { return addonUtilClearfix; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass UtilClearfix extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Clearfix',\r\n      widget:'OpSwitch',\r\n      group:'utilities',\r\n      onValue:'clearfix',\r\n      offValue:'',\r\n      defaultValue:'',\r\n    }\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilClearfix'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilClearfix = from.utilClearfix\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilClearfix = (node, groupName)=>{\r\n  let utilClearfix = new UtilClearfix\r\n  utilClearfix.addon(node, groupName)\r\n  return utilClearfix\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/clearfix.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/color.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/utilities/color.js ***!
  \*************************************************/
/*! exports provided: addonUtilColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilColor\", function() { return addonUtilColor; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nvar textColor = {\r\n  label:'Text Color',\r\n  widget:'OpSelect',\r\n  list:{\r\n    'text-primary':'Primary',\r\n    'text-secondary':'Secondary',\r\n    'text-success':'Success',\r\n    'text-danger':'Danger',\r\n    'text-warning':'Warning',\r\n    'text-info':'Info',\r\n    'text-light':'Light',\r\n    'text-dark':'Dark',\r\n    'text-muted':'Muted',\r\n    'text-white':'White',\r\n  },\r\n}\r\n\r\nvar backgroundColor = {\r\n  label:'Background Color',\r\n  widget:'OpSelect',\r\n  list:{\r\n    'bg-primary':'Primary',\r\n    'bg-secondary':'Secondary',\r\n    'bg-success':'Success',\r\n    'bg-danger':'Danger',\r\n    'bg-warning':'Warning',\r\n    'bg-info':'Info',\r\n    'bg-light':'Light',\r\n    'bg-dark':'Dark',\r\n    'bg-white':'White',\r\n    'bg-transparent':'Transparent',\r\n  },\r\n}\r\n\r\nclass UtilColor extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      group:'utilities',\r\n      label:'Color',\r\n      isRowGroup:true,\r\n      fields:{\r\n        textColor : textColor,\r\n        backgroundColor : backgroundColor,\r\n      }\r\n    }\r\n\r\n    this.metaFragment = {\r\n      textColor : '',\r\n      backgroundColor : '',\r\n    }\r\n    this.fieldName = 'utilColor'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.textColor = from.textColor\r\n    to.backgroundColor = from.backgroundColor\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment.textColor)\r\n    model.classList.add(metaFragment.backgroundColor)\r\n  }\r\n}\r\n\r\nvar addonUtilColor = (node, groupName)=>{\r\n  let utilColor = new UtilColor\r\n  utilColor.addon(node, groupName)\r\n  return utilColor\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/color.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/display.js":
/*!***************************************************!*\
  !*** ./src/elements/schemas/utilities/display.js ***!
  \***************************************************/
/*! exports provided: addonUtilDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilDisplay\", function() { return addonUtilDisplay; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\nvar utilDisplaySchema = {\r\n  group:'utilities',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Display',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'd-none':'None',\r\n      'd-inline':'Inline',\r\n      'd-inline-block':'Inline Block',\r\n      'd-block':'Block',\r\n      'd-table':'Table',\r\n      'd-table-cell':'Table Cell',\r\n      'd-table-row':'Table Row',\r\n      'd-flex':'Flex',\r\n      'd-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Display',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'd-sm-none':'None',\r\n      'd-sm-inline':'Inline',\r\n      'd-sm-inline-block':'Inline Block',\r\n      'd-sm-block':'Block',\r\n      'd-sm-table':'Table',\r\n      'd-sm-table-cell':'Table Cell',\r\n      'd-sm-table-row':'Table Row',\r\n      'd-sm-flex':'Flex',\r\n      'd-sm-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Display',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'd-md-none':'None',\r\n      'd-md-inline':'Inline',\r\n      'd-md-inline-block':'Inline Block',\r\n      'd-md-block':'Block',\r\n      'd-md-table':'Table',\r\n      'd-md-table-cell':'Table Cell',\r\n      'd-md-table-row':'Table Row',\r\n      'd-md-flex':'Flex',\r\n      'd-md-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Display',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'd-lg-none':'None',\r\n      'd-lg-inline':'Inline',\r\n      'd-lg-inline-block':'Inline Block',\r\n      'd-lg-block':'Block',\r\n      'd-lg-table':'Table',\r\n      'd-lg-table-cell':'Table Cell',\r\n      'd-lg-table-row':'Table Row',\r\n      'd-lg-flex':'Flex',\r\n      'd-lg-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Display',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'd-xl-none':'None',\r\n      'd-xl-inline':'Inline',\r\n      'd-xl-inline-block':'Inline Block',\r\n      'd-xl-block':'Block',\r\n      'd-xl-table':'Table',\r\n      'd-xl-table-cell':'Table Cell',\r\n      'd-xl-table-row':'Table Row',\r\n      'd-xl-flex':'Flex',\r\n      'd-xl-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n}//<--\r\n\r\nfunction replaceNone(str){\r\n  if(str){\r\n    return str.replace('-none','-rx-none')\r\n  }\r\n}\r\n\r\nclass UtilDisplay extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilDisplaySchema)\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'utilDisplay'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(replaceNone(metaFragment.xs))\r\n    model.classList.add(replaceNone(metaFragment.sm))\r\n    model.classList.add(replaceNone(metaFragment.md))\r\n    model.classList.add(replaceNone(metaFragment.lg))\r\n    model.classList.add(replaceNone(metaFragment.xl))\r\n  }\r\n}\r\n\r\nvar addonUtilDisplay = (node, groupName)=>{\r\n  let utilDisplay = new UtilDisplay\r\n  utilDisplay.addon(node, groupName)\r\n  return utilDisplay\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/display.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/embed/aspect-ratio.js":
/*!**************************************************************!*\
  !*** ./src/elements/schemas/utilities/embed/aspect-ratio.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Aspect Ratio',\r\n  widget:'OpSelect',\r\n  list:{\r\n    'embed-responsive-21by9':'21:9',\r\n    'embed-responsive-16by9':'16:9',\r\n    'embed-responsive-4by3':'4:3',\r\n    'embed-responsive-1by1':'1:1',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/embed/aspect-ratio.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/embed/index.js":
/*!*******************************************************!*\
  !*** ./src/elements/schemas/utilities/embed/index.js ***!
  \*******************************************************/
/*! exports provided: addonUtilEmbed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilEmbed\", function() { return addonUtilEmbed; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _aspect_ratio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aspect-ratio */ \"./src/elements/schemas/utilities/embed/aspect-ratio.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive */ \"./src/elements/schemas/utilities/embed/responsive.js\");\n\r\n\r\n\r\n\r\nvar utilEmbedSchema = {\r\n  group:'utilities',\r\n  label:'Embed',\r\n  isRowGroup:true,\r\n  fields:{\r\n    responsive : _responsive__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    aspectRadion : _aspect_ratio__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  }\r\n}\r\n\r\n\r\nclass UtilEmbed extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilEmbedSchema)\r\n\r\n    this.metaFragment = {\r\n      responsive:'',\r\n      aspectRadion:'',\r\n    } \r\n\r\n    this.fieldName = 'utilEmbed'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to[this.fieldName] = {}\r\n    to[this.fieldName].responsive = from[this.fieldName].responsive\r\n    to[this.fieldName].aspectRadion = from[this.fieldName].aspectRadion\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment.responsive)\r\n    model.classList.add(metaFragment.aspectRadion)\r\n  }\r\n}\r\n\r\nvar addonUtilEmbed = (node, groupName)=>{\r\n  let utilEmbed = new UtilEmbed\r\n  utilEmbed.addon(node, groupName)\r\n  return utilEmbed\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/embed/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/embed/responsive-item.js":
/*!*****************************************************************!*\
  !*** ./src/elements/schemas/utilities/embed/responsive-item.js ***!
  \*****************************************************************/
/*! exports provided: addonUtilResponsiveItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilResponsiveItem\", function() { return addonUtilResponsiveItem; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass UtilResponsiveItem extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Embed Item',\r\n      widget:'OpSwitch',\r\n      required:true,\r\n      group:'utilities',\r\n      onValue:'embed-responsive-item',\r\n      offValue:'',\r\n      defaultValue:'',\r\n    }\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilResponsiveItem'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilResponsiveItem = from.utilResponsiveItem\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilResponsiveItem = (node)=>{\r\n  let utilResponsiveItem = new UtilResponsiveItem\r\n  utilResponsiveItem.addon(node)\r\n  return utilResponsiveItem\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/embed/responsive-item.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/embed/responsive.js":
/*!************************************************************!*\
  !*** ./src/elements/schemas/utilities/embed/responsive.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Responsive',\r\n  widget:'OpSwitch',\r\n  required:true,\r\n  group:'rowOptions',\r\n  onValue:'embed-responsive',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/embed/responsive.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/align-content.js":
/*!**************************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/align-content.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Align Content',\r\n    list:{\r\n      'align-content-start':'Start',\r\n      'align-content-end':'End',\r\n      'align-content-center':'Center',\r\n      'align-content-around':'Rround',\r\n      'align-content-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Align content',\r\n    list:{\r\n      'align-content-sm-start':'Start',\r\n      'align-content-sm-end':'End',\r\n      'align-content-sm-center':'Center',\r\n      'align-content-sm-around':'Rround',\r\n      'align-content-sm-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Align content',\r\n    list:{\r\n      'align-content-md-start':'Start',\r\n      'align-content-md-end':'End',\r\n      'align-content-md-center':'Center',\r\n      'align-content-md-around':'Rround',\r\n      'align-content-md-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Align content',\r\n    list:{\r\n      'align-content-lg-start':'Start',\r\n      'align-content-lg-end':'End',\r\n      'align-content-lg-center':'Center',\r\n      'align-content-lg-around':'Rround',\r\n      'align-content-lg-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Align content',\r\n    list:{\r\n      'align-content-xl-start':'Start',\r\n      'align-content-xl-end':'End',\r\n      'align-content-xl-center':'Center',\r\n      'align-content-xl-around':'Rround',\r\n      'align-content-xl-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/align-content.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/align-items.js":
/*!************************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/align-items.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Align Items',\r\n    list:{\r\n      'align-items-start':'Start',\r\n      'align-items-end':'End',\r\n      'align-items-center':'Center',\r\n      'align-items-baseline':'Baseline',\r\n      'align-items-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Align Items',\r\n    list:{\r\n      'align-items-sm-start':'Start',\r\n      'align-items-sm-end':'End',\r\n      'align-items-sm-center':'Center',\r\n      'align-items-sm-baseline':'Baseline',\r\n      'align-items-sm-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Align Items',\r\n    list:{\r\n      'align-items-md-start':'Start',\r\n      'align-items-md-end':'End',\r\n      'align-items-md-center':'Center',\r\n      'align-items-md-baseline':'Baseline',\r\n      'align-items-md-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Align Items',\r\n    list:{\r\n      'align-items-lg-start':'Start',\r\n      'align-items-lg-end':'End',\r\n      'align-items-lg-center':'Center',\r\n      'align-items-lg-baseline':'Baseline',\r\n      'align-items-lg-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Align Items',\r\n    list:{\r\n      'align-items-xl-start':'Start',\r\n      'align-items-xl-end':'End',\r\n      'align-items-xl-center':'Center',\r\n      'align-items-xl-baseline':'Baseline',\r\n      'align-items-xl-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/align-items.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/align-self.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/align-self.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  group:'columnOptions',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Align Self',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'align-self-auto':'Auto',\r\n      'align-self-start':'Start',\r\n      'align-self-end':'End',\r\n      'align-self-center':'Center',\r\n      'align-self-baseline':'Baseline',\r\n      'align-self-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Align Self',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'align-self-sm-auto':'Auto',\r\n      'align-self-sm-start':'Start',\r\n      'align-self-sm-end':'End',\r\n      'align-self-sm-center':'Center',\r\n      'align-self-sm-baseline':'Baseline',\r\n      'align-self-sm-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Align Self',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'align-self-md-auto':'Auto',\r\n      'align-self-md-start':'Start',\r\n      'align-self-md-end':'End',\r\n      'align-self-md-center':'Center',\r\n      'align-self-md-baseline':'Baseline',\r\n      'align-self-md-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Align Self',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'align-self-lg-auto':'Auto',\r\n      'align-self-lg-start':'Start',\r\n      'align-self-lg-end':'End',\r\n      'align-self-lg-center':'Center',\r\n      'align-self-lg-baseline':'Baseline',\r\n      'align-self-lg-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Align Self',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'align-self-xl-auto':'Auto',\r\n      'align-self-xl-start':'Start',\r\n      'align-self-xl-end':'End',\r\n      'align-self-xl-center':'Center',\r\n      'align-self-xl-baseline':'Baseline',\r\n      'align-self-xl-stretch':'Stretch',\r\n    },\r\n  },\r\n  //---------------------\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/align-self.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/direction.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/direction.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Direction',\r\n    list:{\r\n      'flex-row':'Row',\r\n      'flex-row-reverse':'Row Reverse',\r\n      'flex-column':'Column',\r\n      'flex-column-reverse':'Column Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Direction',\r\n    list:{\r\n      'flex-sm-row':'Row',\r\n      'flex-sm-row-reverse':'Row Reverse',\r\n      'flex-sm-column':'Column',\r\n      'flex-sm-column-reverse':'Column Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Direction',\r\n    list:{\r\n      'flex-md-row':'Row',\r\n      'flex-md-row-reverse':'Row Reverse',\r\n      'flex-md-column':'Column',\r\n      'flex-md-column-reverse':'Column Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Direction',\r\n    list:{\r\n      'flex-lg-row':'Row',\r\n      'flex-lg-row-reverse':'Row Reverse',\r\n      'flex-lg-column':'Column',\r\n      'flex-lg-column-reverse':'Column Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Direction',\r\n    list:{\r\n      'flex-xl-row':'Row',\r\n      'flex-xl-row-reverse':'Row Reverse',\r\n      'flex-xl-column':'Column',\r\n      'flex-xl-column-reverse':'Column Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/direction.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/display.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/display.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Display',\r\n    list:{\r\n      'd-flex':'Flex',\r\n      'd-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Display',\r\n    list:{\r\n      'd-sm-flex':'Flex',\r\n      'd-sm-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Display',\r\n    list:{\r\n      'd-md-flex':'Flex',\r\n      'd-md-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Display',\r\n    list:{\r\n      'd-lg-flex':'Flex',\r\n      'd-lg-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Display',\r\n    list:{\r\n      'd-xl-flex':'Flex',\r\n      'd-xl-inline-flex':'Inline Flex',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/display.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/fill.js":
/*!*****************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/fill.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSwitch',\r\n    label:'Fill',\r\n    onValue:'flex-fill',\r\n    offValue:'',\r\n    defaultValue:'',\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSwitch',\r\n    label:'Fill',\r\n    onValue:'flex-fill',\r\n    offValue:'',\r\n    defaultValue:'',\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSwitch',\r\n    label:'Fill',\r\n    onValue:'flex-fill',\r\n    offValue:'',\r\n    defaultValue:'',\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSwitch',\r\n    label:'Fill',\r\n    onValue:'flex-fill',\r\n    offValue:'',\r\n    defaultValue:'',\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSwitch',\r\n    label:'Fill',\r\n    onValue:'flex-fill',\r\n    offValue:'',\r\n    defaultValue:'',\r\n  },\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/fill.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/grow.js":
/*!*****************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/grow.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Grow',\r\n    list:{\r\n      'flex-grow-0':'0',\r\n      'flex-grow-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Grow',\r\n    list:{\r\n      'flex-sm-grow-0':'0',\r\n      'flex-sm-grow-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Grow',\r\n    list:{\r\n      'flex-md-grow-0':'0',\r\n      'flex-md-grow-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Grow',\r\n    list:{\r\n      'flex-lg-grow-0':'0',\r\n      'flex-lg-grow-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Grow',\r\n    list:{\r\n      'flex-xl-grow-0':'0',\r\n      'flex-xl-grow-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/grow.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/index.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/index.js ***!
  \******************************************************/
/*! exports provided: addonUtilFlex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilFlex\", function() { return addonUtilFlex; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _align_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./align-content */ \"./src/elements/schemas/utilities/flex/align-content.js\");\n/* harmony import */ var _align_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./align-items */ \"./src/elements/schemas/utilities/flex/align-items.js\");\n/* harmony import */ var _align_self__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./align-self */ \"./src/elements/schemas/utilities/flex/align-self.js\");\n/* harmony import */ var _direction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./direction */ \"./src/elements/schemas/utilities/flex/direction.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display */ \"./src/elements/schemas/utilities/flex/display.js\");\n/* harmony import */ var _fill__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fill */ \"./src/elements/schemas/utilities/flex/fill.js\");\n/* harmony import */ var _grow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grow */ \"./src/elements/schemas/utilities/flex/grow.js\");\n/* harmony import */ var _justify_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./justify-content */ \"./src/elements/schemas/utilities/flex/justify-content.js\");\n/* harmony import */ var _margin_auto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./margin-auto */ \"./src/elements/schemas/utilities/flex/margin-auto.js\");\n/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order */ \"./src/elements/schemas/utilities/flex/order.js\");\n/* harmony import */ var _shrink__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shrink */ \"./src/elements/schemas/utilities/flex/shrink.js\");\n/* harmony import */ var _wrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./wrap */ \"./src/elements/schemas/utilities/flex/wrap.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar utilFlexSchema = {\r\n  group:'utilities',\r\n  label:'Flex',\r\n  isRowGroup:true,\r\n  fields:{\r\n    display : _display__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n    direction : _direction__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n    justifyContent : _justify_content__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\r\n    alignItems : _align_items__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    alignSelf : _align_self__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    fill : _fill__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n    grow : _grow__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n    shrink : _shrink__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\r\n    marginAuto : _margin_auto__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\r\n    wrap : _wrap__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\r\n    order : _order__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n    alignContent : _align_content__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilFlexMeta = {\r\n    display : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    direction : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    justifyContent : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    alignItems : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    alignSelf : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    fill : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    grow : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    shrink : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    marginAuto : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    wrap : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    order : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n    alignContent : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n}\r\n\r\nclass UtilFlex extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilFlexSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilFlexMeta)\r\n    this.fieldName = 'utilFlex'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveGroupMetasTo(from[this.fieldName], to[this.fieldName])\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    super.responsiveMetaGroupToViewModel(model, meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilFlex = (node, groupName)=>{\r\n  let utilFlex = new UtilFlex\r\n  utilFlex.addon(node, groupName)\r\n  return utilFlex\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/justify-content.js":
/*!****************************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/justify-content.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Justify Content',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'justify-content-start':'Start',\r\n      'justify-content-end':'End',\r\n      'justify-content-center':'Center',\r\n      'justify-content-between':'Between',\r\n      'justify-content-around':'Around',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Justify Content',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'justify-content-sm-start':'Start',\r\n      'justify-content-sm-end':'End',\r\n      'justify-content-sm-center':'Center',\r\n      'justify-content-sm-between':'Between',\r\n      'justify-content-sm-around':'Around',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Justify Content',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'justify-content-md-start':'Start',\r\n      'justify-content-md-end':'End',\r\n      'justify-content-md-center':'Center',\r\n      'justify-content-md-between':'Between',\r\n      'justify-content-md-around':'Around',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Justify Content',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'justify-content-lg-start':'Start',\r\n      'justify-content-lg-end':'End',\r\n      'justify-content-lg-center':'Center',\r\n      'justify-content-lg-between':'Between',\r\n      'justify-content-lg-around':'Around',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Justify Content',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'justify-content-xl-start':'Start',\r\n      'justify-content-xl-end':'End',\r\n      'justify-content-xl-center':'Center',\r\n      'justify-content-xl-between':'Between',\r\n      'justify-content-xl-around':'Around',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--JustifyContent\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/justify-content.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/margin-auto.js":
/*!************************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/margin-auto.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Margin Auto',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-auto':'All',\r\n      'mx-auto':'Horizontal',\r\n      'my-auto':'Vertical',\r\n      'ml-auto':'Left',\r\n      'mr-auto':'Right',\r\n      'mt-auto':'Top',\r\n      'mb-auto':'Bottom',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Margin Auto',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-sm-auto':'All',\r\n      'mx-sm-auto':'Horizontal',\r\n      'my-sm-auto':'Vertical',\r\n      'ml-sm-auto':'Left',\r\n      'mr-sm-auto':'Right',\r\n      'mt-sm-auto':'Top',\r\n      'mb-sm-auto':'Bottom',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Margin Auto',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-md-auto':'All',\r\n      'mx-md-auto':'Horizontal',\r\n      'my-md-auto':'Vertical',\r\n      'ml-md-auto':'Left',\r\n      'mr-md-auto':'Right',\r\n      'mt-md-auto':'Top',\r\n      'mb-md-auto':'Bottom',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Margin Auto',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-lg-auto':'All',\r\n      'mx-lg-auto':'Horizontal',\r\n      'my-lg-auto':'Vertical',\r\n      'ml-lg-auto':'Left',\r\n      'mr-lg-auto':'Right',\r\n      'mt-lg-auto':'Top',\r\n      'mb-lg-auto':'Bottom',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Margin Auto',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-xl-auto':'All',\r\n      'mx-xl-auto':'Horizontal',\r\n      'my-xl-auto':'Vertical',\r\n      'ml-xl-auto':'Left',\r\n      'mr-xl-auto':'Right',\r\n      'mt-xl-auto':'Top',\r\n      'mb-xl-auto':'Bottom',\r\n    },\r\n  },\r\n  //---------------------\r\n});//\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/margin-auto.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/order.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/order.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  group:'columnOptions',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Order',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'order-first':'First',\r\n      'order-last':'Last',\r\n      'order-1':'1',\r\n      'order-2':'2',\r\n      'order-3':'3',\r\n      'order-4':'4',\r\n      'order-5':'5',\r\n      'order-6':'6',\r\n      'order-7':'7',\r\n      'order-8':'8',\r\n      'order-9':'9',\r\n      'order-10':'10',\r\n      'order-11':'11',\r\n      'order-12':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Order',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'order-sm-first':'First',\r\n      'order-sm-last':'Last',\r\n      'order-sm-1':'1',\r\n      'order-sm-2':'2',\r\n      'order-sm-3':'3',\r\n      'order-sm-4':'4',\r\n      'order-sm-5':'5',\r\n      'order-sm-6':'6',\r\n      'order-sm-7':'7',\r\n      'order-sm-8':'8',\r\n      'order-sm-9':'9',\r\n      'order-sm-10':'10',\r\n      'order-sm-11':'11',\r\n      'order-sm-12':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Order',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'order-md-first':'First',\r\n      'order-md-last':'Last',\r\n      'order-md-1':'1',\r\n      'order-md-2':'2',\r\n      'order-md-3':'3',\r\n      'order-md-4':'4',\r\n      'order-md-5':'5',\r\n      'order-md-6':'6',\r\n      'order-md-7':'7',\r\n      'order-md-8':'8',\r\n      'order-md-9':'9',\r\n      'order-md-10':'10',\r\n      'order-md-11':'11',\r\n      'order-md-12':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Order',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'order-lg-first':'First',\r\n      'order-lg-last':'Last',\r\n      'order-lg-1':'1',\r\n      'order-lg-2':'2',\r\n      'order-lg-3':'3',\r\n      'order-lg-4':'4',\r\n      'order-lg-5':'5',\r\n      'order-lg-6':'6',\r\n      'order-lg-7':'7',\r\n      'order-lg-8':'8',\r\n      'order-lg-9':'9',\r\n      'order-lg-10':'10',\r\n      'order-lg-11':'11',\r\n      'order-lg-12':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Order',\r\n    widget:'OpSelect',\r\n    columns:2,\r\n    list:{\r\n      'order-xl-first':'First',\r\n      'order-xl-last':'Last',\r\n      'order-xl-1':'1',\r\n      'order-xl-2':'2',\r\n      'order-xl-3':'3',\r\n      'order-xl-4':'4',\r\n      'order-xl-5':'5',\r\n      'order-xl-6':'6',\r\n      'order-xl-7':'7',\r\n      'order-xl-8':'8',\r\n      'order-xl-9':'9',\r\n      'order-xl-10':'10',\r\n      'order-xl-11':'11',\r\n      'order-xl-12':'11',\r\n    },\r\n  },\r\n  //---------------------\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/order.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/shrink.js":
/*!*******************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/shrink.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Shrink',\r\n    list:{\r\n      'flex-shrink-0':'0',\r\n      'flex-shrink-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'shrink',\r\n    list:{\r\n      'flex-sm-shrink-0':'0',\r\n      'flex-sm-shrink-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Shrink',\r\n    list:{\r\n      'flex-md-shrink-0':'0',\r\n      'flex-md-shrink-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Shrink',\r\n    list:{\r\n      'flex-lg-shrink-0':'0',\r\n      'flex-lg-shrink-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Shrink',\r\n    list:{\r\n      'flex-xl-shrink-0':'0',\r\n      'flex-xl-shrink-1':'1',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/shrink.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/flex/wrap.js":
/*!*****************************************************!*\
  !*** ./src/elements/schemas/utilities/flex/wrap.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    widget:'OpSelect',\r\n    label:'Wrap',\r\n    list:{\r\n      'flex-nowrap':'No Wrap',\r\n      'flex-wrap':'Wrap',\r\n      'flex-wrap-reverse':'Wrap Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    widget:'OpSelect',\r\n    label:'Wrap',\r\n    list:{\r\n      'flex-sm-nowrap':'No Wrap',\r\n      'flex-sm-wrap':'Wrap',\r\n      'flex-sm-wrap-reverse':'Wrap Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    widget:'OpSelect',\r\n    label:'Wrap',\r\n    list:{\r\n      'flex-md-nowrap':'No Wrap',\r\n      'flex-md-wrap':'Wrap',\r\n      'flex-md-wrap-reverse':'Wrap Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    widget:'OpSelect',\r\n    label:'Wrap',\r\n    list:{\r\n      'flex-lg-nowrap':'No Wrap',\r\n      'flex-lg-wrap':'Wrap',\r\n      'flex-lg-wrap-reverse':'Wrap Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    widget:'OpSelect',\r\n    label:'Wrap',\r\n    list:{\r\n      'flex-xl-nowrap':'No Wrap',\r\n      'flex-xl-wrap':'Wrap',\r\n      'flex-xl-wrap-reverse':'Wrap Reverse',\r\n    },\r\n  },\r\n  //---------------------\r\n });\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/flex/wrap.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/float.js":
/*!*************************************************!*\
  !*** ./src/elements/schemas/utilities/float.js ***!
  \*************************************************/
/*! exports provided: addonUtilFloat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilFloat\", function() { return addonUtilFloat; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\nvar utilFloatSchema = {\r\n  group:'utilities',\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'float-left':'Left',\r\n      'float-right':'Right',\r\n      'float-none':'None',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'float-sm-left':'Left',\r\n      'float-sm-right':'Right',\r\n      'float-sm-none':'None',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'float-md-left':'Left',\r\n      'float-md-right':'Right',\r\n      'float-md-none':'None',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'float-lg-left':'Left',\r\n      'float-lg-right':'Right',\r\n      'float-lg-none':'None',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'float-xl-left':'Left',\r\n      'float-xl-right':'Right',\r\n      'float-xl-none':'None',\r\n    },\r\n  },\r\n  //---------------------\r\n}//<--\r\n\r\nclass UtilFloat extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilFloatSchema)\r\n\r\n    this.metaFragment = Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) \r\n\r\n    this.fieldName = 'utilFloat'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveMetaTo(from, to)\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilFloat = (node, groupName)=>{\r\n  let utilFloat = new UtilFloat\r\n  utilFloat.addon(node, groupName)\r\n  return utilFloat\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/float.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/index.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/index.js ***!
  \********************************************************/
/*! exports provided: addonUtilMargin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilMargin\", function() { return addonUtilMargin; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _margin_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./margin-all */ \"./src/elements/schemas/utilities/margin/margin-all.js\");\n/* harmony import */ var _margin_h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./margin-h */ \"./src/elements/schemas/utilities/margin/margin-h.js\");\n/* harmony import */ var _margin_v__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./margin-v */ \"./src/elements/schemas/utilities/margin/margin-v.js\");\n/* harmony import */ var _margin_t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./margin-t */ \"./src/elements/schemas/utilities/margin/margin-t.js\");\n/* harmony import */ var _margin_b__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./margin-b */ \"./src/elements/schemas/utilities/margin/margin-b.js\");\n/* harmony import */ var _margin_l__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./margin-l */ \"./src/elements/schemas/utilities/margin/margin-l.js\");\n/* harmony import */ var _margin_r__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./margin-r */ \"./src/elements/schemas/utilities/margin/margin-r.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar utilMarginSchema = {\r\n  group:'utilities',\r\n  label:'Margin',\r\n  isRowGroup:true,\r\n  fields:{\r\n  \tall : _margin_all__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  \thorizontal : _margin_h__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n  \tvertical : _margin_v__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n  \ttop : _margin_t__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    right : _margin_r__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n  \tbottom : _margin_b__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n  \tleft : _margin_l__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilMarginMeta = {\r\n  all : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  horizontal : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  vertical : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  top : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  right : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  bottom : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  left : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n}\r\n\r\nclass UtilMargin extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilMarginSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilMarginMeta)\r\n    this.fieldName = 'utilMargin'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveGroupMetasTo(from[this.fieldName], to[this.fieldName])\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    super.responsiveMetaGroupToViewModel(model, meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilMargin = (node, groupName)=>{\r\n  let utilMargin = new UtilMargin\r\n  utilMargin.addon(node, groupName)\r\n  return utilMargin\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-all.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-all.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-0':'0',\r\n      'm-1':'1',\r\n      'm-2':'2',\r\n      'm-3':'3',\r\n      'm-4':'4',\r\n      'm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-sm-0':'0',\r\n      'm-sm-1':'1',\r\n      'm-sm-2':'2',\r\n      'm-sm-3':'3',\r\n      'm-sm-4':'4',\r\n      'm-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-md-0':'0',\r\n      'm-md-1':'1',\r\n      'm-md-2':'2',\r\n      'm-md-3':'3',\r\n      'm-md-4':'4',\r\n      'm-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-lg-0':'0',\r\n      'm-lg-1':'1',\r\n      'm-lg-2':'2',\r\n      'm-lg-3':'3',\r\n      'm-lg-4':'4',\r\n      'm-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'm-xl-0':'0',\r\n      'm-xl-1':'1',\r\n      'm-xl-2':'2',\r\n      'm-xl-3':'3',\r\n      'm-xl-4':'4',\r\n      'm-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-all.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-b.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-b.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mb-0':'0',\r\n      'mb-1':'1',\r\n      'mb-2':'2',\r\n      'mb-3':'3',\r\n      'mb-4':'4',\r\n      'mb-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mb-sm-0':'0',\r\n      'mb-sm-1':'1',\r\n      'mb-sm-2':'2',\r\n      'mb-sm-3':'3',\r\n      'mb-sm-4':'4',\r\n      'mb-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mb-md-0':'0',\r\n      'mb-md-1':'1',\r\n      'mb-md-2':'2',\r\n      'mb-md-3':'3',\r\n      'mb-md-4':'4',\r\n      'mb-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mb-lg-0':'0',\r\n      'mb-lg-1':'1',\r\n      'mb-lg-2':'2',\r\n      'mb-lg-3':'3',\r\n      'mb-lg-4':'4',\r\n      'mb-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mb-xl-0':'0',\r\n      'mb-xl-1':'1',\r\n      'mb-xl-2':'2',\r\n      'mb-xl-3':'3',\r\n      'mb-xl-4':'4',\r\n      'mb-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-b.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-h.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-h.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mx-0':'0',\r\n      'mx-1':'1',\r\n      'mx-2':'2',\r\n      'mx-3':'3',\r\n      'mx-4':'4',\r\n      'mx-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mx-sm-0':'0',\r\n      'mx-sm-1':'1',\r\n      'mx-sm-2':'2',\r\n      'mx-sm-3':'3',\r\n      'mx-sm-4':'4',\r\n      'mx-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mx-md-0':'0',\r\n      'mx-md-1':'1',\r\n      'mx-md-2':'2',\r\n      'mx-md-3':'3',\r\n      'mx-md-4':'4',\r\n      'mx-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mx-lg-0':'0',\r\n      'mx-lg-1':'1',\r\n      'mx-lg-2':'2',\r\n      'mx-lg-3':'3',\r\n      'mx-lg-4':'4',\r\n      'mx-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mx-xl-0':'0',\r\n      'mx-xl-1':'1',\r\n      'mx-xl-2':'2',\r\n      'mx-xl-3':'3',\r\n      'mx-xl-4':'4',\r\n      'mx-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-h.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-l.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-l.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'ml-0':'0',\r\n      'ml-1':'1',\r\n      'ml-2':'2',\r\n      'ml-3':'3',\r\n      'ml-4':'4',\r\n      'ml-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'ml-sm-0':'0',\r\n      'ml-sm-1':'1',\r\n      'ml-sm-2':'2',\r\n      'ml-sm-3':'3',\r\n      'ml-sm-4':'4',\r\n      'ml-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'ml-md-0':'0',\r\n      'ml-md-1':'1',\r\n      'ml-md-2':'2',\r\n      'ml-md-3':'3',\r\n      'ml-md-4':'4',\r\n      'ml-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'ml-lg-0':'0',\r\n      'ml-lg-1':'1',\r\n      'ml-lg-2':'2',\r\n      'ml-lg-3':'3',\r\n      'ml-lg-4':'4',\r\n      'ml-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'ml-xl-0':'0',\r\n      'ml-xl-1':'1',\r\n      'ml-xl-2':'2',\r\n      'ml-xl-3':'3',\r\n      'ml-xl-4':'4',\r\n      'ml-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-l.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-r.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-r.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mr-0':'0',\r\n      'mr-1':'1',\r\n      'mr-2':'2',\r\n      'mr-3':'3',\r\n      'mr-4':'4',\r\n      'mr-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mr-sm-0':'0',\r\n      'mr-sm-1':'1',\r\n      'mr-sm-2':'2',\r\n      'mr-sm-3':'3',\r\n      'mr-sm-4':'4',\r\n      'mr-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mr-md-0':'0',\r\n      'mr-md-1':'1',\r\n      'mr-md-2':'2',\r\n      'mr-md-3':'3',\r\n      'mr-md-4':'4',\r\n      'mr-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mr-lg-0':'0',\r\n      'mr-lg-1':'1',\r\n      'mr-lg-2':'2',\r\n      'mr-lg-3':'3',\r\n      'mr-lg-4':'4',\r\n      'mr-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mr-xl-0':'0',\r\n      'mr-xl-1':'1',\r\n      'mr-xl-2':'2',\r\n      'mr-xl-3':'3',\r\n      'mr-xl-4':'4',\r\n      'mr-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-r.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-t.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-t.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mt-0':'0',\r\n      'mt-1':'1',\r\n      'mt-2':'2',\r\n      'mt-3':'3',\r\n      'mt-4':'4',\r\n      'mt-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mt-sm-0':'0',\r\n      'mt-sm-1':'1',\r\n      'mt-sm-2':'2',\r\n      'mt-sm-3':'3',\r\n      'mt-sm-4':'4',\r\n      'mt-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mt-md-0':'0',\r\n      'mt-md-1':'1',\r\n      'mt-md-2':'2',\r\n      'mt-md-3':'3',\r\n      'mt-md-4':'4',\r\n      'mt-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mt-lg-0':'0',\r\n      'mt-lg-1':'1',\r\n      'mt-lg-2':'2',\r\n      'mt-lg-3':'3',\r\n      'mt-lg-4':'4',\r\n      'mt-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'mt-xl-0':'0',\r\n      'mt-xl-1':'1',\r\n      'mt-xl-2':'2',\r\n      'mt-xl-3':'3',\r\n      'mt-xl-4':'4',\r\n      'mt-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-t.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/margin/margin-v.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/margin/margin-v.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'my-0':'0',\r\n      'my-1':'1',\r\n      'my-2':'2',\r\n      'my-3':'3',\r\n      'my-4':'4',\r\n      'my-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'my-sm-0':'0',\r\n      'my-sm-1':'1',\r\n      'my-sm-2':'2',\r\n      'my-sm-3':'3',\r\n      'my-sm-4':'4',\r\n      'my-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'my-md-0':'0',\r\n      'my-md-1':'1',\r\n      'my-md-2':'2',\r\n      'my-md-3':'3',\r\n      'my-md-4':'4',\r\n      'my-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'my-lg-0':'0',\r\n      'my-lg-1':'1',\r\n      'my-lg-2':'2',\r\n      'my-lg-3':'3',\r\n      'my-lg-4':'4',\r\n      'my-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'my-xl-0':'0',\r\n      'my-xl-1':'1',\r\n      'my-xl-2':'2',\r\n      'my-xl-3':'3',\r\n      'my-xl-4':'4',\r\n      'my-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginV\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/margin/margin-v.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/overflow.js":
/*!****************************************************!*\
  !*** ./src/elements/schemas/utilities/overflow.js ***!
  \****************************************************/
/*! exports provided: addonUtilOverflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilOverflow\", function() { return addonUtilOverflow; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilOverflowSchema = {\r\n  label:'Overflow',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'overflow-auto':'Auto',\r\n    'overflow-hidden':'Hidden',\r\n  },\r\n}\r\n\r\nclass UtilOverflow extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilOverflowSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilOverflow'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilOverflow = from.utilOverflow\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilOverflow = (node, groupName)=>{\r\n  let utilOverflow = new UtilOverflow\r\n  utilOverflow.addon(node, groupName)\r\n  return utilOverflow\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/overflow.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/index.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/index.js ***!
  \*********************************************************/
/*! exports provided: addonUtilPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilPadding\", function() { return addonUtilPadding; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _padding_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./padding-all */ \"./src/elements/schemas/utilities/padding/padding-all.js\");\n/* harmony import */ var _padding_h__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./padding-h */ \"./src/elements/schemas/utilities/padding/padding-h.js\");\n/* harmony import */ var _padding_v__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./padding-v */ \"./src/elements/schemas/utilities/padding/padding-v.js\");\n/* harmony import */ var _padding_t__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./padding-t */ \"./src/elements/schemas/utilities/padding/padding-t.js\");\n/* harmony import */ var _padding_b__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./padding-b */ \"./src/elements/schemas/utilities/padding/padding-b.js\");\n/* harmony import */ var _padding_l__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./padding-l */ \"./src/elements/schemas/utilities/padding/padding-l.js\");\n/* harmony import */ var _padding_r__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./padding-r */ \"./src/elements/schemas/utilities/padding/padding-r.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../responsive */ \"./src/elements/schemas/responsive.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar utilPaddingSchema = {\r\n  group:'utilities',\r\n  label:'Padding',\r\n  isRowGroup:true,\r\n  fields:{\r\n    all : _padding_all__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n    horizontal : _padding_h__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    vertical : _padding_v__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    top : _padding_t__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    right : _padding_r__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n    bottom : _padding_b__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n    left : _padding_l__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilPaddingMeta = {\r\n  all : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  horizontal : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  vertical : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  top : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  right : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  bottom : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n  left : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\r\n}\r\n\r\nclass UtilPadding extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilPaddingSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilPaddingMeta)\r\n    this.fieldName = 'utilPadding'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    super.copyResponsiveGroupMetasTo(from[this.fieldName], to[this.fieldName])\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    super.responsiveMetaGroupToViewModel(model, meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilPadding = (node, groupName)=>{\r\n  let utilPadding = new UtilPadding\r\n  utilPadding.addon(node, groupName)\r\n  return utilPadding\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-all.js":
/*!***************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-all.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'p-0':'0',\r\n      'p-1':'1',\r\n      'p-2':'2',\r\n      'p-3':'3',\r\n      'p-4':'4',\r\n      'p-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'p-sp-0':'0',\r\n      'p-sp-1':'1',\r\n      'p-sp-2':'2',\r\n      'p-sp-3':'3',\r\n      'p-sp-4':'4',\r\n      'p-sp-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'p-md-0':'0',\r\n      'p-md-1':'1',\r\n      'p-md-2':'2',\r\n      'p-md-3':'3',\r\n      'p-md-4':'4',\r\n      'p-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'p-lg-0':'0',\r\n      'p-lg-1':'1',\r\n      'p-lg-2':'2',\r\n      'p-lg-3':'3',\r\n      'p-lg-4':'4',\r\n      'p-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'All',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'p-xl-0':'0',\r\n      'p-xl-1':'1',\r\n      'p-xl-2':'2',\r\n      'p-xl-3':'3',\r\n      'p-xl-4':'4',\r\n      'p-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-all.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-b.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-b.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pb-0':'0',\r\n      'pb-1':'1',\r\n      'pb-2':'2',\r\n      'pb-3':'3',\r\n      'pb-4':'4',\r\n      'pb-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pb-sm-0':'0',\r\n      'pb-sm-1':'1',\r\n      'pb-sm-2':'2',\r\n      'pb-sm-3':'3',\r\n      'pb-sm-4':'4',\r\n      'pb-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pb-md-0':'0',\r\n      'pb-md-1':'1',\r\n      'pb-md-2':'2',\r\n      'pb-md-3':'3',\r\n      'pb-md-4':'4',\r\n      'pb-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pb-lg-0':'0',\r\n      'pb-lg-1':'1',\r\n      'pb-lg-2':'2',\r\n      'pb-lg-3':'3',\r\n      'pb-lg-4':'4',\r\n      'pb-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Bottom',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pb-xl-0':'0',\r\n      'pb-xl-1':'1',\r\n      'pb-xl-2':'2',\r\n      'pb-xl-3':'3',\r\n      'pb-xl-4':'4',\r\n      'pb-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-b.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-h.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-h.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'px-0':'0',\r\n      'px-1':'1',\r\n      'px-2':'2',\r\n      'px-3':'3',\r\n      'px-4':'4',\r\n      'px-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'px-sm-0':'0',\r\n      'px-sm-1':'1',\r\n      'px-sm-2':'2',\r\n      'px-sm-3':'3',\r\n      'px-sm-4':'4',\r\n      'px-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'px-md-0':'0',\r\n      'px-md-1':'1',\r\n      'px-md-2':'2',\r\n      'px-md-3':'3',\r\n      'px-md-4':'4',\r\n      'px-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'px-lg-0':'0',\r\n      'px-lg-1':'1',\r\n      'px-lg-2':'2',\r\n      'px-lg-3':'3',\r\n      'px-lg-4':'4',\r\n      'px-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Horizontal',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'px-xl-0':'0',\r\n      'px-xl-1':'1',\r\n      'px-xl-2':'2',\r\n      'px-xl-3':'3',\r\n      'px-xl-4':'4',\r\n      'px-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-h.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-l.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-l.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pl-0':'0',\r\n      'pl-1':'1',\r\n      'pl-2':'2',\r\n      'pl-3':'3',\r\n      'pl-4':'4',\r\n      'pl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pl-sm-0':'0',\r\n      'pl-sm-1':'1',\r\n      'pl-sm-2':'2',\r\n      'pl-sm-3':'3',\r\n      'pl-sm-4':'4',\r\n      'pl-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pl-md-0':'0',\r\n      'pl-md-1':'1',\r\n      'pl-md-2':'2',\r\n      'pl-md-3':'3',\r\n      'pl-md-4':'4',\r\n      'pl-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pl-lg-0':'0',\r\n      'pl-lg-1':'1',\r\n      'pl-lg-2':'2',\r\n      'pl-lg-3':'3',\r\n      'pl-lg-4':'4',\r\n      'pl-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Left',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pl-xl-0':'0',\r\n      'pl-xl-1':'1',\r\n      'pl-xl-2':'2',\r\n      'pl-xl-3':'3',\r\n      'pl-xl-4':'4',\r\n      'pl-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-l.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-r.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-r.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pr-0':'0',\r\n      'pr-1':'1',\r\n      'pr-2':'2',\r\n      'pr-3':'3',\r\n      'pr-4':'4',\r\n      'pr-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pr-sm-0':'0',\r\n      'pr-sm-1':'1',\r\n      'pr-sm-2':'2',\r\n      'pr-sm-3':'3',\r\n      'pr-sm-4':'4',\r\n      'pr-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pr-md-0':'0',\r\n      'pr-md-1':'1',\r\n      'pr-md-2':'2',\r\n      'pr-md-3':'3',\r\n      'pr-md-4':'4',\r\n      'pr-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pr-lg-0':'0',\r\n      'pr-lg-1':'1',\r\n      'pr-lg-2':'2',\r\n      'pr-lg-3':'3',\r\n      'pr-lg-4':'4',\r\n      'pr-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Right',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pr-xl-0':'0',\r\n      'pr-xl-1':'1',\r\n      'pr-xl-2':'2',\r\n      'pr-xl-3':'3',\r\n      'pr-xl-4':'4',\r\n      'pr-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-r.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-t.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-t.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pt-0':'0',\r\n      'pt-1':'1',\r\n      'pt-2':'2',\r\n      'pt-3':'3',\r\n      'pt-4':'4',\r\n      'pt-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pt-sm-0':'0',\r\n      'pt-sm-1':'1',\r\n      'pt-sm-2':'2',\r\n      'pt-sm-3':'3',\r\n      'pt-sm-4':'4',\r\n      'pt-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pt-md-0':'0',\r\n      'pt-md-1':'1',\r\n      'pt-md-2':'2',\r\n      'pt-md-3':'3',\r\n      'pt-md-4':'4',\r\n      'pt-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pt-lg-0':'0',\r\n      'pt-lg-1':'1',\r\n      'pt-lg-2':'2',\r\n      'pt-lg-3':'3',\r\n      'pt-lg-4':'4',\r\n      'pt-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Top',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'pt-xl-0':'0',\r\n      'pt-xl-1':'1',\r\n      'pt-xl-2':'2',\r\n      'pt-xl-3':'3',\r\n      'pt-xl-4':'4',\r\n      'pt-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginH\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-t.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/padding/padding-v.js":
/*!*************************************************************!*\
  !*** ./src/elements/schemas/utilities/padding/padding-v.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'py-0':'0',\r\n      'py-1':'1',\r\n      'py-2':'2',\r\n      'py-3':'3',\r\n      'py-4':'4',\r\n      'py-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'py-sm-0':'0',\r\n      'py-sm-1':'1',\r\n      'py-sm-2':'2',\r\n      'py-sm-3':'3',\r\n      'py-sm-4':'4',\r\n      'py-sm-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'py-md-0':'0',\r\n      'py-md-1':'1',\r\n      'py-md-2':'2',\r\n      'py-md-3':'3',\r\n      'py-md-4':'4',\r\n      'py-md-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'py-lg-0':'0',\r\n      'py-lg-1':'1',\r\n      'py-lg-2':'2',\r\n      'py-lg-3':'3',\r\n      'py-lg-4':'4',\r\n      'py-lg-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Vertical',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'py-xl-0':'0',\r\n      'py-xl-1':'1',\r\n      'py-xl-2':'2',\r\n      'py-xl-3':'3',\r\n      'py-xl-4':'4',\r\n      'py-xl-5':'5',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--marginV\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/padding/padding-v.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/position.js":
/*!****************************************************!*\
  !*** ./src/elements/schemas/utilities/position.js ***!
  \****************************************************/
/*! exports provided: addonUtilPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilPosition\", function() { return addonUtilPosition; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilPositionSchema = {\r\n  label:'Position',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'position-static':'Static',\r\n    'position-relative':'Relative',\r\n    'position-absolute':'Absolute',\r\n    'position-fixed':'Fixed',\r\n    'position-sticky':'Sticky',\r\n  },\r\n}\r\n\r\nclass UtilPosition extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilPositionSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilPosition'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilPosition = from.utilPosition\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilPosition = (node, groupName)=>{\r\n  let utilPosition = new UtilPosition\r\n  utilPosition.addon(node, groupName)\r\n  return utilPosition\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/position.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/screen-readers.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/screen-readers.js ***!
  \**********************************************************/
/*! exports provided: addonUtilScreenReaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilScreenReaders\", function() { return addonUtilScreenReaders; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilScreenReadersSchema = {\r\n  label:'Screen Readers',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'sr-only':'Only',\r\n    'sr-only-focusable':'Only Focusable',\r\n  },\r\n}\r\n\r\nclass UtilScreenReaders extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilScreenReadersSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilScreenReaders'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilScreenReaders = from.utilScreenReaders\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilScreenReaders = (node, groupName)=>{\r\n  let utilScreenReaders = new UtilScreenReaders\r\n  utilScreenReaders.addon(node, groupName)\r\n  return utilScreenReaders\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/screen-readers.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/shadow.js":
/*!**************************************************!*\
  !*** ./src/elements/schemas/utilities/shadow.js ***!
  \**************************************************/
/*! exports provided: addonUtilShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilShadow\", function() { return addonUtilShadow; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilShadowSchema = {\r\n  label:'Shadow',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'shadow-none':'No shadow',\r\n    'shadow-sm':'Small',\r\n    'shadow':'Regular',\r\n    'shadow-lg':'Larger',\r\n  },\r\n}\r\n\r\nclass UtilShadow extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilShadowSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilShadow'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilShadow = from.utilShadow\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilShadow = (node, groupName)=>{\r\n  let utilShadow = new UtilShadow\r\n  utilShadow.addon(node, groupName)\r\n  return utilShadow\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/shadow.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/sizing/height.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/sizing/height.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Height',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'h-25':'25%',\r\n    'h-50':'50%',\r\n    'h-75':'75%',\r\n    'h-100':'100%',\r\n    'vh-100':'100vh',\r\n    'mh-100':'Max 100%',\r\n    'min-vh-100':'Min 100vh',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/sizing/height.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/sizing/index.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/sizing/index.js ***!
  \********************************************************/
/*! exports provided: addonUtilSizing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilSizing\", function() { return addonUtilSizing; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _height__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./height */ \"./src/elements/schemas/utilities/sizing/height.js\");\n/* harmony import */ var _width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./width */ \"./src/elements/schemas/utilities/sizing/width.js\");\n\r\n\r\n\r\n\r\n\r\nvar utilSizingSchema = {\r\n  group:'utilities',\r\n  label:'Sizing',\r\n  isRowGroup:true,\r\n  fields:{\r\n    width : _width__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    height : _height__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilSizingMeta = {\r\n  width : '',\r\n  height : '',\r\n}\r\n\r\nclass UtilSizing extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilSizingSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilSizingMeta)\r\n    this.fieldName = 'utilSizing'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to[this.fieldName] = {}\r\n    to[this.fieldName].width = from[this.fieldName].width\r\n    to[this.fieldName].height = from[this.fieldName].height\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment.width)\r\n    model.classList.add(metaFragment.height)\r\n  }\r\n}\r\n\r\nvar addonUtilSizing = (node, groupName)=>{\r\n  let utilSizing = new UtilSizing\r\n  utilSizing.addon(node, groupName)\r\n  return utilSizing\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/sizing/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/sizing/width.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/sizing/width.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Width',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'w-25':'25%',\r\n    'w-50':'50%',\r\n    'w-75':'75%',\r\n    'w-100':'100%',\r\n    'vw-100':'100vw',\r\n    'mw-100':'Max 100%',\r\n    'min-vw-100':'Min 100vw',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/sizing/width.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/stretched-link.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/stretched-link.js ***!
  \**********************************************************/
/*! exports provided: addonUtilStretchedLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilStretchedLink\", function() { return addonUtilStretchedLink; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass UtilStretchedLink extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Stretched Link',\r\n      widget:'OpSwitch',\r\n      group:'utilities',\r\n      onValue:'stretched-link',\r\n      offValue:'',\r\n      defaultValue:'',\r\n    }\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilStretchedLink'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilStretchedLink = from.utilStretchedLink\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilStretchedLink = (node, groupName)=>{\r\n  let utilStretchedLink = new UtilStretchedLink\r\n  utilStretchedLink.addon(node, groupName)\r\n  return utilStretchedLink\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/stretched-link.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text-hide.js":
/*!*****************************************************!*\
  !*** ./src/elements/schemas/utilities/text-hide.js ***!
  \*****************************************************/
/*! exports provided: addonUtilTextHide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilTextHide\", function() { return addonUtilTextHide; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nclass UtilTextHide extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = {\r\n      label:'Text Hide',\r\n      widget:'OpSwitch',\r\n      group:'utilities',\r\n      onValue:'text-hide',\r\n      offValue:'',\r\n      defaultValue:'',\r\n    }\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilTextHide'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilTextHide = from.utilTextHide\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment)\r\n  }\r\n}\r\n\r\nvar addonUtilTextHide = (node, groupName)=>{\r\n  let utilTextHide = new UtilTextHide\r\n  utilTextHide.addon(node, groupName)\r\n  return utilTextHide\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text-hide.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/align.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/text/align.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  isResponsive:true,\r\n  xs:{\r\n    label:'Align',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'text-left':'Left',\r\n      'text-center':'Center',\r\n      'text-right':'Right',\r\n    },\r\n  },\r\n  //---------------------\r\n  sm:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'text-sm-left':'Left',\r\n      'text-sm-center':'Center',\r\n      'text-sm-right':'Right',\r\n    },\r\n  },\r\n  //---------------------\r\n  md:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'text-md-left':'Left',\r\n      'text-md-center':'Center',\r\n      'text-md-right':'Right',\r\n    },\r\n  },\r\n  //---------------------\r\n  lg:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'text-lg-left':'Left',\r\n      'text-lg-center':'Center',\r\n      'text-lg-right':'Right',\r\n    },\r\n  },\r\n  //---------------------\r\n  xl:{\r\n    label:'Float',\r\n    widget:'OpSelect',\r\n    list:{\r\n      'text-xl-left':'Left',\r\n      'text-xl-center':'Center',\r\n      'text-xl-right':'Right',\r\n    },\r\n  },\r\n  //---------------------\r\n});//<--\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/align.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/decoration.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/decoration.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Clear Decoration',\r\n  widget:'OpSwitch',\r\n  onValue:'text-decoration-none',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/decoration.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/index.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/text/index.js ***!
  \******************************************************/
/*! exports provided: addonUtilText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilText\", function() { return addonUtilText; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../responsive */ \"./src/elements/schemas/responsive.js\");\n/* harmony import */ var _justify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./justify */ \"./src/elements/schemas/utilities/text/justify.js\");\n/* harmony import */ var _align__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./align */ \"./src/elements/schemas/utilities/text/align.js\");\n/* harmony import */ var _wrapping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrapping */ \"./src/elements/schemas/utilities/text/wrapping.js\");\n/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truncate */ \"./src/elements/schemas/utilities/text/truncate.js\");\n/* harmony import */ var _word_break__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./word-break */ \"./src/elements/schemas/utilities/text/word-break.js\");\n/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transform */ \"./src/elements/schemas/utilities/text/transform.js\");\n/* harmony import */ var _weight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./weight */ \"./src/elements/schemas/utilities/text/weight.js\");\n/* harmony import */ var _italics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./italics */ \"./src/elements/schemas/utilities/text/italics.js\");\n/* harmony import */ var _monospace__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./monospace */ \"./src/elements/schemas/utilities/text/monospace.js\");\n/* harmony import */ var _reset_color__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reset-color */ \"./src/elements/schemas/utilities/text/reset-color.js\");\n/* harmony import */ var _decoration__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./decoration */ \"./src/elements/schemas/utilities/text/decoration.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar utilTextSchema = {\r\n  group:'utilities',\r\n  label:'Text',\r\n  isRowGroup:true,\r\n  fields:{\r\n    justify : _justify__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n    align : _align__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n    wrapping : _wrapping__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n    truncate : _truncate__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n    wordBreak : _word_break__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n    transform : _transform__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n    weight : _weight__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n    italics : _italics__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\r\n    monospace : _monospace__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\r\n    resetColor : _reset_color__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\r\n    decoration : _decoration__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\r\n  }\r\n}\r\n\r\nvar utilTextMeta = {\r\n  justify : '',\r\n  align : Object.assign({}, _responsive__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\r\n  wrapping : '',\r\n  truncate : '',\r\n  wordBreak : '',\r\n  transform : '',\r\n  weight : '',\r\n  italics : '',\r\n  monospace : '',\r\n  resetColor : '',\r\n  decoration : '',\r\n\r\n}\r\n\r\nclass UtilText extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilTextSchema)\r\n\r\n    this.metaFragment = Object.assign({}, utilTextMeta) \r\n\r\n    this.fieldName = 'utilText'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to[this.fieldName] = {}\r\n    to[this.fieldName].justify = from[this.fieldName].justify\r\n    super.copyResponsiveMetaTo(from[this.fieldName].align, to[this.fieldName].align)\r\n    to[this.fieldName].wrapping = from[this.fieldName].wrapping\r\n    to[this.fieldName].truncate = from[this.fieldName].truncate\r\n    to[this.fieldName].wordBreak = from[this.fieldName].wordBreak\r\n    to[this.fieldName].transform = from[this.fieldName].transform\r\n    to[this.fieldName].weight = from[this.fieldName].weight\r\n    to[this.fieldName].italics = from[this.fieldName].italics\r\n    to[this.fieldName].monospace = from[this.fieldName].monospace\r\n    to[this.fieldName].resetColor = from[this.fieldName].resetColor\r\n    to[this.fieldName].decoration = from[this.fieldName].decoration\r\n\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    let metaFragment = meta[this.fieldName]\r\n    model.classList.add(metaFragment.justify)\r\n    super.responsiveMetaFieldToViewModel(model, metaFragment.align)\r\n    model.classList.add(metaFragment.wrapping)\r\n    model.classList.add(metaFragment.truncate)\r\n    model.classList.add(metaFragment.wordBreak)\r\n    model.classList.add(metaFragment.transform)\r\n    model.classList.add(metaFragment.weight)\r\n    model.classList.add(metaFragment.italics)\r\n    model.classList.add(metaFragment.monospace)\r\n    model.classList.add(metaFragment.resetColor)\r\n    model.classList.add(metaFragment.decoration)\r\n  }\r\n}\r\n\r\nvar addonUtilText = (node, groupName)=>{\r\n  let utilText = new UtilText\r\n  utilText.addon(node, groupName)\r\n  return utilText\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/index.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/italics.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/italics.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Italic',\r\n  widget:'OpSwitch',\r\n  onValue:'font-italic',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/italics.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/justify.js":
/*!********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/justify.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Justify',\r\n  widget:'OpSwitch',\r\n  onValue:'text-justify',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/justify.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/monospace.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/monospace.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Monospace',\r\n  widget:'OpSwitch',\r\n  onValue:'text-monospace',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/monospace.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/reset-color.js":
/*!************************************************************!*\
  !*** ./src/elements/schemas/utilities/text/reset-color.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Reset Color',\r\n  widget:'OpSwitch',\r\n  onValue:'text-reset',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/reset-color.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/transform.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/transform.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Transform',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'text-lowercase':'Lowercase',\r\n    'text-uppercase':'Uppercase',\r\n    'text-capitalize':'Capitalize',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/transform.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/truncate.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/truncate.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Truncate',\r\n  widget:'OpSwitch',\r\n  onValue:'text-truncate',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/truncate.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/weight.js":
/*!*******************************************************!*\
  !*** ./src/elements/schemas/utilities/text/weight.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Font weight',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'font-weight-bold':'Bold',\r\n    'font-weight-bolder':'Bolder',\r\n    'font-weight-normal':'Normal',\r\n    'font-weight-light':'Light',\r\n    'font-weight-lighter':'Lighter',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/weight.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/word-break.js":
/*!***********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/word-break.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Word break',\r\n  widget:'OpSwitch',\r\n  onValue:'text-break',\r\n  offValue:'',\r\n  defaultValue:'',\r\n});\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/word-break.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/text/wrapping.js":
/*!*********************************************************!*\
  !*** ./src/elements/schemas/utilities/text/wrapping.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  label:'Wrapping',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'text-wrap':'Wrap',\r\n    'text-nowrap':'Nowrap',\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/text/wrapping.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/vertical-align.js":
/*!**********************************************************!*\
  !*** ./src/elements/schemas/utilities/vertical-align.js ***!
  \**********************************************************/
/*! exports provided: addonUtilVerticalAlignment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilVerticalAlignment\", function() { return addonUtilVerticalAlignment; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilVerticalAlignmentSchema = {\r\n  label:'Vertical align',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'align-baseline':'Baseline',\r\n    'align-top':'Top',\r\n    'align-middle':'Middle',\r\n    'align-bottom':'Bottom',\r\n    'align-text-top':'Text Top',\r\n    'align-text-bottom':'Text Bottom',\r\n  },\r\n}\r\n\r\nclass UtilVerticalAlignment extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilVerticalAlignmentSchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilVerticalAlignment'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilVerticalAlignment = from.utilVerticalAlignment\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n    model.classList.add(meta[this.fieldName])\r\n  }\r\n}\r\n\r\nvar addonUtilVerticalAlignment = (node, groupName)=>{\r\n  let utilVerticalAlignment = new UtilVerticalAlignment\r\n  utilVerticalAlignment.addon(node, groupName)\r\n  return utilVerticalAlignment\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/vertical-align.js?");

/***/ }),

/***/ "./src/elements/schemas/utilities/visibility.js":
/*!******************************************************!*\
  !*** ./src/elements/schemas/utilities/visibility.js ***!
  \******************************************************/
/*! exports provided: addonUtilVisibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addonUtilVisibility\", function() { return addonUtilVisibility; });\n/* harmony import */ var _option_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option-fragment */ \"./src/elements/schemas/option-fragment.js\");\n\r\n\r\nlet utilVisibilitySchema = {\r\n  label:'Visibility',\r\n  group:'utilities',\r\n  widget:'OpSelect',\r\n  defaultValue:'',\r\n  list:{\r\n    'visible':'Visible',\r\n    'invisible':'Invisible',\r\n  },\r\n}\r\n\r\nclass UtilVisibility extends _option_fragment__WEBPACK_IMPORTED_MODULE_0__[\"OptionFragment\"]{\r\n  constructor(){\r\n    super()\r\n    this.schema = Object.assign({}, utilVisibilitySchema)\r\n\r\n    this.metaFragment = '' \r\n\r\n    this.fieldName = 'utilVisibility'\r\n  }\r\n\r\n  copyMeta(from, to){\r\n    to.utilVisibility = from.utilVisibility\r\n  }\r\n\r\n  toViewModel(model, meta){\r\n   let metaValue = meta[this.fieldName]\r\n    if(metaValue === 'invisible'){\r\n      model.classList.add('rx-invisble')\r\n    }\r\n    else{\r\n      model.classList.add(meta[this.fieldName])\r\n    }\r\n  }\r\n}\r\n\r\nvar addonUtilVisibility = (node, groupName)=>{\r\n  let utilVisibility = new UtilVisibility\r\n  utilVisibility.addon(node, groupName)\r\n  return utilVisibility\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/elements/schemas/utilities/visibility.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/rxeditor */ \"./src/core/rxeditor.js\");\n/* harmony import */ var _shell_rxeditor_fm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell/rxeditor-fm */ \"./src/shell/rxeditor-fm.js\");\n/* harmony import */ var _shell_rxeditor_inline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/rxeditor-inline */ \"./src/shell/rxeditor-inline.js\");\n\r\n\r\n\r\n\r\nwindow.createRXEditorFM = ()=>{\r\n  window.rxEditor = new _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__[\"RXEditor\"]\r\n\r\n  let rxEditorFM = new _shell_rxeditor_fm__WEBPACK_IMPORTED_MODULE_1__[\"RXEditorFM\"]\r\n  rxEditorFM.assemble('bootstrap.container')\r\n  rxEditorFM.assemble('bootstrap.row')\r\n  rxEditorFM.assemble('bootstrap.column')\r\n  rxEditorFM.assemble('bootstrap.w100')\r\n  rxEditorFM.assemble('bootstrap.heading')\r\n  rxEditorFM.assemble('bootstrap.paragraph')\r\n  rxEditorFM.assemble('html.div')\r\n\r\n  return rxEditorFM\r\n}\r\n\r\nwindow.rxEditorInline = new _shell_rxeditor_inline__WEBPACK_IMPORTED_MODULE_2__[\"RXEditorInline\"]\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/shell/controls/border-input.js":
/*!********************************************!*\
  !*** ./src/shell/controls/border-input.js ***!
  \********************************************/
/*! exports provided: OpBorderInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpBorderInput\", function() { return OpBorderInput; });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/shell/controls/buttons.js\");\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n\r\n\r\n\r\n\r\nclass OpBorderInput extends _input__WEBPACK_IMPORTED_MODULE_0__[\"OpInput\"]{\r\n  constructor(value, schema){\r\n    super()\r\n    this.cssClass('border-input')\r\n    this.cssClass(schema.specialClass)\r\n\r\n    this.schema = schema.list\r\n    this.value = value\r\n    this.defaultValue = schema.defaultValue\r\n\r\n    let view = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__[\"RXComponent\"]().cssClass('view')\r\n    let topDiv = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__[\"RXComponent\"]().setInnerHTML(`<div class=\"view-button top\"></div>`)\r\n    let rightDiv = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__[\"RXComponent\"]().setInnerHTML(`<div class=\"view-button right\"></div>`)\r\n    let bottomDiv = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__[\"RXComponent\"]().setInnerHTML(`<div class=\"view-button bottom\"></div>`)\r\n    let leftDiv = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_2__[\"RXComponent\"]().setInnerHTML(`<div class=\"view-button left\"></div>`)\r\n\r\n    topDiv.domOn('click', ()=>{\r\n      this.clickBorder('top')\r\n    })\r\n    rightDiv.domOn('click', ()=>{\r\n      this.clickBorder('right')\r\n    })\r\n    bottomDiv.domOn('click', ()=>{\r\n      this.clickBorder('bottom')\r\n    })\r\n    leftDiv.domOn('click', ()=>{\r\n      this.clickBorder('left')\r\n    })\r\n\r\n    view.pushChild(topDiv)\r\n             .pushChild(rightDiv)\r\n             .pushChild(bottomDiv)\r\n             .pushChild(leftDiv)\r\n\r\n    this.pushChild(view)\r\n\r\n    for(var fdName in this.schema){\r\n      value.forEach((subVal)=>{\r\n        if(this.schema[fdName] == subVal){\r\n          this[fdName] = subVal\r\n        }\r\n      })\r\n    }\r\n    this.updateView()\r\n\r\n  }\r\n\r\n  clickBorder(border){\r\n    if(this.all){\r\n      this.top = this.schema['top']\r\n      this.right = this.schema['right']\r\n      this.bottom = this.schema['bottom']\r\n      this.left = this.schema['left']\r\n      this[border] = ''\r\n      this.all = ''\r\n    }\r\n    else if(this[border]){\r\n      this[border] = ''\r\n    }\r\n    else{\r\n      this[border] = this.schema[border]\r\n    }\r\n\r\n    this.adjustValue()\r\n    this.onValueChanged(this.value)\r\n    this.updateView()\r\n  }\r\n\r\n  adjustValue(){\r\n    this.value = []\r\n    if(this.top && this.right && this.bottom && this.left){\r\n      this.all = this.schema.all\r\n      this.top = ''\r\n      this.right = ''\r\n      this.bottom = ''\r\n      this.left = ''\r\n      this.value.push(this.schema.all)\r\n      return\r\n    }\r\n\r\n    for(var fdName in this.schema){\r\n      if(this[fdName]){\r\n        this.value.push(this.schema[fdName])\r\n      }\r\n    }\r\n  }\r\n\r\n  isShowingDefault(){\r\n    return this.defaultValue.sort().toString() === this.value.sort().toString() \r\n  }\r\n\r\n  updateView(){\r\n    this.removeCssClass('select-all')\r\n    this.removeCssClass('select-top')\r\n    this.removeCssClass('select-right')\r\n    this.removeCssClass('select-bottom')\r\n    this.removeCssClass('select-left')\r\n\r\n    if(this.all) {\r\n      this.cssClass('select-all')\r\n      return\r\n    }\r\n\r\n    if(this.top){\r\n      this.cssClass('select-top')\r\n    }\r\n    if(this.right){\r\n      this.cssClass('select-right')\r\n    }\r\n    if(this.bottom){\r\n      this.cssClass('select-bottom')\r\n    }\r\n    if(this.left){\r\n      this.cssClass('select-left')\r\n    }\r\n  }\r\n\r\n  removeValue(value){\r\n    if(this.all === value){\r\n      this.all = ''\r\n    }\r\n    if(this.top === value){\r\n      this.top = ''\r\n    }\r\n    if(this.right === value){\r\n      this.right = ''\r\n    }\r\n    if(this.bottom === value){\r\n      this.bottom = ''\r\n    }\r\n    if(this.left === value){\r\n      this.left = ''\r\n    }\r\n    this.adjustValue()\r\n    this.onValueChanged(this.value)\r\n    this.updateView()\r\n  }\r\n\r\n  hasValue(value){\r\n    for(var fdName in this.schema){\r\n      if(this.schema[fdName] === value){\r\n        return true\r\n      }\r\n    }\r\n    return false\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/shell/controls/border-input.js?");

/***/ }),

/***/ "./src/shell/controls/buttons.js":
/*!***************************************!*\
  !*** ./src/shell/controls/buttons.js ***!
  \***************************************/
/*! exports provided: RXButton, OpButton, OpIconButton, ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXButton\", function() { return RXButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpButton\", function() { return OpButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpIconButton\", function() { return OpIconButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonGroup\", function() { return ButtonGroup; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/object-state */ \"./src/basic/object-state.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n\r\n\r\n\r\n\r\nclass RXButton extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n  }\r\n\r\n  active(isActive= true){\r\n    if(isActive){\r\n      this.$dom ? this.$dom.classList.add('active') : this.classList.add('active')\r\n    }\r\n    else{\r\n      this.$dom ? this.$dom.classList.remove('active') : this.classList.remove('active')\r\n    }\r\n    return this\r\n  }\r\n\r\n  title(title){\r\n    this.attrs.title = title\r\n    return this\r\n  }\r\n\r\n  enable(isEnable){\r\n    if(!isEnable){\r\n      this.$dom ? this.$dom.classList.add('disable') : this.classList.add('disable')\r\n    }\r\n    else{\r\n      this.$dom ? this.$dom.classList.remove('disable') : this.classList.remove('disable')\r\n    }\r\n  }\r\n}\r\n\r\nclass OpButton extends RXButton{\r\n  constructor(innerHTML, id=''){\r\n    super()\r\n    this.id = id\r\n    this.cssClass('op-button')\r\n    this.innerHTML = innerHTML\r\n  }\r\n}\r\n\r\nclass OpIconButton extends RXButton{\r\n  constructor(innerHTML){\r\n    super()\r\n    this.cssClass('op-icon-button')\r\n    this.innerHTML = innerHTML\r\n  }\r\n}\r\n\r\n\r\n\r\nclass ButtonGroupState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_1__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__actived = ''//acitved button id\r\n  }\r\n\r\n  get actived(){\r\n    return this.__actived\r\n  }\r\n\r\n  set actived(actived){\r\n    if(this.__actived == actived){return} \r\n    this.__actived = actived\r\n    this.distributeEvent('actived')\r\n  }\r\n}\r\n\r\nclass ButtonGroup extends _input__WEBPACK_IMPORTED_MODULE_2__[\"OpInput\"]{\r\n  constructor(value, schema){\r\n    super(value, schema.defaultValue)\r\n    this.state = new ButtonGroupState\r\n    this.cssClass('button-group')\r\n    for(var id in schema.buttons ){\r\n      this.pushChild(new OpButton(schema.buttons[id], id))\r\n    }\r\n    this.state.actived = value\r\n    this.updateState()\r\n    this.state.watch('actived',(state)=>{\r\n      this.value = state.actived\r\n      this.updateState()\r\n      this.onValueChanged(state.actived)\r\n    })\r\n  }\r\n\r\n  updateState(){\r\n    this.children.forEach((child)=>{\r\n      child.active(false)\r\n      if(child.id === this.state.actived){\r\n        child.active()\r\n      }\r\n    })\r\n\r\n  }\r\n\r\n  pushChild(child){\r\n    this[child.id] = child\r\n\r\n    child.domOn('click', ()=>{\r\n      this.state.actived = child.id\r\n    })\r\n\r\n    return super.pushChild(child)\r\n  }\r\n\r\n  active(btnId){\r\n    this[btnId].active()\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shell/controls/buttons.js?");

/***/ }),

/***/ "./src/shell/controls/input.js":
/*!*************************************!*\
  !*** ./src/shell/controls/input.js ***!
  \*************************************/
/*! exports provided: OpInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpInput\", function() { return OpInput; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/rxarray */ \"./src/basic/rxarray.js\");\n\r\n\r\n\r\nclass OpInput extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(value='', defaultValue = ''){\r\n    super()\r\n    this.valueChangedHandlers = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__[\"RXArray\"]\r\n\r\n    this.onValueChanged = (value)=>{\r\n      this.valueChangedHandlers.forEach((handler)=>{\r\n        handler(value)\r\n      })\r\n    }\r\n    this.value = value\r\n    this.defaultValue = defaultValue\r\n  }\r\n\r\n  isShowingDefault(){\r\n    return this.defaultValue == this.value\r\n  }\r\n\r\n  listenValueChaged(callback){\r\n    this.valueChangedHandlers.add(callback)\r\n  }\r\n\r\n  offValueChaged(callback){\r\n    this.valueChangedHandlers.remove(callback)\r\n  }\r\n\r\n  hasValue(value){\r\n    return this.value === value\r\n  }\r\n} \n\n//# sourceURL=webpack:///./src/shell/controls/input.js?");

/***/ }),

/***/ "./src/shell/controls/label.js":
/*!*************************************!*\
  !*** ./src/shell/controls/label.js ***!
  \*************************************/
/*! exports provided: OpLabel, OpLabelGroup, OpLabelsInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpLabel\", function() { return OpLabel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpLabelGroup\", function() { return OpLabelGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpLabelsInput\", function() { return OpLabelsInput; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ \"./src/shell/controls/buttons.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../basic/rxarray */ \"./src/basic/rxarray.js\");\n\r\n\r\n\r\n\r\n\r\nclass OpLabel extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(labelText){\r\n    super()\r\n    this.cssClass('op-label')\r\n\r\n    this.textSpan = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]('span')\r\n    this.textSpan.innerHTML = labelText\r\n    this.pushChild(this.textSpan)\r\n    this.labelText = labelText\r\n    this.rightIconClick = (labelText)=>{}\r\n  }\r\n\r\n  setRightIcon(innerHTML){\r\n    let iconSpan = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]('span')\r\n    iconSpan.cssClass('right-icon')\r\n    iconSpan.innerHTML = innerHTML\r\n    this.pushChild(iconSpan)\r\n    iconSpan.domOn('click', ()=>{\r\n      this.rightIconClick(this.labelText)\r\n    })\r\n    return this\r\n  }\r\n\r\n  setText(text){\r\n    this.textSpan.setInnerHTML(text)\r\n  }\r\n\r\n}\r\n\r\nclass OpLabelGroup extends _input__WEBPACK_IMPORTED_MODULE_2__[\"OpInput\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('op-label-group')\r\n    this.values = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_3__[\"RXArray\"]\r\n    this.onRemoveValue = (value)=>{}\r\n    this.addLabels()\r\n    this.checkEmperty()\r\n  }\r\n\r\n  addLabel(value){\r\n    if(!value) return\r\n    this.values.add(value)\r\n    let label = new OpLabel(value).setRightIcon('×')\r\n    label.rightIconClick = (labelText)=>{\r\n      this.removeLabel(labelText)\r\n      this.onRemoveValue(labelText)\r\n    }\r\n    this.pushChild(label)\r\n  }\r\n\r\n  addLabels(){\r\n    this.clearChild()\r\n    this.values.forEach((value)=>{\r\n      this.addLabel(value)\r\n    })\r\n  }\r\n\r\n  checkEmperty(){\r\n    if(this.values.length === 0){\r\n      this.setInnerHTML('<div class=\"not-set-value\">NOT SET</div>')\r\n    }\r\n    else{\r\n      this.setInnerHTML('')\r\n    }\r\n  }\r\n\r\n  setValues(values){\r\n    this.clearChild()\r\n    this.values.length = 0\r\n    values.forEach((value)=>{\r\n      this.addLabel(value)\r\n    })\r\n    this.checkEmperty()\r\n    this.refresh()\r\n  }\r\n\r\n  removeLabel(labelText){\r\n    this.values.remove(labelText)\r\n    this.checkEmperty()\r\n    this.addLabels()\r\n    this.refresh()\r\n  }\r\n}\r\n\r\nclass OpLabelsInput extends _input__WEBPACK_IMPORTED_MODULE_2__[\"OpInput\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('op-labels-input')\r\n    this.values = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_3__[\"RXArray\"]\r\n    this.values.push('test1')\r\n    this.values.push('test2')\r\n    this.values.push('col-md-xx')\r\n    this.labelGroup = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]().cssClass('op-label-group')\r\n    this.pushChild(\r\n        new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]().pushChild(this.labelGroup)\r\n      )\r\n    this.addButton = new _buttons__WEBPACK_IMPORTED_MODULE_1__[\"OpIconButton\"]('+')\r\n    this.pushChild(this.addButton)\r\n\r\n    this.inputCtrl = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]('input')\r\n    this.inputWraper = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n                      .cssClass('label-input')\r\n                      .pushChild(this.inputCtrl)\r\n    this.inputWraper.hide()\r\n    this.pushChild( this.inputWraper)\r\n\r\n    this.addLabels()\r\n\r\n    this.addButton.domOn('click', ()=>{\r\n      this.inputWraper.show()\r\n      this.inputCtrl.focus()\r\n    })\r\n\r\n    document.addEventListener('mousedown', ()=>{\r\n      this.hideInput()\r\n    })\r\n\r\n    this.inputWraper.domOn('mousedown',(event)=>{\r\n      event.stopPropagation()\r\n    })\r\n\r\n    this.inputWraper.domOn('keyup',(event)=>{\r\n      if (event.keyCode == 13) {\r\n        let value = this.inputCtrl.$dom.value\r\n        if(value){\r\n          value.split(' ').forEach((newValue)=>{\r\n            if(newValue){\r\n              this.values.add(newValue)\r\n            }\r\n          })\r\n          this.addLabels()\r\n          this.labelGroup.refresh()\r\n        }\r\n        this.hideInput()\r\n      }\r\n    })\r\n\r\n    this.hideInput = ()=>{\r\n      this.inputWraper.hide()\r\n      this.inputCtrl.clear()\r\n    }\r\n\r\n  }\r\n\r\n\r\n  addLabels(){\r\n    this.labelGroup.clearChild()\r\n    this.values.forEach((value)=>{\r\n      let label = new OpLabel(value).setRightIcon('×')\r\n      label.rightIconClick = (labelText)=>{\r\n        this.removeLabel(labelText)\r\n      }\r\n      this.labelGroup.pushChild(label)\r\n    })\r\n  }\r\n\r\n  removeLabel(labelText){\r\n    this.values.remove(labelText)\r\n    this.addLabels()\r\n    this.labelGroup.refresh()\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/shell/controls/label.js?");

/***/ }),

/***/ "./src/shell/controls/option-row-group.js":
/*!************************************************!*\
  !*** ./src/shell/controls/option-row-group.js ***!
  \************************************************/
/*! exports provided: OptionRowGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionRowGroup\", function() { return OptionRowGroup; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/rxarray */ \"./src/basic/rxarray.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/object-state */ \"./src/basic/object-state.js\");\n/* harmony import */ var _option_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./option-row */ \"./src/shell/controls/option-row.js\");\n/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label */ \"./src/shell/controls/label.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass GroupValueLabel extends _label__WEBPACK_IMPORTED_MODULE_4__[\"OpLabel\"]{\r\n  constructor(labelText){\r\n    super(labelText)\r\n  }  \r\n}\r\n\r\nclass OptionRowGroup extends _option_row__WEBPACK_IMPORTED_MODULE_3__[\"RowBase\"]{\r\n  constructor(value, schema, fieldName, screenWidth){\r\n    super()\r\n    this.value = value\r\n    this.schema = schema\r\n    this.fieldName = fieldName\r\n    this.screenWidth = screenWidth\r\n    this.cssClass('option-row-group')\r\n    this.cssClass('sub-row-collapse')\r\n    this.titleRow = new _option_row__WEBPACK_IMPORTED_MODULE_3__[\"OptionRow\"](['tsss'], {\r\n      label:schema.label,\r\n      widget:'OpLabelGroup',\r\n    })\r\n\r\n    this.titleRow.rowLabel.cssClass('dropdown')\r\n    this.titleRow.rowLabel.domOn('click',()=>{\r\n      this.tongle('sub-row-collapse')\r\n    })\r\n    this.titleRow.input.setValues(this.getValuesOnLabel())\r\n\r\n    this.pushChild(this.titleRow)\r\n    this.body = new OptionRowGroupBody\r\n    this.pushChild(this.body)\r\n\r\n    //构造子行\r\n    for(var fieldName in schema.fields){\r\n      let fieldSchema = schema.fields[fieldName]\r\n      let metaValue = value[fieldName]\r\n      var row\r\n      if(fieldSchema.isResponsive){\r\n        row = new _option_row__WEBPACK_IMPORTED_MODULE_3__[\"OptionResponsiveRow\"](metaValue, fieldSchema, fieldName, this.screenWidth)\r\n      }\r\n      else{\r\n        row = new _option_row__WEBPACK_IMPORTED_MODULE_3__[\"OptionRow\"](metaValue, fieldSchema, fieldName)\r\n      }\r\n\r\n      row.listenValueChaged((value, fdName)=>{\r\n        this.value[fdName] = value\r\n        this.onValueChanged(this.value)\r\n        this.titleRow.input.setValues(this.getValuesOnLabel())\r\n        this.updateLabelColor()\r\n      })\r\n      row.rowLabel.cssClass('sub-label')\r\n      this.body.pushChild(row)\r\n    }\r\n\r\n    this.titleRow.input.onRemoveValue = (value)=>{\r\n      this.body.children.forEach((row)=>{\r\n        if(row.input.hasValue(value)){\r\n          row.input.removeValue(value)\r\n        }\r\n      })\r\n    }\r\n    this.updateLabelColor()\r\n    //if(!isShowSub){\r\n      //this.cssClass('sub-row-collapse')\r\n    //}\r\n  }//\r\n\r\n  updateLabelColor(){\r\n    var showingDefault = true\r\n    this.body.children.forEach((row)=>{\r\n      if(!row.input.isShowingDefault()){\r\n        showingDefault = false\r\n      }\r\n    })\r\n\r\n    if(showingDefault){\r\n      this.titleRow.removeCssClass('changed')\r\n    }\r\n    else{\r\n      this.titleRow.cssClass('changed')\r\n    }\r\n  }\r\n\r\n  getValuesOnLabel(){\r\n    let schema = this.schema\r\n    let values = []\r\n    for(var fieldName in schema.fields){\r\n      if(schema.fields[fieldName].isResponsive){\r\n        values.push(this.value[fieldName][this.screenWidth])\r\n      }\r\n      else{\r\n        let value = this.value[fieldName]\r\n        if(value.constructor==Array){\r\n          values.push.apply(values, value)\r\n        }\r\n        else{\r\n          values.push(this.value[fieldName])\r\n        }\r\n      }\r\n    }\r\n    return values\r\n  }\r\n\r\n}\r\n\r\nclass OptionRowGroupBody extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('option-row-group-body')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shell/controls/option-row-group.js?");

/***/ }),

/***/ "./src/shell/controls/option-row.js":
/*!******************************************!*\
  !*** ./src/shell/controls/option-row.js ***!
  \******************************************/
/*! exports provided: RowBase, OptionRow, OptionResponsiveRow, OptionRowLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RowBase\", function() { return RowBase; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionRow\", function() { return OptionRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionResponsiveRow\", function() { return OptionResponsiveRow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionRowLabel\", function() { return OptionRowLabel; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/rxarray */ \"./src/basic/rxarray.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../basic/object-state */ \"./src/basic/object-state.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./switch */ \"./src/shell/controls/switch.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons */ \"./src/shell/controls/buttons.js\");\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select */ \"./src/shell/controls/select.js\");\n/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./label */ \"./src/shell/controls/label.js\");\n/* harmony import */ var _border_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./border-input */ \"./src/shell/controls/border-input.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass RowBase extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.valueChangedHandlers = new _basic_rxarray__WEBPACK_IMPORTED_MODULE_1__[\"RXArray\"]\r\n    this.onValueChanged = (value)=>{\r\n      this.valueChangedHandlers.forEach((handler)=>{\r\n        handler(value, this.fieldName)\r\n      })\r\n      this.updateLabelColor(this.input)\r\n    }\r\n  }\r\n\r\n  listenValueChaged(callback){\r\n    this.valueChangedHandlers.add(callback)\r\n  }\r\n\r\n  offValueChaged(callback){\r\n    this.valueChangedHandlers.remove(callback)\r\n  }\r\n\r\n}\r\n\r\nclass OptionRow extends RowBase{\r\n  constructor(value, schema, fieldName){\r\n    super()\r\n    this.cssClass('option-row')\r\n    this.schema = schema\r\n    this.value = value\r\n    this.fieldName = fieldName\r\n    this.setLabel(schema.label)\r\n    this.setInput(this.createInput())\r\n  }\r\n\r\n  setLabel(labelText){\r\n    this.rowLabel = new OptionRowLabel(labelText)\r\n    this.pushChild(this.rowLabel)\r\n  }\r\n\r\n  setInput(input){\r\n    this.input = input\r\n    this.pushChild(input)\r\n    this.updateLabelColor(input)\r\n    input.listenValueChaged((value)=>{\r\n      this.onValueChanged(value)\r\n    })\r\n  }\r\n\r\n  updateLabelColor(input){\r\n    if(input.isShowingDefault()){\r\n      this.removeCssClass('changed')\r\n    }\r\n    else{\r\n      this.cssClass('changed')\r\n    }\r\n  }\r\n\r\n  createInput(){\r\n    let schema = this.schema\r\n    let value = this.value\r\n    if(schema.widget ==='OpSelect'){\r\n      return new _select__WEBPACK_IMPORTED_MODULE_6__[\"OpSelect\"](value, schema)\r\n    }\r\n    if(schema.widget ==='OpSwitch'){\r\n      return new _switch__WEBPACK_IMPORTED_MODULE_4__[\"OpSwitch\"](value, schema)\r\n    }\r\n    if(schema.widget ==='OpLabelGroup'){\r\n      return new _label__WEBPACK_IMPORTED_MODULE_7__[\"OpLabelGroup\"](value)\r\n    }\r\n    if(schema.widget ==='OpBorderInput'){\r\n      return new _border_input__WEBPACK_IMPORTED_MODULE_8__[\"OpBorderInput\"](value, this.schema)\r\n    }\r\n    if(schema.widget ==='ButtonGroup'){\r\n      return new _buttons__WEBPACK_IMPORTED_MODULE_5__[\"ButtonGroup\"](value, this.schema)\r\n    }\r\n\r\n  }\r\n\r\n\r\n}\r\n\r\n/*export class OptionRowForResponsive extends OptionRow{\r\n  constructor(value, schema, fieldName){\r\n    super(value, schema, fieldName)\r\n  }\r\n\r\n  getSchema(){\r\n    return this.schema.sm\r\n  }\r\n\r\n  getValue(){\r\n    return this.value.sm\r\n  }\r\n\r\n}*/\r\n\r\nclass OptionResponsiveRow extends OptionRow{\r\n  constructor(value, schema, fieldName, screenWidth){\r\n    super(value[screenWidth], schema[screenWidth], fieldName)\r\n    this.screenWidth = screenWidth\r\n    this.allValue = value\r\n    this.allSchema = schema\r\n\r\n    this.onValueChanged = (value)=>{\r\n      this.valueChangedHandlers.forEach((handler)=>{\r\n        this.allValue[this.screenWidth] = value\r\n        handler(this.allValue, this.fieldName)\r\n        this.updateLabelColor(this.input)\r\n      })\r\n    }\r\n  }  \r\n}\r\n\r\nclass OptionRowLabel extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(label){\r\n    super()\r\n    this.cssClass('option-row-label')\r\n    this.innerHTML = label\r\n  }\r\n}\r\n\r\n/*export class OptionRowGroup extends OpInput{\r\n  constructor(isShowSub = false){\r\n    super()\r\n    this.cssClass('option-row-group')\r\n    this.body = new OptionRowGroupBody\r\n    this.pushChild(this.body)\r\n    if(!isShowSub){\r\n      this.cssClass('sub-row-collapse')\r\n    }\r\n  }\r\n\r\n  addFirstRow(row){\r\n    row.rowLabel.cssClass('dropdown')\r\n    this.firstRow = row\r\n    this.unshiftChild(row)\r\n\r\n    row.rowLabel.domOn('click',()=>{\r\n      this.tongle('sub-row-collapse')\r\n    })\r\n\r\n    return this\r\n  }\r\n\r\n  addRow(row){\r\n    row.rowLabel.cssClass('sub-label')\r\n    this.body.pushChild(row)\r\n    return this\r\n  }\r\n}\r\n\r\nclass OptionRowGroupBody extends RXComponent{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('option-row-group-body')\r\n  }\r\n}\r\n*/\n\n//# sourceURL=webpack:///./src/shell/controls/option-row.js?");

/***/ }),

/***/ "./src/shell/controls/select.js":
/*!**************************************!*\
  !*** ./src/shell/controls/select.js ***!
  \**************************************/
/*! exports provided: OpSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpSelect\", function() { return OpSelect; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label */ \"./src/shell/controls/label.js\");\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons */ \"./src/shell/controls/buttons.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n\r\n\r\n\r\n\r\n\r\nclass SelectItem extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(id, value){\r\n    super('li')\r\n    this.id = id\r\n    this.value = value\r\n    this.setInnerHTML(value)\r\n    this.selected = (id, value)=>{}\r\n    this.domOn('click', ()=>{\r\n      this.selected(this.id, this.value)\r\n    })      \r\n  }\r\n}\r\n\r\nclass SelectedList  extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(list = {}){\r\n    super('ul')\r\n    this.cssClass('select-list')\r\n    this.list = list\r\n    this.valueChage = (id, text)=>{}\r\n\r\n    for(var id in list){\r\n      var li = new SelectItem(id, list[id])\r\n      li.selected =  (id, value)=>{\r\n        this.valueChage(id, value)\r\n      }\r\n      this.pushChild(li)\r\n    }\r\n  }\r\n\r\n\r\n}\r\n\r\nclass OpSelect extends _input__WEBPACK_IMPORTED_MODULE_3__[\"OpInput\"]{\r\n  constructor(value, schema){\r\n    super(value)\r\n    if(schema.columns === 2){\r\n      this.cssClass('two-column')\r\n    }\r\n    this.cssClass('ctl-select')\r\n    let list = schema.list\r\n    //this.fieldName = fieldName\r\n    //this.value = value\r\n    this.valueViewer = new _label__WEBPACK_IMPORTED_MODULE_1__[\"OpLabel\"]()\r\n    //this.valueChanged = (value, fieldName)=>{}\r\n    this.emptyValue = 'Default'\r\n    if(!schema.required){\r\n      this.clearBtn = new _buttons__WEBPACK_IMPORTED_MODULE_2__[\"OpIconButton\"]('×')\r\n      this.pushChild(this.clearBtn)\r\n      this.clearBtn.domOn('click', ()=>{\r\n        this.clear()\r\n      })\r\n    }\r\n    this.pushChild(this.valueViewer)\r\n\r\n    this.listViewer = new SelectedList(list, schema.required)\r\n    this.valueViewer.setText(value?list[value]:this.emptyValue)\r\n    this.valueViewer.setRightIcon('▾')\r\n    this.pushChild(this.listViewer)\r\n\r\n    this.valueViewer.domOn('click',(event)=>{\r\n      this.listViewer.show()\r\n      event.stopPropagation()\r\n    })\r\n\r\n    document.addEventListener('mousedown', ()=>{\r\n      this.listViewer.hide()\r\n    })\r\n\r\n    this.listViewer.domOn('mousedown',(event)=>{\r\n      event.stopPropagation()\r\n    })\r\n\r\n    this.listViewer.valueChage = (id, text)=>{\r\n      let oldValue = this.value\r\n      this.value = id\r\n      //console.log(id, text)\r\n      if(oldValue !== this.value){\r\n        this.onValueChanged(id)\r\n      }\r\n      this.valueViewer.setText(text)\r\n      this.listViewer.hide()\r\n    }\r\n\r\n  }\r\n\r\n  removeValue(){\r\n    this.valueViewer.setText(this.emptyValue)\r\n    let oldValue = this.value\r\n    this.value = ''\r\n    if(oldValue){\r\n      this.onValueChanged(this.value)\r\n    }\r\n  }\r\n\r\n\r\n  clear(){\r\n    this.removeValue()\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/shell/controls/select.js?");

/***/ }),

/***/ "./src/shell/controls/switch.js":
/*!**************************************!*\
  !*** ./src/shell/controls/switch.js ***!
  \**************************************/
/*! exports provided: OpSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OpSwitch\", function() { return OpSwitch; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/shell/controls/input.js\");\n\r\n\r\n\r\nclass OpSwitch extends _input__WEBPACK_IMPORTED_MODULE_1__[\"OpInput\"]{\r\n  constructor(value, schema){\r\n    super(value, schema.defaultValue)\r\n    this.cssClass('op-switch')\r\n    this.onValue = schema.onValue\r\n    this.offValue = schema.offValue\r\n\r\n    this.domOn('click',()=>{\r\n      this.changeValue()\r\n      this.updateState()\r\n    })\r\n  }\r\n\r\n  render(parentDomElement){\r\n    this.updateState()\r\n    return super.render(parentDomElement)\r\n  }\r\n\r\n  changeValue(){\r\n    if(this.value === this.onValue){\r\n      this.value = this.offValue\r\n    }\r\n    else{\r\n      this.value = this.onValue\r\n    }\r\n    this.onValueChanged(this.value)\r\n  }\r\n\r\n  updateState(){\r\n    if(this.value === this.offValue){\r\n      this.removeCssClass('on')\r\n    }\r\n    else{\r\n      this.cssClass('on')\r\n    }\r\n  }\r\n\r\n  removeValue(value){\r\n    this.value = this.defaultValue\r\n    this.onValueChanged(this.value)\r\n    this.updateState()\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/shell/controls/switch.js?");

/***/ }),

/***/ "./src/shell/controls/tool-group.js":
/*!******************************************!*\
  !*** ./src/shell/controls/tool-group.js ***!
  \******************************************/
/*! exports provided: ToolGroup, ToolboxState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToolGroup\", function() { return ToolGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToolboxState\", function() { return ToolboxState; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/object-state */ \"./src/basic/object-state.js\");\n\r\n\r\n\r\nclass ToolGroup extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(title, id, groupsState){\r\n    super()\r\n    this.id = id\r\n    this.state = groupsState\r\n    this.cssClass('tool-group')\r\n    this.cssClass('group-collapse')\r\n    this.title = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n    this.title.cssClass('group-title')\r\n    this.title.innerHTML = title\r\n    this.pushChild(this.title)\r\n    this.groupBody = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n    this.groupBody.cssClass('group-body')\r\n    this.pushChild(this.groupBody)\r\n\r\n    this.domOn('click',()=>{\r\n      this.state.activedGroup = this.id\r\n    })\r\n    this.state.watch('activedGroup', (state)=>{\r\n      this.active(state.activedGroup === this.id)\r\n    })\r\n  }\r\n\r\n  active(isActive = true){\r\n    if(!isActive){\r\n      this.$dom ? this.$dom.classList.add('group-collapse') : this.classList.add('group-collapse')\r\n    }\r\n    else{\r\n      this.$dom ? this.$dom.classList.remove('group-collapse') : this.classList.remove('group-collapse')\r\n    }\r\n    return this\r\n  }\r\n}\r\n\r\nclass ToolboxState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_1__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__activedGroup = ''\r\n  }\r\n\r\n  get activedGroup(){\r\n    return this.__activedGroup\r\n  }\r\n\r\n  set activedGroup(activedGroup){\r\n    if(this.__activedGroup == activedGroup){return} \r\n    this.__activedGroup = activedGroup\r\n    this.distributeEvent('activedGroup')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shell/controls/tool-group.js?");

/***/ }),

/***/ "./src/shell/drawer.js":
/*!*****************************!*\
  !*** ./src/shell/drawer.js ***!
  \*****************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Drawer\", function() { return Drawer; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/object-state */ \"./src/basic/object-state.js\");\n/* harmony import */ var _toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toolbox */ \"./src/shell/toolbox.js\");\n/* harmony import */ var _optionbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./optionbox */ \"./src/shell/optionbox.js\");\n\r\n\r\n\r\n\r\n\r\nclass Tab{\r\n  constructor(){\r\n    this.header = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]().cssClass('item')\r\n    this.body = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]().cssClass('tab-body')\r\n  }\r\n\r\n  pushChild(child){\r\n    this.body.pushChild(child)\r\n  }\r\n\r\n  active(isActive = true){\r\n    if(isActive){\r\n      this.header.$dom ? this.header.$dom.classList.add('active') : this.header.classList.add('active')\r\n      this.body.$dom ? this.body.$dom.classList.add('active') : this.body.classList.add('active')\r\n    }\r\n    else{\r\n      this.header.$dom ? this.header.$dom.classList.remove('active') : this.header.classList.remove('active')\r\n      this.body.$dom ? this.body.$dom.classList.remove('active') : this.body.classList.remove('active')\r\n    }\r\n    return this\r\n  }\r\n}\r\n\r\nclass DrawerState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_1__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__activeDrawerTab = 'layout'\r\n  }\r\n\r\n  get activeDrawerTab(){\r\n    return this.__activeDrawerTab\r\n  }\r\n\r\n  set activeDrawerTab(activeDrawerTab){\r\n    if(this.__activeDrawerTab == activeDrawerTab){return} \r\n    this.__activeDrawerTab = activeDrawerTab\r\n    this.distributeEvent('activeDrawerTab')\r\n  }\r\n}\r\n\r\n\r\nclass Drawer extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.state = new DrawerState\r\n    this.cssClass('rx-right-area')\r\n    this.layout = new Tab\r\n    this.layout.header.domAttr('title', 'Layout').innerHTML = '<i class=\"fa fa-th-large\"></i>'\r\n    this.options = new Tab\r\n    this.options.header.domAttr('title', 'Options').innerHTML = '<i class=\"fa fa-paint-brush\"></i>'\r\n\r\n    this.pushChild(new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n                    .cssClass('rx-drawer')\r\n                    .pushChild(new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n                      .cssClass('top-header')\r\n                      .pushChild(this.layout.header)\r\n                      .pushChild(this.options.header)\r\n                    )\r\n                    .pushChild(new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n                      .cssClass('tab-contents')\r\n                      .pushChild(this.layout.body)\r\n                      .pushChild(this.options.body)\r\n                    )\r\n                  )\r\n    this.toolbox = new _toolbox__WEBPACK_IMPORTED_MODULE_2__[\"Toolbox\"]()\r\n    this.optionBox = new _optionbox__WEBPACK_IMPORTED_MODULE_3__[\"OptionBox\"]\r\n    this.layout.pushChild(this.toolbox)\r\n    this.options.pushChild(this.optionBox)\r\n\r\n    this.state.watch('activeDrawerTab', (state)=>{\r\n      this.activeTab(state.activeDrawerTab)\r\n    })\r\n    this.activeTab('layout')\r\n  }\r\n\r\n  render(parentElement){\r\n    super.render(parentElement)\r\n    this.layout.header.domOn('click', ()=>{\r\n      this.state.activeDrawerTab = 'layout'\r\n    })\r\n    this.options.header.domOn('click', ()=>{\r\n      this.state.activeDrawerTab = 'options'\r\n    })\r\n    return this\r\n  }\r\n\r\n  activeTab(tabId){\r\n    this.layout.active(false)\r\n    this.options.active(false)\r\n    this[tabId].active()\r\n  }\r\n\r\n  editNode(node){\r\n    this.optionBox.editNode(node)\r\n  }\r\n\r\n  cancelEditNode(id){\r\n    this.optionBox.cancelEdit()\r\n  }\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/shell/drawer.js?");

/***/ }),

/***/ "./src/shell/editor-state.js":
/*!***********************************!*\
  !*** ./src/shell/editor-state.js ***!
  \***********************************/
/*! exports provided: EditorState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditorState\", function() { return EditorState; });\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/object-state */ \"./src/basic/object-state.js\");\n\r\n\r\nclass EditorState extends _basic_object_state__WEBPACK_IMPORTED_MODULE_0__[\"ObjectState\"]{\r\n  constructor(){\r\n    super()\r\n    this.__screenWidth = 'md'\r\n    this.__preView = false\r\n    this.__fullscreen = false\r\n    this.__canUndo = false\r\n    this.__canRedo = false\r\n    this.__showDrawer = true\r\n    //layout attributes\r\n  }\r\n\r\n  get screenWidth(){\r\n    return this.__screenWidth\r\n  }\r\n\r\n  set screenWidth(screenWidth){\r\n    if(this.__screenWidth == screenWidth){return} \r\n    this.__screenWidth = screenWidth\r\n    this.distributeEvent('screenWidth')\r\n  }\r\n\r\n\r\n  get preView(){\r\n    return this.__preView\r\n  }\r\n\r\n  set preView(preView){\r\n    if(this.__preView == preView){return} \r\n    this.__preView = preView\r\n    this.distributeEvent('preView')\r\n  }\r\n\r\n  get fullscreen(){\r\n    return this.__fullscreen\r\n  }\r\n\r\n  set fullscreen(fullscreen){\r\n    if(this.__fullscreen == fullscreen){return} \r\n    this.__fullscreen = fullscreen\r\n    this.distributeEvent('fullscreen')\r\n  }\r\n\r\n  get canUndo(){\r\n    return this.__canUndo\r\n  }\r\n\r\n  set canUndo(canUndo){\r\n    if(this.__canUndo == canUndo){return} \r\n    this.__canUndo = canUndo\r\n    this.distributeEvent('canUndo')\r\n  }\r\n\r\n  get canRedo(){\r\n    return this.__canRedo\r\n  }\r\n\r\n  set canRedo(canRedo){\r\n    if(this.__canRedo == canRedo){return} \r\n    this.__canRedo = canRedo\r\n    this.distributeEvent('canRedo')\r\n  }\r\n\r\n  get showDrawer(){\r\n    return this.__showDrawer\r\n  }\r\n\r\n  set showDrawer(showDrawer){\r\n    if(this.__showDrawer == showDrawer){return} \r\n    this.__showDrawer = showDrawer\r\n    this.distributeEvent('showDrawer')\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/shell/editor-state.js?");

/***/ }),

/***/ "./src/shell/iframe-command-porxy.js":
/*!*******************************************!*\
  !*** ./src/shell/iframe-command-porxy.js ***!
  \*******************************************/
/*! exports provided: IFrameCommandProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IFrameCommandProxy\", function() { return IFrameCommandProxy; });\nclass IFrameCommandProxy{\r\n  constructor(workspaceFrame){\r\n    this.workspaceFrame = workspaceFrame\r\n    this.waitingAccembles = {}\r\n    window.addEventListener(\"message\", (event)=>{\r\n        this.handleMessage(event.data);\r\n    });\r\n  }\r\n\r\n  endDragFromToolbox(){\r\n    this.sendMessageToRXEditor({\r\n      name:'endDragFromToolbox'\r\n    })\r\n  }\r\n\r\n  draggingFromToolbox(rxNameId){\r\n    this.sendMessageToRXEditor({\r\n      name:'draggingFromToolbox',\r\n      rxNameId:rxNameId\r\n    })\r\n  }\r\n\r\n  changeCanvasState(state){\r\n    this.sendMessageToRXEditor({\r\n      name : 'changeCanvasState',\r\n      state : {\r\n        screenWidth : state.screenWidth,\r\n        preview : state.preview,\r\n        showEditMargin : state.showEditMargin,\r\n        showOutline : state.showOutline,\r\n        showLabel : state.showLabel,\r\n      }\r\n    })\r\n  }\r\n\r\n  nodeChanged(node){\r\n    this.sendMessageToRXEditor({\r\n      name:'nodeChanged',\r\n      node:node\r\n    })\r\n  }\r\n\r\n  handleMessage(message){\r\n    switch (message.name) {\r\n      case 'rxeditorReady':\r\n        this.serveForShell.onRxEditorReady()\r\n        break;\r\n      case 'replyAssemble':\r\n        let rxNameId = message.toolboxInfo.rxNameId\r\n        this.waitingAccembles[rxNameId](message.toolboxInfo)\r\n        break;\r\n      case 'takeOverDraggingByWorkspace':\r\n        this.serveForShell.endFollowMouse()\r\n        break;\r\n      case 'focusNode':\r\n        this.serveForShell.focusNode(message.node)\r\n        break;\r\n      case 'unFocusNode':\r\n        this.serveForShell.unFocusNode(message.id)\r\n        break;\r\n    }\r\n  }\r\n\r\n  requestAssemble(rxNameId, replyFunction){\r\n    this.waitingAccembles[rxNameId] = replyFunction\r\n    this.sendMessageToRXEditor({\r\n      name: 'requestAssemble',\r\n      rxNameId:rxNameId\r\n    })\r\n  }\r\n\r\n\r\n  sendMessageToRXEditor(message){\r\n    let iframe = this.workspaceFrame;\r\n    if(iframe){\r\n      iframe.contentWindow.postMessage(message, '/')\r\n      window.postMessage(message, '/');    \r\n    }\r\n  }\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./src/shell/iframe-command-porxy.js?");

/***/ }),

/***/ "./src/shell/init-editor.js":
/*!**********************************!*\
  !*** ./src/shell/init-editor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return initEditor; });\n/* harmony import */ var _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/rxeditor */ \"./src/core/rxeditor.js\");\n/* harmony import */ var _core_rxeditor_command_proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/rxeditor-command-proxy */ \"./src/core/rxeditor-command-proxy.js\");\n/* harmony import */ var _elements_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/bootstrap */ \"./src/elements/bootstrap/index.js\");\n/* harmony import */ var _elements_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements/html */ \"./src/elements/html/index.js\");\n\r\n\r\n\r\n\r\n\r\nfunction initEditor(){\r\n  window.rxEditor = new _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__[\"RXEditor\"]\r\n  window.RXEditorCommandProxy = _core_rxeditor_command_proxy__WEBPACK_IMPORTED_MODULE_1__[\"RXEditorCommandProxy\"]\r\n  rxEditor.bootstrap = _elements_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n  rxEditor.html = _elements_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\r\n}\n\n//# sourceURL=webpack:///./src/shell/init-editor.js?");

/***/ }),

/***/ "./src/shell/optionbox.js":
/*!********************************!*\
  !*** ./src/shell/optionbox.js ***!
  \********************************/
/*! exports provided: OptionBoxGroup, OptionBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionBoxGroup\", function() { return OptionBoxGroup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OptionBox\", function() { return OptionBox; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _controls_tool_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/tool-group */ \"./src/shell/controls/tool-group.js\");\n/* harmony import */ var _controls_option_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/option-row */ \"./src/shell/controls/option-row.js\");\n/* harmony import */ var _controls_option_row_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/option-row-group */ \"./src/shell/controls/option-row-group.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass OptionBoxGroup extends _controls_tool_group__WEBPACK_IMPORTED_MODULE_1__[\"ToolGroup\"]{\r\n  constructor(title, id, groupsState){\r\n    super(title, id, groupsState)\r\n  }\r\n\r\n  add(optionRow){\r\n    this.groupBody.pushChild(optionRow)\r\n    return this\r\n  }\r\n}\r\n\r\nclass OptionBox extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.screenWidth = 'md'\r\n    this.state = new _controls_tool_group__WEBPACK_IMPORTED_MODULE_1__[\"ToolboxState\"]\r\n    this.cssClass('toolbox')\r\n    this.noFocusInnerHtml = `<div style=\"padding:20px;\">No elements selected</div>`\r\n    this.innerHTML = this.noFocusInnerHtml\r\n    this.valueChanged = (node)=>{}\r\n  }\r\n\r\n  resizeScreen(screenWidth){\r\n    this.screenWidth = screenWidth\r\n    if(this.node){\r\n      //this.initGroup(this.node.schema.groups)\r\n      this.editNode(this.node)\r\n      let activedGroup = this.state.activedGroup\r\n      this.state.activedGroup = ''\r\n      this.state.activedGroup = activedGroup\r\n    }\r\n  }\r\n\r\n  editNode(node){\r\n    this.clear()\r\n    this.node = node\r\n    this.showContent(node)\r\n    //this.showContent_old(node)\r\n    this.children.forEach((child)=>{\r\n      child.render(this.$dom)\r\n    })\r\n  }\r\n\r\n  cancelEdit(){\r\n    this.node = ''\r\n    this.children.clear()\r\n    this.state.activedGroup = ''\r\n    this.setInnerHTML(this.noFocusInnerHtml)\r\n  }\r\n\r\n  showContent(node){\r\n    var meta =node.meta\r\n    var schema = node.schema\r\n    this.initGroup(schema.groups)\r\n    for(var fieldName in schema.fields){\r\n\r\n      let fieldSchema = schema.fields[fieldName]\r\n      let metaValue = meta[fieldName]\r\n      //console.log('metaValue:', metaValue)\r\n      var row\r\n      if(fieldSchema.isRowGroup){\r\n        row = new _controls_option_row_group__WEBPACK_IMPORTED_MODULE_3__[\"OptionRowGroup\"](metaValue, fieldSchema, fieldName, this.screenWidth)\r\n      }\r\n      else if(fieldSchema.isResponsive){\r\n        row = new _controls_option_row__WEBPACK_IMPORTED_MODULE_2__[\"OptionResponsiveRow\"](metaValue, fieldSchema, fieldName, this.screenWidth)\r\n      }\r\n      else{\r\n        row = new _controls_option_row__WEBPACK_IMPORTED_MODULE_2__[\"OptionRow\"](metaValue, fieldSchema, fieldName)\r\n      }\r\n\r\n      row.listenValueChaged((value, fdName)=>{\r\n        node.meta[fdName] = value\r\n        this.valueChanged(node)\r\n      })\r\n\r\n      this.getGroup(fieldSchema.group).add(row)\r\n    }\r\n\r\n    if(this.children.length > 0){\r\n      this.children.first()\r\n                   .cssClass('no-title-top-border')\r\n                   .active()\r\n    }\r\n  }\r\n\r\n  initGroup(groups){\r\n    console.log(groups)\r\n    for(var groupName in groups){\r\n      let group = groups[groupName]\r\n      let groupCtrl = new OptionBoxGroup(group.label, groupName, this.state)\r\n      this[groupName] = groupCtrl\r\n      this.pushChild(groupCtrl)\r\n    }\r\n  }\r\n\r\n\r\n  getGroup(group){\r\n    //console.log(group)\r\n    if(this[group]){\r\n      return this[group]\r\n    }\r\n  }\r\n\r\n  clear(){\r\n    this.children.clear()\r\n    this.setInnerHTML('')\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/shell/optionbox.js?");

/***/ }),

/***/ "./src/shell/rxeditor-fm.js":
/*!**********************************!*\
  !*** ./src/shell/rxeditor-fm.js ***!
  \**********************************/
/*! exports provided: RXEditorFM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXEditorFM\", function() { return RXEditorFM; });\n/* harmony import */ var _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/rxeditor */ \"./src/core/rxeditor.js\");\n/* harmony import */ var _core_canvas_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/canvas-state */ \"./src/core/canvas-state.js\");\n/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawer */ \"./src/shell/drawer.js\");\n/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar */ \"./src/shell/toolbar.js\");\n/* harmony import */ var _init_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init-editor */ \"./src/shell/init-editor.js\");\n/* harmony import */ var _iframe_command_porxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iframe-command-porxy */ \"./src/shell/iframe-command-porxy.js\");\n/* harmony import */ var _editor_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor-state */ \"./src/shell/editor-state.js\");\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Workspace extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_7__[\"RXComponent\"]{\r\n  constructor(config){\r\n    super()\r\n    this.config = config\r\n    this.cssClass('rx-workspace')\r\n    this.domAttr('id', \"workspace\")\r\n  }\r\n\r\n  render(parentElement){\r\n    super.render(parentElement)\r\n\r\n    let iframe = document.createElement('iframe')\r\n    this.iframe = iframe\r\n    iframe.src=\"javascript:0\"\r\n    iframe.frameBorder=\"0\"\r\n    iframe.border=\"0\"\r\n    iframe.allowTransparency=\"no\"\r\n    iframe.scrolling = \"auto\"\r\n    iframe.height = \"100%\"\r\n    this.$dom.appendChild(iframe)\r\n\r\n    let iframedocument =  iframe.contentDocument;\r\n    let iframeContent = `\r\n        <html style=\"width:100%;height:100%;\">\r\n          <head>\r\n            <title>RXEditor Workspace</title>\r\n            <link rel=stylesheet href=\"${this.config.mainCss}\">\r\n            <link rel=\"stylesheet\" href=\"${this.config.bootstrapCss}\">\r\n            <link href=\"${this.config.fontAwesome}\" rel=\"stylesheet\">\r\n          </head>\r\n          <body style=\"background-color:#FFF;padding:0;width:100%; height:100%;\">\r\n            <div id=\"canvas\"></div>\r\n            <script type=\"text/javascript\" src=\"${this.config.mainJs}\"></script>\r\n            <script>\r\n              rxEditor.hangOn('canvas', new RXEditorCommandProxy);\r\n            </script>\r\n          </body>\r\n        </html>\r\n      `\r\n    iframedocument.open();\r\n    iframedocument.write(iframeContent);\r\n    iframedocument.close();\r\n    return \r\n  }\r\n\r\n  resizeScreen(size){\r\n    if(size == 'xl'){\r\n      this.iframe.width=\"100%\"\r\n    }\r\n    if(size == 'lg'){\r\n      this.iframe.width=\"1199px\"\r\n    }\r\n    if(size == 'md'){\r\n      this.iframe.width=\"991px\"\r\n    }\r\n    if(size == 'sm'){\r\n      this.iframe.width=\"767px\"\r\n    }\r\n    if(size == 'xs'){\r\n      this.iframe.width=\"575\"\r\n    }\r\n  }\r\n\r\n}\r\n\r\nclass RXEditorFM{\r\n  constructor(){\r\n    Object(_init_editor__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n    this.state = new _editor_state__WEBPACK_IMPORTED_MODULE_6__[\"EditorState\"]\r\n    this.canvasState = new _core_canvas_state__WEBPACK_IMPORTED_MODULE_1__[\"CanvasState\"]\r\n    this.itemRxNameIds = []\r\n  }\r\n\r\n  assemble(rxNameId){\r\n    this.itemRxNameIds.push(rxNameId)\r\n  }\r\n\r\n  hangOn(id, config){\r\n    this.domElement = document.getElementById(id)\r\n    this.domElement.classList.add('rx-editor')\r\n\r\n    this.workspace = new Workspace(config)\r\n    new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_7__[\"RXComponent\"]().cssClass('rx-left-area')\r\n                     .pushChild(new _toolbar__WEBPACK_IMPORTED_MODULE_3__[\"Toolbar\"](this, true))\r\n                     .pushChild(this.workspace)\r\n                     .render(this.domElement)\r\n    this.workspace.resizeScreen(this.state.screenWidth)\r\n\r\n    this.drawer = new _drawer__WEBPACK_IMPORTED_MODULE_2__[\"Drawer\"]()\r\n    this.drawer.optionBox.screenWidth = this.state.screenWidth\r\n\r\n    this.state.watch('screenWidth', (state)=>{\r\n      this.workspace.resizeScreen(state.screenWidth)\r\n      this.drawer.optionBox.resizeScreen(state.screenWidth)\r\n    })\r\n\r\n    this.state.watch('showDrawer', (state)=>{\r\n      this.drawer.$dom.style.width = state.showDrawer ? '250px' : '0'\r\n    })\r\n\r\n    this.commandProxy = new _iframe_command_porxy__WEBPACK_IMPORTED_MODULE_5__[\"IFrameCommandProxy\"](this.workspace.iframe)\r\n    this.commandProxy.serveForShell = this\r\n\r\n    this.canvasState.watch('changed', (state)=>{\r\n      this.commandProxy.changeCanvasState(state)\r\n    })\r\n  }\r\n\r\n  onRxEditorReady(){\r\n    this.drawer.render(this.domElement)\r\n    //请求所有可装配元素\r\n    for(var i in this.itemRxNameIds){\r\n      this.commandProxy.requestAssemble(this.itemRxNameIds[i], this.drawer.toolbox.assembleToolboxItem)\r\n    }\r\n\r\n    //跟踪工具拖拽\r\n    this.drawer.toolbox.on('draggingFromToolbox', (rxNameId)=>{\r\n      this.draggingFromToolbox(rxNameId)\r\n    })\r\n\r\n    this.drawer.toolbox.on('endDragFromToolbox', (rxNameId)=>{\r\n        if(this.commandProxy){\r\n        this.commandProxy.endDragFromToolbox()\r\n      }\r\n    })\r\n\r\n    this.drawer.optionBox.valueChanged = (node)=>{\r\n      this.commandProxy.nodeChanged(node)\r\n    }\r\n  }\r\n\r\n  renderRight(){\r\n    let rightArea = createChild('rx-right-area', this.domElement)\r\n    return rightArea\r\n  }\r\n\r\n  draggingFromToolbox(rxNameId){\r\n    this.commandProxy.draggingFromToolbox(rxNameId)\r\n  }\r\n\r\n  endFollowMouse(){\r\n    this.drawer.toolbox.endFollowMouse()\r\n  }\r\n\r\n  focusNode(node){\r\n    this.drawer.editNode(node)\r\n  }\r\n\r\n  unFocusNode(id){\r\n    this.drawer.cancelEditNode(id)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shell/rxeditor-fm.js?");

/***/ }),

/***/ "./src/shell/rxeditor-inline.js":
/*!**************************************!*\
  !*** ./src/shell/rxeditor-inline.js ***!
  \**************************************/
/*! exports provided: RXEditorInline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RXEditorInline\", function() { return RXEditorInline; });\n/* harmony import */ var _core_rxeditor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/rxeditor */ \"./src/core/rxeditor.js\");\n/* harmony import */ var _init_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init-editor */ \"./src/shell/init-editor.js\");\n\r\n\r\n\r\nclass RXEditorInline{\r\n  constructor(){\r\n    Object(_init_editor__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n  }\r\n\r\n  hangOn(id){\r\n\r\n  }\r\n}\n\n//# sourceURL=webpack:///./src/shell/rxeditor-inline.js?");

/***/ }),

/***/ "./src/shell/toolbar.js":
/*!******************************!*\
  !*** ./src/shell/toolbar.js ***!
  \******************************/
/*! exports provided: Toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toolbar\", function() { return Toolbar; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _controls_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/buttons */ \"./src/shell/controls/buttons.js\");\n\r\n\r\n\r\nclass ToolButton extends _controls_buttons__WEBPACK_IMPORTED_MODULE_1__[\"RXButton\"]{\r\n  constructor(icon){\r\n    super()\r\n    this.classList.add('toolbar-button')\r\n    this.innerHTML =`<i class=\"fa ${icon}\" ></i>`\r\n  }\r\n}\r\n\r\n\r\nclass Toolbar extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(rxEditorShell, withScreenSize){\r\n    super()\r\n    this.rxEditorShell = rxEditorShell\r\n    this.classList.add('rx-toolbar')\r\n\r\n    this.barLeft = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n    this.barLeft.classList.add('left')\r\n    this.pushChild(this.barLeft)\r\n    var canvasState = this.rxEditorShell.canvasState\r\n\r\n    if(withScreenSize){\r\n      this.createScreenSizeButtons()\r\n      rxEditorShell.state.watch('screenWidth', (state)=>{\r\n        this.refreshScreenSizeButtonsState()\r\n        canvasState.screenWidth = rxEditorShell.state.screenWidth\r\n      })\r\n    }\r\n\r\n\r\n    this.barCenter = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n    this.barCenter.cssClass('center')//#f92472\r\n                   .innerHTML = `\r\n                      <span style=\"color:#75b325; font-size:22px;font-weight:900;font-family: 'Handlee', cursive;\">\r\n                        RXEditor</span>\r\n\r\n                      <div>\r\n                      </div>\r\n\r\n                  `\r\n    \r\n    this.pushChild(this.barCenter)\r\n\r\n    this.barRight = new _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]()\r\n    this.barRight.cssClass('right')\r\n    this.pushChild(this.barRight)\r\n    var outlineBtn = this.creatRightButton('fa-square-o')\r\n              .active()\r\n              .title('Show/hide outline')\r\n              .domOn('click',()=>{\r\n                canvasState.showOutline = !canvasState.showOutline\r\n                outlineBtn.active(canvasState.showOutline)\r\n              })\r\n\r\n    var marginBtn = this.creatRightButton('fa-arrows-h')\r\n              .active()\r\n              .title('Show/hide margin')\r\n              .domOn('click',()=>{\r\n                canvasState.showEditMargin = !canvasState.showEditMargin\r\n                marginBtn.active(canvasState.showEditMargin)\r\n              })\r\n\r\n    var previewBtn = this.creatRightButton('fa-eye')\r\n              .title('Preview')\r\n              .domOn('click',()=>{\r\n                canvasState.preview = !canvasState.preview\r\n                previewBtn.active(canvasState.preview)\r\n              })\r\n\r\n    canvasState.watch('preview',(state)=>{\r\n      outlineBtn.enable(!state.preview)\r\n      marginBtn.enable(!state.preview)\r\n      this.rxEditorShell.state.showDrawer = !state.preview\r\n    })\r\n\r\n    this.creatRightButton('fa-undo').title('Undo')\r\n    this.creatRightButton('fa-repeat').title('Redo')\r\n    this.creatRightButton('fa-download').title('Download')\r\n    this.creatRightButton('fa-trash').title('Clear canvas')\r\n    //this.creatRightButton('fa-cog').title('Settings')\r\n    this.creatRightButton('fa-question-circle').title('About RXEditor')\r\n\r\n    this.creatRightButton('fa-bars').domOn('click', ()=>{\r\n      rxEditorShell.state.showDrawer = !rxEditorShell.state.showDrawer\r\n    }).title('Show/hide drawer ')\r\n\r\n  }\r\n\r\n  creatRightButton(icon){\r\n    let btn = new ToolButton(icon)\r\n    this.barRight.pushChild(btn)\r\n\r\n    return btn;\r\n  }\r\n\r\n  creatLeftButton(icon){\r\n    let btn = new ToolButton(icon)\r\n    this.barLeft.pushChild(btn)\r\n\r\n    return btn;\r\n  }\r\n\r\n  createScreenSizeButtons(){\r\n    this.xlBtn = this.creatLeftButton('fa-tv').title('Extra large: ≥1200px')\r\n    this.xlBtn.style.fontSize = '22px'\r\n    this.xlBtn.style.lineHeight = '30px'\r\n\r\n    this.lgBtn = this.creatLeftButton('fa-desktop').title('Large: ≥992px')\r\n    this.mdBtn = this.creatLeftButton('fa-laptop').title('Medium:≥768px')\r\n    this.smBtn = this.creatLeftButton('fa-tablet').title('Small:≥576px')\r\n    this.xsBtn = this.creatLeftButton('fa-mobile').title('Extra small: <576px')\r\n    //this.xsBtn.style.fontSize = '14px'\r\n\r\n\r\n    this.xlBtn.domOns.click = (event)=>{\r\n      this.rxEditorShell.state.screenWidth = 'xl'\r\n    }\r\n    this.lgBtn.domOns.click = (event)=>{\r\n      this.rxEditorShell.state.screenWidth = 'lg'\r\n    }\r\n    this.mdBtn.domOns.click = (event)=>{\r\n      this.rxEditorShell.state.screenWidth = 'md'\r\n    }\r\n    this.smBtn.domOns.click = (event)=>{\r\n      this.rxEditorShell.state.screenWidth = 'sm'\r\n    }\r\n    this.xsBtn.domOns.click = (event)=>{\r\n      this.rxEditorShell.state.screenWidth = 'xs'\r\n    }\r\n    \r\n    this.refreshScreenSizeButtonsState()\r\n  }\r\n\r\n  refreshScreenSizeButtonsState(){\r\n    this.xlBtn.active(false)\r\n    this.lgBtn.active(false)\r\n    this.mdBtn.active(false)\r\n    this.smBtn.active(false)\r\n    this.xsBtn.active(false)\r\n    switch(this.rxEditorShell.state.screenWidth){\r\n      case 'xl': \r\n        this.xlBtn.active()\r\n        break;\r\n      case 'lg': \r\n        this.lgBtn.active()\r\n        break;\r\n      case 'md': \r\n        this.mdBtn.active()\r\n        break;\r\n      case 'sm': \r\n        this.smBtn.active()\r\n        break;\r\n      case 'xs': \r\n        this.xsBtn.active()\r\n        break;\r\n    }\r\n  }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/shell/toolbar.js?");

/***/ }),

/***/ "./src/shell/toolbox.js":
/*!******************************!*\
  !*** ./src/shell/toolbox.js ***!
  \******************************/
/*! exports provided: Toolbox, ToolboxGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toolbox\", function() { return Toolbox; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ToolboxGroup\", function() { return ToolboxGroup; });\n/* harmony import */ var _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basic/rxcomponent */ \"./src/basic/rxcomponent.js\");\n/* harmony import */ var _basic_object_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basic/object-state */ \"./src/basic/object-state.js\");\n/* harmony import */ var _controls_tool_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/tool-group */ \"./src/shell/controls/tool-group.js\");\n\r\n\r\n\r\n\r\nclass Toolbox extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.state = new _controls_tool_group__WEBPACK_IMPORTED_MODULE_2__[\"ToolboxState\"]\r\n    this.cssClass('toolbox')\r\n    this.assembleToolboxItem = (toolboxInfo)=>{\r\n      this.initGroups()\r\n      //let rxModuleNameId = toolboxInfo.groupId\r\n      //if(!this[rxModuleNameId]){\r\n      //  this[rxModuleNameId] = new ToolboxGroup(toolboxInfo.moduleName).render(this.$dom)\r\n      //}\r\n\r\n      let toolboxItem = this[toolboxInfo.groupId].add(toolboxInfo)\r\n\r\n      toolboxItem.domOn('mousedown',(event)=>{\r\n        this.draggingFromToolbox(toolboxItem.toolboxInfo.rxNameId)\r\n        toolboxItem.mouseFollower.offsetX = event.offsetX\r\n        toolboxItem.mouseFollower.offsetY = event.offsetY\r\n        this.beginFollowMouse(toolboxItem.mouseFollower, event)\r\n      })\r\n    }\r\n\r\n    document.addEventListener('mousemove', (event)=>{\r\n      this.followMouse(event)\r\n    })\r\n    document.addEventListener('mouseup', (event)=>{\r\n      this.endFollowMouse()\r\n      this.endDragFromToolbox()\r\n    })\r\n\r\n\r\n  }\r\n\r\n  initGroups(){\r\n    if(!this['groupLayout']){\r\n      this.groupLayout =  new ToolboxGroup('Layout','groupLayout', this.state)\r\n                            .cssClass('no-title-top-border')\r\n                            .render(this.$dom)\r\n      this.groupLayout.active()\r\n    }\r\n\r\n    if(!this['groupContent']){\r\n      this.groupContent =  new ToolboxGroup('Content', 'groupContent', this.state).render(this.$dom)\r\n    }\r\n\r\n    if(!this['groupComponents']){\r\n      this.groupComponents =  new ToolboxGroup('Components','groupComponents', this.state).render(this.$dom)\r\n    }\r\n\r\n    if(!this['groupHtml']){\r\n      this.groupHtml =  new ToolboxGroup('HTML','groupHtml', this.state).render(this.$dom)\r\n    }\r\n    if(!this['groupTemplates']){\r\n      this.groupTemplates =  new ToolboxGroup('Templates','groupTemplates', this.state).render(this.$dom)\r\n    }\r\n  }\r\n\r\n  followMouse(event){\r\n    let mouseFollower = this.mouseFollower\r\n    if(mouseFollower){\r\n      mouseFollower.$dom.style.left =  this.followX(event)\r\n      mouseFollower.$dom.style.top = this.followY(event)\r\n    }\r\n  }\r\n\r\n  followX(event){\r\n    return (event.clientX - this.mouseFollower.offsetX - 4) + 'px'\r\n  }\r\n\r\n  followY(event){\r\n    return (event.clientY - this.mouseFollower.offsetY - 3) + 'px'\r\n  }\r\n\r\n  beginFollowMouse(mouseFollower,event){\r\n    mouseFollower.show()\r\n    this.mouseFollower = mouseFollower\r\n    this.followMouse(event)\r\n  }\r\n\r\n  endFollowMouse(){\r\n    if(this.mouseFollower){\r\n      this.mouseFollower.hiden()\r\n    }\r\n\r\n    this.mouseFollower = ''\r\n  }\r\n\r\n}\r\n\r\n\r\nclass ToolboxGroup extends _controls_tool_group__WEBPACK_IMPORTED_MODULE_2__[\"ToolGroup\"]{\r\n  constructor(title, id, groupsState){\r\n    super(title, id, groupsState)\r\n  }\r\n\r\n  add(toolboxInfo){\r\n    let toolboxItem = new ToolboxItem(toolboxInfo).render(this.groupBody.$dom)\r\n    this.groupBody.pushChild(toolboxItem)\r\n    return toolboxItem\r\n  }\r\n}\r\n\r\nclass MouseFollower extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(){\r\n    super()\r\n    this.cssClass('shell-mousefollower')\r\n    this.cssStyle('display', 'none')\r\n    this.show = ()=>{\r\n      this.$dom.style.display = 'block'\r\n    }\r\n    this.hiden = ()=>{\r\n      this.$dom.style.display = 'none'\r\n    }\r\n  }\r\n\r\n}\r\n\r\nclass ToolboxItem extends _basic_rxcomponent__WEBPACK_IMPORTED_MODULE_0__[\"RXComponent\"]{\r\n  constructor(toolboxInfo){\r\n    super()\r\n    this.toolboxInfo = toolboxInfo\r\n    this.cssClass('element')\r\n    this.innerHTML = '<i class=\"fa fa-arrows\"></i> ' + toolboxInfo.elementName\r\n    this.mouseFollower = new MouseFollower\r\n    this.mouseFollower.cssClass('element')\r\n    this.mouseFollower.innerHTML = this.innerHTML\r\n    this.pushChild(this.mouseFollower)\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/shell/toolbox.js?");

/***/ })

/******/ });