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

eval("var lastTime = window.performance.now();\nvar time = window.performance.now();\nvar delta = time - lastTime;\n// requestAnimationFrame(loop)\nloop();\nfunction update(time, delta) {\n    console.log(time);\n    console.log(delta);\n}\nfunction loop() {\n    time = window.performance.now();\n    delta = time - lastTime;\n    // processInput();\n    update(time, delta);\n    // render();\n    lastTime = time;\n    if (time < 5000)\n        loop();\n    // var id = requestAnimationFrame(loop)\n    console.log(\"Finish \");\n    setTimeout(function () {\n    }, 1000);\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

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