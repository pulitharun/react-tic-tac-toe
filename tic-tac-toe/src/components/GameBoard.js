import { useState } from "react"


const intialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

function GameBoard() {
const [gameBoard, setGameBoard] = useState(intialGameBoard)

function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard) => {
        const updateBoard= [...prevGameBoard.map(innerArray =>[...innerArray])]
        //console.log(updateBoard)
        updateBoard[rowIndex][colIndex] = 'X'
        return updateBoard
    }) 
}

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex} >
                <ol>
                    {row.map((symbol, colIndex) => <li key={colIndex}> <button onClick={() => (handleSelectSquare(rowIndex, colIndex))}>{symbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )


}

export default GameBoard