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

let board  // array to represent the squares on the board
let turn   // variable to define whose turn it is 
let winner // variable to define the 3 game states(tie, win, still going on)


/*------------------------ Cached Element References ------------------------*/
const squaresArr = Array.from(document.querySelectorAll('.square'))
// console.log(squaresArr)  //gets all the div#sq1.square in the board
const message = document.getElementById('message')
console.log(message)  //  message that appears during the game
const resetButton = document.getElementById('reset-button')
// console.log(resetButton)  // reset button remains hidden until the first play is made

/*----------------------------- Event Listeners -----------------------------*/

// squares.forEach(square => square.addEventListener('click', handleClick))
//   
// 


/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  board =[null, null, null, null, null, null, null, null, null]; //empty board array
  // console.log(board)
  turn = 1         // 1 is player X, -1 is player Y
  winner = null  //
  // console.log(board)
  T = 'tie'

  render()
}
// console.log(init)

function render () {

  board.forEach((square, idx) => {
    if(square === 1){
      squaresArr[idx].textContent = "X"
      squaresArr[idx].style.backgroundColor = 'blue'
    } 
    else if (square === -1) {
      squaresArr[idx].textContent = "O"
      squaresArr[idx].style.backgroundColor = 'pink'
    } 
    else {
      squaresArr.textContent = ""
      squaresArr[idx].style.backgroundColor = 'white'
    } 
  })

  message.textContent = 'Player X goes first'
  if (winner !== null){
    message.textContent = `Player ${ turn === 1 ? "X" : "O"} is Up!`
  }
  else if (winner === T){
    message.textContent = `It's a tie! Play again!`
  }
  else if (winner ===1 || winner === -1){
    message.textContent = `Player ${ winner === 1 ? "X" : "O"} has won!!!!`
  }
}

// function handleClick (evt) {
//   let idxSquare = parseInt(evt.target.id.slice(2))

//   board[idxSquare] = turn

//   // if (board[i] !== null){
//   //   if(turn === 1){
//   //     board[i] = 1
//   //   }
//   //   else if (turn === -1){
//   //     board[i] = -1
//   //   }
//   //   turn = turn * -1
//   // }
//   // boardUpdate()
//   // isGameOver()
//   // altTurn()
//   // getWinner()
//   console.log(evt.target.id)
// }

// function loopAllSquares () {
//   for (i = 0; i < board.length; i++){
//     if (board[i] === playerX){
//       allSquares[i].textContent = 'X'
//       allSquares.className = "PlayerX-Square"
//       colorSquare = 'blue'
//     }
//     else if (board[i] === playerO){
//       allSquares[i].textContent = 'O'
//       allSquares.className ="PlayerO-Square"
//       colorSquare = 'pink'
//     }
//     else {
//       allSquares[i].textContent = ""
//       colorSquare = 'white'
//     }
//     allSquares[i].style.background = colorSquare
//   }
// }

// function gameState() {
//   if (winner !== null) {
//     message.textContent = `It's Player ${ turn === 1 ? "X's" : "O's"} Turn`
//   }
//   else if (winner === 'T') {
//     message.textContent = "It''s a tie!"
//   }
//   else {
//     message.textContent = `Player ${ winner === 1 ? "X" : "O"} Has Won!`
//   }
// }

// function boardUpdate() {
//   turn = turn * (-1);

//   if (board[i] === null){
//     if (turn === 1 ){
//       board[i] = 1
//     }
//     else if (turn === -1){
//       board[i] = -1
//     }
//   }
// }

// function isGameOver () {
//   if (winner !== null) {
//     return
//   }
// }

// function altTurn() {
//   turn = -1 * turn
// }

// function getWinner () {

// }