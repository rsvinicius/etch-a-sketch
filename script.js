let defaultGridSize = 16;
const gridContainer = document.querySelector(".container");
const resetButton = document.querySelector("button");

createSquareGrid(defaultGridSize);

resetButton.addEventListener('click', () => {
    resetGrid();
});

function resetGrid() {
    const userInput = prompt('Enter the size of the grid (1-100):', '');
    if (userInput !== null && userInput > 0 && userInput <= 100) {
        clearGrid();
        createSquareGrid(userInput);
    } else {
       alert('That\'s out of range! Try again.') 
    }
}

function createSquareGrid(gridSize) {
    document.documentElement.style.setProperty('--gridSize', gridSize);

    for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
        const gridRow = createGridRow(gridSize);
        gridContainer.appendChild(gridRow);
    }
}

function createGridRow(elementsPerRow) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let columnIndex = 0; columnIndex < elementsPerRow; columnIndex++) {
        rowElement.appendChild(createSquare());
    }

    return rowElement;
}

function createSquare() {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");

    squareElement.addEventListener('mouseenter', (event) => {

        squareElement.classList.add("hover-square");
    });

    return squareElement;
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}