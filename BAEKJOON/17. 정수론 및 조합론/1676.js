const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let zeroCount = 0;

while (n >= 5) {
  zeroCount += parseInt(n / 5);
  n /= 5;
}
console.log(zeroCount);
