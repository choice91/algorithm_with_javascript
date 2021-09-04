const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let blockCount = 1;
let moveCount = 1;

while (blockCount < N) {
  blockCount += moveCount * 6;
  moveCount += 1;
}

console.log(moveCount);
