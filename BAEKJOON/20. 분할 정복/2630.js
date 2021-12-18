const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2630_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const matrix = input.map((el) =>
  el
    .trim()
    .split(" ")
    .map((n) => +n)
);
let blue = 0;
let white = 0;

function cutMatrix(x, y, length) {
  const color = matrix[x][y];
  for (let i = x; i < x + length; i++) {
    for (let j = y; j < y + length; j++) {
      if (color !== matrix[i][j]) {
        cutMatrix(x, y + length / 2, length / 2); // 1사분면
        cutMatrix(x, y, length / 2); // 2사분면
        cutMatrix(x + length / 2, y, length / 2); // 3사분면
        cutMatrix(x + length / 2, y + length / 2, length / 2); // 4사분면
        return;
      }
    }
  }
  if (color === 0) {
    white += 1;
  } else {
    blue += 1;
  }
}

cutMatrix(0, 0, N);
console.log(white);
console.log(blue);
