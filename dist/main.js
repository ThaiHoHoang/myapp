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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawingApp\": () => (/* binding */ DrawingApp)\n/* harmony export */ });\nvar DrawingApp = /** @class */ (function () {\n    function DrawingApp() {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.context = context;\n    }\n    DrawingApp.prototype.drawBird = function (x1, y1, w, h) {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/bird.png';\n        context.drawImage(img, x1, y1, w, h);\n    };\n    DrawingApp.prototype.drawPipeBot = function (x1, y1, w, h) {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongduoi.png';\n        context.drawImage(img, x1, y1, w, h);\n    };\n    DrawingApp.prototype.drawPipeTop = function (x1, y1, w, h) {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongtren.png';\n        context.drawImage(img, x1, y1, w, h);\n    };\n    DrawingApp.prototype.drawBackGround = function (x1, y1, w, h) {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/nenchinh.png';\n        context.drawImage(img, x1, y1, w, h);\n    };\n    DrawingApp.prototype.clearCanvas = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    return DrawingApp;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drawapp.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawapp */ \"./src/drawapp.ts\");\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe */ \"./src/pipe.ts\");\n\n\nvar canvas;\nvar ctx;\nvar event;\nvar y;\nvar x;\nvar g;\nvar drawing = new _drawapp__WEBPACK_IMPORTED_MODULE_0__.DrawingApp;\nvar drawPipe;\nvar drawPipe2;\nvar isJump = false;\nvar count = 0;\nfunction gameloop() {\n    drawing.clearCanvas();\n    ctx.fillStyle = '#8FBC8F';\n    ctx.fillRect(0, 0, 2000, 5000);\n    drawing.drawBackGround(0, 0, canvas.width, canvas.height);\n    processInput();\n    update();\n    render();\n    requestAnimationFrame(gameloop);\n}\nwindow.onload = function () {\n    canvas = document.getElementById('canvas');\n    ctx = canvas.getContext('2d');\n    y = 0;\n    x = canvas.width;\n    g = 1;\n    drawPipe = new _pipe__WEBPACK_IMPORTED_MODULE_1__.DrawPipe(x);\n    drawPipe2 = new _pipe__WEBPACK_IMPORTED_MODULE_1__.DrawPipe(x + 500);\n    document.addEventListener(\"keydown\", onKeyDown);\n    gameloop();\n};\nfunction onKeyDown(evt) {\n    console.log(\"Received event!\");\n    event = evt;\n}\nfunction processInput() {\n    if (event != null) {\n        switch (event.key) {\n            case \"u\":\n                isJump = true;\n        }\n        event = null;\n    }\n}\nfunction render() {\n    drawPipe.drawPipe();\n    drawPipe2.drawPipe();\n    drawing.drawBird(50, y, 60, 50);\n}\nfunction update() {\n    drawPipe2.update();\n    drawPipe.update();\n    if (y <= canvas.height) {\n        if (isJump == true) {\n            if (count < 10) {\n                console.log(\"Bird jumped! count: \" + count.toString());\n                y -= g * 7;\n                count++;\n            }\n            else {\n                count = 0;\n                isJump = false;\n            }\n        }\n        else {\n            y += g * 5;\n        }\n    }\n    else {\n        y = 0;\n    }\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/pipe.ts":
/*!*********************!*\
  !*** ./src/pipe.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawPipe\": () => (/* binding */ DrawPipe)\n/* harmony export */ });\nvar DrawPipe = /** @class */ (function () {\n    function DrawPipe(x) {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.context = context;\n        this.y = this.geRandom();\n        this.x = x;\n    }\n    DrawPipe.prototype.geRandom = function () {\n        return Math.floor(Math.random() * 300 + 150);\n    };\n    DrawPipe.prototype.drawPipeBot = function () {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongduoi.png';\n        context.drawImage(img, this.x, this.y, 60, 500);\n    };\n    DrawPipe.prototype.drawPipeTop = function () {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongtren.png';\n        context.drawImage(img, this.x, this.y - 630, 60, 500);\n    };\n    DrawPipe.prototype.drawPipe = function () {\n        this.drawPipeBot();\n        this.drawPipeTop();\n    };\n    DrawPipe.prototype.update = function () {\n        if (this.x >= 0) {\n            this.x -= 1 * 5;\n        }\n        else {\n            this.x = this.canvas.width;\n            this.y = this.geRandom();\n        }\n    };\n    return DrawPipe;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pipe.ts?");

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