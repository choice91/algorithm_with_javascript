const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const K = +input.shift();
const result = [0];

for (let i = 0; i < K; i++) {
  if (input[i].trim() === "0") {
    result.pop();
  } else {
    result.push(parseInt(input[i].trim()));
  }
}

const sum = result.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);
