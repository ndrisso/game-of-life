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

	var _engine = __webpack_require__(1);

	var _engine2 = _interopRequireDefault(_engine);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var elem = document.getElementById("map");
	var ctx = elem.getContext("2d");
	var rows = 50;
	var cols = 50;

	(0, _engine2.default)({ rows: rows, cols: cols, ctx: ctx }).start();
	console.log("started!");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _map2 = __webpack_require__(2);

	var _map3 = _interopRequireDefault(_map2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var engine = function engine(mapProps) {

	  var matrix = [];
	  var _map = (0, _map3.default)(mapProps);
	  var rows = mapProps.rows,
	      cols = mapProps.cols;


	  var randomizeMatrix = function randomizeMatrix() {
	    for (var i = 0; i < rows; i++) {
	      matrix[i] = [];
	      for (var j = 0; j < cols; j++) {
	        // Giving more weight to death cells
	        var rand = Math.floor(Math.random() * 8);
	        matrix[i][j] = rand === 0 ? 1 : 0;
	      }
	    }
	  };

	  var updateLife = function updateLife() {
	    for (var i = 0; i < rows; i++) {
	      for (var j = 0; j < cols; j++) {
	        var alive = aliveNeightbors(i, j);
	        var elem = matrix[i][j];

	        if (alive === 3 && elem === 0) {
	          matrix[i][j] = 1;
	        } else if ((alive < 2 || alive > 3) && elem === 1) {
	          matrix[i][j] = 0;
	        }
	      }
	    }
	  };

	  var aliveNeightbors = function aliveNeightbors(row, col) {
	    var fromRow = row - 1 < 0 ? row : row - 1;
	    var fromCol = col - 1 < 0 ? col : col - 1;
	    var toRow = row + 1 === rows ? row : row + 1;
	    var toCol = col + 1 === cols ? col : col + 1;
	    var alives = 0;

	    for (var i = fromRow; i <= toRow; i++) {
	      for (var j = fromCol; j <= toCol; j++) {
	        if (matrix[i][j] === 1) {
	          alives++;
	        }
	      }
	    }

	    return alives - matrix[row][col];
	  };

	  var start = function start() {
	    randomizeMatrix();

	    setInterval(function () {
	      updateLife();
	      _map.drawMap(matrix);
	    }, 200);
	  };

	  return {
	    start: start
	  };
	};

	exports.default = engine;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var map = function map(_ref) {
	  var rows = _ref.rows,
	      cols = _ref.cols,
	      ctx = _ref.ctx;


	  var drawMap = function drawMap(matrix) {
	    for (var j = 0; j < rows; j++) {
	      for (var i = 0; i < cols; i++) {
	        ctx.fillStyle = matrix[j][i] === 1 ? "gray" : "white";
	        ctx.fillRect(j * 10, i * 10, 10, 10);
	        ctx.strokeStyle = "black";
	        ctx.strokeRect(j * 10, i * 10, 10, 10);
	      }
	    }
	  };

	  return {
	    drawMap: drawMap
	  };
	};

	exports.default = map;

/***/ }
/******/ ]);