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

/***/ "../../../W9D1/asteroids/src/asteroid.js":
/*!***********************************************!*\
  !*** ../../../W9D1/asteroids/src/asteroid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"../../../W9D1/asteroids/src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"../../../W9D1/asteroids/src/util.js\");\n\nconst DEFAULTS = {\n  COLOR: '#D3D3D3',\n  RADIUS: 10\n}\n\nfunction Asteroid(obj) {\n  let ast = {};\n  ast.color = DEFAULTS.COLOR;\n  ast.radius = DEFAULTS.RADIUS;\n  ast.pos = obj.pos;\n  ast.vel = Util.randomVec(5);\n  MovingObject.call(this, ast);  \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://tic_tac_toe/../../../W9D1/asteroids/src/asteroid.js?");

/***/ }),

/***/ "../../../W9D1/asteroids/src/game.js":
/*!*******************************************!*\
  !*** ../../../W9D1/asteroids/src/game.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"../../../W9D1/asteroids/src/asteroid.js\");\n\nconst DIM_X = 500;\nconst DIM_Y = 500;\nconst NUM_ASTEROIDS = 15;\n\nfunction Game() {\n  this.asteroids = [];\n  this.addAsteroids();\n  console.log(this.asteroids)\n}\n\nGame.prototype.addAsteroids = function() {\n  let count = 0;\n  while (count < NUM_ASTEROIDS) {\n    let newAsteroid = new Asteroid({pos: this.randomPosition()});\n    this.asteroids.push(newAsteroid);\n    count++;\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  return [Math.random() * DIM_X, Math.random() * DIM_Y]\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, DIM_X, DIM_Y);\n  ctx.fillStyle = 'black'\n  ctx.fillRect(0, 0, 500, 500);\n  for (let asteroid of this.asteroids) {\n    asteroid.draw(ctx);\n  }\n}\n\nGame.prototype.moveObjects = function() {\n  for (let asteroid of this.asteroids) {\n    asteroid.move();\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://tic_tac_toe/../../../W9D1/asteroids/src/game.js?");

/***/ }),

/***/ "../../../W9D1/asteroids/src/moving_object.js":
/*!****************************************************!*\
  !*** ../../../W9D1/asteroids/src/moving_object.js ***!
  \****************************************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n    this.pos = obj.pos;\n    this.vel = obj.vel;\n    this.radius = obj.radius;\n    this.color = obj.color;\n}\n\n  MovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = this.color;\n    ctx.fill();\n  }\n\n  MovingObject.prototype.move = function() {\n    this.pos[0] += this.vel[0]\n    this.pos[1] += this.vel[1]\n  }\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://tic_tac_toe/../../../W9D1/asteroids/src/moving_object.js?");

/***/ }),

/***/ "../../../W9D1/asteroids/src/util.js":
/*!*******************************************!*\
  !*** ../../../W9D1/asteroids/src/util.js ***!
  \*******************************************/
/***/ ((module) => {

eval("const Util ={\n  inherits(childClass, parentClass) {\n    function Surrogate(){};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://tic_tac_toe/../../../W9D1/asteroids/src/util.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const View =  __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\") // require appropriate file\nconst Game = __webpack_require__(/*! ../ttt_node/game.js */ \"./ttt_node/game.js\")// require appropriate file\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const game = new Game()\n  const view = new View(game, document.querySelector('.ttt'))\n});\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ../../../../W9D1/asteroids/src/game.js */ \"../../../W9D1/asteroids/src/game.js\");\nconst Board = __webpack_require__(/*! ../ttt_node/board.js */ \"./ttt_node/board.js\");\n\nlet ul = document.createElement(\"ul\");\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.setupBoard();\n    this.handleClick = this.handleClick.bind(this)\n    this.bindEvents();\n  }\n\n  setupBoard() {\n    const posSeqs = [\n      [0, 0], [0, 1], [0, 2],\n      [1, 0], [1, 1], [1, 2],\n      [2, 0], [2, 1], [2, 2],\n    ];\n    \n    this.el.appendChild(ul);\n\n    for(let i = 0; i < 9; i++){\n      let li = document.createElement(\"li\");\n      li.dataset.pos = posSeqs[i]\n      ul.appendChild(li);\n    }\n  }\n  \n  bindEvents() {\n    ul.addEventListener(\"click\", this.handleClick)\n  }\n\n  makeMove(square, e) {\n    if(Board.isValidPos(square)){\n      e.style.backgroundColor = 'aliceblue'\n      this.game.playMove(square);\n      let text = this.game.board.grid[square[0]][square[1]]\n      e.textContent = text\n    } else {\n      alert(\"Invalid Move\")\n    }\n\n    if(this.game.winner()){\n      alert(`${this.game.winner()} wins!`)\n      this.game = new Game()\n      window.location.reload()\n    }\n  }\n\n  handleClick(e) {\n    e.preventDefault();\n    e.stopPropagation();\n\n    let ele = e.target;\n    let arr = [+ele.dataset.pos[0], +ele.dataset.pos[2]]\n    this.makeMove(arr, ele)\n  }\n\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("\nconst MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/moveError.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;