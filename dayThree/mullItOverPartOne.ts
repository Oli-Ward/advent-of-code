import { input } from "./input"

const main = async () => {        
    const matchArray = matchRegex(input)
    if (matchArray) {
    addUpArray(matchArray)
    }
    console.log(matchArray)
}

const matchRegex = (input: string) => { 
    const regex = /mul\(\d+,\d+\)/g;
    const matches = input.match(regex);
    return matches
}

const addUpArray = (mulArray: RegExpMatchArray) => {
    let sum = 0
    for (const mul of mulArray) {
        const numbers = mul.match(/\d+/g)
        if (numbers) {
        const num1 = parseInt(numbers[0])
        const num2 = parseInt(numbers[1])
        sum += num1 * num2
        }
    }
    console.log(sum)
}

main()