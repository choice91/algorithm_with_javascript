const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, K] = input
  .shift()
  .split(" ")
  .map((n) => +n);
const coins = input.map((n) => +n).sort((a, b) => b - a);

let result = 0;
for (let coin of coins) {
  if (K === 0) {
    break;
  }
  result += parseInt(K / coin);
  K = K % coin;
}
console.log(result);
