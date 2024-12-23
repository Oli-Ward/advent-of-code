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
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, readCsv_1.readCsv)('dayTwo/redNoseReportsFull.csv');
    const reports = parseData(data);
    sortReports(reports);
});
const sortReports = (reports) => {
    let safeReports = 0;
    for (const report of reports) {
        const safe = checkReport(report);
        if (safe === true) {
            safeReports++;
        }
    }
    console.log('Safe Reports: ', safeReports);
};
const checkReport = (report) => {
    const safeIncreasingOrDecreasing = checkIncreasingOrDecreasing(report);
    if (safeIncreasingOrDecreasing === false) {
        return false;
    }
    const safeReport = checkDifferences(report);
    if (safeReport === false) {
        return false;
    }
    return safeReport;
};
const checkIncreasingOrDecreasing = (report) => {
    const increaseOrDecrease = [];
    let currentNumber = undefined;
    for (const reportNumber of report) {
        if (currentNumber) {
            increaseOrDecrease.push(isIncreasingOrDecreasing(currentNumber, reportNumber));
        }
        currentNumber = reportNumber;
    }
    return checkIncreaseAndDecreaseConsistency(increaseOrDecrease);
};
const checkIncreaseAndDecreaseConsistency = (increaseOrDecrease) => {
    if (increaseOrDecrease.includes('increase') && increaseOrDecrease.includes('decrease') || increaseOrDecrease.includes('same')) {
        return false;
    }
    return true;
};
const isIncreasingOrDecreasing = (firstNumber, secondNumber) => {
    if (firstNumber === secondNumber) {
        return 'same';
    }
    if (firstNumber < secondNumber) {
        return 'increase';
    }
    if (firstNumber > secondNumber) {
        return 'decrease';
    }
    else {
        throw new Error('error');
    }
};
const checkDifferences = (report) => {
    let currentNumber;
    let checkNumber;
    for (const reportNumber of report) {
        if (currentNumber) {
            checkNumber = isDifferenceSafe(differencesBetween(currentNumber, reportNumber));
        }
        if (checkNumber === false) {
            return false;
        }
        currentNumber = reportNumber;
    }
    return true;
};
const isDifferenceSafe = (differenceNumber) => {
    if (differenceNumber >= 1 && differenceNumber <= 3 || differenceNumber === 0) {
        return true;
    }
    return false;
};
const differencesBetween = (firstNumber, secondNumber) => {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber;
    }
    if (firstNumber < secondNumber) {
        return secondNumber - firstNumber;
    }
    return 0;
};
const parseData = (data) => {
    const parsedData = [];
    for (const row of data) {
        const splitRow = row[0].toString().split(' ');
        const numberRow = splitRow.map((element) => {
            return Number(element);
        });
        parsedData.push(numberRow);
    }
    return parsedData;
};
main();
