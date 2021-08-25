const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
const words = input.slice(1);
let count = N;

for (let i = 0; i < N; i++) {
  let word = words[i].trim();

  for (let j = 0; j < word.length; j++) {
    if (word[j] === word[j + 1]) {
      continue;
    } else {
      if (word.slice(j + 1).includes(word[j])) {
        count -= 1;
        break;
      }
    }
  }
}

console.log(count);
