const View =  require('./ttt-view.js') // require appropriate file
const Game = require('../ttt_node/game.js')// require appropriate file

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game()
  const view = new View(game, document.getElementsByClassName('ttt'))
  console.log(hi)
});
