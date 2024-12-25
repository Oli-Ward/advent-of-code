"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
const second = (input) => {
    let result = 0;
    const regex = /(?<=(?:do\(\)|^)(?:[^d]|d(?!on't\(\)))*)mul\((\d{1,3}),(\d{1,3})\)/g;
    const matches = input.matchAll(regex);
    for (const match of matches) {
        result += (Number(match[1]) * Number(match[2]));
    }
    console.log(result);
    return result;
};
second(input_1.fullInput);
