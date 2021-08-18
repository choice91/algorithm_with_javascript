const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";

for (let i = 1; i <= Number(input[0]); i++) {
  let score = 0;
  let count = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count += 1;
    } else {
      count = 0;
    }
    score += count;
  }

  answer += score + "\n";
}

console.log(answer);
