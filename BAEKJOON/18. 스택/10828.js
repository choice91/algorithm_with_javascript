const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const stack = [];
const answer = [];

for (let i = 0; i < N; i++) {
  const command = input[i].trim().split(" ");
  if (command[0] === "push") {
    stack.push(command[1]);
  } else if (command[0] === "pop") {
    if (stack.length <= 0) {
      answer.push("-1");
    } else {
      answer.push(stack.pop());
    }
  } else if (command[0] === "size") {
    answer.push(stack.length.toString());
  } else if (command[0] === "empty") {
    if (stack.length <= 0) {
      answer.push("1");
    } else {
      answer.push("0");
    }
  } else if (command[0] === "top") {
    if (stack.length <= 0) {
      answer.push("-1");
    } else {
      answer.push(stack[stack.length - 1]);
    }
  }
}
console.log(answer.join("\n"));
