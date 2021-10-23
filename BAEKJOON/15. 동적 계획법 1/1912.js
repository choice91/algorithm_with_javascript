const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const nums = input[0].split(" ").map((n) => +n);
const dp = [];

for (let i = 0; i < n; i++) {
  dp[i] = nums[i];
  if (dp[i] < dp[i - 1] + nums[i]) {
    dp[i] = dp[i - 1] + nums[i];
  }
}
console.log(Math.max(...dp));
