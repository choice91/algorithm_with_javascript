const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2475_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const nums = input.map((n) => +n);
const sum = nums.reduce((acc, cur) => {
  return acc + cur ** 2;
}, 0);
const remain = sum % 10;
console.log(remain);
