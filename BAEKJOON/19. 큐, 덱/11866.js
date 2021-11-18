const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const [N, K] = input;
const queue = [];
const answer = [];

for (let i = 1; i <= +N; i++) {
  queue.push(i);
}

for (let i = 0; i < +N; i++) {
  for (let i = 0; i < +(K - 1); i++) {
    queue.push(queue.shift());
  }
  answer.push(queue.shift());
}
console.log(`<${answer.join(", ")}>`);
