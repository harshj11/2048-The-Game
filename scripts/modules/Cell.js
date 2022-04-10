export default class Cell {
    #cellElement
    #x
    #y
    #tile
    
    constructor(cellElement, x, y) {
        this.#cellElement = cellElement;
        this.#x = x;
        this.#y = y;
    }

    getTile() {
        return this.#tile;
    }
}