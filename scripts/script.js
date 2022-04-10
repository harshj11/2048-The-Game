import Grid from './modules/Grid.js';

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
console.log(grid.getRandomTile());