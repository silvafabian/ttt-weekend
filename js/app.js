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
let numOfTurns

/*------------------------ Cached Element References ------------------------*/
const squaresArr = Array.from(document.querySelectorAll('.square'))
// console.log(squaresArr)  //gets all the div#sq1.square in the board
const message = document.getElementById('message')
console.log(message)  //  message that appears during the game
const resetButton = document.getElementById('reset-button')
// console.log(resetButton)  // reset button remains hidden until the first play is made

/*----------------------------- Event Listeners -----------------------------*/

squaresArr.forEach(square => square.addEventListener('click', handleClick))

// resetButton.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  board =[null, null, null, null, null, null, null, null, null]; //empty board array
  // console.log(board)
  turn = 1         // 1 is player X, -1 is player Y
  winner = null  //
  // console.log(board)
  numOfTurns = 0

  render()
  // console.log(board)
}
// console.log(init)

function render () {

  board.forEach((square, idx) => {
    if(square === 1){
      squaresArr[idx].textContent = "X"
      message.textContent = "It's 0's turn"
      squaresArr[idx].style.backgroundColor = 'blue'
    } 
    else if (square === -1) {
      squaresArr[idx].textContent = "O"
      message.textContent = "It's X's turn"
      squaresArr[idx].style.backgroundColor = 'pink'
    } 
    else {
      squaresArr.textContent = ""
      squaresArr[idx].style.backgroundColor = 'white'
    } 
  })

  message.textContent = 'Player X goes first'
}

function handleClick (evt) {
  let idxSquare = parseInt(evt.target.id.slice(2)) /// index of the square clicked
  
  if(winner){
    return
  }

  checkTurn()
  // console.log(handleClick)

  // turn *= -1

  numOfTurns += 1

  board[idxSquare] = turn

  render()

  getWinner()
}

function checkTurn(){
  turn *= -1
  if (turn === 1) { 
    message.textContent = "It's O's Turn"
  } 
  else if (turn === -1) {
    message.textContent = "It's X's Turn"
  }
}

function getWinner() {

  for (let i = 0; i < winningCombos.length; i++){
    const a = winningCombos[i][0]
    const b = winningCombos[i][1]
    const c = winningCombos[i][2]
  
    if(board[a] +board[b] + board[c] === 3){
      message.textContent = "X Wins!!!"
      endGame()
    }
    else if (board[a] +board[b] + board[c] === -3){
      message.textContent = 'O Wins!!!'
      endGame()
      
    }
  } 

  if (numOfTurns === 9 && winner === null){
    message.textContent = "It's a tie"
    endGame()
  }

  function endGame(){
    turn = null
    return
  }
}
