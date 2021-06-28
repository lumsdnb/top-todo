/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\nconst container = document.getElementById('content');\n\nfunction component() {\n  const element = document.createElement('div');\n  element.classList.add('card');\n\n  const defaultList = new _todoList__WEBPACK_IMPORTED_MODULE_1__.default('default');\n  defaultList.addTodo('TODOd title');\n\n  const addBtn = document.createElement('button');\n  addBtn.classList.add('add-todo-button');\n  addBtn.innerHTML = '+';\n\n  container.parentElement.prepend((0,_nav__WEBPACK_IMPORTED_MODULE_2__.default)());\n  element.append(defaultList.domElement, addBtn);\n\n  const addTodo = () => {\n    defaultList.addTodo('new todo');\n    console.log(defaultList);\n    console.log(element.childNodes);\n    //todo: figure out how to remove and re render list properly\n    //element.append(defaultList.domElement);\n  };\n\n  addBtn.addEventListener('click', addTodo);\n\n  return element;\n}\n\ncontainer.appendChild(component());\n\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//generate nav bar\n//<nav><li>home</li><li>menu</li><li>contact us</li></nav>\n\nconst navBar = () => {\n  const nav = document.createElement('nav');\n  nav.classList.add('menu');\n  const entries = ['default project', 'hobbies', 'work i guess'];\n\n  const burger = document.createElement('span');\n  burger.innerHTML = '-';\n  burger.classList.add('nav-burger');\n  nav.append(burger);\n\n  const list = document.createElement('ul');\n  list.classList.add('nav-links');\n\n  for (let i = 0; i < entries.length; i++) {\n    const element = entries[i];\n    let entry = document.createElement('li');\n    let linkText = document.createTextNode(element);\n    let a = document.createElement('a');\n    a.append(linkText);\n    a.title = element;\n    entry.appendChild(a);\n    list.append(entry);\n  }\n  nav.append(list);\n\n  return nav;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n\n//# sourceURL=webpack://top-todo/./src/nav.js?");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction wasClosed() {\n  console.log(this.parentElement);\n  this.parentElement.remove();\n}\n\nclass todoItem {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    let _isChecked = false;\n  }\n  set setTitle(t) {\n    this.title = t;\n  }\n  set setDescription(d) {\n    this.description = d;\n  }\n\n  set setDueDate(d) {\n    this.dueDate = d;\n  }\n\n  set setPriority(p) {\n    this.priority = p;\n  }\n\n  get info() {\n    return `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;\n  }\n  get domElement() {\n    const domEl = document.createElement('div');\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n\n    domEl.classList.add('todo-item');\n    const title = document.createElement('span');\n    title.setAttribute('contenteditable', 'true');\n    title.classList.add('todo-description');\n    title.innerHTML = this.title;\n\n    const description = document.createElement('span');\n    description.innerHTML = this.description;\n\n    const dueDate = document.createElement('span');\n    dueDate.classList.add('todo-duedate');\n    dueDate.innerHTML = this.dueDate;\n\n    const priority = document.createElement('span');\n    priority.classList.add('todo-priority');\n    priority.innerHTML = this.priority;\n\n    const close = document.createElement('span');\n    close.classList.add('close-btn');\n    close.innerHTML = 'X';\n    close.addEventListener('click', wasClosed);\n\n    domEl.append(checkbox, title, description, dueDate, priority, close);\n    //domEl.innerHTML = `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;\n    return domEl;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n\n//# sourceURL=webpack://top-todo/./src/todoItem.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n\n\nclass todoList {\n  constructor(listName) {\n    this.listName = listName;\n    this.todos = [];\n  }\n\n  addTodo(item) {\n    const t = new _todoItem__WEBPACK_IMPORTED_MODULE_0__.default(item, '', '2021-04-17', '!!');\n    this.todos.push(t);\n  }\n\n  get domElement() {\n    const el = document.createElement('div');\n    for (let i = 0; i < this.todos.length; i++) {\n      const item = this.todos[i];\n      el.append(item.domElement);\n      console.log(item);\n    }\n\n    const title = document.createElement('h1');\n    title.innerHTML = this.listName;\n    el.classList.add('todo-list');\n    el.prepend(title);\n    return el;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);\n\n\n//# sourceURL=webpack://top-todo/./src/todoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;