const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let sum = 0;
let newNum = 0;
let count = 0;
let firstN = N;

while (true) {
  sum = Math.floor(N / 10) + (N % 10);
  newNum = (N % 10) * 10 + (sum % 10);
  count += 1;
  N = newNum;

  if (newNum === firstN) break;
}

console.log(count);
