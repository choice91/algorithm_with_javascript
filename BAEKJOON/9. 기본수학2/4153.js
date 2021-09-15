const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const COUNT = input.length - 1;
input = input.map((value) => value.split(" ").map((n) => +n));

for (let i = 0; i < COUNT; i++) {
  const testCase = input[i].sort((a, b) => a - b);

  if (testCase[0] ** 2 + testCase[1] ** 2 === testCase[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
