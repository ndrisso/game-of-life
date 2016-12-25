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

	var _engine2 = __webpack_require__(1);

	var _engine3 = _interopRequireDefault(_engine2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var mapElem = document.getElementById("map");
	var generationElem = document.getElementById("generation");
	var livingCellsElem = document.getElementById("livingCells");
	var resetButton = document.getElementById("reset");
	var pauseButton = document.getElementById("pause");

	var updateLivinigCells = function updateLivinigCells(livingCells) {
	  livingCellsElem.innerText = livingCells;
	};

	var updateGeneration = function updateGeneration(generation) {
	  generationElem.innerText = generation;
	};

	var ctx = mapElem.getContext("2d");
	var rows = 50;
	var cols = 50;

	var _engine = (0, _engine3.default)({ rows: rows, cols: cols, ctx: ctx, updateLivinigCells: updateLivinigCells, updateGeneration: updateGeneration });

	console.log("Assigning listeners to buttons...");
	resetButton.onclick = function () {
	  pauseButton.value = "Pause";
	  _engine.start();
	};
	pauseButton.onclick = function () {
	  pauseButton.value = pauseButton.value === "Pause" ? "Resume" : "Pause";
	  _engine.pause();
	};
	console.log("Listeners assigned!");

	_engine.start();
	console.log("Game started!");

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

	  var generation = 0;
	  var matrix = [];
	  var livingCells = 0;
	  var running = false;
	  var gameInterval = null;

	  var _map = (0, _map3.default)(mapProps);
	  var rows = mapProps.rows,
	      cols = mapProps.cols,
	      updateLivinigCells = mapProps.updateLivinigCells,
	      updateGeneration = mapProps.updateGeneration;


	  var randomizeMatrix = function randomizeMatrix() {
	    for (var i = 0; i < rows; i++) {
	      matrix[i] = [];
	      for (var j = 0; j < cols; j++) {
	        // Giving more weight to death cells
	        var rand = Math.floor(Math.random() * 12);

	        matrix[i][j] = 0;
	        if (rand === 0) {
	          matrix[i][j] = 1;
	          livingCells++;
	        }
	      }
	    }
	  };

	  var reset = function reset() {
	    generation = 0;
	    livingCells = 0;
	    matrix = [];
	    clearInterval(gameInterval);
	  };

	  var updateLife = function updateLife() {
	    for (var i = 0; i < rows; i++) {
	      for (var j = 0; j < cols; j++) {
	        var alive = aliveNeightbors(i, j);
	        var elem = matrix[i][j];

	        if (alive === 3 && elem === 0) {
	          matrix[i][j] = 1;
	          livingCells++;
	        } else if ((alive < 2 || alive > 3) && elem === 1) {
	          matrix[i][j] = 0;
	          livingCells--;
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

	  var startGameLoop = function startGameLoop() {
	    gameInterval = setInterval(function () {
	      generation++;
	      updateLife();
	      updateLivinigCells(livingCells);
	      updateGeneration(generation);
	      _map.drawMap(matrix);
	    }, 200);

	    running = true;
	  };

	  var start = function start() {
	    reset();
	    randomizeMatrix();
	    startGameLoop();
	  };

	  var pause = function pause() {
	    if (!running) {
	      startGameLoop();
	    } else {
	      clearInterval(gameInterval);
	      running = false;
	    }
	  };

	  return {
	    start: start,
	    pause: pause
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