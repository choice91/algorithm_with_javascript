const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const times = input[0].split(" ").map((n) => +n);
times.sort((a, b) => a - b);

for (let i = 1; i < N; i++) {
  times[i] += times[i - 1];
}

const answer = times.reduce((acc, cur) => {
  return (acc += cur);
}, 0);
console.log(answer);
