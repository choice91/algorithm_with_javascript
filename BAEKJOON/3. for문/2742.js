const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
let answer = "";

for (let i = N; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);
