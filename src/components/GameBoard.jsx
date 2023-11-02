import React, { useState } from "react";

export default function GameBoard({onSelectSquare, board}){
    /*
    Logic handle in app js
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function hanldeSelectSquare (rowIndex, colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            //console.log(updatedBoard);
            return updatedBoard;
        })
        onSelectSquare();
    }
    */
    return(
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}