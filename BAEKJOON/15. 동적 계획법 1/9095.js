const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./9095_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const nums = input.map((n) => +n);
const memo = new Array(10).fill(0);
memo[0] = 1;
memo[1] = 2;
memo[2] = 4;

for (let i = 3; i < 11; i++) {
  memo[i] = memo[i - 1] + memo[i - 2] + memo[i - 3];
}

nums.forEach((v) => console.log(memo[v - 1]));
