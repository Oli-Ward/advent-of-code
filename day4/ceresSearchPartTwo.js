"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const input = fs_1.default
    .readFileSync('day4/wordsearchInput.txt')
    .toString()
    .trim()
    .split('\n')
    .map(line => line.trim().split(''));
console.log("Grid:");
input.forEach(row => console.log(row.join(' ')));
const directions = [
    { x: 0, y: 1 }, // horizontal right
    { x: 1, y: 0 }, // vertical down
    { x: 1, y: 1 }, // diagonal down-right
    { x: 1, y: -1 }, // diagonal down-left
    { x: 0, y: -1 }, // horizontal left
    { x: -1, y: 0 }, // vertical up
    { x: -1, y: -1 }, // diagonal up-left
    { x: -1, y: 1 } // diagonal up-right
];
const searchWord = (word, grid) => {
    const positions = [];
    const wordLength = word.length;
    const numRows = grid.length;
    const numCols = grid[0].length;
    const isValidPosition = (x, y) => x >= 0 && y >= 0 && x < numRows && y < numCols;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (grid[row][col] === word[0]) {
                for (const { x, y } of directions) {
                    let match = true;
                    for (let i = 0; i < wordLength; i++) {
                        const newRow = row + i * x;
                        const newCol = col + i * y;
                        if (!isValidPosition(newRow, newCol) || grid[newRow][newCol] !== word[i]) {
                            match = false;
                            break;
                        }
                    }
                    if (match) {
                        positions.push({ row, col, direction: { x, y } });
                    }
                }
            }
        }
    }
    return positions;
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const positions = searchWord('XMAS', input);
    console.log(positions.length);
});
main();
