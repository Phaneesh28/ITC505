document.addEventListener('DOMContentLoaded', () => {
    const gridSize = 5; // Number of rows and columns
    const gridContainer = document.getElementById('lights-grid');
    const state = Array(gridSize).fill().map(() => Array(gridSize).fill(false));

    // Generate the game grid
    function initializeGrid() {
        for (let r = 0; r < gridSize; r++) {
            for (let c = 0; c < gridSize; c++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = r;
                cell.dataset.col = c;
                cell.addEventListener('click', () => handleClick(r, c));
                gridContainer.appendChild(cell);
            }
        }
    }

    // Toggle the current cell and its neighbors
    function handleClick(row, col) {
        toggleCell(row, col);
        toggleCell(row - 1, col); // Top neighbor
        toggleCell(row + 1, col); // Bottom neighbor
        toggleCell(row, col - 1); // Left neighbor
        toggleCell(row, col + 1); // Right neighbor
        if (isGameSolved()) {
            setTimeout(() => alert('Congratulations! You solved it!'), 100);
        }
    }

    // Toggle a specific cell by row and column
    function toggleCell(row, col) {
        if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
            state[row][col] = !state[row][col];
            const cellElement = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
            cellElement.classList.toggle('active', state[row][col]);
        }
    }

    // Randomize the initial board setup
    function randomizeBoard() {
        for (let i = 0; i < 15; i++) {
            const randRow = Math.floor(Math.random() * gridSize);
            const randCol = Math.floor(Math.random() * gridSize);
            handleClick(randRow, randCol);
        }
    }

    // Check if all cells are turned off (solved state)
    function isGameSolved() {
        return state.flat().every(cell => !cell);
    }

    // Initialize and randomize the board
    initializeGrid();
    randomizeBoard();
});
