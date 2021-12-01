const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1654_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [K, N] = input.shift().split(" ");
const cables = input.map((n) => +n);

function binarySearch(left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const cutLanCable = cables.reduce((acc, cur) => {
      return acc + Math.floor(cur / mid);
    }, 0);
    if (cutLanCable >= N) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

// 최대값 구하기
let max = 0;
for (let cable of cables) {
  if (max < cable) {
    max = cable;
  }
}

console.log(binarySearch(1, max));
