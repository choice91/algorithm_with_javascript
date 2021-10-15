const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const triangleArr = input.map((el) => el.split(" ").map((n) => +n));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < triangleArr[i].length; j++) {
    if (j === 0) {
      triangleArr[i][j] += triangleArr[i - 1][j];
    } else if (i === j) {
      triangleArr[i][j] += triangleArr[i - 1][j - 1];
    } else {
      triangleArr[i][j] += Math.max(
        triangleArr[i - 1][j - 1],
        triangleArr[i - 1][j]
      );
    }
  }
}

console.log(Math.max(...triangleArr[n - 1]));
