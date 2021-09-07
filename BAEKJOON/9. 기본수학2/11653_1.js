// 시간초과

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = +input[0];
const primeArr = [];
const result = [];

function findPrimeNum(n) {
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeArr.push(i);
    }
  }
}

findPrimeNum(N);

let i = 0;
while (true) {
  if (N % primeArr[i] === 0) {
    N = N / primeArr[i];
    result.push(primeArr[i]);
    i = 0;
  } else {
    i += 1;
  }

  if (primeArr[i] > N) {
    break;
  }
}

console.log(result.join("\n"));
