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

  makeMove(square) {
   
    if(Board.isValidPos(square)){
      // square.backgroundColor = 'white'
      this.game.playMove(square);
    } else {
      alert("Invalid Move")
    }
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    let ele = e.target;
    this.makeMove(ele.dataset.pos)
  }

}

module.exports = View;
