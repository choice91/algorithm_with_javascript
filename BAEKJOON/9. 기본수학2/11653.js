const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
const primeArr = [];

let i = 2;
while (true) {
  if (N % i === 0) {
    N = N / i;
    primeArr.push(i);
    i = 2;
  } else {
    i += 1;
  }

  if (i > N) {
    break;
  }
}

console.log(primeArr.join("\n"));
