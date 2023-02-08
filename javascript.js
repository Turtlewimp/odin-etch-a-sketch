function getNewGridWidth() {
    const maxWidth = 100;
    const minWidth = 1;

    let gridWidth = prompt("Grid Width: [enter a number]");

    while(isNaN(gridWidth)){
        gridWidth = prompt("Invalid input. Try Again.\nGrid Width: [enter a number] ");
    };

    gridWidth = Math.abs(gridWidth);

    if (gridWidth < minWidth) return minWidth;
    if (gridWidth > maxWidth) return maxWidth;

    return gridWidth;
}


function generateGrid(newGridWidth) {
    for(i = 0; i < (newGridWidth**2); i++) {
        const container = document.querySelector('#container');
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }
}

function removeGrid(oldGridWidth) {
    for(i = 0; i < (oldGridWidth**2); i++) {
        const container = document.querySelector('#container');
        const pixel = document.querySelector('.pixel');
        if (container !== null) container.removeChild(pixel);
    };
}

function draw() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.setAttribute('id', 'hover');
        });
    });
}
    