function createSquareDiv(width) {
    const squareDiv = document.createElement("div")
    squareDiv.setAttribute("draggable", "false");
    squareDiv.classList.add("squared");
    let newWidth = Math.round((960 / width) * 100) / 100;
    squareDiv.style.width = `${newWidth}px`;
    squareDiv.style.height = `${newWidth}px`;
    return squareDiv;
}

function createGrid(width) {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.addEventListener("mouseup", () => mousePressed = false);
    for (let i = 0; i < width * width; i++) {
        const squareDiv = createSquareDiv(width);
        squareDiv.addEventListener("mouseover", applyHoverColor);
        squareDiv.addEventListener("mousedown", (e) => {
            mousePressed = true;
            applyHoverColor(e);
        });
        gridContainer.appendChild(squareDiv);
    }
}

function applyHoverColor(e) {
    if (mousePressed) {
        if (hoverInteractions > 0) {
            rgbArr = getRandomRGBColor();
            console.log("Interactions left " + hoverInteractions);
            const darkenedRGBArr = rgbArr.map(color => Math.round(color - (color / 10)))
            e.target.style.backgroundColor = `rgb(${darkenedRGBArr[0]}, ${darkenedRGBArr[1]}, ${darkenedRGBArr[2]})`;
            hoverInteractions--;
        } else {
            e.target.style.backgroundColor = "rgb(0,0,0)";
        }
    }
}

function clearGrid() {
    const squares = document.querySelectorAll(".squared");
    squares.forEach(square => square.style.backgroundColor = "lightblue");
    hoverInteractions = 10;
}

function recreateGrid() {
    let newWidth = parseInt(prompt("How many squares per side (max 100): "));
    if (!Number.isInteger(newWidth)) {
        newWidth = 16;
    }

    if (newWidth > 100) {
        alert("It can't be greater than 100x100");
        return;
    }
    const gridContainer = document.querySelector(".grid-container");
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(newWidth);
    hoverInteractions = 10;
}

function getRandomRGBColor() {
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    return [r, g, b];
}

createGrid(16);
let hoverInteractions = 10;
let mousePressed = false;

let body = document.querySelector("body");
body.parentElement.addEventListener("mouseup", () => mousePressed = false);