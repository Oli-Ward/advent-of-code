import { input } from "./input"

const main = async () => {        
    const matchArray = matchRegexDoAndDont(input)
    console.log(matchArray)
}

const matchRegexDoAndDont = (input: string) => { 
    
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

const generateRandomString = (): string => {
    const prefix = 'RM.'
    const suffix = Math.floor(Math.random() * 1e9).toString().padStart(9, '0')
    return `${prefix}${suffix}`
}