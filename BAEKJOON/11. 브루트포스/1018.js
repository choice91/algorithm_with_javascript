const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

[N, M] = input.shift().split(" ");
const chessArr = input.map((el) => el.trim("\r").split(""));
const countArr = [];
const line = ["WBWBWBWB", "BWBWBWBW"];

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    for (let k = 0; k < 2; k++) {
      let count = 0;

      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const cur = chessArr[i + x][j + y];
          if (cur !== line[(x + k) % 2][y]) {
            count += 1;
          }
        }
      }
      countArr.push(count);
    }
  }
}

console.log(Math.min(...countArr));
