const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const numbers = input.map((n) => +n);
const answer = numbers.sort((a, b) => a - b);
console.log(answer.join("\n"));
