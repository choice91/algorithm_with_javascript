const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.map((n) => +n);
const answer = [];

function makePrimeArr(n) {
  const isPrimeArr = new Array(n * 2 + 1).fill(true);
  isPrimeArr[0] = false;
  isPrimeArr[1] = false;
  const primeArr = [];

  for (let i = 2; i <= n * 2; i++) {
    if (isPrimeArr[i]) {
      for (let j = i * 2; j <= n * 2; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }

  for (let k = n + 1; k <= n * 2; k++) {
    if (isPrimeArr[k]) {
      primeArr.push(k);
    }
  }

  return primeArr;
}

for (let num of input) {
  if (num !== 0) {
    const primes = makePrimeArr(num);
    console.log(primes.length);
  }
}
