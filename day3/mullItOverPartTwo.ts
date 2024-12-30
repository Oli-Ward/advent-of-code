import { fullInput } from "./input"


const second = (input: string) => {
  let result = 0;
  const regex = /(?<=(?:do\(\)|^)(?:[^d]|d(?!on't\(\)))*)mul\((\d{1,3}),(\d{1,3})\)/g;
  const matches = input.matchAll(regex);

  for (const match of matches) {
    result += (Number(match[1]) * Number(match[2]));
  }
  console.log(result
  )
  return result;
};

second(fullInput);