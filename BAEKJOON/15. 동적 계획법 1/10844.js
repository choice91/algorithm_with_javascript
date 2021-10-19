const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const stairs = [Array(10).fill(0)];

// N이 1일 때, 1 ~ 9를 1로 초기화
for (let i = 1; i < 10; i++) {
  stairs[0][i] = 1;
}
// N이 2이상일 때, 새로운 배열 생성
for (let i = 0; i < N - 1; i++) {
  stairs.push([...Array(10).fill(0)]);
}
for (let i = 1; i < N; i++) {
  stairs[i][0] = stairs[i - 1][1] % 1000000000;
  stairs[i][9] = stairs[i - 1][8] % 1000000000;
  for (let j = 1; j < 9; j++) {
    stairs[i][j] = (stairs[i - 1][j - 1] + stairs[i - 1][j + 1]) % 1000000000;
  }
}

const result = stairs[N - 1].reduce((acc, cur) => {
  return (acc + cur) % 1000000000;
}, 0);
console.log(result);
