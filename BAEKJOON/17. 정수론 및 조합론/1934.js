const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const testCase = input.map((el) => el.split(" ").map((n) => +n));
testCase.map((el) => el.sort((a, b) => b - a));

let answer = "";
for (let i = 0; i < T; i++) {
  let n1 = testCase[i][0];
  let n2 = testCase[i][1];
  while (n2 > 0) {
    let tmp = n1;
    n1 = n2;
    n2 = tmp % n2;
  }
  const gcd = n1;
  const lcm = (testCase[i][0] * testCase[i][1]) / gcd;
  answer += lcm + "\n";
}
console.log(answer);
