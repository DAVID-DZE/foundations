function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function getRandomRGBColor() {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    return `rgb(${r},${g},${b})`;
}

function generateGrid(size) {
    const grid = document.getElementById("grid");
    grid.replaceChildren();

    for(i = 0; i < size*size; i++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        
        const squareSize = 960 / size;

        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        gridSquare.addEventListener("mouseover", () => {
            gridSquare.style.backgroundColor = getRandomRGBColor();
        });
    
        grid.appendChild(gridSquare);
    }
}

generateGrid(16);

const changeSizeButton = document.getElementById("changeSizeButton");

changeSizeButton.addEventListener("click", () => {
    const size = prompt("Please enter new grid size. (AxA)");
    if(!isNaN(size) && size <= 100 && size >= 1)
        generateGrid(size);
    else
        alert("Input has to be a valid number smaller than 100.");
})
