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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './style.scss'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\nfunction addElem(json) {\n  var id = 0;\n  var output = document.querySelector('.output');\n  var object = document.createElement('div');\n  object.classList.add('object-high');\n  var jsonLength = Object.keys(json).length;\n  object.innerHTML = \"\\n\\t\\t<div class=\\\"elem-title\\\">\\n\\t\\t\\t<div class=\\\"btn\\\" id='\".concat(id, \"' ><i class=\\\"fas fa-caret-down\\\" id='\").concat(id, \"'></i></div>\\n\\t\\t\\t<div class=\\\"object-title\\\">BigObject</div>\\n\\t\\t\\t<div>{\").concat(jsonLength, \"}</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\\"obj-content\\\" id='\").concat(id, \"'></div>\\n\\t\\t\");\n  id++;\n  output.appendChild(object);\n  var objHeigh = document.querySelector('.obj-content');\n  parse(json, objHeigh, id);\n}\n\nfunction parse(elems, block, id) {\n  for (var key in elems) {\n    var objectJson = elems[key];\n\n    if (_typeof(objectJson) === 'object') {\n      var newBlock = addObject(objectJson, key, id, block);\n      parse(objectJson, newBlock, ++id);\n    } else {\n      addPrimitive(block, objectJson, key);\n    }\n  }\n}\n\nfunction addObject(objectJson, key, id, block) {\n  var object = document.createElement('div');\n  object.classList.add('object-low');\n  var objectJsonKeysCount = Object.keys(objectJson).length;\n  object.innerHTML = \"\\n\\t\\t<div class=\\\"elem-title\\\">\\n\\t\\t\\t<div class=\\\"btn\\\" id='\".concat(id, \"'><i class=\\\"fas fa-caret-down\\\" id='\").concat(id, \"'></i></div>\\n\\t\\t\\t<div class=\\\"object-title\\\">\").concat(key, \"</div>\\n\\t\\t\\t<div>\").concat(Array.isArray(objectJson) ? \"[\".concat(objectJsonKeysCount, \"]\") : \"{\".concat(objectJsonKeysCount, \"}\"), \"</div >\\n\\t\\t</div >\\n\\t\\t<div class=\\\"obj-content\\\" id='\").concat(id, \"'></div>\\n\\t\\t\");\n  block.appendChild(object);\n  var nestedBlocks = document.querySelectorAll('.obj-content');\n  var newBlock = nestedBlocks[nestedBlocks.length - 1];\n  return newBlock;\n}\n\nfunction addPrimitive(block, objectJson, key) {\n  var primitive = document.createElement('div');\n  primitive.classList.add('primitive');\n  primitive.innerHTML = \"\".concat(key, \" : <span class=\\\"type\\\">\").concat(objectJson, \"</span>\");\n  block.appendChild(primitive);\n  var primitives = document.querySelectorAll('.type');\n  var lastPrimitive = primitives[primitives.length - 1];\n  lastPrimitive.classList.add(_typeof(objectJson));\n}\n\n;\nvar textArea = document.querySelector('.input');\nvar myCodeMirror = CodeMirror.fromTextArea(textArea, {\n  autoCloseBrackets: true\n});\nmyCodeMirror.setSize(\"100%\", \"100%\");\n\nfunction buildTree() {\n  myCodeMirror.save();\n  var middleResult = JSON.parse(textArea.value);\n  addElem(middleResult);\n  var toggleButtons = document.querySelectorAll('.btn');\n  toggleButtons.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      return collapse(elem.id);\n    });\n  });\n}\n\nvar btn = document.querySelector('.content__btn');\nbtn.addEventListener('click', buildTree);\n\nfunction collapse(id) {\n  var blocks = document.querySelectorAll('.obj-content');\n  var icons = document.querySelectorAll('.fa-caret-down');\n  var changeBlock = Array.from(blocks).find(function (elem) {\n    return elem.id === id;\n  });\n  var changeIcon = Array.from(icons).find(function (elem) {\n    return elem.id === id;\n  });\n  changeBlock.classList.toggle('hidden');\n  changeIcon.classList.toggle('fa-caret-right');\n}\n\nfunction validation() {\n  myCodeMirror.save();\n  var validation = document.querySelector('.validation');\n\n  try {\n    var a = JSON.parse(textArea.value);\n    validation.innerHTML = '';\n    validation.classList.remove('jsonOn');\n  } catch (e) {\n    validation.innerHTML = 'JSON input error';\n    validation.classList.add('jsonOn');\n  }\n}\n\nCodeMirror.on(myCodeMirror, 'change', validation);\n\nfunction formatText() {\n  var inputText = js_beautify(textArea.value, {\n    \"indent_size\": 2\n  });\n  myCodeMirror.setValue(inputText);\n}\n\nvar format = document.querySelector('#format');\nformat.addEventListener('click', formatText);\n\n//# sourceURL=webpack://webpack-settings/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;