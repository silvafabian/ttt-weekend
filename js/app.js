// /*-------------------------------- Constants --------------------------------*/
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
// console.log(winningCombos)

/*---------------------------- Variables (state) ----------------------------*/

let board // array to represent the squares on the board
let turn   // variable to define whose turn it is 
let isWinner // variable to define the 3 game states(tie, win, still going on)


/*------------------------ Cached Element References ------------------------*/
const allSquares = Array.from(document.querySelectorAll('.square'))
// console.log(allSquares)  //gets all the squares in the board
const boardEl = document.querySelector('.board')
// console.log(board)   // gets the whole board class, might not need
const message = document.getElementById('message')
// console.log(message)  //  message that appears during the game
const resetButton = document.getElementById('reset-button')
// console.log(resetButton)  // reset button remains hidden until the first play is made

/*----------------------------- Event Listeners -----------------------------*/

allSquares.forEach(square => {
  square.addEventListener('click', handleClick)
});


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  board =[null, null, null, null, null, null, null, null, null];
  turn = 1
  isWinner = null
  playerX = 1
  playerO = -1
  // console.log(board)
  
  render()
}
// console.log(init)

function render () {
  board
  turn
  loopAllSquares()
  gameState()
}

function handleClick (evt) {
  let idxSquare = parseInt(evt.target.id.slice(2))
  if (board[i] !== null){
    return
  }
  boardUpdate()
  isGameOver()
  altTurn ()
}

function loopAllSquares () {
  for (i = 0; i < board.length; i++){
    if (board[i] === playerX){
      allSquares[i].textContent = 'X'
      allSquares.className = "PlayerX-Square"
      colorSquare = 'blue'
    }
    else if (board[i] === playerO){
      allSquares[i].textContent = 'O'
      allSquares.className ="PlayerO-Square"
      colorSquare = 'pink'
    }
    else {
      allSquares[i].textContent = ""
      colorSquare = 'white'
    }
    allSquares[i].style.background = colorSquare
  }
}

function gameState() {
  if (isWinner !== null) {
    message.textContent = `It's Player ${ turn === 1 ? "X's" : "Y's"} Turn`
  }
  else if (isWinner === 'T') {
    message.textContent = "It''s a tie!"
  }
  else {
    message.textContent = `Player ${ isWinner === 1 ? 'X' : 'O'} Has Won!`
  }
}

function isGameOver () {
  if (isWinner !== null) {
    return
  }
}

function boardUpdate() {
  if (board[i] === null){
    if (turn === 1 ){
      board[i] = 1
    }
    else if (turn === -1){
      board[1] = -1
    }
  }
}

function altTurn() {
  
}