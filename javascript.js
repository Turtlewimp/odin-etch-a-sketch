//grid generation
    //popup asking for grid dimensions

//const button = document.querySelector('button');
    //button.addEventListener('click', () => {removeGrid(); generateGrid(getGridWidth());});

function getGridWidth() {
    const maxWidth = 100;
    const minWidth = 1;

    let gridWidth = prompt("Grid Width: [enter a number]");

    while(isNaN(gridWidth)){
        gridWidth = prompt("Invalid input. Try Again.\nGrid Width: [enter a number] ");
    };

    gridWidth = Math.abs(gridWidth);

    if (gridWidth < minWidth) console.log(minWidth);
    if (gridWidth > maxWidth) console.log(maxWidth);
    console.log(gridWidth);

    //if (gridWidth < minWidth) return minWidth;
    //if (gridWidth > maxWidth) return maxWidth;

    //return gridWidth;
}

function generateGrid(sideLength) {
    for(i = 0; i < (sideLength**2); i++) {
        const container = document.querySelector('#container');
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}

//function removeGrid

const pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel)=>{container.removeChild(pixel)})

//pixel change