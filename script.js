const cellElements = document.querySelectorAll(".cell")
let xTurn = true;
let board = document.getElementById("checkboard")
let gameState = ["", "", "", "", "", "", "", "", ""];


const winningCondition= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
// ******************************************************************

cellElements.forEach(cell => {
    cell.addEventListener('click', cellClicked, { once: true })
})

function cellClicked(e) {
    // mark the cell
    const selectedCell = e.target;
    const currentTurn = xTurn ? 'x' : 'o';
    placeMark(selectedCell, currentTurn)
    // determine win
    if(winnerResult(currentTurn)){
        endgame(false)
    }else if(isDraw()){
        endgame(true)
    }else {
        changeTurn()
        hoverTurn()
    }
    // change turn and hover the region
    
}
// placing the mark
function placeMark(selectedCell, currentTurn) {
    selectedCell.classList.add(currentTurn)
}
// changing turns
function changeTurn() {
    xTurn = !xTurn
}
//placing hover
function hoverTurn() {
    board.classList.remove('x')
    board.classList.remove('o')
    if (xTurn) {
        board.classList.add('x')
    } else {
        board.classList.add('o')
    }
}

function winnerResult(currentTurn){
    return winningCondition.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentTurn)
        })
    })
}

function endgame(draw) {
    if(draw){
        alert("It is a Draw!")
    }else{
        alert(`${xTurn ? "X's" : "O's"} have won`)
    }
}

function isDraw(){
    return [...cellElements].every(cell => {
        return cell.classList.contains("x") || cell.classList.contains("o")
    })
}


const restartButton = document.getElementsByClassName("restart-button")
restartButton.addEventListener("click", removeInfo)

