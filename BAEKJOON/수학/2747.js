/**
 * 백준 2747번: 피보나치 수
 * 알고리즘 분류: 구현, 수학
 */
const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "./2747_input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const index = +input[0];

const fibonacci = [0, 1, 1];

function fib(n) {
  if (fibonacci[n]) {
    return fibonacci[n];
  }

  fibonacci[n] = fib(n - 1) + fib(n - 2);
  return fibonacci[n];
}

console.log(fib(index));
