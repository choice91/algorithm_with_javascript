// 분산처리 (수학)
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./1009_input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = +input.shift();
const testCase = input.map((v) => v.split(" ").map((n) => +n));

for (let i = 0; i < T; i++) {
  const [a, b] = testCase[i];
  const base = a % 10;
  if (base === 0) {
    console.log(10);
  } else if (base === 1 || base === 5 || base === 6) {
    console.log(base);
  } else if (base === 4 || base === 9) {
    const newB = b % 2;
    if (newB === 1) {
      console.log(base);
    } else {
      console.log(base ** 2 % 10);
    }
  } else {
    const remainder = b % 4;
    if (remainder === 0) {
      console.log(base ** 4 % 10);
    } else {
      console.log(base ** remainder % 10);
    }
  }
}
