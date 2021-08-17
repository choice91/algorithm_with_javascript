const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => Number(n));
let remainArr = input.map((x) => {
  return x % 42;
});
let remainSet = new Set(remainArr);
let uniqueArr = [...remainSet];
console.log(uniqueArr.length);
