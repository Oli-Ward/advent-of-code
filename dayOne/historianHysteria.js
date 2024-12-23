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
const readCsv_1 = require("../helpers/readCsv");
const leftList = [];
const rightList = [];
const differences = [];
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, readCsv_1.readCsv)('dayOne/historianHysteriaLists.csv');
    parseData(data);
    sortLists();
    compareLists();
    addDifferences();
    similiarityScores();
});
const parseData = (data) => {
    for (const row of data) {
        const splitRow = row[0].toString().split('   ');
        leftList.push(splitRow[0]);
        rightList.push(splitRow[1]);
    }
};
const sortLists = () => {
    leftList.sort();
    rightList.sort();
};
const compareLists = () => {
    if (leftList.length !== rightList.length) {
        console.log("Lists are not the same length");
        return;
    }
    for (let i = 0; i < leftList.length; i++) {
        const leftListIndexNum = Number(leftList[i]);
        const rightListIndexNum = Number(rightList[i]);
        if (leftListIndexNum === rightListIndexNum) {
            differences.push(0);
        }
        if (leftListIndexNum > rightListIndexNum) {
            differences.push(leftListIndexNum - rightListIndexNum);
        }
        if (leftListIndexNum < rightListIndexNum) {
            differences.push(rightListIndexNum - leftListIndexNum);
        }
    }
};
const addDifferences = () => {
    let sum = 0;
    for (const element of differences) {
        sum += element;
    }
    console.log('Differences ', sum);
};
const similiarityScores = () => {
    let scoreCount = 0;
    for (const element of leftList) {
        rightList.forEach(value => {
            if (element === value) {
                scoreCount += Number(value);
            }
            else {
                scoreCount += 0;
            }
        });
    }
    // console.log(scoreCount)
};
main();
