const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
let NUM = 666;

while (true) {
  if (String(NUM).includes("666")) {
    N -= 1;
    if (N === 0) break;
  }
  NUM += 1;
}

console.log(NUM);
