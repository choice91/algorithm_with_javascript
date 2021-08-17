const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => Number(n));
let maxNum = input[0];
let maxIndex = 0;

for (let i = 1; i < input.length; i++) {
  if (maxNum < input[i]) {
    maxNum = input[i];
    maxIndex = i;
  }
}

console.log(maxNum + "\n" + (maxIndex + 1));
