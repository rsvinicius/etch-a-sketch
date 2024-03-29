let defaultGridSize = 16;
let squareColor = "black";
const gridContainer = document.querySelector(".container");
const resetButton = document.querySelector("button");
const squareColorSelect = document.getElementById("squareColor");

createSquareGrid(defaultGridSize);

resetButton.addEventListener('click', () => {
    resetGrid();
});

squareColorSelect.addEventListener('change', function () {
    squareColor = squareColorSelect.options[squareColorSelect.selectedIndex].value;
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
        squareElement.style.backgroundColor = generateSquareColor();
    });

    return squareElement;
}

function generateSquareColor() {
    switch (squareColor) {
        case 'random':
            return generateRandomHexColor();
        default:
            return squareColor;
    }
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function generateRandomHexColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let hexColor = "#" +
        decimalToHexWithLeadingZero(red) +
        decimalToHexWithLeadingZero(green) +
        decimalToHexWithLeadingZero(blue);

    return hexColor;
}

function decimalToHexWithLeadingZero(decimalValue) {
    let hex = decimalValue.toString(16)
    return hex.length == 1 ? "0" + hex : hex;
}