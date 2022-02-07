/**
 * 백준 2920번: 음계
 * 알고리즘 분류: 구현
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2920_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let asc = 0;
let desc = 0;

for (let i = 0; i < input.length - 1; i++) {
  if (input[i + 1] - input[i] === 1) {
    asc += 1;
  } else if (input[i + 1] - input[i] === -1) {
    desc += 1;
  }
}

if (asc === 7) {
  console.log("ascending");
} else if (desc === 7) {
  console.log("descending");
} else {
  console.log("mixed");
}
