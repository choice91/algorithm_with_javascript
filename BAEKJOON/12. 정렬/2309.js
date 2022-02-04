// 일곱 난쟁이 (브루트포스, 정렬)
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2309_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const dwarfsHeight = input.map((n) => +n).sort((a, b) => a - b);
const total = dwarfsHeight.reduce((acc, cur) => acc + cur, 0);
let result;

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (total - dwarfsHeight[i] - dwarfsHeight[j] === 100) {
      result = dwarfsHeight.filter(
        (v) => v !== dwarfsHeight[i] && v !== dwarfsHeight[j]
      );
      break;
    }
  }
}
console.log(result.join("\n"));
