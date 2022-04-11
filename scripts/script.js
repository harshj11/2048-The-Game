import Grid from './modules/Grid.js';
import Tile from './modules/Tile.js';

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);

grid.getRandomEmptyTile().tile = new Tile(gameBoard);
grid.getRandomEmptyTile().tile = new Tile(gameBoard);