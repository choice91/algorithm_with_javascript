const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ");

const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

const [N, K] = input.map((n) => +n);

const result = factorial(N) / (factorial(K) * factorial(N - K));
console.log(result);
