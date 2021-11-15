const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let i = 0;
while (true) {
  const sentence = input[i];
  const stack = [];
  let flag = true;
  if (sentence === ".") {
    break;
  }
  for (let char of sentence) {
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        flag = false;
        break;
      }
    } else if (char === "]") {
      if (stack && stack[stack.length - 1] === "[") {
        stack.pop();
      } else {
        flag = false;
        break;
      }
    }
  }
  i++;
  if (stack.length <= 0 && flag) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
