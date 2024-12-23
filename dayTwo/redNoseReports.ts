import { readCsv } from "../helpers/readCsv"

type increaseOrDecrease = 'increase' | 'decrease' | 'same'

const main = async () => {
    const data = await readCsv('dayTwo/redNoseReportsFull.csv')
    const reports = parseData(data)
    sortReports(reports)
}

const sortReports = (reports: any[]) => {
    let safeReports: number = 0
    for (const report of reports) {
        const safe = checkReport(report)
        if (safe === true) {
            safeReports++
        }
    }
    console.log('Safe Reports: ', safeReports)
}

const checkReport = (report: number[]): boolean => {
    const safeIncreasingOrDecreasing = checkIncreasingOrDecreasing(report)
    if(safeIncreasingOrDecreasing === false) {
        return false
    }
    const safeReport = checkDifferences(report)
    if(safeReport === false) {
        return false
    }
    return safeReport
}

const checkIncreasingOrDecreasing = (report: number[]) => {
    const increaseOrDecrease: increaseOrDecrease[] = []
    let currentNumber = undefined
    for (const reportNumber of report) {
        if(currentNumber) {
            increaseOrDecrease.push(isIncreasingOrDecreasing(currentNumber, reportNumber))
        }
        currentNumber = reportNumber
    }
    return checkIncreaseAndDecreaseConsistency(increaseOrDecrease)
}

const checkIncreaseAndDecreaseConsistency = (increaseOrDecrease: increaseOrDecrease[]): boolean => {
    if(increaseOrDecrease.includes('increase') && increaseOrDecrease.includes('decrease') || increaseOrDecrease.includes('same')) {
        return false
    }
    return true
}

const isIncreasingOrDecreasing = (firstNumber: number, secondNumber: number) => {
    if (firstNumber === secondNumber) {
        return 'same'
    }
    if (firstNumber < secondNumber) {
        return 'increase'
    }
    if (firstNumber > secondNumber) {
        return 'decrease'
    }
    else {
        throw new Error('error') 
    }
}

const checkDifferences = (report: number[]): boolean => {
    let currentNumber
    let checkNumber
    for (const reportNumber of report) {
        if(currentNumber) {
            checkNumber = isDifferenceSafe(differencesBetween(currentNumber, reportNumber))
        }
        if (checkNumber === false) {
            return false
        }
        currentNumber = reportNumber
    }
    return true
}

const isDifferenceSafe = (differenceNumber: number): boolean => {
    if (differenceNumber >= 1 && differenceNumber <= 3 || differenceNumber === 0) {
        return true
    }
    return false
}

const differencesBetween = (firstNumber: number, secondNumber: number) => {
    if (firstNumber > secondNumber) {
        return firstNumber - secondNumber
    }
    if (firstNumber < secondNumber) {
        return secondNumber - firstNumber
    }
    return 0
}

const parseData = (data: any[]) => { 
    const parsedData: any[] = []    
    for (const row of data) {
        const splitRow = row[0].toString().split(' ')
        const numberRow: number[] = splitRow.map((element: string) => {
            return Number(element)
        })
        parsedData.push(numberRow)
    }
    return parsedData
}

main()