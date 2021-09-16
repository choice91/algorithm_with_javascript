const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = +input[0];

console.log((Math.PI * Math.pow(input, 2)).toFixed(6));
console.log((2 * Math.pow(input, 2)).toFixed(6));
