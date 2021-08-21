const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  const testCase = input[i].split(" ");
  const repeatCount = Number(testCase[0]);
  const word = testCase[1];

  for (let j = 0; j < word.length; j++) {
    for (let k = 0; k < repeatCount; k++) {
      answer += word[j];
    }
  }

  answer += "\n";
}

console.log(answer);
