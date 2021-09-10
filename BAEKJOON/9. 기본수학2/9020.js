const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.map((n) => +n);
const T = input.shift();

function makePrimeArr(n) {
  const isPrimeArr = new Array(n + 1).fill(true);
  isPrimeArr[0] = false;
  isPrimeArr[1] = false;
  const primeArr = [];

  for (let i = 2; i <= n; i++) {
    if (isPrimeArr[i]) {
      for (let j = i * 2; j <= n; j += i) {
        isPrimeArr[j] = false;
      }
    }
  }

  for (let k = 0; k <= n; k++) {
    if (isPrimeArr[k]) {
      primeArr.push(k);
    }
  }

  return primeArr;
}

function findGoldbachPartition(num, primes) {
  const goldbachPartitionArr = [];

  for (let i = 0; i < primes.length; i++) {
    for (let j = i; j < primes.length; j++) {
      if (primes[i] + primes[j] === num) {
        goldbachPartitionArr.push([primes[i], primes[j]]);
      }
    }
  }

  let min = Math.abs(goldbachPartitionArr[0][0] - goldbachPartitionArr[0][1]);
  let minIndex = 0;
  for (let k = 1; k < goldbachPartitionArr.length; k++) {
    if (
      Math.abs(goldbachPartitionArr[k][0] - goldbachPartitionArr[k][1]) < min
    ) {
      min = Math.abs(goldbachPartitionArr[k][0] - goldbachPartitionArr[k][1]);
      minIndex = k;
    }
  }

  return goldbachPartitionArr[minIndex];
}

for (let i = 0; i < T; i++) {
  const primes = makePrimeArr(input[i]);
  const minGoldbachPartition = findGoldbachPartition(input[i], primes);
  console.log(minGoldbachPartition.join(' '));
}
