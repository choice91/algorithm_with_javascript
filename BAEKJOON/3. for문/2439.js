const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(i));
}
