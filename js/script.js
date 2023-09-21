function createSquareDiv() {
    const squareDiv = document.createElement("div")
    squareDiv.classList.add("squared");
    return squareDiv;
}

function createGrid(width) {
    const gridContainer = document.querySelector(".grid-container");
    for (let i = 0; i < width; i++) {
        const squareDiv = createSquareDiv();
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

createGrid(256);