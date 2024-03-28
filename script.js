const numRows = 16;
const numColumns = numRows; // Assuming a square grid
const gridContainer = document.querySelector(".container");

for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    const gridRow = createGridRow(numColumns);
    gridContainer.appendChild(gridRow);
}

function createGridRow(columnsPerRow) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    for (let columnIndex = 0; columnIndex < columnsPerRow; columnIndex++) {
        rowElement.appendChild(createSquare());
    }

    return rowElement;
}

function createSquare() {
    const squareElement = document.createElement("div");
    squareElement.classList.add("square");

    squareElement.addEventListener('mouseenter', (event) => {
        // const square = event.target;

        squareElement.classList.add("hover-square");
    });

    return squareElement;
}
