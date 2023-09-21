function createSquareDiv(width) {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("squared");
    let newWidth = Math.round((960 / width) * 100) / 100;
    squareDiv.style.width = `${newWidth}px`;
    squareDiv.style.height = `${newWidth}px`;
    return squareDiv;
}

function createGrid(width) {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < width * width; i++) {
        const squareDiv = createSquareDiv(width);
        squareDiv.addEventListener("mouseover", applyHoverColor);
        gridContainer.appendChild(squareDiv);
    }
}

function applyHoverColor() {
    this.classList.add("hovered");
}

function clearGrid() {
    const squares = document.querySelectorAll(".squared");
    squares.forEach(square => square.classList.remove("hovered"));
}

function recreateGrid() {
    let newWidth = parseInt(prompt("How many squares per side (max 100): "));
    if (!Number.isInteger(newWidth)) {
        newWidth = 16;
    }
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(newWidth);
}

createGrid(16);