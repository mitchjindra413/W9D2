let ul = document.createElement("ul");
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.setupBoard()
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
      li.dataset.pos = `${i}`
      ul.appendChild(li);
    }
  }
  
  bindEvents() {
    ul.addEventListener("click", this.handleClick)
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    let ele = e.target;
   
    this.makeMove(ele.pos)
  }

  makeMove(square) {
    if(this.game.board.isValidPos(square)){
      square.backgroundColor = 'white'
      this.game.playMove(square);
    } else {
      alert("Invalid Move")
    }
  
  }

}

module.exports = View;
