function createSquareDiv() {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("squared");
    return squareDiv;
}

function createGrid(width) {
    const gridContainer = document.querySelector(".grid-container");
    const grid = [];
    for (let i = 0; i < width; i++) {
        const squareDiv = createSquareDiv();
        gridContainer.appendChild(squareDiv);
        grid.push(squareDiv);
    }
}

createGrid(256);