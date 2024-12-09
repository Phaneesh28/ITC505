const boardSize = 5; // 5x5 board
const gameBoard = document.getElementById("game-board");

// Create the game board
function createBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("click", () => toggleSquare(i));
        gameBoard.appendChild(square);
    }
}

// Toggle a square and its neighbors
function toggleSquare(index) {
    const squares = document.querySelectorAll(".square");
    const row = Math.floor(index / boardSize);
    const col = index % boardSize;

    // Toggle the clicked square
    toggleState(squares[index]);

    // Toggle top neighbor
    if (row > 0) toggleState(squares[index - boardSize]);
    // Toggle bottom neighbor
    if (row < boardSize - 1) toggleState(squares[index + boardSize]);
    // Toggle left neighbor
    if (col > 0) toggleState(squares[index - 1]);
    // Toggle right neighbor
    if (col < boardSize - 1) toggleState(squares[index + 1]);

    // Check if the game is solved
    if (checkWin()) {
        setTimeout(() => alert("You win!"), 100);
    }
}

// Toggle the state of a square
function toggleState(square) {
    square.classList.toggle("is-off");
}

// Check if all squares are turned off
function checkWin() {
    const squares = document.querySelectorAll(".square");
    return Array.from(squares).every(square => square.classList.contains("is-off"));
}

// Randomize the board to make it solvable
function randomizeBoard() {
    const squares = document.querySelectorAll(".square");
    for (let i = 0; i < Math.random() * 10 + 5; i++) {
        const randomIndex = Math.floor(Math.random() * squares.length);
        toggleSquare(randomIndex);
    }
}

// Initialize the game
createBoard();
randomizeBoard();
