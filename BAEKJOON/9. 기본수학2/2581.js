const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
const primeArr = [];

function findPrime(n) {
  if (n < 2) {
    return;
  }

  for (let j = 2; j < n; j++) {
    if (n % j === 0) {
      return;
    }
  }

  primeArr.push(n);
}

for (let i = N; i <= M; i++) {
  findPrime(i);
}

const primeSum = primeArr.reduce((acc, cur) => {
  return acc + cur;
}, 0);

if (primeArr.length === 0) {
  console.log(-1);
} else {
  console.log(primeSum);
  console.log(primeArr[0]);
}
