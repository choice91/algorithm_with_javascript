const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let bagCount = 0;

while (true) {
  if (N < 0) {
    bagCount = -1;
    break;
  }
  if (N % 5 === 0) {
    bagCount += N / 5;
    break;
  }
  N -= 3;
  bagCount += 1;
}

console.log(bagCount);
