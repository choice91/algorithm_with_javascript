const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2740_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [rowA, columnA] = input.shift().split(" ");
const processionA = input
  .splice(0, rowA)
  .map((el) => el.split(" ").map((n) => +n));
const [rowB, columnB] = input.shift().split(" ");
const processionB = input
  .splice(0, rowB)
  .map((el) => el.split(" ").map((n) => +n));
const result = [];

for (let i = 0; i < +rowA; i++) {
  let gop = 0;
  let sum = "";
  for (let j = 0; j < +columnB; j++) {
    const beforeSum = [];
    for (let k = 0; k < +columnA; k++) {
      gop = processionA[i][k] * processionB[k][j];
      beforeSum.push(gop);
    }
    const array = beforeSum.reduce((acc, cur) => acc + cur, 0);
    sum += array + " ";
  }
  result.push(sum);
}
console.log(result.join("\n"));
