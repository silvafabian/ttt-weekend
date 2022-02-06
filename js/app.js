// /*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/

let board // array to represent the squares on the board
let turn   // variable to define whose turn it is 
let isWinner // variable to define the 3 game states(tie, win, still going on)

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
console.log(winningCombos)


/*------------------------ Cached Element References ------------------------*/
const allSquaresEl = Array.from(document.querySelectorAll('.square'))
// console.log(allSquaresEl)
const boardEl = document.querySelector('.board')
// console.log(boardEl)
// const messageEl = document.getElementById('message')
// // console.log(messageEl)
// const resetButton = document.getElementById('reset-button')
// console.log(resetButton)

/*----------------------------- Event Listeners -----------------------------*/

// allSquaresEl.forEach(square => {
//   square.addEventListener('click', boardClick)
// });


/*-------------------------------- Functions --------------------------------*/
// init();

// function init(evt) {
  board =[null, null, null, null, null, null, null, null, null];
  // console.log(board)
// }

// function boardClick (evt) {
//   console.log(evt.target.id)
// }