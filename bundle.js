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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"/* Font Size */\\n/* Font Family */\\n/* Colors */\\n.row::after {\\n  display: table;\\n  clear: both;\\n  content: ''; }\\n\\n[class*='col-'] {\\n  float: left; }\\n\\n/* For mobile phones: */\\n[class*='col-'] {\\n  width: 100%; }\\n\\n@media only screen and (min-width: 768px) {\\n  /* For desktop and tablets: */\\n  .col-1 {\\n    width: 8.33%; }\\n  .col-2 {\\n    width: 16.66%; }\\n  .col-3 {\\n    width: 25%; }\\n  .col-4 {\\n    width: 33.33%; }\\n  .col-5 {\\n    width: 41.66%; }\\n  .col-6 {\\n    width: 50%; }\\n  .col-7 {\\n    width: 58.33%; }\\n  .col-8 {\\n    width: 66.66%; }\\n  .col-9 {\\n    width: 75%; }\\n  .col-10 {\\n    width: 83.33%; }\\n  .col-11 {\\n    width: 91.66%; }\\n  .col-12 {\\n    width: 100%; } }\\n\\nheader {\\n  height: 10%;\\n  min-height: 6.25rem;\\n  border-bottom: 0.1875rem solid #A9A9A9;\\n  font-family: \\\"Roboto Mono\\\", monospace;\\n  text-align: center; }\\n  @media only screen and (min-width: 600px) and (min-height: 600px) {\\n    header {\\n      height: 17%; } }\\n  header h1 {\\n    text-shadow: 1px 1px 1px #FF3B3F;\\n    margin: 0;\\n    padding-top: 0.3125rem;\\n    text-transform: uppercase; }\\n\\nmain {\\n  overflow: hidden;\\n  position: relative;\\n  height: 80%;\\n  min-height: 26.25rem; }\\n  @media only screen and (min-width: 600px) and (min-height: 600px) {\\n    main {\\n      height: 73%; } }\\n\\nfooter {\\n  position: relative;\\n  height: 10%;\\n  min-height: 5rem;\\n  border-top: 0.1875rem solid #A9A9A9;\\n  text-align: center; }\\n  footer .social-media {\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    -ms-transform: translate(-50%, -50%);\\n        transform: translate(-50%, -50%); }\\n    footer .social-media a {\\n      color: #A9A9A9;\\n      font-size: 2.625rem;\\n      cursor: pointer; }\\n    footer .social-media a:hover {\\n      color: #FF3B3F; }\\n  footer p {\\n    position: absolute;\\n    left: 50%;\\n    -ms-transform: translate(-50%, 0);\\n        transform: translate(-50%, 0);\\n    bottom: 0.125rem;\\n    margin: 0;\\n    font-size: 0.625rem; }\\n\\n.words-input {\\n  overflow-y: auto;\\n  left: 100%;\\n  border-top: 1px solid #CAEBF2; }\\n  .words-input .add-words {\\n    padding: 3.125rem;\\n    border-bottom: 0.0625rem solid #CAEBF2;\\n    text-align: center; }\\n    .words-input .add-words input {\\n      width: 50%;\\n      margin-bottom: 0.3125rem;\\n      padding: 0.1875rem; }\\n    .words-input .add-words button {\\n      display: block;\\n      width: 25%;\\n      margin: 0 auto;\\n      padding: 0.3125rem;\\n      border: none;\\n      outline: none;\\n      color: #FFF;\\n      background-color: #FF3B3F;\\n      box-shadow: 0 0 5px 0 #000;\\n      font-family: \\\"Roboto Mono\\\", monospace;\\n      font-size: 0.875rem;\\n      font-weight: bold;\\n      text-transform: uppercase;\\n      cursor: pointer;\\n      transition: all .5s; }\\n      .words-input .add-words button:hover {\\n        color: #FF3B3F;\\n        background-color: #FFF; }\\n  .words-input .click-to-add-words {\\n    text-align: center; }\\n    .words-input .click-to-add-words h3 {\\n      display: inline-block;\\n      padding: 0.625rem;\\n      border-bottom: 0.125rem solid #CAEBF2;\\n      text-transform: uppercase; }\\n    .words-input .click-to-add-words p {\\n      display: inline-block;\\n      padding: 0.375rem; }\\n    .words-input .click-to-add-words ol {\\n      padding: 0.3125rem;\\n      text-align: left; }\\n      .words-input .click-to-add-words ol li {\\n        display: inline-block;\\n        position: relative;\\n        width: 10rem;\\n        margin: 0.625rem;\\n        padding-left: 2.5rem; }\\n        .words-input .click-to-add-words ol li button {\\n          position: absolute;\\n          top: 50%;\\n          -ms-transform: translate(0, -50%);\\n              transform: translate(0, -50%);\\n          left: 0;\\n          padding: 0.1875rem;\\n          border: none;\\n          border-radius: 50%;\\n          outline: none;\\n          color: #EFEFEF;\\n          background-color: #FF3B3F;\\n          font-size: 1.5rem;\\n          cursor: pointer; }\\n\\n.text-input {\\n  left: 0; }\\n  .text-input #text-area, .text-input #highlighted-repeated-words, .text-input #highlighted-overused-words {\\n    width: 100%;\\n    height: 100%;\\n    padding: 0.625rem;\\n    font-family: \\\"Roboto\\\", sans-serif;\\n    font-size: 1.25rem;\\n    white-space: pre-wrap;\\n    letter-spacing: 0.0625rem;\\n    word-wrap: break-word; }\\n  .text-input #text-area {\\n    z-index: 1;\\n    border: none;\\n    border-top: 1px solid #CAEBF2;\\n    background-color: transparent;\\n    resize: none; }\\n  .text-input #highlighted-repeated-words {\\n    position: absolute;\\n    z-index: -2;\\n    top: 0;\\n    left: 0;\\n    color: transparent;\\n    background-color: #EFEFEF; }\\n    .text-input #highlighted-repeated-words mark {\\n      color: transparent;\\n      background-color: #CAEBF2; }\\n  .text-input #highlighted-overused-words {\\n    position: absolute;\\n    z-index: -1;\\n    top: 0;\\n    left: 0;\\n    color: transparent; }\\n    .text-input #highlighted-overused-words mark {\\n      color: transparent;\\n      background-color: orange; }\\n\\n.questions {\\n  overflow-y: auto;\\n  left: 200%;\\n  padding: 0 2.5rem;\\n  border-top: 1px solid #CAEBF2;\\n  text-align: center; }\\n  .questions h3 {\\n    display: inline-block;\\n    padding: 0.625rem;\\n    border-bottom: 0.125rem solid #CAEBF2;\\n    text-transform: uppercase; }\\n  .questions ul {\\n    padding: 0.625rem;\\n    text-align: left; }\\n\\n.edit-area {\\n  overflow-x: hidden;\\n  position: relative;\\n  height: 70%; }\\n  @media only screen and (min-width: 768px) {\\n    .edit-area {\\n      position: absolute;\\n      top: 0;\\n      left: 20%;\\n      width: 60%;\\n      height: 100%; } }\\n  .edit-area .textarea {\\n    left: 0; }\\n  .edit-area .words {\\n    left: -100%; }\\n  .edit-area .faq {\\n    left: -200%; }\\n\\n.string-data {\\n  overflow: hidden;\\n  position: absolute;\\n  bottom: 0;\\n  width: 100%;\\n  height: 4%;\\n  border-top: 0.0625rem solid #CAEBF2;\\n  text-align: center; }\\n  @media only screen and (orientation: landscape) {\\n    .string-data {\\n      height: 10%; } }\\n  @media only screen and (min-width: 768px) {\\n    .string-data {\\n      height: 5%; } }\\n  .string-data p {\\n    display: inline-block;\\n    margin: 0;\\n    padding: 0 0.5rem 0 0.5rem;\\n    font-size: 0.875rem; }\\n\\n.words-list {\\n  float: left;\\n  width: 50%;\\n  height: 30%;\\n  border-top: 1px solid #A9A9A9; }\\n  @media only screen and (min-width: 768px) {\\n    .words-list {\\n      border-top: none; } }\\n  .words-list h3 {\\n    padding: 0.3125rem;\\n    color: #000;\\n    background: #CAEBF2;\\n    font-size: 1rem;\\n    text-transform: uppercase;\\n    font-weight: normal;\\n    text-align: center;\\n    margin: 0;\\n    border-bottom: 1px solid #CAEBF2; }\\n    @media only screen and (min-width: 768px) {\\n      .words-list h3 {\\n        height: 8%; } }\\n  .words-list ul {\\n    display: block;\\n    overflow-y: auto;\\n    margin: 0;\\n    padding: 0;\\n    text-align: center;\\n    list-style-type: none; }\\n    .words-list ul li {\\n      padding: 0.3125rem 0.5rem 0.3125rem 0.5rem;\\n      font-family: \\\"Roboto Mono\\\", monospace;\\n      word-wrap: break-word;\\n      cursor: pointer;\\n      -webkit-user-select: none;\\n         -moz-user-select: none;\\n          -ms-user-select: none;\\n              user-select: none; }\\n\\n.repeated-words {\\n  border-right: 1px solid #A9A9A9; }\\n  @media only screen and (min-width: 768px) {\\n    .repeated-words {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 20%;\\n      height: 100%;\\n      border-right: 1px solid #A9A9A9; } }\\n  .repeated-words .active {\\n    color: #EFEFEF;\\n    background-color: #FF3B3F; }\\n\\n.overused-words {\\n  border-left: 1px solid #A9A9A9; }\\n  @media only screen and (min-width: 768px) {\\n    .overused-words {\\n      position: absolute;\\n      top: 0;\\n      right: 0;\\n      width: 20%;\\n      height: 100%;\\n      border-left: 1px solid #A9A9A9; } }\\n  .overused-words li {\\n    position: relative;\\n    font-family: \\\"Roboto Mono\\\", monospace; }\\n    .overused-words li .check-mark {\\n      position: absolute;\\n      top: 0;\\n      left: 0;\\n      width: 1.875rem;\\n      height: 100%;\\n      background-color: #DCDCDC; }\\n      .overused-words li .check-mark:after {\\n        display: none;\\n        position: absolute;\\n        top: 50%;\\n        left: 50%;\\n        width: 0.3125rem;\\n        height: 0.625rem;\\n        border: solid #EFEFEF;\\n        border-width: 0 0.1875rem 0.1875rem 0;\\n        content: '';\\n        -ms-transform: translate(-50%, -50%) rotate(45deg);\\n            transform: translate(-50%, -50%) rotate(45deg); }\\n    .overused-words li input {\\n      position: absolute;\\n      z-index: 10;\\n      top: 0;\\n      left: 0;\\n      width: 85%;\\n      height: 100%;\\n      margin: 0;\\n      opacity: 0;\\n      cursor: pointer; }\\n      .overused-words li input:checked ~ .check-mark:after {\\n        display: block; }\\n      .overused-words li input:checked ~ .check-mark {\\n        background-color: #FF3B3F; }\\n    .overused-words li .remove {\\n      position: absolute;\\n      top: 0;\\n      right: 0;\\n      width: 15%;\\n      height: 100%; }\\n      .overused-words li .remove:after {\\n        position: absolute;\\n        top: 50%;\\n        -ms-transform: translate(0, -50%);\\n            transform: translate(0, -50%);\\n        left: 0.1875rem;\\n        width: 25%;\\n        border: solid #000;\\n        border-width: 0.1875rem 0 0 0;\\n        content: ''; }\\n\\nnav {\\n  height: 6%;\\n  padding: 0.3125rem 0;\\n  font-size: 0;\\n  text-align: center;\\n  -webkit-user-select: none;\\n     -moz-user-select: none;\\n      -ms-user-select: none;\\n          user-select: none; }\\n  @media only screen and (orientation: landscape) {\\n    nav {\\n      height: 12%; } }\\n  @media only screen and (min-width: 768px) {\\n    nav {\\n      height: 8%; } }\\n  nav .edit-area-btn {\\n    width: 33.33%;\\n    margin: 0;\\n    padding: 0;\\n    border: none;\\n    outline: none;\\n    background-color: transparent;\\n    font-size: 1.25rem;\\n    text-transform: uppercase;\\n    cursor: pointer; }\\n  nav .active {\\n    color: #FF3B3F; }\\n  nav .underline {\\n    position: relative;\\n    left: 0;\\n    width: 33.33%;\\n    border-bottom: 0.125rem solid #FF3B3F;\\n    transition: all .5s; }\\n  nav .underline-text {\\n    left: 0; }\\n  nav .underline-words {\\n    left: 33.33%; }\\n  nav .underline-faq {\\n    left: 66.66%; }\\n\\n.edit-area-sections {\\n  position: relative;\\n  left: 0;\\n  width: 100%;\\n  height: 89%;\\n  transition: all .5s; }\\n  @media only screen and (orientation: landscape) {\\n    .edit-area-sections {\\n      height: 78%; } }\\n  @media only screen and (min-width: 768px) {\\n    .edit-area-sections {\\n      height: 87%; } }\\n  .edit-area-sections section {\\n    position: absolute;\\n    top: 0;\\n    width: 100%;\\n    height: 100%; }\\n\\nhtml {\\n  box-sizing: border-box;\\n  height: 100%;\\n  font-size: 100%; }\\n  @media only screen and (max-width: 320px) {\\n    html {\\n      font-size: 6px; } }\\n  @media only screen and (min-width: 321px) {\\n    html {\\n      font-size: 8px; } }\\n  @media only screen and (min-width: 468px) {\\n    html {\\n      font-size: 10px; } }\\n  @media only screen and (min-width: 768px) {\\n    html {\\n      font-size: 12px; } }\\n  @media only screen and (min-width: 1224px) {\\n    html {\\n      font-size: 14px; } }\\n  @media only screen and (min-width: 1824px) {\\n    html {\\n      font-size: 16px; } }\\n  @media only screen and (orientation: landscape) and (max-height: 468px) {\\n    html {\\n      font-size: 10px; } }\\n\\n*, *:before, *:after {\\n  box-sizing: inherit; }\\n\\nbody {\\n  overflow-x: hidden;\\n  height: inherit;\\n  margin: 0;\\n  padding: 0;\\n  background: url(\" + escape(__webpack_require__(/*! ../assets/background.png */ \"./src/assets/background.png\")) + \") repeat;\\n  font-family: \\\"Roboto\\\", sans-serif; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/scss/style.scss?./node_modules/css-loader??ref--4-1!./node_modules/postcss-loader/lib!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/assets/background.png":
/*!***********************************!*\
  !*** ./src/assets/background.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"539caf2f0b2569607451b2336efa9ca7.png\";\n\n//# sourceURL=webpack:///./src/assets/background.png?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n__webpack_require__(/*! ../assets/background.png */ \"./src/assets/background.png\");\n\nvar editorNav = __webpack_require__(/*! ./components/editorNav */ \"./src/js/components/editorNav.js\");\nvar repeatedWords = __webpack_require__(/*! ./containers/repeatedWords */ \"./src/js/containers/repeatedWords.js\");\nvar overusedWords = __webpack_require__(/*! ./containers/overusedWords */ \"./src/js/containers/overusedWords.js\");\n\nvar editAreaBtn = document.getElementsByClassName('edit-area-btn');\n\n// change editor sections on click\nArray.from(editAreaBtn, function (button) {\n  return button.addEventListener('click', editorNav);\n});\n// containing all functions responsible for overused words and return checked overused words\nvar checkedWords = overusedWords();\n// containing all functions responsible for repeated words\nrepeatedWords(checkedWords);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/components/addOverusedWords.js":
/*!***********************************************!*\
  !*** ./src/js/components/addOverusedWords.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createOverusedWordsElement = __webpack_require__(/*! ./createOverusedWordsElement */ \"./src/js/components/createOverusedWordsElement.js\");\nvar removeOverusedWord = __webpack_require__(/*! ./removeOverusedWord */ \"./src/js/components/removeOverusedWord.js\");\nvar selectOverusedWord = __webpack_require__(/*! ./selectOverusedWord */ \"./src/js/components/selectOverusedWord.js\");\n\nvar overusedWordsList = document.getElementsByClassName('overused-words-list')[0];\nvar highlightedOverusedWords = document.getElementById('highlighted-overused-words');\nvar remove = overusedWordsList.getElementsByClassName('remove');\nvar checkbox = document.getElementsByClassName('checkbox');\nvar textArea = document.getElementById('text-area');\n\nvar addOverusedWords = function addOverusedWords(overusedWords, checkedWords) {\n    // remove all overused words from the list\n    while (overusedWordsList.hasChildNodes()) {\n        overusedWordsList.removeChild(overusedWordsList.firstChild);\n    }\n    // add overused word to the list\n    overusedWords.forEach(function (word, index) {\n        // create and add overused word to the list\n        createOverusedWordsElement(checkedWords, word, overusedWordsList);\n        // remove overused word from the list\n        remove[index].addEventListener('click', function (event) {\n            removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWords, event.target, textArea.value);\n            event.preventDefault();\n        });\n        // highlight overused word in textarea\n        checkbox[index].addEventListener('change', function (event) {\n            selectOverusedWord(checkedWords, highlightedOverusedWords, event.target, textArea.value);\n            event.preventDefault();\n        });\n    });\n};\n\nmodule.exports = addOverusedWords;\n\n//# sourceURL=webpack:///./src/js/components/addOverusedWords.js?");

/***/ }),

/***/ "./src/js/components/addRepeatedWords.js":
/*!***********************************************!*\
  !*** ./src/js/components/addRepeatedWords.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createRepeatedWordsElements = __webpack_require__(/*! ./createRepeatedWordsElements */ \"./src/js/components/createRepeatedWordsElements.js\");\nvar handleRepeatedWordClick = __webpack_require__(/*! ./handleRepeatedWordClick */ \"./src/js/components/handleRepeatedWordClick.js\");\nvar highlightActiveRepeatedWord = __webpack_require__(/*! ./highlightActiveRepeatedWord */ \"./src/js/components/highlightActiveRepeatedWord.js\");\nvar highlightSelectedRepeatedWords = __webpack_require__(/*! ./highlightSelectedRepeatedWords */ \"./src/js/components/highlightSelectedRepeatedWords.js\");\n\nvar highlightedRepeatedWords = document.getElementById('highlighted-repeated-words');\nvar repeatedWordsList = document.getElementsByClassName('repeated-words-list')[0];\nvar repeatedWordsListItems = repeatedWordsList.getElementsByTagName('li');\n\n// store information about last clicked word and whether is highlighted or not\nvar state = {\n    highlighted: false,\n    currentWord: ''\n};\n\nvar addRepeatedWords = function addRepeatedWords(repeatedWords, words, textAreaValue) {\n    // remove all repeated words from the list\n    while (repeatedWordsList.hasChildNodes()) {\n        repeatedWordsList.removeChild(repeatedWordsList.firstChild);\n    }\n\n    // remove current word state, if the same word is removed from text area\n    if (!words.includes(state.currentWord)) {\n        state.currentWord = '';\n    }\n\n    // repeatedWords array store arrays = [ word, count ]\n    repeatedWords.forEach(function (repeatedWord, index) {\n        // create and add repeated word to the list\n        createRepeatedWordsElements(repeatedWordsList, repeatedWord[0], repeatedWord[1]);\n        // highlight repeated word in textarea and in repeated words list\n        repeatedWordsListItems[index].addEventListener('click', function (event) {\n            var newState = handleRepeatedWordClick(event.target, repeatedWord[0], repeatedWordsListItems, textAreaValue);\n            // update state\n            state.highlighted = newState.highlighted;\n            state.currentWord = newState.currentWord;\n            event.preventDefault();\n        });\n    });\n\n    // keeps clicked word and words in textarea highlighted, when  input change\n    if (state.highlighted) {\n        highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWords(state.currentWord, textAreaValue);\n        highlightActiveRepeatedWord(repeatedWordsListItems, state.currentWord);\n    }\n};\n\nmodule.exports = addRepeatedWords;\n\n//# sourceURL=webpack:///./src/js/components/addRepeatedWords.js?");

/***/ }),

/***/ "./src/js/components/addUnchangedOverusedWords.js":
/*!********************************************************!*\
  !*** ./src/js/components/addUnchangedOverusedWords.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar addUnchangedOverusedWords = function addUnchangedOverusedWords(unchangedOverusedWords, orderedList) {\n    unchangedOverusedWords.forEach(function (word) {\n        var listItem = document.createElement('li');\n        var button = document.createElement('button');\n\n        var listItemText = document.createTextNode(word);\n        var buttonText = document.createTextNode('add');\n\n        listItem.appendChild(listItemText);\n        button.appendChild(buttonText);\n        button.setAttribute('class', 'material-icons predefined-words');\n        listItem.appendChild(button);\n        orderedList.appendChild(listItem);\n    });\n};\n\nmodule.exports = addUnchangedOverusedWords;\n\n//# sourceURL=webpack:///./src/js/components/addUnchangedOverusedWords.js?");

/***/ }),

/***/ "./src/js/components/changeableOverusedWords.js":
/*!******************************************************!*\
  !*** ./src/js/components/changeableOverusedWords.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar addOverusedWords = __webpack_require__(/*! ./addOverusedWords */ \"./src/js/components/addOverusedWords.js\");\nvar splitTextIntoWords = __webpack_require__(/*! ./splitTextIntoWords */ \"./src/js/components/splitTextIntoWords.js\");\n\nvar addOverusedWordsBtn = document.getElementById('add-words-btn');\nvar overusedWordsInput = document.getElementById('input');\n\nvar changeableOverusedWords = function changeableOverusedWords(overusedWords, checkedWords) {\n    addOverusedWordsBtn.addEventListener('click', function (event) {\n        // split text sequence into lowercase words base on passed regex\n        var words = splitTextIntoWords(/,\\s*|\\s+/g, overusedWordsInput.value);\n        // filters words to make sure that words are unique\n        var uniqueOverusedWords = [].concat(_toConsumableArray(new Set(words)));\n        // filters words to make sure that words are not repeating\n        var filteredOverusedWords = uniqueOverusedWords.filter(function (word) {\n            return !overusedWords.includes(word);\n        });\n        // add words to overused words array\n        filteredOverusedWords.forEach(function (word) {\n            return overusedWords.push(word);\n        });\n        // add overused words to the list on page\n        addOverusedWords(overusedWords, checkedWords);\n        // reset value\n        overusedWordsInput.value = '';\n        event.preventDefault();\n    });\n};\n\nmodule.exports = changeableOverusedWords;\n\n//# sourceURL=webpack:///./src/js/components/changeableOverusedWords.js?");

/***/ }),

/***/ "./src/js/components/countRepeatedWords.js":
/*!*************************************************!*\
  !*** ./src/js/components/countRepeatedWords.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar countRepeatedWords = function countRepeatedWords(words) {\n\n    var countedWords = {};\n    // count words and save into object\n    words.forEach(function (word) {\n        return countedWords[word] = (countedWords[word] || 0) + 1;\n    });\n\n    var sortedWords = [];\n    // push counted words from object to the array\n    for (var word in countedWords) {\n        sortedWords.push([word, countedWords[word]]);\n    }\n\n    // sort words from most to least repeated\n    sortedWords.sort(function (a, b) {\n        return b[1] - a[1];\n    });\n\n    return sortedWords;\n};\n\nmodule.exports = countRepeatedWords;\n\n//# sourceURL=webpack:///./src/js/components/countRepeatedWords.js?");

/***/ }),

/***/ "./src/js/components/createOverusedWordsElement.js":
/*!*********************************************************!*\
  !*** ./src/js/components/createOverusedWordsElement.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createOverusedWordsElement = function createOverusedWordsElement(checkedWords, word, overusedWordsList) {\n    // container\n    var listItem = document.createElement('li');\n    // input checkbox\n    var inputElement = document.createElement('input');\n    // custom checkbox\n    var spanElement = document.createElement('span');\n    // remove\n    var spanRemoveElement = document.createElement('span');\n    // create text nodes\n    var labelTextNode = document.createTextNode(word);\n    // append text nodes\n    listItem.appendChild(labelTextNode);\n    // append input checkbox, custom checkbox, icon into label container\n    listItem.appendChild(inputElement);\n    listItem.appendChild(spanElement);\n    listItem.appendChild(spanRemoveElement);\n    // set attr\n    listItem.setAttribute('id', word);\n    inputElement.setAttribute('type', 'checkbox');\n    inputElement.setAttribute('class', 'checkbox');\n    spanRemoveElement.setAttribute('class', 'remove');\n    spanElement.setAttribute('class', 'check-mark');\n    if (checkedWords.includes(word)) {\n        inputElement.setAttribute('checked', '');\n    }\n\n    overusedWordsList.appendChild(listItem);\n};\n\nmodule.exports = createOverusedWordsElement;\n\n//# sourceURL=webpack:///./src/js/components/createOverusedWordsElement.js?");

/***/ }),

/***/ "./src/js/components/createRepeatedWordsElements.js":
/*!**********************************************************!*\
  !*** ./src/js/components/createRepeatedWordsElements.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createRepeatedWordsElements = function createRepeatedWordsElements(repeatingWordsList, word, count) {\n    // create element and text node with content from words array\n    var createdListItemElement = document.createElement('li');\n    var spanElementText = document.createTextNode(word + ' : ' + count);\n    createdListItemElement.appendChild(spanElementText);\n    repeatingWordsList.appendChild(createdListItemElement);\n};\n\nmodule.exports = createRepeatedWordsElements;\n\n//# sourceURL=webpack:///./src/js/components/createRepeatedWordsElements.js?");

/***/ }),

/***/ "./src/js/components/editorNav.js":
/*!****************************************!*\
  !*** ./src/js/components/editorNav.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar editAreaSections = document.getElementsByClassName('edit-area-sections')[0];\nvar underline = document.getElementsByClassName('underline')[0];\nvar active = document.getElementsByClassName('active');\n\nvar editorNav = function editorNav(event) {\n    // remove class 'active'\n    active[0].className = active[0].className.replace(\" active\", \"\");\n    // add class 'active' to clicked editor nav button\n    this.className += \" active\";\n\n    var attribute = this.getAttribute('value');\n    // change sections\n    if (attribute === 'textarea') {\n        underline.className = 'underline underline-textarea';\n        editAreaSections.className = 'edit-area-sections textarea';\n    } else if (attribute === 'words') {\n        underline.className = 'underline underline-words';\n        editAreaSections.className = 'edit-area-sections words';\n    } else if (attribute === 'faq') {\n        underline.className = 'underline underline-faq';\n        editAreaSections.className = 'edit-area-sections faq';\n    }\n    event.preventDefault();\n};\n\nmodule.exports = editorNav;\n\n//# sourceURL=webpack:///./src/js/components/editorNav.js?");

/***/ }),

/***/ "./src/js/components/getStringData.js":
/*!********************************************!*\
  !*** ./src/js/components/getStringData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar splitTextIntoWords = __webpack_require__(/*! ./splitTextIntoWords */ \"./src/js/components/splitTextIntoWords.js\");\n\nvar stringData = document.querySelectorAll('.string-data p span');\n\nvar getStringData = function getStringData(input) {\n    var words = splitTextIntoWords(/\\W+/, input);\n    stringData[0].innerHTML = words.length;\n    var sentences = input.split(/\\w[.?!][\\s|$]/);\n    stringData[1].innerHTML = sentences.length;\n    stringData[2].innerHTML = input.length;\n};\n\nmodule.exports = getStringData;\n\n//# sourceURL=webpack:///./src/js/components/getStringData.js?");

/***/ }),

/***/ "./src/js/components/handleRepeatedWordClick.js":
/*!******************************************************!*\
  !*** ./src/js/components/handleRepeatedWordClick.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightActiveRepeatedWord = __webpack_require__(/*! ./highlightActiveRepeatedWord */ \"./src/js/components/highlightActiveRepeatedWord.js\");\nvar highlightSelectedRepeatedWords = __webpack_require__(/*! ./highlightSelectedRepeatedWords */ \"./src/js/components/highlightSelectedRepeatedWords.js\");\n\nvar highlightedRepeatedWords = document.getElementById('highlighted-repeated-words');\n\nvar handleRepeatedWordClick = function handleRepeatedWordClick(target, repeatedWord, repeatedWordsListItems, textAreaValue) {\n    // if word is inactive\n    if (target.className !== 'active-repeated-word') {\n        // highlight repeated words in text area\n        highlightedRepeatedWords.innerHTML = highlightSelectedRepeatedWords(repeatedWord, textAreaValue);\n        // set word to active\n        highlightActiveRepeatedWord(repeatedWordsListItems, repeatedWord);\n        // set state of clicked word\n        return {\n            highlighted: true,\n            currentWord: repeatedWord\n        };\n    } else {\n        // set word to inactive\n        target.className = 'inactive-repeated-word';\n        highlightedRepeatedWords.innerHTML = textAreaValue;\n        // set state of clicked word\n        return {\n            highlighted: false,\n            currentWord: ''\n        };\n    }\n};\n\nmodule.exports = handleRepeatedWordClick;\n\n//# sourceURL=webpack:///./src/js/components/handleRepeatedWordClick.js?");

/***/ }),

/***/ "./src/js/components/highlightActiveRepeatedWord.js":
/*!**********************************************************!*\
  !*** ./src/js/components/highlightActiveRepeatedWord.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightActiveRepeatedWord = function highlightActiveRepeatedWord(repeatedWordsListItems, currentWord) {\n    for (var index = 0; index < repeatedWordsListItems.length; index++) {\n        var content = repeatedWordsListItems[index].textContent;\n        var matched = content.match(/^\\w+/);\n        var matchedWord = matched.toString();\n\n        if (matchedWord === currentWord) {\n            repeatedWordsListItems[index].className = 'active';\n        } else {\n            repeatedWordsListItems[index].removeAttribute(\"class\");\n        }\n    }\n};\n\nmodule.exports = highlightActiveRepeatedWord;\n\n//# sourceURL=webpack:///./src/js/components/highlightActiveRepeatedWord.js?");

/***/ }),

/***/ "./src/js/components/highlightSelectedOverusedWords.js":
/*!*************************************************************!*\
  !*** ./src/js/components/highlightSelectedOverusedWords.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightSelectedOverusedWords = function highlightSelectedOverusedWords(word, textAreaValue) {\n    for (var index = 0; index < word.length; index++) {\n        // create a regular expression which change with each iteration\n        var regex = new RegExp('\\\\b' + word[index] + '\\\\b', 'gi');\n        // replace words with markup and words\n        textAreaValue = textAreaValue.replace(regex, function (match) {\n            return '<mark class=\"match\">' + match + '</mark>';\n        });\n    }\n    return textAreaValue;\n};\n\nmodule.exports = highlightSelectedOverusedWords;\n\n//# sourceURL=webpack:///./src/js/components/highlightSelectedOverusedWords.js?");

/***/ }),

/***/ "./src/js/components/highlightSelectedRepeatedWords.js":
/*!*************************************************************!*\
  !*** ./src/js/components/highlightSelectedRepeatedWords.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightSelectedRepeatedWords = function highlightSelectedRepeatedWords(word, textAreaValue) {\n    var regex = new RegExp('\\\\b' + word + '\\\\b', 'gi');\n    // replace words with markup and words\n    return textAreaValue.replace(regex, function (match) {\n        return '<mark class=\"match\">' + match + '</mark>';\n    });\n};\n\nmodule.exports = highlightSelectedRepeatedWords;\n\n//# sourceURL=webpack:///./src/js/components/highlightSelectedRepeatedWords.js?");

/***/ }),

/***/ "./src/js/components/removeOverusedWord.js":
/*!*************************************************!*\
  !*** ./src/js/components/removeOverusedWord.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightSelectedOverusedWords = __webpack_require__(/*! ./highlightSelectedOverusedWords */ \"./src/js/components/highlightSelectedOverusedWords.js\");\n\nvar removeOverusedWord = function removeOverusedWord(overusedWords, checkedWords, highlightedOverusedWords, target, textAreaValue) {\n    var wordToRemove = target.parentElement.id;\n    // if overused word was checked, remove it from the checked words list\n    checkedWords.forEach(function (word, index) {\n        if (checkedWords[index] === wordToRemove) {\n            checkedWords.splice(index, 1);\n        }\n    });\n    // remove word from the overused words list\n    overusedWords.forEach(function (word, index) {\n        if (overusedWords[index] === wordToRemove) {\n            overusedWords.splice(index, 1);\n        }\n    });\n    // remove list item from the overused words list\n    target.parentElement.remove();\n    // update textarea with highlighted overused words\n    highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textAreaValue);\n};\n\nmodule.exports = removeOverusedWord;\n\n//# sourceURL=webpack:///./src/js/components/removeOverusedWord.js?");

/***/ }),

/***/ "./src/js/components/selectOverusedWord.js":
/*!*************************************************!*\
  !*** ./src/js/components/selectOverusedWord.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar highlightSelectedOverusedWords = __webpack_require__(/*! ./highlightSelectedOverusedWords */ \"./src/js/components/highlightSelectedOverusedWords.js\");\n\nvar selectOverusedWord = function selectOverusedWord(checkedWords, highlightedOverusedWords, target, textAreaValue) {\n\n    if (target.checked) {\n        // get label element content\n        checkedWords.push(target.parentElement.id);\n    } else {\n        for (var i = checkedWords.length - 1; i >= 0; i--) {\n            if (checkedWords[i] === target.parentElement.id) {\n                checkedWords.splice(i, 1);\n                break;\n            }\n        }\n    }\n    highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textAreaValue);\n};\n\nmodule.exports = selectOverusedWord;\n\n//# sourceURL=webpack:///./src/js/components/selectOverusedWord.js?");

/***/ }),

/***/ "./src/js/components/splitTextIntoWords.js":
/*!*************************************************!*\
  !*** ./src/js/components/splitTextIntoWords.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar splitTextIntoWords = function splitTextIntoWords(regex, input) {\n    var lowerCaseInput = input.toLowerCase();\n    var words = lowerCaseInput.split(regex);\n    return words.filter(function (word) {\n        return word.length !== 0;\n    });\n};\n\nmodule.exports = splitTextIntoWords;\n\n//# sourceURL=webpack:///./src/js/components/splitTextIntoWords.js?");

/***/ }),

/***/ "./src/js/components/unchangeableOverusedWords.js":
/*!********************************************************!*\
  !*** ./src/js/components/unchangeableOverusedWords.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar addOverusedWords = __webpack_require__(/*! ./addOverusedWords */ \"./src/js/components/addOverusedWords.js\");\n\nvar predefinedWords = document.getElementsByClassName('predefined-words');\n\n// create this words lists\nvar unchangeableOverusedWords = function unchangeableOverusedWords(overusedWords, checkedWords, unchangeableWords) {\n    var _loop = function _loop(index) {\n        predefinedWords[index].addEventListener('click', function (event) {\n            // if the word is not in the arrays of overused words, add them\n            if (!overusedWords.includes(unchangeableWords[index])) {\n                overusedWords.push(unchangeableWords[index]);\n                // add overused words to the list on page\n                addOverusedWords(overusedWords, checkedWords);\n            }\n            event.preventDefault();\n        });\n    };\n\n    for (var index = 0; index < predefinedWords.length; index++) {\n        _loop(index);\n    }\n};\n\nmodule.exports = unchangeableOverusedWords;\n\n//# sourceURL=webpack:///./src/js/components/unchangeableOverusedWords.js?");

/***/ }),

/***/ "./src/js/containers/overusedWords.js":
/*!********************************************!*\
  !*** ./src/js/containers/overusedWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar changeableOverusedWords = __webpack_require__(/*! ../components/changeableOverusedWords */ \"./src/js/components/changeableOverusedWords.js\");\nvar unchangeableOverusedWords = __webpack_require__(/*! ../components/unchangeableOverusedWords */ \"./src/js/components/unchangeableOverusedWords.js\");\nvar addUnchangedOverusedWords = __webpack_require__(/*! ../components/addUnchangedOverusedWords */ \"./src/js/components/addUnchangedOverusedWords.js\");\n\nvar cvOverusedWordsList = document.getElementsByClassName('cv-overused-words')[0];\nvar commonOverusedWordsList = document.getElementsByClassName('common-overused-words')[0];\n\nvar state = {\n    words: [],\n    checkedWords: [],\n    cvOverusedWords: ['passionate', 'creative', 'driven', 'responsible', 'strategic', 'organizational', 'expert'],\n    commonOverusedWords: ['other', 'more', 'new', 'good', 'best', 'many', 'important', 'great', 'first', 'able']\n\n};\n\nvar overusedWords = function overusedWords() {\n    // merge lists of unchangeable overused words\n    var unchangeableWords = state.cvOverusedWords.concat(state.commonOverusedWords);\n    // create unchangeable overused words html elements and add them to page\n    addUnchangedOverusedWords(state.cvOverusedWords, cvOverusedWordsList);\n    addUnchangedOverusedWords(state.commonOverusedWords, commonOverusedWordsList);\n\n    changeableOverusedWords(state.words, state.checkedWords);\n    unchangeableOverusedWords(state.words, state.checkedWords, unchangeableWords);\n\n    return state.checkedWords;\n};\n\nmodule.exports = overusedWords;\n\n//# sourceURL=webpack:///./src/js/containers/overusedWords.js?");

/***/ }),

/***/ "./src/js/containers/repeatedWords.js":
/*!********************************************!*\
  !*** ./src/js/containers/repeatedWords.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar getStringData = __webpack_require__(/*! ../components/getStringData */ \"./src/js/components/getStringData.js\");\nvar highlightSelectedOverusedWords = __webpack_require__(/*! ../components/highlightSelectedOverusedWords */ \"./src/js/components/highlightSelectedOverusedWords.js\");\nvar countRepeatedWords = __webpack_require__(/*! ../components/countRepeatedWords */ \"./src/js/components/countRepeatedWords.js\");\nvar addRepeatedWords = __webpack_require__(/*! ../components/addRepeatedWords */ \"./src/js/components/addRepeatedWords.js\");\nvar splitTextIntoWords = __webpack_require__(/*! ../components/splitTextIntoWords */ \"./src/js/components/splitTextIntoWords.js\");\n\nvar textArea = document.getElementById('text-area');\nvar highlightedOverusedWords = document.getElementById('highlighted-overused-words');\n\nvar repeatedWords = function repeatedWords(checkedWords) {\n    textArea.addEventListener('input', function (event) {\n        // split text sequence into lowercase words base on passed regex\n        var textAreaWords = splitTextIntoWords(/\\W+/, textArea.value);\n        // count and sort repeated words\n        var repeatedWords = countRepeatedWords(textAreaWords);\n        // adds repeating words to the list ( move it to repeated Word file )\n        addRepeatedWords(repeatedWords, textAreaWords, textArea.value);\n        // highlight already selected overused words\n        highlightedOverusedWords.innerHTML = highlightSelectedOverusedWords(checkedWords, textArea.value);\n        // displays the number of characters, words and sentences in the text sequence\n        getStringData(textArea.value);\n        event.preventDefault();\n    });\n};\n\nmodule.exports = repeatedWords;\n\n//# sourceURL=webpack:///./src/js/containers/repeatedWords.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/postcss-loader/lib!../../node_modules/sass-loader/lib/loader.js!./style.scss */ \"./node_modules/css-loader/index.js??ref--4-1!./node_modules/postcss-loader/lib/index.js!./node_modules/sass-loader/lib/loader.js!./src/scss/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });