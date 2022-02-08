/**
 * 백준 2440번: 별 찍기 3
 * 알고리즘 분류: 구현
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2440_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];

for (let i = N; i > 0; i--) {
  console.log("*".repeat(i));
}
