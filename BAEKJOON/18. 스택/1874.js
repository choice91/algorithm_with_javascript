const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const nums = input.map((n) => +n);
const stack = [];
const answer = [];
let currNum = 1;
let flag = false;

for (let i = 0; i < n; i++) {
  while (nums[i] >= currNum) {
    stack.push(currNum);
    answer.push("+");
    currNum += 1;
  }
  if (nums[i] === stack[stack.length - 1]) {
    stack.pop();
    answer.push("-");
  } else {
    flag = true;
  }
}

if (flag) {
  console.log("NO");
} else {
  console.log(answer.join("\n"));
}
