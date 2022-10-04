const Game = require("../../../../W9D1/asteroids/src/game.js");
const Board = require("../ttt_node/board.js");

let ul = document.createElement("ul");
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.handleClick = this.handleClick.bind(this)
    this.bindEvents();
  }

  setupBoard() {
    const posSeqs = [
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2],
    ];
    
    this.el.appendChild(ul);

    for(let i = 0; i < 9; i++){
      let li = document.createElement("li");
      li.dataset.pos = posSeqs[i]
      ul.appendChild(li);
    }
  }
  
  bindEvents() {
    ul.addEventListener("click", this.handleClick)
  }

  makeMove(square, e) {
    if(Board.isValidPos(square)){
      e.style.backgroundColor = 'aliceblue'
      this.game.playMove(square);
      let text = this.game.board.grid[square[0]][square[1]]
      e.textContent = text
    } else {
      alert("Invalid Move")
    }

    if(this.game.winner()){
      alert(`${this.game.winner()} wins!`)
      this.game = new Game()
      window.location.reload()
    }
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    let ele = e.target;
    let arr = [+ele.dataset.pos[0], +ele.dataset.pos[2]]
    this.makeMove(arr, ele)
  }

}

module.exports = View;
