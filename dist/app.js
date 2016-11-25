/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _map = __webpack_require__(1);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var elem = document.getElementById("map");
	var ctx = elem.getContext("2d");

	var map = new _map2.default({ width: 500, height: 500, ctx: ctx });
	map.initMap();

	console.log("hi!");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Map = function () {
	  function Map(_ref) {
	    var width = _ref.width,
	        height = _ref.height,
	        ctx = _ref.ctx;

	    _classCallCheck(this, Map);

	    this._width = width;
	    this._height = height;
	    this._ctx = ctx;
	  }

	  _createClass(Map, [{
	    key: "emptyMap",
	    value: function emptyMap() {
	      this._ctx.fillStyle = "white";
	      this._ctx.fillRect(0, 0, this._width, this._height);
	    }
	  }, {
	    key: "drawGrid",
	    value: function drawGrid() {
	      this._ctx.fillStyle = "black";
	      for (var _i = 0; _i < this._width; _i += 10) {
	        this._ctx.beginPath();
	        this._ctx.moveTo(_i, 0);
	        this._ctx.lineTo(_i, this._height);
	        this._ctx.stroke();
	      }
	      for (var j = 0; j < this._height; j += 10) {
	        this._ctx.beginPath();
	        this._ctx.moveTo(0, i);
	        this._ctx.lineTo(this._width, i);
	        this._ctx.stroke();
	      }
	    }
	  }, {
	    key: "initMap",
	    value: function initMap() {
	      debugger;
	      this.emptyMap();
	      this.drawGrid();
	    }
	  }]);

	  return Map;
	}();

	exports.default = Map;

/***/ }
/******/ ]);