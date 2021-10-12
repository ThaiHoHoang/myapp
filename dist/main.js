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

/***/ "./src/bird.ts":
/*!*********************!*\
  !*** ./src/bird.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Bird\": () => (/* binding */ Bird)\n/* harmony export */ });\nvar Bird = /** @class */ (function () {\n    function Bird(ketThuc) {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.context = context;\n        this.y = 0;\n        this.x = 100;\n        this.g = 1;\n        this.isJump = false;\n        this.count = 0;\n        this.ketThuc = ketThuc;\n    }\n    Bird.prototype.drawBird = function () {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/bird.png';\n        context.drawImage(img, this.x, this.y, 50, 50);\n    };\n    Bird.prototype.update = function () {\n        if (this.y <= this.canvas.height - (this.canvas.height / 10)) {\n            this.y += this.g;\n            this.g *= 1.07;\n            if (this.isJump == true) {\n                this.g = -5;\n                if (this.count < 10) {\n                    this.count++;\n                }\n                else {\n                    this.count = 0;\n                    this.isJump = false;\n                    this.g = 1;\n                }\n            }\n        }\n        else {\n            this.ketThuc();\n        }\n    };\n    Bird.prototype.birdInput = function (isJump) {\n        this.isJump = isJump;\n        this.count = 0;\n    };\n    return Bird;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/bird.ts?");

/***/ }),

/***/ "./src/drawapp.ts":
/*!************************!*\
  !*** ./src/drawapp.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DrawingApp\": () => (/* binding */ DrawingApp)\n/* harmony export */ });\nvar DrawingApp = /** @class */ (function () {\n    function DrawingApp() {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.context = context;\n        this.y;\n    }\n    DrawingApp.prototype.drawBackGround = function (x1, y1, w, h) {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/nenchinh.png';\n        context.drawImage(img, x1, y1, w, h);\n    };\n    DrawingApp.prototype.clearCanvas = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    return DrawingApp;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/drawapp.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _drawapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawapp */ \"./src/drawapp.ts\");\n/* harmony import */ var _pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipe */ \"./src/pipe.ts\");\n/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bird */ \"./src/bird.ts\");\n\n\n\nvar canvas;\nvar ctx;\nvar y;\nvar x;\nvar drawing = new _drawapp__WEBPACK_IMPORTED_MODULE_0__.DrawingApp;\nvar drawPipe;\nvar drawPipe2;\nvar drawBird;\nvar keypress;\nvar isEnd = false;\nvar score = 0;\nwindow.onload = function () {\n    canvas = document.getElementById('canvas');\n    ctx = canvas.getContext('2d');\n    x = canvas.width;\n    drawPipe = new _pipe__WEBPACK_IMPORTED_MODULE_1__.Pipe(x);\n    drawPipe2 = new _pipe__WEBPACK_IMPORTED_MODULE_1__.Pipe(x + 500);\n    drawBird = new _bird__WEBPACK_IMPORTED_MODULE_2__.Bird(ketThuc);\n    document.addEventListener(\"keydown\", onKeyDown);\n    function onKeyDown(evt) {\n        keypress = evt;\n    }\n    gameloop();\n};\nfunction gameloop() {\n    if (!isEnd) {\n        drawing.clearCanvas();\n        drawing.drawBackGround(0, 0, canvas.width, canvas.height);\n        processInput();\n        update();\n        render();\n        requestAnimationFrame(gameloop);\n    }\n}\nfunction processInput() {\n    if (keypress != null) {\n        switch (keypress.key) {\n            case \"u\":\n                drawBird.birdInput(true);\n                console.log(\"Play\");\n        }\n        keypress = null;\n    }\n}\nfunction ketThuc() {\n    isEnd = true;\n}\nfunction render() {\n    drawPipe.drawPipe();\n    drawPipe2.drawPipe();\n    drawBird.drawBird();\n    countScore();\n    ctx.font = '20px Arial';\n    ctx.fillText('SCORE: ' + score, 50, 30, 300);\n}\nfunction update() {\n    var isColision = checkColision(drawBird, drawPipe)\n        || checkColisionUp(drawBird, drawPipe)\n        || checkColision(drawBird, drawPipe2)\n        || checkColisionUp(drawBird, drawPipe2);\n    if (isColision) {\n        ketThuc();\n    }\n    drawPipe2.update();\n    drawPipe.update();\n    drawBird.update();\n}\nfunction countScore() {\n    if (isEnd == false) {\n        score++;\n    }\n    else {\n        ctx.font = \"200 Arial\";\n        ctx.fillText('YOUR SCORE: ' + score, 400, 250);\n    }\n}\nfunction name() {\n}\nfunction checkColision(bird, pipe) {\n    var left_pipeird = bird.x;\n    var right_pipeird = bird.x + 50;\n    var top_pipeird = bird.y;\n    var bottom_pipeird = bird.y + 50;\n    var left_pipe = pipe.x;\n    var right_pipe = pipe.x + 60;\n    var top_pipe = pipe.y;\n    var bottom_pipe = pipe.y + 500;\n    if (left_pipeird > left_pipe && left_pipeird < right_pipe) {\n        if (top_pipeird > top_pipe && top_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (left_pipeird > left_pipe && left_pipeird < right_pipe) {\n        if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (right_pipeird > left_pipe && right_pipeird < right_pipe) {\n        if (top_pipeird > top_pipe && top_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (right_pipeird > left_pipe && right_pipeird < right_pipe) {\n        if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    return false;\n}\nfunction checkColisionUp(bird, pipe) {\n    var left_pipeird = bird.x;\n    var right_pipeird = bird.x + 50;\n    var top_pipeird = bird.y;\n    var bottom_pipeird = bird.y + 50;\n    var left_pipe = pipe.x;\n    var right_pipe = pipe.x + 60;\n    var top_pipe = pipe.y - 630;\n    var bottom_pipe = pipe.y + 500 - 630;\n    if (left_pipeird > left_pipe && left_pipeird < right_pipe) {\n        if (top_pipeird > top_pipe && top_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (left_pipeird > left_pipe && left_pipeird < right_pipe) {\n        if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (right_pipeird > left_pipe && right_pipeird < right_pipe) {\n        if (top_pipeird > top_pipe && top_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    if (right_pipeird > left_pipe && right_pipeird < right_pipe) {\n        if (bottom_pipeird > top_pipe && bottom_pipeird < bottom_pipe) {\n            return true;\n        }\n    }\n    return false;\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/pipe.ts":
/*!*********************!*\
  !*** ./src/pipe.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Pipe\": () => (/* binding */ Pipe)\n/* harmony export */ });\nvar Pipe = /** @class */ (function () {\n    function Pipe(x) {\n        var canvas = document.getElementById('canvas');\n        var context = canvas.getContext(\"2d\");\n        this.canvas = canvas;\n        this.context = context;\n        this.y = this.geRandom();\n        this.x = x;\n        this.a = 1;\n        this.giatoc = 1 / 1200;\n    }\n    Pipe.prototype.geRandom = function () {\n        return Math.floor(Math.random() * 300 + 150);\n    };\n    Pipe.prototype.drawPipeBot = function () {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongduoi.png';\n        context.drawImage(img, this.x, this.y, 60, 500);\n    };\n    Pipe.prototype.drawPipeTop = function () {\n        var context = this.context;\n        var img = new Image();\n        img.src = '../src/img/ongtren.png';\n        context.drawImage(img, this.x, this.y - 630, 60, 500);\n    };\n    Pipe.prototype.drawPipe = function () {\n        this.drawPipeBot();\n        this.drawPipeTop();\n    };\n    Pipe.prototype.update = function () {\n        if (this.x >= 0) {\n            this.x -= this.a * 5;\n            this.a += this.giatoc;\n        }\n        else {\n            this.x = this.canvas.width;\n            this.y = this.geRandom();\n        }\n    };\n    return Pipe;\n}());\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/pipe.ts?");

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