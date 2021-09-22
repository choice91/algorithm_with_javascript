const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const card = input
  .shift()
  .split(" ")
  .map((n) => +n);
const N = card[0]; // 카드의 개수
const M = card[1]; // 카드의 최대합
const cardArr = input[0].split(" ").map((n) => +n); // 카드
let sum = 0;
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      sum = cardArr[i] + cardArr[j] + cardArr[k];
      if (sum <= M) {
        max = Math.max(sum, max);
      }
    }
  }
}

console.log(max);
