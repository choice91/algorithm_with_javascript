const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

[n, x] = input;
x = x.split(" ").map((n) => +n);
const answer = [];
const object = {};

const removeOverlapX = Array.from(new Set([...x])).sort((a, b) => a - b);
removeOverlapX.forEach((el, idx) => (object[el] = idx));

for (let i = 0; i < x.length; i++) {
  answer.push(object[x[i]]);
}
console.log(answer.join(" "));
