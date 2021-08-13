const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input);

const arr = [];
for (let i = 0; i < input.length; i++) {
  const tmp = input[i].split(" ").map((item) => +item);
  arr.push({ A: tmp[0], B: tmp[1] });
  if (tmp[0] === 0 && tmp[1] === 0) {
    break;
  }
}

console.log(arr);

// solution(input[0], input[1]);

// function solution(a, b) {
//   console.log(a * b);
// }
