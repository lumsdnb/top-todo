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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"changeProjectView\": () => (/* binding */ changeProjectView)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\nconst container = document.getElementById('content');\nlet projectList = ['default', 'hobbies', 'work i guess'];\nlet currentList = 0;\nconst projectObjects = [];\n\nfunction addProject(e) {\n  projectList.push(e);\n  changeProjectView(currentList);\n}\n\nfunction changeProjectView(e) {\n  currentList = e;\n  reRender();\n}\n\nconst reRender = () => {\n  const old = document.querySelector('.card');\n  container.innerHTML = '';\n  container.appendChild(component());\n};\n\nfunction component() {\n  const element = document.createElement('div');\n  element.classList.add('card');\n\n  //create project objects from named list\n  projectList.forEach((p) => {\n    const list = new _todoList__WEBPACK_IMPORTED_MODULE_1__.default(p);\n    projectObjects.push(list);\n  });\n\n  const addBtn = document.createElement('button');\n  addBtn.classList.add('add-todo-button');\n  addBtn.innerHTML = '+';\n\n  container.prepend((0,_nav__WEBPACK_IMPORTED_MODULE_2__.default)(projectList));\n  element.append(projectObjects[currentList].domElement, addBtn);\n\n  const addTodo = () => {\n    console.log(projectObjects[currentList]);\n    projectObjects[currentList].addTodo('new todo');\n    reRender();\n    //todo: figure out how to remove and re render list properly\n    //element.append(defaultList.domElement);\n  };\n\n  addBtn.addEventListener('click', addTodo);\n\n  return element;\n}\n\ncontainer.appendChild(component());\n\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst navBar = (listItems) => {\n  const handleAddProject = (p) => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProject)(p);\n  };\n\n  const selectProject = (e) => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeProjectView)(e.target.parentNode.dataset.id);\n  };\n\n  const nav = document.createElement('nav');\n  const navInner = document.createElement('div');\n  navInner.classList.add('menu');\n\n  let viewState = false;\n  const toggleView = () => {\n    viewState = !viewState;\n    viewState\n      ? navInner.classList.add('menu-hidden')\n      : navInner.classList.remove('menu-hidden');\n  };\n\n  const burger = document.createElement('span');\n  navInner.classList.contains('menu-hidden')\n    ? (burger.innerHTML = '-')\n    : (burger.innerHTML = '+');\n\n  burger.classList.add('nav-burger');\n  nav.append(burger);\n\n  const list = document.createElement('ul');\n  list.classList.add('nav-links');\n\n  //project list\n\n  for (let i = 0; i < listItems.length; i++) {\n    const element = listItems[i];\n    let entry = document.createElement('li');\n    entry.dataset.id = i;\n    let linkText = document.createTextNode(element);\n    let a = document.createElement('a');\n    a.append(linkText);\n    a.title = element;\n    entry.appendChild(a);\n    entry.addEventListener('click', selectProject);\n    list.append(entry);\n  }\n\n  // add project btn\n\n  const addBtn = document.createElement('span');\n  addBtn.innerHTML = '+ add project +';\n  addBtn.classList.add('add-project');\n  addBtn.addEventListener('click', () => handleAddProject('new list'));\n\n  //append everything\n\n  navInner.append(list, addBtn);\n  nav.append(navInner);\n\n  burger.addEventListener('click', toggleView);\n\n  return nav;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n\n//# sourceURL=webpack://top-todo/./src/nav.js?");

/***/ }),

/***/ "./src/todoItem.js":
/*!*************************!*\
  !*** ./src/todoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction wasClosed() {\n  console.log(this.parentElement.parentElement);\n  //this.parentElement.remove();\n}\n\nclass todoItem {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    let _isChecked = false;\n    let id = 0;\n  }\n  set setTitle(t) {\n    this.title = t;\n  }\n  set setDescription(d) {\n    console.log(e);\n    //this.description = d;\n  }\n\n  set setDueDate(d) {\n    this.dueDate = d;\n  }\n\n  set setPriority(p) {\n    this.priority = p;\n  }\n\n  set setId(i) {\n    this.id = i;\n  }\n\n  get domElement() {\n    const domEl = document.createElement('div');\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n\n    domEl.classList.add('todo-item');\n    const title = document.createElement('span');\n    title.setAttribute('contenteditable', 'true');\n    title.classList.add('todo-description');\n    title.innerHTML = this.title;\n\n    const description = document.createElement('span');\n    description.innerHTML = this.description;\n\n    const dueDate = document.createElement('span');\n    dueDate.classList.add('todo-duedate');\n    dueDate.innerHTML = this.dueDate;\n\n    const priority = document.createElement('span');\n    priority.classList.add('todo-priority');\n    priority.innerHTML = this.priority;\n\n    const close = document.createElement('span');\n    close.classList.add('close-btn');\n    close.innerHTML = 'X';\n    close.addEventListener('click', wasClosed);\n\n    title.addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        console.log('cancel');\n        this.setTitle = e.path[0].innerHTML;\n        e.preventDefault();\n        window.getSelection().removeAllRanges();\n        return false;\n      }\n    });\n\n    domEl.append(checkbox, title, description, dueDate, priority, close);\n    //domEl.innerHTML = `${this.title} ${this.description} ${this.dueDate} ${this.priority}`;\n    return domEl;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);\n\n\n//# sourceURL=webpack://top-todo/./src/todoItem.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItem */ \"./src/todoItem.js\");\n\n\nclass todoList {\n  constructor(listName) {\n    this.listName = listName;\n    this.todos = [];\n  }\n\n  set setTitle(n) {\n    this.listName = n;\n  }\n\n  get getTitle() {\n    return this.listName;\n  }\n\n  addTodo(item) {\n    const t = new _todoItem__WEBPACK_IMPORTED_MODULE_0__.default(item, '', '2021-04-17', '!!');\n    this.todos.push(t);\n  }\n\n  removeTodo(i) {\n    this.todos.splice(i, 1);\n  }\n\n  get domElement() {\n    const el = document.createElement('div');\n    for (let i = 0; i < this.todos.length; i++) {\n      const item = this.todos[i];\n      item.setId = i;\n      el.append(item.domElement);\n    }\n\n    const title = document.createElement('h1');\n    title.innerHTML = this.listName;\n    title.setAttribute('contenteditable', 'true');\n    el.classList.add('todo-list');\n\n    title.addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        this.setTitle = e.path[0].innerHTML;\n        e.preventDefault();\n        window.getSelection().removeAllRanges();\n        return false;\n      }\n    });\n\n    el.prepend(title);\n    return el;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);\n\n\n//# sourceURL=webpack://top-todo/./src/todoList.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;