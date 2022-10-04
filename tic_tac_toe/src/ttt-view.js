class View {
  constructor(game, el) {
    this.game = game;
    this.el = el
    this.setupBoard()
  }

  setupBoard() {
    let ul = document.createElement("ul")
    this.el.appendChild(ul)

    for(let i = 0; i < 9; i++){
      let li = document.createElement("li")
      ul.appendChild(li)
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
