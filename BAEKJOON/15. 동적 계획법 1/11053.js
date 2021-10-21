const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const A = input[0].split(" ").map((n) => +n);
const dp = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (A[i] > A[j] && dp[j] > max) {
      max = dp[j];
      dp[i] += 1;
    }
  }
}
console.log(Math.max(...dp));
