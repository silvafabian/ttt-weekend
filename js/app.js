/*-------------------------------- Constants --------------------------------*/
const winningCombos = {
  [sq0, sq1, sq2],
  [sq3, sq4, sq5],
  [sq6, sq7, sq8],
  [sq0, sq3, sq6],
  [sq1, sq4, sq7],
  [sq2, sq5, sq8],
  [sq0, sq4, sq8],
  [sq2, sq4, sq6]
}
console.log(winningCombos)


/*---------------------------- Variables (state) ----------------------------*/
//1.1
let squares, turn, isWinner, playerX, playerO


/*------------------------ Cached Element References ------------------------*/
const allSquaresEl = document.querySelectorAll('.square')
// console.log(allSquaresEl)
const boardEl = document.querySelector('.board')
// console.log(boardEl)
const messageEl = document.getElementById('message')
// console.log(messageEl)
const resetButton = document.getElementById('reset-button')
// console.log(resetButton)

/*----------------------------- Event Listeners -----------------------------*/

allSquaresEl.forEach(square => {
  square.addEventListener('click', boardClick)
});


/*-------------------------------- Functions --------------------------------*/
init();

function init(evt) {
  squares =[sq0 = null, sq1 = null, sq2 = null, sq3 = null, sq4 = null, 
    sq5 = null, sq6 = null, sq7 = null, sq8 = null];
  // console.log(squares)
}

function boardClick (evt) {
  console.log(evt.target.id)
}