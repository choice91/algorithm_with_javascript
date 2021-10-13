const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const testCase = input.map((n) => +n);
const array = Array(101).fill(0);
array[1] = array[2] = array[3] = 1;

for (let i = 4; i < array.length; i++) {
  array[i] = array[i - 3] + array[i - 2];
}

for (let i = 0; i < testCase.length; i++) {
  console.log(array[testCase[i]]);
}
