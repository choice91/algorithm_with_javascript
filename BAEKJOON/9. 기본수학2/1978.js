const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const numArr = input[1].split(" ").map((n) => +n);
let primeCount = 0;

function isPrime(n) {
  if (n < 2) {
    return;
  }

  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return;
    }
  }

  primeCount += 1;
}

for (let i = 0; i < N; i++) {
  isPrime(numArr[i]);
}

console.log(primeCount);
