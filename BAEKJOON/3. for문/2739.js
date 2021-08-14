const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

function solution(n) {
  for (i = 1; i < 10; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

solution(+input[0]);
