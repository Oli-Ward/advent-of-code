import { readCsv } from '../helpers/readCsv';

const leftList: string[] = []
const rightList: string[] = []
const differences: number[] = []

const main = async () => {
    const data = await readCsv('dayOne/historianHysteriaLists.csv')
    parseData(data)
    sortLists()
    compareLists()
    addDifferences()
    similiarityScores()
}

const parseData = (data: any[]) => {
    for (const row of data) {
        const splitRow = row[0].toString().split('   ')
        leftList.push(splitRow[0])
        rightList.push(splitRow[1])
    }
}

const sortLists = () => {
    leftList.sort()
    rightList.sort()
}

const compareLists = () => {
    if (leftList.length !== rightList.length) {
        console.log("Lists are not the same length")
        return
    }
    for (let i = 0; i < leftList.length; i++) {
        const leftListIndexNum = Number(leftList[i])
        const rightListIndexNum = Number(rightList[i])
        if (leftListIndexNum === rightListIndexNum) {
        differences.push(0)
        }
        if(leftListIndexNum > rightListIndexNum) {
        differences.push(leftListIndexNum - rightListIndexNum)
        }
        if(leftListIndexNum < rightListIndexNum) {
            differences.push(rightListIndexNum - leftListIndexNum)
        }
    }
}

const addDifferences = () => {
    let sum = 0
    for (const element of differences) {
        sum += element
    }
    console.log('Differences ', sum)
}

const similiarityScores = () => {
    let scoreCount: number = 0
    for (const element of leftList)
    {
        rightList.forEach(value => {
            if (element === value) {
                scoreCount += Number(value)
            }
            else {
                scoreCount += 0
            }
        })
    }
    // console.log(scoreCount)
}


main()