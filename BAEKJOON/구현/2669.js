/**
 * 백준 2669번: 직사각형 네개의 합집합의 면적 구하기
 * 알고리즘 분류: 구현
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2669_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let matrix = Array.from(Array(100), () => new Array(100).fill(0));

const coordinate = input.map((v) => v.split(" ").map((n) => +n));

for (let i = 0; i < 4; i++) {
  const [x1, y1, x2, y2] = coordinate[i];
  for (let x = x1; x <= x2 - 1; x++) {
    for (let y = y1; y <= y2 - 1; y++) {
      matrix[x][y] = 1;
    }
  }
}

let area = 0;

for (let j = 0; j < matrix.length; j++) {
  const result = matrix[j].reduce((acc, cur) => acc + cur, 0);
  area += result;
}
console.log(area);
