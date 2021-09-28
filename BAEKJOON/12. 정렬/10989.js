const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.shift();
const numbers = input.map((n) => +n);

function countingSort(array, maxSize) {
  const count = [];
  const result = [];
  for (let i = 0; i <= maxSize; i++) {
    count[i] = 0;
  }
  for (let j = 0; j < maxSize; j++) {
    count[array[j]] += 1;
  }
  for (let k = 1; k <= maxSize; k++) {
    for (let l = 0; l < count[k]; l++) {
      result.push(k);
    }
  }
  return result;
}

const answer = countingSort(numbers, 10);
console.log(answer.join("\n"));
