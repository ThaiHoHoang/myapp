/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("// import {DrawingApp } from \"./drawapp\";\nvar canvas;\nvar ctx;\nvar image = new Image();\nimage.src = '/img/bird.png';\nfunction gameloop() {\n    requestAnimationFrame(gameloop);\n    ctx.fillStyle = 'white';\n    ctx.fillRect(0, 0, 2000, 1000);\n    ctx.drawImage(image, 0, 0);\n}\nwindow.onload = function () {\n    // image = <HTMLImageElement> document.getElementById('source');\n    canvas = document.getElementById('canvas');\n    ctx = canvas.getContext('2d');\n    gameloop();\n};\n// let drawing = new DrawingApp();\n// var x = 0;\n// var y = 20;\n// var z = 490;\n// // requestAnimationFrame(loop)\n// function loop() {\n// // drawing.clearCanvas();\n// drawing.draw(x,20,x,40);\n// if (x<z) {\n//     x++;\n// }\n// else {\n//     x=0;\n// }\n// requestAnimationFrame(loop)\n// console.log(x);\n// }\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;