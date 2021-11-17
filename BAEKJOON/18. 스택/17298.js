const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
let numbers = input[0].split(" ").map((n) => +n);
let stack = [];

for (let i = 0; i < N; i++) {
  while (stack.length && numbers[i] > numbers[stack[stack.length - 1]]) {
    numbers[stack.pop()] = numbers[i];
  }
  stack.push(i);
}
while (stack.length) {
  numbers[stack.pop()] = -1;
}
console.log(numbers.join(" "));
