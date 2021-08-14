const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = Number(input[0]);

let result = 0;

for (let i = 1; i <= input; i++) {
  result += i;
}

console.log(result);
