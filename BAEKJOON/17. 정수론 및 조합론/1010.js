const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const T = +input.shift();
const testCase = input.map((el) => el.split(" ").map((n) => +n));

let answer = "";
for (let i = 0; i < T; i++) {
  const result =
    factorial(testCase[i][1]) /
    (factorial(testCase[i][0]) * factorial(testCase[i][1] - testCase[i][0]));
  answer += parseInt(result + 0.9) + "\n";
}
console.log(answer);
