const GRID_TRACK_SIZE = 20;
const GRID_GAP = 2;
const GRID_NUMS = 4;

export default class Grid {
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-track-size", `${GRID_TRACK_SIZE}vmin`);
        gridElement.style.setProperty("--grid-gap", `${GRID_GAP}vmin`);
        gridElement.style.setProperty("--grid-nums", GRID_NUMS);        

        createCellElements(gridElement);
    }
}

const createCellElements = (gridElement) => {
    
    const cells = [];

    for(let i = 0; i < GRID_NUMS * GRID_NUMS; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add("cell");
        cells.push(gridCell);
        gridElement.appendChild(gridCell);
    }

    return cells;
}