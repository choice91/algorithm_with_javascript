const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const stairCount = +input.shift();
const stairs = input.map((n) => +n);
const maxArr = [];

maxArr.push(stairs[0]);
maxArr.push(Math.max(stairs[1], stairs[0] + stairs[1]));
maxArr.push(Math.max(stairs[0] + stairs[2], stairs[1] + stairs[2]));

for (let i = 3; i < stairCount; i++) {
  maxArr[i] = Math.max(
    maxArr[i - 2] + stairs[i],
    maxArr[i - 3] + stairs[i - 1] + stairs[i]
  );
}
console.log(maxArr[stairCount - 1]);
