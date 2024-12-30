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
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const matchArray = matchRegex(input_1.fullInput);
    if (matchArray) {
        addUpArray(matchArray);
    }
    console.log(matchArray);
});
const matchRegex = (input) => {
    const regex = /mul\(\d+,\d+\)/g;
    const matches = input.match(regex);
    return matches;
};
const addUpArray = (mulArray) => {
    let sum = 0;
    for (const mul of mulArray) {
        const numbers = mul.match(/\d+/g);
        if (numbers) {
            const num1 = parseInt(numbers[0]);
            const num2 = parseInt(numbers[1]);
            sum += num1 * num2;
        }
    }
    console.log(sum);
};
main();
