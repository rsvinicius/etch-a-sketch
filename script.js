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
        setElementColorAndOpacity(squareElement, squareColor);
    });

    return squareElement;
}

function getElementNewOpacity(element) {
    let backgroundColor = element.style.backgroundColor;

    let match = backgroundColor.match(/rgba?\((\d+), (\d+), (\d+), ([\d.]+)\)/);
    if (match) {
        let opacity = parseFloat(match[4]);
        let newOpacity = opacity + 0.1;
        return Math.min(newOpacity, 0.99);
    } else {
        return 0.1;
    }
}

function setElementColorAndOpacity(element, elementColor) {
    let color;
    const opacity = getElementNewOpacity(element);

    switch (elementColor) {
        case 'black':
            color = getRGBAColor(0, 0, 0, opacity);
            break;
        case 'red':
            color = getRGBAColor(256, 0, 0, opacity);
            break;
        case 'green':
            color = getRGBAColor(0, 256, 0, opacity);
            break;
        case 'blue':
            color = getRGBAColor(0, 0, 256, opacity);
            break;
        default:
            color = generateRandomRGBAColor(opacity);
            break;
    }

    element.style.setProperty('background-color', color);
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

function generateRandomRGBAColor(opacity) {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return getRGBAColor(red, green, blue, opacity)
}

function getRGBAColor(red, green, blue, opacity) {
    return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
}
