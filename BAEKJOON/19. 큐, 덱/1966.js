const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [testCaseCount, ...testCase] = input;

for (let i = 0; i < +testCaseCount; i++) {
  const [n, m] = testCase
    .shift()
    .split(" ")
    .map((n) => +n);
  const importance = testCase
    .shift()
    .split(" ")
    .map((n) => +n);
  let temp = [];
  for (let j = 0; j < importance.length; j++) {
    temp.push(j);
  }
  temp[m] = "target";
  let count = 0;
  while (true) {
    if (importance[0] === Math.max(...importance)) {
      count++;
      if (temp[0] === "target") {
        console.log(count);
        break;
      } else {
        importance.shift();
        temp.shift();
      }
    } else {
      importance.push(importance.shift());
      temp.push(temp.shift());
    }
  }
}
