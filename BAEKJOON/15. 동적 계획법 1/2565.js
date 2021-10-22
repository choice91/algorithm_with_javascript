const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const lines = input.map((el) => el.split(" ").map((n) => +n));

const dp = new Array(n).fill(1);
lines.sort((a, b) => a[0] - b[0]);

for (let i = 0; i < n; i++) {
  const cur = lines[i][1];
  let count = 0;
  for (let j = 0; j < i; j++) {
    const before = lines[j][1];
    if (cur > before) {
      count = Math.max(count, dp[j]);
    }
  }
  dp[i] = count + 1;
}
console.log(n - Math.max(...dp));
