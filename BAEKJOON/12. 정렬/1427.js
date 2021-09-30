const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[0];
const numArr = N.split("").map((n) => +n);
const sortedNum = numArr.sort((a, b) => b - a);
console.log(sortedNum.join(""));
