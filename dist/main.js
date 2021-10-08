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

/***/ "./src/drawapp.ts":
/*!************************!*\
  !*** ./src/drawapp.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawingApp\": () => (/* binding */ DrawingApp)\n/* harmony export */ });\nvar DrawingApp = /** @class */ (function () {\n    function DrawingApp() {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        context.lineCap = 'round';\n        context.lineJoin = 'round';\n        context.strokeStyle = 'red';\n        context.fillStyle = 'dark';\n        context.lineWidth = 1;\n        this.canvas = canvas;\n        this.context = context;\n    }\n    DrawingApp.prototype.drawBird = function (x1, y1) {\n        var context = this.context;\n        var img = new Image();\n        img.src = './img/bird.png';\n        img.onload;\n        context.drawImage(img, x1, y1);\n    };\n    DrawingApp.prototype.drawPice = function (x1, y1) {\n        var context = this.context;\n        var img = new Image();\n        img.src = './img/ongduoi.png';\n        img.onload;\n        context.drawImage(img, x1, y1);\n    };\n    DrawingApp.prototype.clearCanvas = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    return DrawingApp;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drawapp.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawapp */ \"./src/drawapp.ts\");\n\nvar canvas;\nvar ctx;\nfunction gameloop() {\n    drawing.clearCanvas();\n    ctx.fillStyle = '#8FBC8F';\n    ctx.fillRect(0, 0, 2000, 5000);\n    render();\n    requestAnimationFrame(gameloop);\n}\nwindow.onload = function () {\n    canvas = document.getElementById('canvas');\n    ctx = canvas.getContext('2d');\n    gameloop();\n};\nvar drawing = new _drawapp__WEBPACK_IMPORTED_MODULE_0__.DrawingApp();\ncanvas = document.getElementById('canvas');\nctx = canvas.getContext('2d');\nvar y = 0;\nvar x = 450;\nvar g = 1;\nfunction render() {\n    drawing.drawPice(x, 350);\n    drawing.drawBird(50, y);\n    if (y <= 500 || x >= -10) {\n        x -= g * 3;\n        y += g * 5;\n    }\n    else {\n        x = 450;\n        y = 0;\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;