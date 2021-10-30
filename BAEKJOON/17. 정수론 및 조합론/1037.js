const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const divisorList = input[0].split(" ").map((n) => +n);
divisorList.sort((a, b) => a - b);
const result = divisorList[0] * divisorList[divisorList.length - 1];
console.log(result);
