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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\n * BLOCK: gutenberg-simple-statistics\n *\n * A block that allows you to add statistics that count up\n * \n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar PlainText = wp.editor.PlainText; // Import the PlainText input\n\n/**\n * Register: aa Gutenberg Block.\n *\n * Registers a new block provided a unique name and an object defining its\n * behavior. Once registered, the block is made editor as an option to any\n * editor interface where blocks are implemented.\n *\n * @link https://wordpress.org/gutenberg/handbook/block-api/\n * @param  {string}   name     Block name.\n * @param  {Object}   settings Block settings.\n * @return {?WPBlock}          The block, if it has been successfully\n *                             registered; otherwise `undefined`.\n */\n\nregisterBlockType('cgb/block-gutenberg-simple-statistics', {\n\t// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n\ttitle: __('Simple Statistics'), // Block title.\n\ticon: 'performance', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n\tcategory: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n\tkeywords: [__('Statistics')],\n\tattributes: { // set up our default attributes\n\t\tstats: {\n\t\t\ttype: \"array\", // arrays don't take sub attributes\n\t\t\tdefault: []\n\t\t},\n\t\trandomKey: {\n\t\t\ttype: 'string', // set up our random key so we can have unique ids for the count up animation\n\t\t\tdefault: 'statistics-block'\n\t\t}\n\t},\n\n\t/**\n  * The edit function describes the structure of your block in the context of the editor.\n  * This represents what the editor will render when the block is used.\n  *\n  * The \"edit\" property must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    isSelected = _ref.isSelected,\n\t\t    className = _ref.className;\n\n\n\t\t// if our random key is the default, set our random key so we can have unique ids on the front end\n\t\tif (attributes.randomKey === 'statistics-block') {\n\t\t\tvar randomKey = Math.floor(Math.random() * 9999);\n\t\t\tsetAttributes({ randomKey: randomKey });\n\t\t}\n\n\t\t// Creates a component to add new stats. This has a button with an onclick to add a new stat with default values and uses setAttributes to save the new list of stats\n\t\tvar addRow = wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ style: { textAlign: 'right' } },\n\t\t\twp.element.createElement(\n\t\t\t\t'button',\n\t\t\t\t{ type: 'button', style: { marginLeft: \"10px\", marginRight: \"10px\" }, className: 'components-button components-icon-button',\n\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\tif (attributes.stats.length > 3) {\n\t\t\t\t\t\t\tsetAttributes({ stats: [] });\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar newStats = [].concat(_toConsumableArray(attributes.stats));\n\t\t\t\t\t\t\tvar newStat = {\n\t\t\t\t\t\t\t\tvalue: \"\",\n\t\t\t\t\t\t\t\tlabel: \"\"\n\t\t\t\t\t\t\t};\n\t\t\t\t\t\t\tnewStats.push(newStat);\n\t\t\t\t\t\t\tsetAttributes({ stats: newStats });\n\t\t\t\t\t\t}\n\t\t\t\t\t} },\n\t\t\t\t__(\"Add Statistic:\"),\n\t\t\t\twp.element.createElement('span', { className: 'dashicons dashicons-plus' })\n\t\t\t)\n\t\t);\n\n\t\t// Creates a component to delete stats. This has a button with an onclick that slices the array on the index and uses the setAttribute function to save the new list of stats.\n\t\tvar deleteStat = function deleteStat(index) {\n\n\t\t\treturn wp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'stat-edit-box' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\t{ className: 'stat-edit-buttons', style: { display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #e2e4e7' } },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t'button',\n\t\t\t\t\t\t{ type: 'button', style: { paddingLeft: \"2px\", paddingRight: \"2px\" }, className: 'components-button components-icon-button',\n\t\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\t\tvar newStats = [].concat(_toConsumableArray(attributes.stats));\n\t\t\t\t\t\t\t\tnewStats.splice(index, 1);\n\t\t\t\t\t\t\t\tsetAttributes({ stats: newStats });\n\t\t\t\t\t\t\t} },\n\t\t\t\t\t\twp.element.createElement('span', { className: 'dashicons dashicons-trash' })\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t};\n\n\t\t// this is just a simple helper for rendering plain text inputs\n\t\t// it takes a field and an index so we can update the correct stat\n\t\tvar renderPlainText = function renderPlainText(field, stat, index) {\n\t\t\treturn wp.element.createElement(PlainText, {\n\t\t\t\tstyle: { textAlign: \"center\", minWidth: '50px' },\n\t\t\t\tvalue: stat[field],\n\t\t\t\tclassName: field,\n\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\tvar newStats = [].concat(_toConsumableArray(attributes.stats));\n\t\t\t\t\tnewStats[index][field] = value;\n\t\t\t\t\tsetAttributes({ stats: newStats });\n\t\t\t\t},\n\t\t\t\tplaceholder: field === 'label' ? __(\"Label\") : __(\"0\")\n\t\t\t});\n\t\t};\n\n\t\t// method to start the count up\n\t\tvar renderCountUp = function renderCountUp(stat, index) {\n\t\t\t// set our options\n\t\t\tvar countUpOptions = {\n\t\t\t\tuseEasing: true,\n\t\t\t\tuseGrouping: true\n\t\t\t\t// get our unique id\n\t\t\t};var id = 'countup-' + attributes.randomKey + index;\n\t\t\t// build the count up\n\t\t\tvar countUp = new CountUp(id, 0, stat.value, 0, 2.5, countUpOptions);\n\t\t\t// if we correctly built the count up, start the animation\n\t\t\tif (!countUp.error) {\n\t\t\t\tcountUp.start();\n\t\t\t} else {\n\t\t\t\tconsole.error(countUp.error);\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\n\t\t\t\t// map through our stats and render them, if isSelected (user has selected the block), show our inputs, otherwise, show our html\n\t\t\t\tattributes.stats.map(function (stat, index) {\n\t\t\t\t\t// if not isSelected, set a render count up on a setTimeout so we ensure the statistic has already rendered on the page\n\t\t\t\t\t!isSelected ? setTimeout(function () {\n\t\t\t\t\t\trenderCountUp(stat, index);\n\t\t\t\t\t}, 100) : null;\n\t\t\t\t\t// return an array with our html\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'statistic', key: index },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tisSelected ? renderPlainText('value', stat, index) : wp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'value', id: \"countup-\" + attributes.randomKey + index },\n\t\t\t\t\t\t\t\tstat.value\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tisSelected ? renderPlainText('label', stat, index) : wp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'label', id: \"countup-\" + attributes.randomKey + index },\n\t\t\t\t\t\t\t\tstat.label\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\tisSelected ? deleteStat(index) : null\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t),\n\t\t\tisSelected ? addRow : null\n\t\t);\n\t},\n\n\t/**\n  * The save function defines the way in which the different attributes should be combined\n  * into the final markup, which is then serialized by Gutenberg into post_content.\n  *\n  * The \"save\" property must be specified and must be a valid function.\n  *\n  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/\n  */\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes,\n\t\t    className = _ref2.className;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'container' },\n\n\t\t\t\t// map through our stats and show the html\n\t\t\t\tattributes.stats.map(function (stat, i) {\n\t\t\t\t\treturn wp.element.createElement(\n\t\t\t\t\t\t'div',\n\t\t\t\t\t\t{ className: 'statistic', key: i },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t\t{ className: 'simple-statistic-countup', 'data-value': stat.value, id: 'countup-' + attributes.randomKey + i },\n\t\t\t\t\t\t\t\t'0'\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t'div',\n\t\t\t\t\t\t\t{ className: 'label' },\n\t\t\t\t\t\t\tstat.label\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH0gZWxzZSB7IHJldHVybiBBcnJheS5mcm9tKGFycik7IH0gfVxuXG4vKipcbiAqIEJMT0NLOiBndXRlbmJlcmctc2ltcGxlLXN0YXRpc3RpY3NcbiAqXG4gKiBBIGJsb2NrIHRoYXQgYWxsb3dzIHlvdSB0byBhZGQgc3RhdGlzdGljcyB0aGF0IGNvdW50IHVwXG4gKiBcbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187IC8vIEltcG9ydCBfXygpIGZyb20gd3AuaTE4blxuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7IC8vIEltcG9ydCByZWdpc3RlckJsb2NrVHlwZSgpIGZyb20gd3AuYmxvY2tzXG5cbnZhciBQbGFpblRleHQgPSB3cC5lZGl0b3IuUGxhaW5UZXh0OyAvLyBJbXBvcnQgdGhlIFBsYWluVGV4dCBpbnB1dFxuXG4vKipcbiAqIFJlZ2lzdGVyOiBhYSBHdXRlbmJlcmcgQmxvY2suXG4gKlxuICogUmVnaXN0ZXJzIGEgbmV3IGJsb2NrIHByb3ZpZGVkIGEgdW5pcXVlIG5hbWUgYW5kIGFuIG9iamVjdCBkZWZpbmluZyBpdHNcbiAqIGJlaGF2aW9yLiBPbmNlIHJlZ2lzdGVyZWQsIHRoZSBibG9jayBpcyBtYWRlIGVkaXRvciBhcyBhbiBvcHRpb24gdG8gYW55XG4gKiBlZGl0b3IgaW50ZXJmYWNlIHdoZXJlIGJsb2NrcyBhcmUgaW1wbGVtZW50ZWQuXG4gKlxuICogQGxpbmsgaHR0cHM6Ly93b3JkcHJlc3Mub3JnL2d1dGVuYmVyZy9oYW5kYm9vay9ibG9jay1hcGkvXG4gKiBAcGFyYW0gIHtzdHJpbmd9ICAgbmFtZSAgICAgQmxvY2sgbmFtZS5cbiAqIEBwYXJhbSAge09iamVjdH0gICBzZXR0aW5ncyBCbG9jayBzZXR0aW5ncy5cbiAqIEByZXR1cm4gez9XUEJsb2NrfSAgICAgICAgICBUaGUgYmxvY2ssIGlmIGl0IGhhcyBiZWVuIHN1Y2Nlc3NmdWxseVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWQ7IG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAqL1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLWd1dGVuYmVyZy1zaW1wbGUtc3RhdGlzdGljcycsIHtcblx0Ly8gQmxvY2sgbmFtZS4gQmxvY2sgbmFtZXMgbXVzdCBiZSBzdHJpbmcgdGhhdCBjb250YWlucyBhIG5hbWVzcGFjZSBwcmVmaXguIEV4YW1wbGU6IG15LXBsdWdpbi9teS1jdXN0b20tYmxvY2suXG5cdHRpdGxlOiBfXygnU2ltcGxlIFN0YXRpc3RpY3MnKSwgLy8gQmxvY2sgdGl0bGUuXG5cdGljb246ICdwZXJmb3JtYW5jZScsIC8vIEJsb2NrIGljb24gZnJvbSBEYXNoaWNvbnMg4oaSIGh0dHBzOi8vZGV2ZWxvcGVyLndvcmRwcmVzcy5vcmcvcmVzb3VyY2UvZGFzaGljb25zLy5cblx0Y2F0ZWdvcnk6ICdjb21tb24nLCAvLyBCbG9jayBjYXRlZ29yeSDigJQgR3JvdXAgYmxvY2tzIHRvZ2V0aGVyIGJhc2VkIG9uIGNvbW1vbiB0cmFpdHMgRS5nLiBjb21tb24sIGZvcm1hdHRpbmcsIGxheW91dCB3aWRnZXRzLCBlbWJlZC5cblx0a2V5d29yZHM6IFtfXygnU3RhdGlzdGljcycpXSxcblx0YXR0cmlidXRlczogeyAvLyBzZXQgdXAgb3VyIGRlZmF1bHQgYXR0cmlidXRlc1xuXHRcdHN0YXRzOiB7XG5cdFx0XHR0eXBlOiBcImFycmF5XCIsIC8vIGFycmF5cyBkb24ndCB0YWtlIHN1YiBhdHRyaWJ1dGVzXG5cdFx0XHRkZWZhdWx0OiBbXVxuXHRcdH0sXG5cdFx0cmFuZG9tS2V5OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJywgLy8gc2V0IHVwIG91ciByYW5kb20ga2V5IHNvIHdlIGNhbiBoYXZlIHVuaXF1ZSBpZHMgZm9yIHRoZSBjb3VudCB1cCBhbmltYXRpb25cblx0XHRcdGRlZmF1bHQ6ICdzdGF0aXN0aWNzLWJsb2NrJ1xuXHRcdH1cblx0fSxcblxuXHQvKipcbiAgKiBUaGUgZWRpdCBmdW5jdGlvbiBkZXNjcmliZXMgdGhlIHN0cnVjdHVyZSBvZiB5b3VyIGJsb2NrIGluIHRoZSBjb250ZXh0IG9mIHRoZSBlZGl0b3IuXG4gICogVGhpcyByZXByZXNlbnRzIHdoYXQgdGhlIGVkaXRvciB3aWxsIHJlbmRlciB3aGVuIHRoZSBibG9jayBpcyB1c2VkLlxuICAqXG4gICogVGhlIFwiZWRpdFwiIHByb3BlcnR5IG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGlzU2VsZWN0ZWQgPSBfcmVmLmlzU2VsZWN0ZWQsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lO1xuXG5cblx0XHQvLyBpZiBvdXIgcmFuZG9tIGtleSBpcyB0aGUgZGVmYXVsdCwgc2V0IG91ciByYW5kb20ga2V5IHNvIHdlIGNhbiBoYXZlIHVuaXF1ZSBpZHMgb24gdGhlIGZyb250IGVuZFxuXHRcdGlmIChhdHRyaWJ1dGVzLnJhbmRvbUtleSA9PT0gJ3N0YXRpc3RpY3MtYmxvY2snKSB7XG5cdFx0XHR2YXIgcmFuZG9tS2V5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSk7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgcmFuZG9tS2V5OiByYW5kb21LZXkgfSk7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlcyBhIGNvbXBvbmVudCB0byBhZGQgbmV3IHN0YXRzLiBUaGlzIGhhcyBhIGJ1dHRvbiB3aXRoIGFuIG9uY2xpY2sgdG8gYWRkIGEgbmV3IHN0YXQgd2l0aCBkZWZhdWx0IHZhbHVlcyBhbmQgdXNlcyBzZXRBdHRyaWJ1dGVzIHRvIHNhdmUgdGhlIG5ldyBsaXN0IG9mIHN0YXRzXG5cdFx0dmFyIGFkZFJvdyA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBzdHlsZTogeyB0ZXh0QWxpZ246ICdyaWdodCcgfSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnYnV0dG9uJyxcblx0XHRcdFx0eyB0eXBlOiAnYnV0dG9uJywgc3R5bGU6IHsgbWFyZ2luTGVmdDogXCIxMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9LCBjbGFzc05hbWU6ICdjb21wb25lbnRzLWJ1dHRvbiBjb21wb25lbnRzLWljb24tYnV0dG9uJyxcblx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0aWYgKGF0dHJpYnV0ZXMuc3RhdHMubGVuZ3RoID4gMykge1xuXHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc3RhdHM6IFtdIH0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5ld1N0YXRzID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhdHRyaWJ1dGVzLnN0YXRzKSk7XG5cdFx0XHRcdFx0XHRcdHZhciBuZXdTdGF0ID0ge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBcIlwiLFxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsOiBcIlwiXG5cdFx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHRcdG5ld1N0YXRzLnB1c2gobmV3U3RhdCk7XG5cdFx0XHRcdFx0XHRcdHNldEF0dHJpYnV0ZXMoeyBzdGF0czogbmV3U3RhdHMgfSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRfXyhcIkFkZCBTdGF0aXN0aWM6XCIpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ2Rhc2hpY29ucyBkYXNoaWNvbnMtcGx1cycgfSlcblx0XHRcdClcblx0XHQpO1xuXG5cdFx0Ly8gQ3JlYXRlcyBhIGNvbXBvbmVudCB0byBkZWxldGUgc3RhdHMuIFRoaXMgaGFzIGEgYnV0dG9uIHdpdGggYW4gb25jbGljayB0aGF0IHNsaWNlcyB0aGUgYXJyYXkgb24gdGhlIGluZGV4IGFuZCB1c2VzIHRoZSBzZXRBdHRyaWJ1dGUgZnVuY3Rpb24gdG8gc2F2ZSB0aGUgbmV3IGxpc3Qgb2Ygc3RhdHMuXG5cdFx0dmFyIGRlbGV0ZVN0YXQgPSBmdW5jdGlvbiBkZWxldGVTdGF0KGluZGV4KSB7XG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0YXQtZWRpdC1ib3gnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0YXQtZWRpdC1idXR0b25zJywgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcsIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZTJlNGU3JyB9IH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2J1dHRvbicsXG5cdFx0XHRcdFx0XHR7IHR5cGU6ICdidXR0b24nLCBzdHlsZTogeyBwYWRkaW5nTGVmdDogXCIycHhcIiwgcGFkZGluZ1JpZ2h0OiBcIjJweFwiIH0sIGNsYXNzTmFtZTogJ2NvbXBvbmVudHMtYnV0dG9uIGNvbXBvbmVudHMtaWNvbi1idXR0b24nLFxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBuZXdTdGF0cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXR0cmlidXRlcy5zdGF0cykpO1xuXHRcdFx0XHRcdFx0XHRcdG5ld1N0YXRzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyh7IHN0YXRzOiBuZXdTdGF0cyB9KTtcblx0XHRcdFx0XHRcdFx0fSB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJywgeyBjbGFzc05hbWU6ICdkYXNoaWNvbnMgZGFzaGljb25zLXRyYXNoJyB9KVxuXHRcdFx0XHRcdClcblx0XHRcdFx0KVxuXHRcdFx0KTtcblx0XHR9O1xuXG5cdFx0Ly8gdGhpcyBpcyBqdXN0IGEgc2ltcGxlIGhlbHBlciBmb3IgcmVuZGVyaW5nIHBsYWluIHRleHQgaW5wdXRzXG5cdFx0Ly8gaXQgdGFrZXMgYSBmaWVsZCBhbmQgYW4gaW5kZXggc28gd2UgY2FuIHVwZGF0ZSB0aGUgY29ycmVjdCBzdGF0XG5cdFx0dmFyIHJlbmRlclBsYWluVGV4dCA9IGZ1bmN0aW9uIHJlbmRlclBsYWluVGV4dChmaWVsZCwgc3RhdCwgaW5kZXgpIHtcblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdHN0eWxlOiB7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWluV2lkdGg6ICc1MHB4JyB9LFxuXHRcdFx0XHR2YWx1ZTogc3RhdFtmaWVsZF0sXG5cdFx0XHRcdGNsYXNzTmFtZTogZmllbGQsXG5cdFx0XHRcdG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuXHRcdFx0XHRcdHZhciBuZXdTdGF0cyA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXR0cmlidXRlcy5zdGF0cykpO1xuXHRcdFx0XHRcdG5ld1N0YXRzW2luZGV4XVtmaWVsZF0gPSB2YWx1ZTtcblx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHsgc3RhdHM6IG5ld1N0YXRzIH0pO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRwbGFjZWhvbGRlcjogZmllbGQgPT09ICdsYWJlbCcgPyBfXyhcIkxhYmVsXCIpIDogX18oXCIwXCIpXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Ly8gbWV0aG9kIHRvIHN0YXJ0IHRoZSBjb3VudCB1cFxuXHRcdHZhciByZW5kZXJDb3VudFVwID0gZnVuY3Rpb24gcmVuZGVyQ291bnRVcChzdGF0LCBpbmRleCkge1xuXHRcdFx0Ly8gc2V0IG91ciBvcHRpb25zXG5cdFx0XHR2YXIgY291bnRVcE9wdGlvbnMgPSB7XG5cdFx0XHRcdHVzZUVhc2luZzogdHJ1ZSxcblx0XHRcdFx0dXNlR3JvdXBpbmc6IHRydWVcblx0XHRcdFx0Ly8gZ2V0IG91ciB1bmlxdWUgaWRcblx0XHRcdH07dmFyIGlkID0gJ2NvdW50dXAtJyArIGF0dHJpYnV0ZXMucmFuZG9tS2V5ICsgaW5kZXg7XG5cdFx0XHQvLyBidWlsZCB0aGUgY291bnQgdXBcblx0XHRcdHZhciBjb3VudFVwID0gbmV3IENvdW50VXAoaWQsIDAsIHN0YXQudmFsdWUsIDAsIDIuNSwgY291bnRVcE9wdGlvbnMpO1xuXHRcdFx0Ly8gaWYgd2UgY29ycmVjdGx5IGJ1aWx0IHRoZSBjb3VudCB1cCwgc3RhcnQgdGhlIGFuaW1hdGlvblxuXHRcdFx0aWYgKCFjb3VudFVwLmVycm9yKSB7XG5cdFx0XHRcdGNvdW50VXAuc3RhcnQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoY291bnRVcC5lcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnY29udGFpbmVyJyB9LFxuXG5cdFx0XHRcdC8vIG1hcCB0aHJvdWdoIG91ciBzdGF0cyBhbmQgcmVuZGVyIHRoZW0sIGlmIGlzU2VsZWN0ZWQgKHVzZXIgaGFzIHNlbGVjdGVkIHRoZSBibG9jayksIHNob3cgb3VyIGlucHV0cywgb3RoZXJ3aXNlLCBzaG93IG91ciBodG1sXG5cdFx0XHRcdGF0dHJpYnV0ZXMuc3RhdHMubWFwKGZ1bmN0aW9uIChzdGF0LCBpbmRleCkge1xuXHRcdFx0XHRcdC8vIGlmIG5vdCBpc1NlbGVjdGVkLCBzZXQgYSByZW5kZXIgY291bnQgdXAgb24gYSBzZXRUaW1lb3V0IHNvIHdlIGVuc3VyZSB0aGUgc3RhdGlzdGljIGhhcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBwYWdlXG5cdFx0XHRcdFx0IWlzU2VsZWN0ZWQgPyBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJlbmRlckNvdW50VXAoc3RhdCwgaW5kZXgpO1xuXHRcdFx0XHRcdH0sIDEwMCkgOiBudWxsO1xuXHRcdFx0XHRcdC8vIHJldHVybiBhbiBhcnJheSB3aXRoIG91ciBodG1sXG5cdFx0XHRcdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdzdGF0aXN0aWMnLCBrZXk6IGluZGV4IH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRpc1NlbGVjdGVkID8gcmVuZGVyUGxhaW5UZXh0KCd2YWx1ZScsIHN0YXQsIGluZGV4KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3ZhbHVlJywgaWQ6IFwiY291bnR1cC1cIiArIGF0dHJpYnV0ZXMucmFuZG9tS2V5ICsgaW5kZXggfSxcblx0XHRcdFx0XHRcdFx0XHRzdGF0LnZhbHVlXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRpc1NlbGVjdGVkID8gcmVuZGVyUGxhaW5UZXh0KCdsYWJlbCcsIHN0YXQsIGluZGV4KSA6IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ2xhYmVsJywgaWQ6IFwiY291bnR1cC1cIiArIGF0dHJpYnV0ZXMucmFuZG9tS2V5ICsgaW5kZXggfSxcblx0XHRcdFx0XHRcdFx0XHRzdGF0LmxhYmVsXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRpc1NlbGVjdGVkID8gZGVsZXRlU3RhdChpbmRleCkgOiBudWxsXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHRpc1NlbGVjdGVkID8gYWRkUm93IDogbnVsbFxuXHRcdCk7XG5cdH0sXG5cblx0LyoqXG4gICogVGhlIHNhdmUgZnVuY3Rpb24gZGVmaW5lcyB0aGUgd2F5IGluIHdoaWNoIHRoZSBkaWZmZXJlbnQgYXR0cmlidXRlcyBzaG91bGQgYmUgY29tYmluZWRcbiAgKiBpbnRvIHRoZSBmaW5hbCBtYXJrdXAsIHdoaWNoIGlzIHRoZW4gc2VyaWFsaXplZCBieSBHdXRlbmJlcmcgaW50byBwb3N0X2NvbnRlbnQuXG4gICpcbiAgKiBUaGUgXCJzYXZlXCIgcHJvcGVydHkgbXVzdCBiZSBzcGVjaWZpZWQgYW5kIG11c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi5cbiAgKlxuICAqIEBsaW5rIGh0dHBzOi8vd29yZHByZXNzLm9yZy9ndXRlbmJlcmcvaGFuZGJvb2svYmxvY2stYXBpL2Jsb2NrLWVkaXQtc2F2ZS9cbiAgKi9cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShfcmVmMikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZjIuYXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2NvbnRhaW5lcicgfSxcblxuXHRcdFx0XHQvLyBtYXAgdGhyb3VnaCBvdXIgc3RhdHMgYW5kIHNob3cgdGhlIGh0bWxcblx0XHRcdFx0YXR0cmlidXRlcy5zdGF0cy5tYXAoZnVuY3Rpb24gKHN0YXQsIGkpIHtcblx0XHRcdFx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdFx0XHR7IGNsYXNzTmFtZTogJ3N0YXRpc3RpYycsIGtleTogaSB9LFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHRcdFx0XHRcdHsgY2xhc3NOYW1lOiAnc2ltcGxlLXN0YXRpc3RpYy1jb3VudHVwJywgJ2RhdGEtdmFsdWUnOiBzdGF0LnZhbHVlLCBpZDogJ2NvdW50dXAtJyArIGF0dHJpYnV0ZXMucmFuZG9tS2V5ICsgaSB9LFxuXHRcdFx0XHRcdFx0XHRcdCcwJ1xuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6ICdsYWJlbCcgfSxcblx0XHRcdFx0XHRcdFx0c3RhdC5sYWJlbFxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);