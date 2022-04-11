export default class Tile {
    #tileElement
    #x
    #y
    #value

    constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
        this.#tileElement = document.createElement('div');
        this.#tileElement.classList.add("tile");
        tileContainer.append(this.#tileElement);
        this.value = value;
    }

    set value(tileNumToDisplay) {
        this.#value = tileNumToDisplay;
        this.#tileElement.textContent = tileNumToDisplay;

        const power = Math.log2(tileNumToDisplay);
        const backgroundLightness = 100 - power * 9;
        this.#tileElement.style.setProperty("--background-lightness", `${backgroundLightness}%`);
        this.#tileElement.style.setProperty("--text-lightness", `${backgroundLightness <= 50 ? 90 : 10}%`);
    }

    set x(xCoordinate) {
        this.#x = xCoordinate;
        this.#tileElement.style.setProperty("--x", xCoordinate);
    }

    set y(yCoordinate) {
        this.#y = yCoordinate;
        this.#tileElement.style.setProperty("--y", yCoordinate);
    }
}