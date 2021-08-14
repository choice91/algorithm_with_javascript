const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = Number(input[0]);
let answer = "";

for (let i = 1; i <= T; i++) {
  let result = input[i].split(" ");
  answer += Number(result[0]) + Number(result[1]) + "\n";
}

console.log(answer);
