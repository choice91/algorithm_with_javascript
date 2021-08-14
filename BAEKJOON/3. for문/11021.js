const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const result = input[i].split(" ");
  const answer = `Case #${i}: ${Number(result[0]) + Number(result[1])}`;
  console.log(answer);
}
