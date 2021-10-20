const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const wine = input.map((n) => +n);
const dp = Array(n).fill(0);

dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(wine[0] + wine[2], wine[1] + wine[2], wine[0] + wine[1]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wine[i - 1] + wine[i],
    dp[i - 2] + wine[i],
    dp[i - 1]
  );
}
console.log(dp[n - 1]);
