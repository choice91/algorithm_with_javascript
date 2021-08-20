const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input[1];

const numList = N.split("").map((n) => Number(n));

const result = numList.reduce((acc, cur) => acc + cur);
console.log(result);
